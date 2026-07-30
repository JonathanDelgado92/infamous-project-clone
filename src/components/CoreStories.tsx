import Image from 'next/image'
import Link from 'next/link'
import { catalogStories, type Locale } from '@/lib/catalog'

export function CoreStories({ locale }: { locale: Locale }) {
  const copy = locale === 'es'
    ? { title: 'HISTORIAS CENTRALES', shop: 'VER HISTORIA', price: 'DESDE' }
    : { title: 'CORE STORIES', shop: 'VIEW STORY', price: 'FROM' }

  return (
    <section className="core-stories" aria-labelledby="core-stories-title">
      <h2 id="core-stories-title">{copy.title}</h2>
      <div className="core-stories__grid core-stories__grid--six">
        {catalogStories.map((story) => {
          const content = story.content[locale]
          return (
            <article className="core-story" key={story.id}>
              <Image src={story.media[0]} alt={`${story.name} ${content.category}`} fill sizes="(max-width: 749px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="core-story__shade" />
              <p className="core-story__eyebrow">STORY {story.id}</p>
              <div className="core-story__content">
                <p className="core-story__category">{content.category}</p>
                <h3>{story.name}</h3>
                <p>{content.cardDescription}</p>
                <p className="core-story__price">{copy.price} {story.priceLabel}</p>
                <Link className="button core-story__button" href={`/${locale}/products/${story.slug}`}>{copy.shop}</Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
