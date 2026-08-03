import { subscribeEnv } from './subscribe-env'

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const TIMEOUT_MS = 5000

// Referencia: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
export async function verifyTurnstileToken(token: string, remoteIp: string): Promise<boolean> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: subscribeEnv.turnstileSecretKey,
        response: token,
        remoteip: remoteIp !== 'unknown' ? remoteIp : undefined,
      }),
      signal: controller.signal,
    })
    if (!response.ok) return false
    const data = (await response.json()) as { success?: boolean }
    return data.success === true
  } catch {
    return false
  } finally {
    clearTimeout(timeout)
  }
}
