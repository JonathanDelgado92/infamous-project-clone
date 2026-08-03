import { subscribeEnv } from './subscribe-env'

const TIMEOUT_MS = 8000
const API_BASE = 'https://api.brevo.com/v3'

export type BrevoSubscribeResult =
  | { outcome: 'pending_confirmation'; brevoContactId?: number }
  | { outcome: 'already_pending_confirmation'; brevoContactId?: number }
  | { outcome: 'already_subscribed'; brevoContactId?: number }
  | { outcome: 'error' }

async function brevoFetch(path: string, init: RequestInit) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    return await fetch(`${API_BASE}${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        ...init.headers,
        'api-key': subscribeEnv.brevoApiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  } finally {
    clearTimeout(timeout)
  }
}

type BrevoContact = { id: number; listIds: number[] }

async function findExistingContact(email: string): Promise<BrevoContact | null> {
  const response = await brevoFetch(`/contacts/${encodeURIComponent(email)}`, { method: 'GET' })
  if (response.status === 404) return null
  if (!response.ok) {
    const errorText = await response.text().catch(() => '')
    console.error('brevo contact lookup failed:', response.status, errorText)
    throw new Error(`Brevo contact lookup failed: ${response.status}`)
  }
  const data = await response.json()
  return { id: data.id, listIds: Array.isArray(data.listIds) ? data.listIds : [] }
}

// Referencia: https://developers.brevo.com/reference/create-doi-contact
// NOTA: el nombre exacto de algunos campos del payload (p. ej. "includeListIds") debe
// reverificarse contra la documentación oficial vigente antes de las pruebas en Preview
// (Fase de auditoría final), tal como indica el plan.
async function triggerDoubleOptin(email: string, attributes: Record<string, unknown>): Promise<boolean> {
  const response = await brevoFetch('/contacts/doubleOptinConfirmation', {
    method: 'POST',
    body: JSON.stringify({
      email,
      includeListIds: [Number(subscribeEnv.brevoPendingListId)],
      templateId: Number(subscribeEnv.brevoDoiTemplateId),
      redirectionUrl: subscribeEnv.brevoConfirmationRedirectUrl,
      attributes,
    }),
  })
  if (!response.ok) {
    const errorText = await response.text().catch(() => '')
    console.error('brevo doubleOptinConfirmation failed:', response.status, errorText)
  }
  return response.ok
}

export async function startBrevoDoubleOptin(email: string, language: 'es' | 'en', consentVersion: string): Promise<BrevoSubscribeResult> {
  try {
    const confirmedListId = Number(subscribeEnv.brevoConfirmedListId)
    const existing = await findExistingContact(email)

    if (existing && confirmedListId && existing.listIds.includes(confirmedListId)) {
      return { outcome: 'already_subscribed', brevoContactId: existing.id }
    }

    const attributes = {
      LANGUAGE: language,
      CONSENT_VERSION: consentVersion,
      CONSENT_DATE: new Date().toISOString(),
    }

    const started = await triggerDoubleOptin(email, attributes)
    if (!started) return { outcome: 'error' }

    return existing
      ? { outcome: 'already_pending_confirmation', brevoContactId: existing.id }
      : { outcome: 'pending_confirmation' }
  } catch {
    return { outcome: 'error' }
  }
}

export async function sendAdminNotification(toEmail: string, subject: string, textContent: string): Promise<void> {
  try {
    await brevoFetch('/smtp/email', {
      method: 'POST',
      body: JSON.stringify({
        sender: { email: toEmail, name: 'INFAMOUS PROJECT' },
        to: [{ email: toEmail }],
        subject,
        textContent,
      }),
    })
  } catch {
    // Una falla del aviso administrativo no debe romper la suscripción del usuario.
  }
}
