'use client'

import { FormEvent, useState } from 'react'
import { useLanguage } from '@/lib/language-context'

export function NewsletterSection() {
  const { strings } = useLanguage()
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (event.currentTarget.reportValidity()) setSent(true)
  }

  return (
    <section className="newsletter-section section-padding scroll-trigger animate--slide-in" aria-labelledby="newsletter-title">
      <div className="newsletter-section__overlay" />
      <div className="newsletter-section__content">
        <h2 id="newsletter-title">{strings.newsletter.title}</h2>
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
