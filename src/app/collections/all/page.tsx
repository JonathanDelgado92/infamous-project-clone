'use client'

import Link from 'next/link'
import Image from 'next/image'
import { StoreShell } from '@/components/StoreShell'
import { products } from '@/lib/store-data'
import { useLanguage } from '@/lib/language-context'
import { useState } from 'react'

export default function CollectionPage() {
  const { strings } = useLanguage()
  const [sort, setSort] = useState('featured')
  const sorted = [...products].sort((a, b) => sort === 'price-low' ? (a.price ?? 0) - (b.price ?? 0) : sort === 'price-high' ? (b.price ?? 0) - (a.price ?? 0) : 0)
  return <StoreShell><section className="collection-page page-width"><h1>Products</h1><div className="collection-controls"><label>Sort by: <select value={sort} onChange={event => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-low">Price, low to high</option><option value="price-high">Price, high to low</option></select></label><span>{products.length} products</span></div><div className="product-grid">{sorted.map(product => <Link className="product-card" key={product.slug} href={`/products/${product.slug}`}><div><Image src={product.primaryImage} alt={product.title} fill sizes="(max-width: 749px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={78} />{product.hoverImage && <Image className="product-card__hover" src={product.hoverImage} alt="" fill sizes="(max-width: 749px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={78} />}</div><h2>{product.title}</h2><p>{product.priceConfirmed ? product.priceLabel : strings.story.pricePending}</p></Link>)}</div></section></StoreShell>
}
