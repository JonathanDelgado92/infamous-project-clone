type MarqueeSectionProps = {
  variant: 'primary' | 'secondary'
}

const PRIMARY = ['NOT MADE FOR HYPE. MADE FOR LEGACY', 'LIMITED EDITION', 'NO WEAK SH!T', 'WELCOME TO STORE']
const SECONDARY = ['LIMITED EDITION', '☯', 'STATEMENT PIECES', '☯', 'FUTURE ICONS', '☯']

export function MarqueeSection({ variant }: MarqueeSectionProps) {
  const items = variant === 'primary' ? PRIMARY : SECONDARY
  const repeated = Array.from({ length: 4 }, () => items).flat()

  return (
    <section className="custom-marquee" aria-label={variant === 'primary' ? 'Brand statements' : 'Collection statements'}>
      <div className="custom-marquee__track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  )
}
