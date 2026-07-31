'use client'

import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/store-data'
import { useLanguage } from '@/lib/language-context'

export function CoreStories() {
  const { language, strings } = useLanguage()

  return (
    <section className="core-stories" aria-labelledby="core-stories-title">
      <h2 id="core-stories-title">CORE STORIES</h2>
      <div className="core-stories__grid">
        {products.map((product) => {
          const content = product.content[language]
          return (
            <article className="core-story" key={product.slug}>
              <Image
                src={product.primaryImage}
                alt=""
                fill
                sizes="(max-width: 749px) 100vw, (max-width: 989px) 50vw, 25vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                quality={78}
              />
              <div className="core-story__shade" />
              <p className="core-story__eyebrow">{language === 'es' ? 'HISTORIA' : 'STORY'} {product.storyNumber}</p>
              <div className="core-story__content">
                <h3>{product.title}</h3>
                <p>{content.phrase}</p>
                <Link className="button core-story__button" href={`/products/${product.slug}`}>
                  {product.slug === 'no-mercy-for-weak-visions' ? strings.story.shopAll : strings.story.shop}
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
