const testimonials = [
  {
    quote: 'THE STRUCTURE. THE FIT. THE PRESENCE. SONDER PIECES ARE UNLIKE ANYTHING ELSE—PURE POWER IN FABRIC FORM.',
    author: 'JORDAN M.',
  },
  {
    quote: 'EVERY DETAIL FEELS INTENTIONAL. FROM THE TAILORING TO THE FABRICS, THIS BRAND IS BUILT DIFFERENTLY.',
    author: 'ALEXIS T.',
  },
  {
    quote: 'LIMITED EDITION MEANS SOMETHING HERE. I BOUGHT THE ARCHITECTURAL KIMONO, AND EVERY TIME I WEAR IT, PEOPLE ASK WHERE IT’S FROM.',
    author: 'MARCUS R.',
  },
]

export function TestimonialSlider() {
  return (
    <section className="testimonials section-padding scroll-trigger animate--slide-in" aria-labelledby="testimonials-title">
      <div className="section-heading">
        <h2 id="testimonials-title">WHAT THEY’RE SAYING</h2>
        <p>REAL STYLE. REAL IMPACT. SONDER ISN&apos;T JUST CLOTHING—IT&apos;S A STATEMENT. SEE WHAT OUR CUSTOMERS HAVE TO SAY.</p>
      </div>
      <div className="testimonials__track" role="list">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" role="listitem" key={testimonial.author}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <p>{testimonial.author}<span>Verified Customer</span></p>
          </article>
        ))}
      </div>
    </section>
  )
}
