'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

export function SiteFooter() {
  const { strings } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer__top page-width">
        <div><h2>{strings.footer.quickLinks}</h2><Link href="/search">Search</Link></div>
        <div className="site-footer__brand"><p>FASHION WITHOUT LIMITS — DESIGNED FOR IMPACT</p></div>
      </div>
      <div className="site-footer__bottom">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">{strings.footer.whatsapp}</a>
        <p>© 2026, <Link href="/">Infamous Project</Link></p>
      </div>
    </footer>
  )
}
