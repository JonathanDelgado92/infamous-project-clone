'use client'

import { useLanguage } from '@/lib/language-context'

export function TestimonialSlider() {
  const { strings } = useLanguage()

  if (strings.testimonials.items.length === 0) return null

  return (
    <section className="testimonials section-padding scroll-trigger animate--slide-in" aria-labelledby="testimonials-title">
      <div className="section-heading">
        <h2 id="testimonials-title">{strings.testimonials.title}</h2>
        <p>{strings.testimonials.description}</p>
      </div>
      <div className="testimonials__track" role="list">
        {strings.testimonials.items.map((testimonial) => (
          <article className="testimonial-card" role="listitem" key={testimonial.author}>
            <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <p>{testimonial.author}<span>{strings.testimonials.verified}</span></p>
          </article>
        ))}
      </div>
    </section>
  )
}
