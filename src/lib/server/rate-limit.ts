// Rate limiting en memoria, best-effort.
//
// LIMITACIÓN CONOCIDA: en Vercel (funciones serverless) cada instancia tiene su propia
// memoria y puede reiniciarse entre invocaciones ("cold start"). Este limitador reduce
// abuso básico desde una misma instancia caliente, pero NO es una protección robusta
// contra un atacante distribuido. Si en el futuro se necesita algo más fuerte, se
// recomienda un store compartido (ej. Upstash Redis) — eso sí requeriría una nueva
// dependencia, así que no se implementa aquí sin que se pida explícitamente.

const WINDOW_MS = 10 * 60 * 1000 // 10 minutos
const MAX_REQUESTS_PER_WINDOW = 5

const hits = new Map<string, number[]>()

// No se guarda la IP completa: se trunca antes de usarla como clave.
export function maskIp(rawIp: string): string {
  if (rawIp.includes(':')) {
    // IPv6: conserva solo los primeros 3 grupos.
    return rawIp.split(':').slice(0, 3).join(':') + '::'
  }
  const parts = rawIp.split('.')
  if (parts.length === 4) {
    parts[3] = '0'
    return parts.join('.')
  }
  return 'unknown'
}

export function isRateLimited(maskedKey: string): boolean {
  const now = Date.now()
  const timestamps = (hits.get(maskedKey) ?? []).filter((t) => now - t < WINDOW_MS)

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(maskedKey, timestamps)
    return true
  }

  timestamps.push(now)
  hits.set(maskedKey, timestamps)
  return false
}

export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return headers.get('x-real-ip') || 'unknown'
}
