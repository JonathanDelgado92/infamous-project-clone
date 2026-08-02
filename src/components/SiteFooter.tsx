'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

const INSTAGRAM_URL = 'https://www.instagram.com/infamous.project?igsh=MWplOHdpaHdtczYzeA%3D%3D'

export function SiteFooter() {
  const { strings } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer__top page-width">
        <div>
          <h2>{strings.footer.quickLinks}</h2>
          <Link href="/collections/all">{strings.nav.catalog}</Link>
          <Link href="/#founder">{strings.nav.project}</Link>
          <Link href="/pages/contact">{strings.nav.contact}</Link>
        </div>
        <div>
          <h2>{strings.footer.customerCare}</h2>
          <Link href="/pages/size-guide">{strings.footer.sizeGuide}</Link>
          <Link href="/pages/shipping">{strings.footer.shipping}</Link>
          <Link href="/pages/exchanges">{strings.footer.exchanges}</Link>
          <Link href="/pages/product-care">{strings.footer.productCare}</Link>
          <Link href="/pages/faq">{strings.footer.faq}</Link>
        </div>
        <div className="site-footer__brand">
          <p>BUILT IN THE SHADOWS. PROVEN IN THE LIGHT.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{strings.footer.instagram}</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">{strings.footer.whatsapp}</a>
        <p>© 2026, <Link href="/">Infamous Project</Link></p>
      </div>
    </footer>
  )
}
