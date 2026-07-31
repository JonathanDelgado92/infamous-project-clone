import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/store-data'

export function FeaturedCollection() {
  const product = products[0]

  return (
    <section className="featured-collection section-padding" aria-labelledby="featured-title">
      <div className="section-heading scroll-trigger animate--slide-in">
        <h2 id="featured-title">DESIGNED TO DISRUPT</h2>
        <p>LUXURY STAPLES FOR THE MODERN DISRUPTOR. PRECISION-TAILORED PIECES THAT BREAK CONVENTION AND REDEFINE PRESENCE. THIS ISN&apos;T JUST FASHION—IT&apos;S A STATEMENT.</p>
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
