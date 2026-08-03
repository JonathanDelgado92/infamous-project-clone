import { NextResponse } from 'next/server'
import { subscribeEnv, isGoogleSheetsConfigured } from '@/lib/server/subscribe-env'
import { parseBrevoWebhookEvent, type BrevoWebhookPayload } from '@/lib/server/brevo-webhook'
import { recordInGoogleSheets } from '@/lib/server/google-sheets'
import { maskEmail } from '@/lib/server/logger'

// Autenticación vía query param (?secret=...), configurado como parte de la URL del
// webhook en el panel de Brevo — enfoque compatible con cualquier proveedor de webhooks,
// sin depender de que Brevo permita agregar encabezados personalizados.
export async function POST(request: Request) {
  const url = new URL(request.url)
  const providedSecret = url.searchParams.get('secret')

  if (!subscribeEnv.brevoWebhookSecret || providedSecret !== subscribeEnv.brevoWebhookSecret) {
    return NextResponse.json({ success: false }, { status: 401 })
  }

  let payload: BrevoWebhookPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ success: false }, { status: 400 })
  }

  const parsedEvent = parseBrevoWebhookEvent(payload)
  if (!parsedEvent) {
    // Evento válido pero irrelevante para este flujo, o payload sin los campos esperados.
    return NextResponse.json({ success: true, ignored: true }, { status: 200 })
  }

  console.log('brevo webhook:', parsedEvent.action, maskEmail(parsedEvent.email))

  if (isGoogleSheetsConfigured()) {
    // recordInGoogleSheets es best-effort y no lanza: el Apps Script debe buscar por
    // email antes de escribir para mantener la idempotencia (ver Fase 5).
    await recordInGoogleSheets({
      action: parsedEvent.action,
      email: parsedEvent.email,
      brevoContactId: parsedEvent.brevoContactId,
      eventDate: parsedEvent.eventDate,
    })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
