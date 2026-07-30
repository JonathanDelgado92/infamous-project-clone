'use client'

import { FormEvent, useState } from 'react'

export function NewsletterSection() {
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (event.currentTarget.reportValidity()) setSent(true)
  }

  return (
    <section className="newsletter-section section-padding scroll-trigger animate--slide-in" aria-labelledby="newsletter-title">
      <div className="newsletter-section__overlay" />
      <div className="newsletter-section__content">
        <h2 id="newsletter-title">JOIN THE SONDER CIRCLE</h2>
        <p>FOR EXCLUSIVE DROPS &amp; EARLY ACCESS</p>
        <form onSubmit={submit} className="inline-form">
          <label className="visually-hidden" htmlFor="newsletter-email">Email</label>
          <input id="newsletter-email" name="email" type="email" placeholder="Email" required />
          <button type="submit" aria-label="Subscribe">→</button>
        </form>
        <p className="form-message" aria-live="polite">{sent ? 'Thank you for subscribing!' : ''}</p>
      </div>
    </section>
  )
}
