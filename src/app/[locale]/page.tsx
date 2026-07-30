import { notFound } from 'next/navigation'
import { LocalizedHome } from '@/components/LocalizedHome'
import { isLocale } from '@/lib/catalog'

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <LocalizedHome locale={locale} />
}
