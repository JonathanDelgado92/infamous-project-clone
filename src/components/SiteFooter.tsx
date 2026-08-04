'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

const INSTAGRAM_URL = 'https://www.instagram.com/infamous.project?igsh=MWplOHdpaHdtczYzeA%3D%3D'

export function SiteFooter() {
  const { strings } = useLanguage()

  return (
    <footer className="site-footer">
      <a className="site-footer__instagram instagram-section__cta" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
        <svg className="instagram-section__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
        <h2>{strings.instagram}</h2>
      </a>
      <div className="site-footer__bottom">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">{strings.footer.whatsapp}</a>
        <p>© 2026, <Link href="/">Infamous Project</Link></p>
      </div>
    </footer>
  )
}
