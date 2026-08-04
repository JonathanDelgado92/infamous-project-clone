const ITEMS = ['NOT MADE FOR HYPE. MADE FOR LEGACY', 'LIMITED EDITION', 'NO WEAK SH!T', 'WELCOME TO STORE']

export function MarqueeSection() {
  const repeated = Array.from({ length: 4 }, () => [...ITEMS]).flat()

  return (
    <section className="custom-marquee" aria-label="Brand statements">
      <div className="custom-marquee__track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  )
}
