'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { StoreShell } from '@/components/StoreShell'
import { products } from '@/lib/store-data'

function SearchContent() {
  const params = useSearchParams(); const query = params.get('q') ?? ''
  const results = query ? products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())) : []
  return <section className="search-page page-width"><h1>Search</h1><form><div><input name="q" type="search" defaultValue={query} placeholder="Search" aria-label="Search" /><button type="reset" aria-label="Reset">×</button><button type="submit" aria-label="Submit search">⌕</button></div></form>{query && <p>{results.length} results found for “{query}”</p>}<div className="search-results">{results.map(product => <Link href={`/products/${product.slug}`} key={product.slug}><img src={product.primaryImage} alt={product.title} /><span>{product.title}</span><small>{product.priceLabel}</small></Link>)}</div></section>
}
export default function SearchPage() { return <StoreShell><Suspense><SearchContent /></Suspense></StoreShell> }
