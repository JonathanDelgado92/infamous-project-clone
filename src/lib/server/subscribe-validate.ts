// Validación de servidor para /api/subscribe. No confía en la validación del navegador.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MAX_EMAIL_LENGTH = 254
const MAX_BODY_BYTES = 6_000

export type SubscribeInput = {
  email: unknown
  consent: unknown
  company: unknown
  language: unknown
  source: unknown
  pageUrl: unknown
  turnstileToken?: unknown
}

export type ValidatedSubscribeInput = {
  email: string
  language: 'es' | 'en'
  source: string
  pageUrl: string
  turnstileToken: string | null
}

export function normalizeEmail(rawEmail: string): string {
  return rawEmail.trim().toLowerCase()
}

export function isValidEmail(email: string): boolean {
  return email.length > 0 && email.length <= MAX_EMAIL_LENGTH && EMAIL_PATTERN.test(email)
}

export function isWithinBodySizeLimit(contentLengthHeader: string | null): boolean {
  if (!contentLengthHeader) return true
  const size = Number(contentLengthHeader)
  return Number.isFinite(size) && size <= MAX_BODY_BYTES
}

// Honeypot: los bots suelen rellenar cualquier campo de texto disponible.
// El campo "company" debe llegar vacío en un envío humano legítimo.
export function isHoneypotClean(company: unknown): boolean {
  return typeof company === 'string' ? company.trim().length === 0 : company == null
}

export function validateSubscribeInput(input: SubscribeInput): ValidatedSubscribeInput | null {
  if (typeof input.email !== 'string') return null
  const email = normalizeEmail(input.email)
  if (!isValidEmail(email)) return null

  if (input.consent !== true) return null
  if (!isHoneypotClean(input.company)) return null

  const language = input.language === 'en' ? 'en' : input.language === 'es' ? 'es' : null
  if (!language) return null

  const source = typeof input.source === 'string' && input.source.length > 0 && input.source.length <= 100 ? input.source : null
  if (!source) return null

  const pageUrl = typeof input.pageUrl === 'string' && input.pageUrl.length <= 2048 ? input.pageUrl : null
  if (pageUrl === null) return null

  const turnstileToken = typeof input.turnstileToken === 'string' && input.turnstileToken.length > 0 ? input.turnstileToken : null

  return { email, language, source, pageUrl, turnstileToken }
}
