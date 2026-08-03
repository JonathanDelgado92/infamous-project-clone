import { subscribeEnv } from './subscribe-env'

const TIMEOUT_MS = 6000

export type SheetsAction = 'request' | 'confirm' | 'unsubscribe' | 'blocked'

export type SheetsPayload = {
  action: SheetsAction
  email: string
  language?: 'es' | 'en'
  source?: string
  pageUrl?: string
  consentVersion?: string
  policyVersion?: string
  brevoContactId?: number
  eventDate?: string
}

// Respaldo operativo en Google Sheets vía Apps Script (Fase 5). Nunca debe bloquear
// la suscripción del usuario si falla: se registra el error y se continúa.
export async function recordInGoogleSheets(payload: SheetsPayload): Promise<void> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    await fetch(subscribeEnv.googleAppsScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: subscribeEnv.googleAppsScriptSecret, ...payload }),
      signal: controller.signal,
    })
  } catch {
    // Fallo silencioso e intencional: Google Sheets es un respaldo, no la fuente principal.
  } finally {
    clearTimeout(timeout)
  }
}
