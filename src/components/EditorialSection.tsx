'use client'

import { useLanguage } from '@/lib/language-context'

const CLOSING_LINE_1 = 'NOT MADE FOR HYPE.'
const CLOSING_LINE_2 = 'MADE FOR LEGACY'

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
      <span className="editorial-section__divider" aria-hidden="true" />
      <p className="editorial-section__body">{editorial.bodyPara1}</p>
      <p className="editorial-section__body">{editorial.bodyPara2}</p>
      <p className="editorial-section__closing">
        {CLOSING_LINE_1}
        <br />
        {CLOSING_LINE_2}
      </p>
    </section>
  )
}
