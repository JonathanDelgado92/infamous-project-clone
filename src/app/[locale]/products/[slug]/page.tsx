import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LocaleDocument } from '@/components/LocaleDocument'
import { ProductDetail } from '@/components/ProductDetail'
import { StoreShell } from '@/components/StoreShell'
import { catalogStories, getStory, isLocale } from '@/lib/catalog'

export function generateStaticParams() {
  return ['en', 'es'].flatMap((locale) => catalogStories.map((story) => ({ locale, slug: story.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const story = getStory(slug)
  if (!story || !isLocale(locale)) return {}
  const content = story.content[locale]
  return { title: `Story ${story.id} · ${story.name} | Infamous Project`, description: content.catalogCopy, openGraph: { title: story.name, description: content.catalogCopy, images: [story.media[0]] } }
}

export default async function StoryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const story = getStory(slug)
  if (!story || !isLocale(locale)) notFound()
  const current = catalogStories.findIndex((item) => item.slug === story.slug)
  const nextStory = catalogStories[(current + 1) % catalogStories.length]
  return <StoreShell locale={locale}><LocaleDocument locale={locale} /><ProductDetail story={story} locale={locale} nextStory={nextStory} /></StoreShell>
}
