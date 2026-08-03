'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/lib/language-context'
import { useCart } from '@/lib/cart-context'

export function SiteHeader() {
  const { strings } = useLanguage()
  const { totalUnits } = useCart()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const updateScrollTop = () => setShowScrollTop(window.scrollY > 560)
    updateScrollTop()
    window.addEventListener('scroll', updateScrollTop, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollTop)
  }, [])

  return (
    <header className="site-header">
      <Link href="/collections/all" className="header-catalog-button">{strings.nav.catalog}</Link>
      <Link href="/" className="site-logo"><img src="/images/infamous-logo.png" alt="Infamous Project" /></Link>
      <div className="header-actions">
        <LanguageToggle />
        <Link href="/cart" className="icon-button cart-icon" aria-label={`Cart, ${totalUnits} items`}>
          {totalUnits > 0 && <span className="cart-icon__badge">{totalUnits}</span>}
        </Link>
      </div>

      {showScrollTop && <button className="scroll-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6" /></svg></button>}
    </header>
  )
}
