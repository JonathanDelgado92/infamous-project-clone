'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

const HERO_TITLE_LINE_1 = 'STAND OUT.'
const HERO_TITLE_LINE_2 = 'STAY INFAMOUS'
const HERO_SUBTITLE = "We don't drop clothes. We release stories"

export function ImageBanner() {
  const { strings } = useLanguage()

  return (
    <section className="hero-banner scroll-trigger animate--fade-in" aria-labelledby="hero-title">
      <img className="hero-banner__media" src="/images/shopify/hero.png" alt="" fetchPriority="high" />
      <div className="hero-banner__overlay" />
      <div className="hero-banner__content scroll-trigger animate--slide-in">
        <h1 id="hero-title">
          {HERO_TITLE_LINE_1}
          <br />
          {HERO_TITLE_LINE_2}
        </h1>
        <p>{HERO_SUBTITLE}</p>
        <div className="hero-banner__actions">
          <Link className="button button--primary" href="/collections/all">
            {strings.hero.cta}
          </Link>
          <Link className="button button--secondary" href="/#founder">
            {strings.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
