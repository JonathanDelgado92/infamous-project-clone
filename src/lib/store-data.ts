import { catalogStories, referenceImages } from './catalog'

export { catalogStories, referenceImages }
export type { CatalogStory, Locale, StoryContent } from './catalog'

export type StoreProduct = {
  slug: string
  title: string
  price: number
  priceLabel: string
  available: boolean
  primaryImage: string
  hoverImage?: string
  media: string[]
  colors: string[]
  descriptionTitle: string
  description: string[]
}

// Compatibility shape for legacy search and collection routes while they redirect to /en.
export const products: StoreProduct[] = catalogStories.map((story) => ({
  slug: story.slug,
  title: story.slug.replaceAll('-', ' ').toUpperCase(),
  price: story.price,
  priceLabel: story.priceLabel,
  available: true,
  primaryImage: story.media[0],
  hoverImage: story.media[1],
  media: story.media,
  colors: story.variants,
  descriptionTitle: story.content.en.category,
  description: story.content.en.narrative,
}))
