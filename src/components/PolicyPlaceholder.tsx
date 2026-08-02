'use client'

import { StoreShell } from '@/components/StoreShell'
import { useLanguage } from '@/lib/language-context'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

export function PolicyPlaceholder({ title }: { title: string }) {
  const { strings } = useLanguage()

  return (
    <StoreShell>
      <section className="empty-state page-width">
        <h1>{title}</h1>
        <p>{strings.policy.comingSoonText}</p>
        <a className="button" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
          {strings.policy.contactCta}
        </a>
      </section>
    </StoreShell>
  )
}
