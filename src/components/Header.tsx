'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Colección', href: '#coleccion' },
  { label: 'Editorial', href: '#editorial' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Packaging', href: '#packaging' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-12 transition-shadow duration-300"
      style={{ boxShadow: scrolled ? '0 1px 30px rgba(0,0,0,0.3)' : 'none' }}
    >
      <a href="#" className="font-display text-lg tracking-[0.18em] uppercase text-white">
        INFAMOUS
      </a>
      <nav className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[0.65rem] tracking-[0.22em] uppercase text-white/50 hover:text-white transition-colors duration-300 relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-[400ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
        >
          IG
        </a>
      </div>
    </header>
  )
}
