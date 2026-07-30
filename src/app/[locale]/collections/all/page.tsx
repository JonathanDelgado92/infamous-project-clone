import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LocaleDocument } from '@/components/LocaleDocument'
import { StoreShell } from '@/components/StoreShell'
import { catalogStories, isLocale } from '@/lib/catalog'

export default async function CollectionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const copy = locale === 'es' ? { title: 'TODAS LAS HISTORIAS', view: 'VER HISTORIA', from: 'DESDE' } : { title: 'ALL STORIES', view: 'VIEW STORY', from: 'FROM' }
  return <StoreShell locale={locale}><LocaleDocument locale={locale} /><section className="catalog-page page-width"><header><p className="eyebrow">INFAMOUS PROJECT</p><h1>{copy.title}</h1></header><div className="catalog-page__grid">{catalogStories.map((story) => <Link href={`/${locale}/products/${story.slug}`} className="catalog-story-card" key={story.id}><div><Image src={story.media[0]} alt={`${story.name} ${story.content[locale].category}`} fill sizes="(max-width: 749px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div><p>STORY {story.id}</p><h2>{story.name}</h2><span>{story.content[locale].category}</span><strong>{copy.from} {story.priceLabel}</strong><small>{copy.view} →</small></Link>)}</div></section></StoreShell>
}
