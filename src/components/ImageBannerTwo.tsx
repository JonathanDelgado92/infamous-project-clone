'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { TurnstileWidget } from '@/components/TurnstileWidget'

type SubmitStatus =
  | 'idle'
  | 'loading'
  | 'pending_confirmation'
  | 'already_pending_confirmation'
  | 'already_subscribed'
  | 'error'

export function ImageBannerTwo() {
  const { language, strings } = useLanguage()
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'loading') return
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const formData = new FormData(form)
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          consent: formData.get('consent') === 'on',
          company: formData.get('company'),
          language,
          source: 'newsletter_footer_banner',
          pageUrl: window.location.href,
          turnstileToken,
        }),
      })
      const data = await response.json().catch(() => null)
      const nextStatus: SubmitStatus = data?.status ?? 'error'
      setStatus(['pending_confirmation', 'already_pending_confirmation', 'already_subscribed'].includes(nextStatus) ? nextStatus : 'error')
      if (nextStatus !== 'error') {
        form.reset()
        setTurnstileToken(null)
      }
    } catch {
      setStatus('error')
    }
  }

  const resultTitle: Record<Exclude<SubmitStatus, 'idle' | 'loading'>, string> = {
    pending_confirmation: strings.newsletter.pendingTitle,
    already_pending_confirmation: strings.newsletter.alreadyPendingTitle,
    already_subscribed: strings.newsletter.alreadySubscribedTitle,
    error: strings.newsletter.errorTitle,
  }

  const resultMessage: Record<Exclude<SubmitStatus, 'idle' | 'loading'>, string> = {
    pending_confirmation: strings.newsletter.pendingMessage,
    already_pending_confirmation: strings.newsletter.alreadyPendingMessage,
    already_subscribed: strings.newsletter.alreadySubscribedMessage,
    error: strings.newsletter.errorMessage,
  }

  return (
    <section className="secondary-banner scroll-trigger animate--fade-in" aria-labelledby="drop-title">
      <div className="secondary-banner__overlay" />
      <div className="secondary-banner__content">
        <h2 id="drop-title">{strings.newsletter.title}</h2>
        <p>{strings.newsletter.subtitle}</p>

        {status !== 'idle' && status !== 'loading' && status in resultTitle ? (
          <div className="newsletter-result" role="status" aria-live="polite">
            <p className="newsletter-result__title">{resultTitle[status as Exclude<SubmitStatus, 'idle' | 'loading'>]}</p>
            <p className="newsletter-result__message">{resultMessage[status as Exclude<SubmitStatus, 'idle' | 'loading'>]}</p>
            {status === 'error' && (
              <button type="button" className="newsletter-result__retry" onClick={() => setStatus('idle')}>
                {strings.newsletter.retry}
              </button>
            )}
          </div>
        ) : (
          <form onSubmit={submit} className="inline-form" noValidate>
            <label className="visually-hidden" htmlFor="newsletter-email">{strings.newsletter.placeholder}</label>
            <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder={strings.newsletter.placeholder} required disabled={status === 'loading'} />
            <input
              className="newsletter-honeypot"
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <button type="submit" aria-label={status === 'loading' ? strings.newsletter.loading : 'Subscribe'} disabled={status === 'loading'}>
              {status === 'loading' ? '···' : '→'}
            </button>

            <label className="newsletter-consent" htmlFor="newsletter-consent">
              <input id="newsletter-consent" name="consent" type="checkbox" required disabled={status === 'loading'} />
              <span>
                {strings.newsletter.consentBefore}
                {' '}
                <Link href="/pages/privacy">{strings.newsletter.consentLinkText}</Link>
                {' '}
                {strings.newsletter.consentAfter}
              </span>
            </label>

            <TurnstileWidget onToken={setTurnstileToken} />
          </form>
        )}
      </div>
    </section>
  )
}
