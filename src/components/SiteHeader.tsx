'use client'

import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const menuLinks = [
  ['/', 'Home'],
  ['/collections/all', 'Catalog'],
  ['/pages/contact', 'Contact'],
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const drawerRef = useRef<HTMLElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const hasAnimated = useRef(false)

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

  useEffect(() => {
    if (menuOpen) closeButtonRef.current?.focus()
  }, [menuOpen])

  useLayoutEffect(() => {
    const drawer = drawerRef.current
    const backdrop = backdropRef.current
    if (!drawer || !backdrop) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const layers = drawer.querySelectorAll('.menu-drawer__layer')
      const menuItems = drawer.querySelectorAll('.menu-drawer__nav a, .menu-drawer__nav span')

      if (!hasAnimated.current) {
        gsap.set(drawer, { display: menuOpen ? 'block' : 'none', autoAlpha: menuOpen ? 1 : 0 })
        gsap.set(backdrop, { autoAlpha: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' })
        gsap.set(layers, { xPercent: menuOpen ? 0 : -104 })
        gsap.set(menuItems, { yPercent: menuOpen ? 0 : 130, rotate: menuOpen ? 0 : -5, autoAlpha: menuOpen ? 1 : 0 })
        hasAnimated.current = true
        return
      }

      if (reducedMotion) {
        gsap.set(drawer, { display: menuOpen ? 'block' : 'none', autoAlpha: menuOpen ? 1 : 0 })
        gsap.set(backdrop, { autoAlpha: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' })
        gsap.set(layers, { xPercent: menuOpen ? 0 : -104 })
        gsap.set(menuItems, { yPercent: menuOpen ? 0 : 130, rotate: menuOpen ? 0 : -5, autoAlpha: menuOpen ? 1 : 0 })
        return
      }

      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })
      if (menuOpen) {
        timeline
          .set(drawer, { display: 'block', autoAlpha: 1 })
          .set(backdrop, { pointerEvents: 'auto' })
          .fromTo(backdrop, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.32 }, 0)
          .fromTo(layers, { xPercent: -104 }, { xPercent: 0, duration: 0.62, stagger: 0.075 }, 0)
          .fromTo(menuItems, { yPercent: 130, rotate: -5, autoAlpha: 0 }, { yPercent: 0, rotate: 0, autoAlpha: 1, duration: 0.58, stagger: 0.055 }, 0.22)
      } else {
        timeline
          .to(menuItems, { yPercent: -30, autoAlpha: 0, duration: 0.2, stagger: 0.025 })
          .to(layers, { xPercent: -104, duration: 0.46, stagger: { each: 0.06, from: 'end' } }, 0)
          .to(backdrop, { autoAlpha: 0, duration: 0.26 }, 0)
          .set(backdrop, { pointerEvents: 'none' })
          .set(drawer, { display: 'none', autoAlpha: 0 })
      }
    }, drawer)

    return () => ctx.revert()
  }, [menuOpen])

  return (
    <header className="site-header">
      <button className="icon-button" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><span className="hamburger" /></button>
      <Link href="/" className="site-logo"><img src="/images/infamous-logo.png" alt="Infamous Project" /></Link>
      <div className="header-actions">
        <button className="icon-button search-icon" aria-label="Search" onClick={() => setSearchOpen(true)} />
        <span className="icon-button account-icon small-hide" aria-label="Log in" />
        <Link href="/cart" className="icon-button cart-icon" aria-label="Cart" />
      </div>

      <div ref={backdropRef} className="drawer-backdrop" onClick={() => setMenuOpen(false)} />
      <aside ref={drawerRef} className="menu-drawer" aria-hidden={!menuOpen} aria-label="Main navigation">
        <div className="menu-drawer__layer menu-drawer__layer--first" aria-hidden="true" />
        <div className="menu-drawer__layer menu-drawer__layer--second" aria-hidden="true" />
        <div className="menu-drawer__layer menu-drawer__layer--final" aria-hidden="true" />
        <div className="menu-drawer__content">
          <button ref={closeButtonRef} className="drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>&times;</button>
          <p className="menu-drawer__eyebrow">INFAMOUS PROJECT / NAVIGATION</p>
          <nav className="menu-drawer__nav">
            {menuLinks.map(([href, label], index) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
            <span className="disabled-link"><span>04</span>Log in</span>
            <a href="https://www.instagram.com/infamousproject/" target="_blank" rel="noreferrer"><span>05</span>Instagram</a>
          </nav>
          <p className="menu-drawer__footer">NOT MADE FOR HYPE. MADE FOR LEGACY.</p>
        </div>
      </aside>

      {searchOpen && (
        <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search">
          <button className="search-modal__backdrop" aria-label="Close search" onClick={() => setSearchOpen(false)} />
          <form className="search-modal__form" action="/search">
            <label htmlFor="header-search">Search</label>
            <div><input id="header-search" name="q" type="search" autoFocus placeholder="Search" /><button type="submit">&rarr;</button></div>
            <button type="button" className="search-modal__close" onClick={() => setSearchOpen(false)}>Close</button>
          </form>
        </div>
      )}
    </header>
  )
}
