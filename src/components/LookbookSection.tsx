'use client'

import { useState } from 'react'

const points = [
  { left: '22%', top: '30%' },
  { left: '50%', top: '55%' },
  { left: '78%', top: '40%' },
]

export function LookbookSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="lookbook section-padding scroll-trigger animate--fade-in" aria-label="Lookbook">
      <div className="lookbook__media">
        <img src="/images/story/CEEE0001-EFA7-48D4-834A-A7C5884CE9C1.jpg" alt="Reference lookbook" loading="lazy" />
        {points.map((point, index) => (
          <div className="lookbook__point" key={point.left} style={point}>
            <button type="button" aria-label={`Lookbook point ${index + 1}`} aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)}>
              <span><span /></span>
            </button>
            <div className={`lookbook__tooltip${active === index ? ' is-open' : ''}`} aria-hidden={active !== index} />
          </div>
        ))}
      </div>
    </section>
  )
}
