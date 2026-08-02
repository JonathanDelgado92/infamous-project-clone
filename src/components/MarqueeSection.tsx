'use client'

import { useLanguage } from '@/lib/language-context'

const PRIMARY_ITEMS = ['NOT MADE FOR HYPE. MADE FOR LEGACY', 'LIMITED EDITION', 'NO WEAK SH!T', 'WELCOME TO STORE']

type MarqueeSectionProps = {
  variant: 'primary' | 'secondary'
}

export function MarqueeSection({ variant }: MarqueeSectionProps) {
  const { strings } = useLanguage()
  const items = variant === 'primary' ? PRIMARY_ITEMS : strings.marquee.secondary
  const repeated = Array.from({ length: 4 }, () => [...items]).flat()

  return (
    <section className="custom-marquee" aria-label={variant === 'primary' ? 'Brand statements' : 'Collection statements'}>
      <div className="custom-marquee__track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  )
}
