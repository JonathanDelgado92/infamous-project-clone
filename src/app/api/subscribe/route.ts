import { NextResponse } from 'next/server'
import { isBrevoConfigured, isGoogleSheetsConfigured, isAdminNotificationConfigured, isTurnstileConfigured, subscribeEnv } from '@/lib/server/subscribe-env'
import { validateSubscribeInput, isWithinBodySizeLimit, type SubscribeInput } from '@/lib/server/subscribe-validate'
import { getClientIp, maskIp, isRateLimited } from '@/lib/server/rate-limit'
import { maskEmail } from '@/lib/server/logger'
import { verifyTurnstileToken } from '@/lib/server/turnstile'
import { startBrevoDoubleOptin, sendAdminNotification } from '@/lib/server/brevo'
import { recordInGoogleSheets } from '@/lib/server/google-sheets'

export async function POST(request: Request) {
  if (!isWithinBodySizeLimit(request.headers.get('content-length'))) {
    return NextResponse.json({ success: false, status: 'invalid_request' }, { status: 400 })
  }

  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ success: false, status: 'invalid_request' }, { status: 400 })
  }

  const clientIp = getClientIp(request.headers)
  const maskedKey = maskIp(clientIp)
  if (isRateLimited(maskedKey)) {
    return NextResponse.json({ success: false, status: 'rate_limited' }, { status: 429 })
  }

  let body: SubscribeInput
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, status: 'invalid_request' }, { status: 400 })
  }

  const input = validateSubscribeInput(body)
  if (!input) {
    return NextResponse.json({ success: false, status: 'invalid_request' }, { status: 400 })
  }

  if (isTurnstileConfigured()) {
    if (!input.turnstileToken || !(await verifyTurnstileToken(input.turnstileToken, clientIp))) {
      return NextResponse.json({ success: false, status: 'invalid_request' }, { status: 400 })
    }
  }

  if (!isBrevoConfigured()) {
    console.error('subscribe: Brevo is not configured yet')
    return NextResponse.json({ success: false, status: 'server_error' }, { status: 500 })
  }

  const result = await startBrevoDoubleOptin(input.email, input.language, subscribeEnv.privacyPolicyVersion)

  if (result.outcome === 'error') {
    console.error('subscribe: Brevo error for', maskEmail(input.email))
    return NextResponse.json({ success: false, status: 'server_error' }, { status: 500 })
  }

  if (isGoogleSheetsConfigured()) {
    void recordInGoogleSheets({
      action: 'request',
      email: input.email,
      language: input.language,
      source: input.source,
      pageUrl: input.pageUrl,
      consentVersion: subscribeEnv.privacyPolicyVersion,
      policyVersion: subscribeEnv.privacyPolicyVersion,
      brevoContactId: 'brevoContactId' in result ? result.brevoContactId : undefined,
    })
  }

  if (isAdminNotificationConfigured() && result.outcome !== 'already_subscribed') {
    void sendAdminNotification(
      subscribeEnv.adminNotificationEmail,
      'Nueva solicitud de suscripción — INFAMOUS PROJECT',
      `Nueva solicitud pendiente de confirmación: ${maskEmail(input.email)} (idioma: ${input.language}, fuente: ${input.source})`,
    )
  }

  if (result.outcome === 'already_subscribed') {
    return NextResponse.json({ success: true, status: 'already_subscribed' }, { status: 200 })
  }

  if (result.outcome === 'already_pending_confirmation') {
    return NextResponse.json({ success: true, status: 'already_pending_confirmation' }, { status: 200 })
  }

  return NextResponse.json({ success: true, status: 'pending_confirmation' }, { status: 201 })
}
