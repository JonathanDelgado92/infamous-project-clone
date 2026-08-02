'use client'

import { useLanguage } from '@/lib/language-context'

export function EditorialSection() {
  const { strings } = useLanguage()
  const { editorial } = strings

  return (
    <section className="editorial-section section-padding scroll-trigger animate--slide-in" aria-labelledby="editorial-title">
      <h2 id="editorial-title">
        {editorial.eyebrowTop}
        <br />
        {editorial.eyebrowBottom}
      </h2>
      <p className="editorial-section__lead">{editorial.lead}</p>
      <p className="editorial-section__remains">{editorial.remains}</p>
      <p className="editorial-section__body">{editorial.body}</p>
      <p className="editorial-section__closing">
        {editorial.closingTop}
        <br />
        {editorial.closingBottom}
      </p>
    </section>
  )
}
