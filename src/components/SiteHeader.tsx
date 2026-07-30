'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const menuLinks = [
  ['/', 'Home'],
  ['/collections/all', 'Catalog'],
  ['/pages/contact', 'Contact'],
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, searchOpen])

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); setSearchOpen(false) }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <header className="site-header">
      <button className="icon-button" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><span className="hamburger" /></button>
      <Link href="/" className="site-logo"><img src="/images/infamous-logo.png" alt="Infamous Project" /></Link>
      <div className="header-actions">
        <button className="icon-button search-icon" aria-label="Search" onClick={() => setSearchOpen(true)} />
        <span className="icon-button account-icon small-hide" aria-label="Log in" />
        <Link href="/cart" className="icon-button cart-icon" aria-label="Cart" />
      </div>

      <div className={`drawer-backdrop ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />
      <aside className={`menu-drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <button className="drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>×</button>
        <nav>
          {menuLinks.map(([href, label]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          <span className="disabled-link">Log in</span>
          <a href="https://www.instagram.com/infamousproject/" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </aside>

      {searchOpen && (
        <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search">
          <button className="search-modal__backdrop" aria-label="Close search" onClick={() => setSearchOpen(false)} />
          <form className="search-modal__form" action="/search">
            <label htmlFor="header-search">Search</label>
            <div><input id="header-search" name="q" type="search" autoFocus placeholder="Search" /><button type="submit">→</button></div>
            <button type="button" className="search-modal__close" onClick={() => setSearchOpen(false)}>Close</button>
          </form>
        </div>
      )}
    </header>
  )
}
