'use client'

import Link from 'next/link'
import Image from 'next/image'
import { StoreShell } from '@/components/StoreShell'
import { products } from '@/lib/store-data'
import { useLanguage } from '@/lib/language-context'

export default function CollectionPage() {
  const { strings } = useLanguage()

  return (
    <StoreShell>
      <section className="collection-page page-width">
        <h1>{strings.collection.title}</h1>
        <div className="collection-controls">
          <span>{products.length} {strings.collection.products}</span>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <Link className="product-card" key={product.slug} href={`/products/${product.slug}`}>
              <div>
                <Image src={product.primaryImage} alt={product.title} fill sizes="(max-width: 749px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={78} />
                {product.hoverImage && <Image className="product-card__hover" src={product.hoverImage} alt="" fill sizes="(max-width: 749px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={78} />}
                {product.status !== 'available' && <span className="product-card__status">{strings.status[product.status]}</span>}
              </div>
              <span className="product-card__story-number">Story {product.storyNumber}</span>
              <h2>{product.title}</h2>
              <p>{product.priceConfirmed ? product.priceLabel : strings.story.pricePending}</p>
            </Link>
          ))}
        </div>
      </section>
    </StoreShell>
  )
}
