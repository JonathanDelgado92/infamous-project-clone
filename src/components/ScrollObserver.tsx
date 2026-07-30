'use client'

import { useEffect } from 'react'

export function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const targets = document.querySelectorAll('.scroll-trigger')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
