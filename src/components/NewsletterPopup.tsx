'use client'

import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useLanguage } from '@/lib/language-context'

const DAY = 86_400_000

export function NewsletterPopup() {
  const { strings } = useLanguage()
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const dismiss = useCallback(() => {
    setOpen(false)
    localStorage.setItem('infamous-newsletter-dismissed-at', String(Date.now()))
  }, [])
  useEffect(() => {
    const dismissedAt = Number(localStorage.getItem('infamous-newsletter-dismissed-at') || 0)
    const timer = window.setTimeout(() => { if (Date.now() - dismissedAt >= DAY) setOpen(true) }, 5000)
    return () => window.clearTimeout(timer)
  }, [])
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') dismiss() }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [dismiss])
  function submit(event: FormEvent) { event.preventDefault(); setSent(true) }
  if (!open) return null
  return (
    <div className="newsletter-popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <button className="newsletter-popup__backdrop" aria-label="Close" onClick={dismiss} />
      <div className="newsletter-popup__dialog">
        <button className="newsletter-popup__close" aria-label="Close" onClick={dismiss}>×</button>
        <h2 id="popup-title">{strings.newsletterPopup.title}</h2>
        <p>{strings.newsletterPopup.text}</p>
        {sent ? <p className="form-success" role="status">{strings.newsletterPopup.thanks}</p> : <form onSubmit={submit}><input type="email" aria-label={strings.newsletter.placeholder} placeholder={strings.newsletter.placeholder} required /><button aria-label="Subscribe">→</button></form>}
        <small>{strings.newsletterPopup.legal}</small>
      </div>
    </div>
  )
}
