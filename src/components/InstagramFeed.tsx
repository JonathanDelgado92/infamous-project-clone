'use client'

import { useLanguage } from '@/lib/language-context'

export function InstagramFeed() {
  const { strings } = useLanguage()

  return (
    <section className="instagram-section section-padding" aria-labelledby="instagram-title">
      <a className="instagram-section__cta scroll-trigger animate--slide-in" href="https://www.instagram.com/infamous.project?igsh=MWplOHdpaHdtczYzeA%3D%3D" target="_blank" rel="noreferrer">
        <svg className="instagram-section__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
        <h2 id="instagram-title">{strings.instagram}</h2>
      </a>
    </section>
  )
}
