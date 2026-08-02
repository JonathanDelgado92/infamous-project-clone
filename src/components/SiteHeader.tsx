'use client'

import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/lib/language-context'
import { useCart } from '@/lib/cart-context'

export function SiteHeader() {
  const { strings } = useLanguage()
  const { totalUnits } = useCart()
  const menuLinks: [string, string][] = [
    ['/', strings.nav.home],
    ['/collections/all', strings.nav.catalog],
    ['/pages/contact', strings.nav.contact],
  ]
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const drawerRef = useRef<HTMLElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  useEffect(() => {
    const updateScrollTop = () => setShowScrollTop(window.scrollY > 560)
    updateScrollTop()
    window.addEventListener('scroll', updateScrollTop, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollTop)
  }, [])

  useLayoutEffect(() => {
    const drawer = drawerRef.current
    const backdrop = backdropRef.current
    if (!drawer || !backdrop) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const layers = drawer.querySelectorAll('.menu-drawer__layer')
      const menuItems = drawer.querySelectorAll('.menu-drawer__nav > a')

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
      <button className="icon-button menu-trigger" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
        <MenuToggleIcon open={menuOpen} className="menu-toggle-icon" aria-hidden="true" />
        <span className="menu-trigger__label" aria-hidden="true">Menu</span>
      </button>
      <Link href="/" className="site-logo"><img src="/images/infamous-logo.png" alt="Infamous Project" /></Link>
      <div className="header-actions">
        <LanguageToggle />
        <span className="icon-button account-icon small-hide" aria-label="Log in" />
        <Link href="/cart" className="icon-button cart-icon" aria-label={`Cart, ${totalUnits} items`}>
          {totalUnits > 0 && <span className="cart-icon__badge">{totalUnits}</span>}
        </Link>
      </div>

      <div ref={backdropRef} className="drawer-backdrop" onClick={() => setMenuOpen(false)} />
      <aside ref={drawerRef} className="menu-drawer" style={{ backgroundColor: '#050505' }} aria-hidden={!menuOpen} aria-label="Main navigation">
        <div className="menu-drawer__layer menu-drawer__layer--first" aria-hidden="true" />
        <div className="menu-drawer__layer menu-drawer__layer--second" aria-hidden="true" />
        <div className="menu-drawer__layer menu-drawer__layer--final" aria-hidden="true" />
        <div className="menu-drawer__content">
          <nav className="menu-drawer__nav">
            {menuLinks.map(([href, label], index) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
          </nav>
        </div>
      </aside>

      {showScrollTop && !menuOpen && <button className="scroll-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6" /></svg></button>}
    </header>
  )
}
