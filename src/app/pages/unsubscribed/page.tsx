'use client'

import Link from 'next/link'
import { StoreShell } from '@/components/StoreShell'
import { useLanguage } from '@/lib/language-context'

export default function UnsubscribedPage() {
  const { strings } = useLanguage()
  const { title, message, cta } = strings.unsubscribed

  return (
    <StoreShell>
      <section className="empty-state page-width">
        <h1>{title}</h1>
        <p>{message}</p>
        <Link className="button" href="/">
          {cta}
        </Link>
      </section>
    </StoreShell>
  )
}
