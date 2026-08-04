import type { SheetsAction } from './google-sheets'

// Payload real de los webhooks de listas de Brevo — VERIFICAR contra la documentación
// vigente antes de las pruebas en Preview (el nombre y los valores exactos de "event"
// dependen de qué eventos se marquen al crear el webhook en el panel de Brevo).
export type BrevoWebhookPayload = {
  event?: string
  email?: string
  id?: number
  list_id?: number[] | number
  date_event?: string
  ts_event?: number
}

export type ParsedBrevoEvent = {
  action: SheetsAction
  email: string
  brevoContactId?: number
  eventDate: string
}

const UNSUBSCRIBE_EVENTS = ['unsubscribe', 'unsubscribed', 'list_removal']
const BLOCKED_EVENTS = ['spam', 'hardbounce', 'invalid_email', 'blocked']
const CONFIRMED_EVENTS = ['contact_updated', 'list_addition', 'contact_added']

export function parseBrevoWebhookEvent(payload: BrevoWebhookPayload): ParsedBrevoEvent | null {
  if (!payload.email || typeof payload.email !== 'string') return null
  const event = (payload.event || '').toLowerCase()
  if (!event) return null

  const eventDate = payload.date_event || new Date().toISOString()
  const brevoContactId = typeof payload.id === 'number' ? payload.id : undefined
  const email = payload.email.trim().toLowerCase()

  if (UNSUBSCRIBE_EVENTS.includes(event)) return { action: 'unsubscribe', email, brevoContactId, eventDate }
  if (BLOCKED_EVENTS.includes(event)) return { action: 'blocked', email, brevoContactId, eventDate }
  if (CONFIRMED_EVENTS.includes(event)) return { action: 'confirm', email, brevoContactId, eventDate }

  // Evento reconocido por Brevo pero no relevante para este flujo (ver plan: "manejar
  // únicamente eventos necesarios") — se ignora sin error.
  return null
}
