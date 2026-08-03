// No se debe escribir el correo completo en logs (ver plan, sección SEGURIDAD).
export function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!domain) return '***'
  const visible = local.slice(0, 2)
  return `${visible}${'*'.repeat(Math.max(local.length - visible.length, 1))}@${domain}`
}
