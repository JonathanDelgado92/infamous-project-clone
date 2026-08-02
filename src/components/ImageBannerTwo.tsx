'use client'

import { FormEvent, useState } from 'react'
import { useLanguage } from '@/lib/language-context'

export function ImageBannerTwo() {
  const { strings } = useLanguage()
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (event.currentTarget.reportValidity()) setSent(true)
  }

  return (
    <section className="secondary-banner scroll-trigger animate--fade-in" aria-labelledby="drop-title">
      <div className="secondary-banner__overlay" />
      <div className="secondary-banner__content">
        <h2 id="drop-title">{strings.newsletter.title}</h2>
        <p>{strings.newsletter.subtitle}</p>
        <form onSubmit={submit} className="inline-form">
          <label className="visually-hidden" htmlFor="newsletter-email">{strings.newsletter.placeholder}</label>
          <input id="newsletter-email" name="email" type="email" placeholder={strings.newsletter.placeholder} required />
          <button type="submit" aria-label="Subscribe">→</button>
        </form>
        <p className="form-message" aria-live="polite">{sent ? strings.newsletter.thanks : ''}</p>
      </div>
    </section>
  )
}
