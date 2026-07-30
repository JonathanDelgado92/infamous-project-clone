'use client'

import Link from 'next/link'
import { StoreShell } from '@/components/StoreShell'
import { products } from '@/lib/store-data'
import { useState } from 'react'

export default function CollectionPage() {
  const [sort, setSort] = useState('featured')
  const sorted = [...products].sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : 0)
  return <StoreShell><section className="collection-page page-width"><h1>Products</h1><div className="collection-controls"><details><summary>Availability</summary><label><input type="checkbox" disabled /> In stock (0)</label><label><input type="checkbox" /> Out of stock (2)</label></details><details><summary>Price</summary><p>The highest price is $45.00</p><div><input aria-label="From price" placeholder="$ From" /><input aria-label="To price" placeholder="$ To" /></div></details><label>Sort by: <select value={sort} onChange={event => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-low">Price, low to high</option><option value="price-high">Price, high to low</option></select></label><span>2 products</span></div><div className="product-grid">{sorted.map(product => <Link className="product-card" key={product.slug} href={`/products/${product.slug}`}><div><img src={product.primaryImage} alt={product.title} />{product.hoverImage && <img className="product-card__hover" src={product.hoverImage} alt="" />}</div><h2>{product.title}</h2><p>{product.priceLabel}</p><span>Sold out</span></Link>)}</div></section><section className="example-products page-width"><h2>Featured products</h2><div>{Array.from({length: 4}, (_, index) => <article key={index}><div className="example-placeholder" /><h3>Example product title</h3><p>$19.99 USD</p></article>)}</div></section><section className="featured-product page-width"><div className="example-placeholder" /><div><p className="eyebrow">Infamous Project</p><h2>Example product title</h2><p>$19.99 USD</p><button disabled>Sold out</button></div></section></StoreShell>
}
