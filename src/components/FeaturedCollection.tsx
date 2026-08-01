'use client'

import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/store-data'
import { useLanguage } from '@/lib/language-context'

export function FeaturedCollection() {
  const { strings } = useLanguage()
  const product = products[0]

  return (
    <section className="featured-collection section-padding" aria-labelledby="featured-title">
      <div className="section-heading scroll-trigger animate--slide-in">
        <h2 id="featured-title">{strings.featured.title}</h2>
        <p>{strings.featured.description}</p>
      </div>
      <div className="featured-collection__grid scroll-trigger animate--slide-in">
        <Link className="product-card" href={`/products/${product.slug}`}>
          <span className="product-card__media media--hover-effect">
            <Image src={product.primaryImage} alt={product.title} fill sizes="(max-width: 749px) 100vw, 48rem" style={{ objectFit: 'cover' }} quality={80} />
            {product.hoverImage && <Image src={product.hoverImage} alt="" fill sizes="(max-width: 749px) 100vw, 48rem" style={{ objectFit: 'cover' }} quality={80} />}
          </span>
          <span className="product-card__title">{product.title}</span>
          <span className="product-card__price">{product.priceLabel}</span>
        </Link>
      </div>
    </section>
  )
}
