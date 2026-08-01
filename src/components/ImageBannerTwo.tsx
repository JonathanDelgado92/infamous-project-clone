'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export function ImageBannerTwo() {
  const { strings } = useLanguage()

  return (
    <section className="secondary-banner scroll-trigger animate--fade-in" aria-labelledby="drop-title">
      <img src="/images/story/E3646497-A42C-4556-A5BB-D2F504CCD19B-1.jpg" alt="Reference visual" loading="lazy" />
      <div className="secondary-banner__overlay" />
      <div className="secondary-banner__content">
        <h2 id="drop-title">{strings.secondBanner.title}</h2>
        <p>{strings.secondBanner.text}</p>
        <Link className="button button--secondary" href="/collections/all">{strings.secondBanner.cta}</Link>
      </div>
    </section>
  )
}
