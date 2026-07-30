'use client'

import { useRef } from 'react'
import { referenceImages } from '@/lib/store-data'

export function StoppableVideos() {
  const trackRef = useRef<HTMLDivElement>(null)

  const move = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="media-stories section-padding scroll-trigger animate--slide-in" aria-labelledby="movement-title">
      <div className="section-heading">
        <h2 id="movement-title">MOVEMENT IN FORM</h2>
        <p>FASHION ISN&apos;T STATIC—IT MOVES, FLOWS, AND COMMANDS ATTENTION. WATCH SONDER IN MOTION—BOLD SILHOUETTES, STRUCTURED DRAPING, AND EFFORTLESS POWER, CAPTURED IN EVERY FRAME.</p>
      </div>
      <div className="horizontal-slider">
        <div className="horizontal-slider__track" ref={trackRef}>
          {referenceImages.map((image) => (
            <figure className="reference-slide" key={image}>
              <img src={image} alt="Reference visual" loading="lazy" />
            </figure>
          ))}
        </div>
        <button className="slider-button slider-button--prev" type="button" aria-label="Slide left" onClick={() => move(-1)}>‹</button>
        <button className="slider-button slider-button--next" type="button" aria-label="Slide right" onClick={() => move(1)}>›</button>
      </div>
    </section>
  )
}
