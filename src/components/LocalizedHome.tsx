import Image from 'next/image'
import Link from 'next/link'
import { CoreStories } from './CoreStories'
import { LocaleDocument } from './LocaleDocument'
import { StoreShell } from './StoreShell'
import type { Locale } from '@/lib/catalog'

export function LocalizedHome({ locale }: { locale: Locale }) {
  const copy = locale === 'es'
    ? { eyebrow: 'NO SON SOLO DROPS. SON HISTORIAS.', title: 'CONSTRUIDO EN LAS SOMBRAS. DEMOSTRADO EN LA LUZ.', body: 'Prendas para quienes no persiguen fama: construyen en silencio hasta que sus resultados no pueden ser ignorados.', action: 'DESCUBRIR LAS HISTORIAS' }
    : { eyebrow: 'THESE ARE NOT JUST DROPS. THEY ARE STORIES.', title: 'BUILT IN THE SHADOWS. PROVEN IN THE LIGHT.', body: 'Garments for those who do not chase fame: they build in silence until their results cannot be ignored.', action: 'DISCOVER THE STORIES' }

  return <StoreShell locale={locale}><LocaleDocument locale={locale} /><section className="localized-hero"><Image src="/images/shopify/hero.png" alt="Infamous Project collection" fill priority sizes="100vw" /><div className="localized-hero__shade" /><div className="localized-hero__content"><p>{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.body}</p><Link className="button" href={`/${locale}/collections/all`}>{copy.action}</Link></div></section><CoreStories locale={locale} /></StoreShell>
}
