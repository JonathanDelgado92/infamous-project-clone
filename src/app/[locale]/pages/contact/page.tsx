import { notFound } from 'next/navigation'
import { LocaleDocument } from '@/components/LocaleDocument'
import { StoreShell } from '@/components/StoreShell'
import { isLocale } from '@/lib/catalog'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const es = locale === 'es'
  return <StoreShell locale={locale}><LocaleDocument locale={locale} /><section className="contact-page page-width"><div><p className="eyebrow">INFAMOUS PROJECT</p><h1>{es ? 'HABLEMOS' : 'LET’S CONNECT'}</h1><p>{es ? 'Para disponibilidad, pedidos y preguntas sobre las historias, escríbenos directamente.' : 'For availability, orders, and story enquiries, contact us directly.'}</p></div><a className="button" href="https://wa.me/593996370700" target="_blank" rel="noreferrer">{es ? 'ESCRIBIR POR WHATSAPP' : 'MESSAGE ON WHATSAPP'}</a></section></StoreShell>
}
