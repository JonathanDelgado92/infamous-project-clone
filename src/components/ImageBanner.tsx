'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export function ImageBanner() {
  const { strings } = useLanguage()

  return (
    <section className="hero-banner scroll-trigger animate--fade-in" aria-labelledby="hero-title">
      <img className="hero-banner__media" src="/images/shopify/hero.png" alt="" fetchPriority="high" />
      <div className="hero-banner__overlay" />
      <div className="hero-banner__content scroll-trigger animate--slide-in">
        <p>{strings.hero.subtitle}</p>
        <h1 id="hero-title">{strings.hero.title}</h1>
        <Link className="button button--secondary" href="/collections/all">
          {strings.hero.cta}
        </Link>
      </div>
    </section>
  )
}
