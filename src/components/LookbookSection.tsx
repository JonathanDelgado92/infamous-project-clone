'use client'

import Image from 'next/image'

const gallery = [
  { src: '/images/story/E5911F41-E44A-4941-8840-F944E3A6CE76.png', alt: 'Story 001 — Black model gym', span: 'tall' },
  { src: '/images/stories/006/176AED32-290B-47D7-9E0C-A0AE62204F39.png', alt: 'Story 006 — Cap cream navy', span: '' },
  { src: '/images/stories/002/69202655-B37A-4C0B-BE0B-A96CF9FF38DE.png', alt: 'Story 002 — No Mercy outfit', span: '' },
  { src: '/images/story/5B3FF8DD-5516-4124-9E50-598F422FF339.jpg', alt: 'Story 001 — Acid Wash model', span: 'tall' },
  { src: '/images/stories/005/4551CDA5-83C1-4186-98D4-C0B645ECAA53.png', alt: 'Story 005 — Beanies stack', span: '' },
  { src: '/images/story/AEF75A06-AF6D-4711-A1E5-AD3F5FB2BD67.jpg', alt: 'Story 001 — Steel model front', span: '' },
  { src: '/images/stories/003/B62D3053-C537-4DCC-AC86-353259CD742E.png', alt: 'Story 003 — Silent Attraction label black', span: '' },
  { src: '/images/stories/004/50222BC0-0CF5-4462-A8A9-98530CBC3850.png', alt: 'Story 004 — Life Hits Hard tank back', span: 'tall' },
  { src: '/images/stories/006/E26C1E51-E4AE-4117-AF1E-99F4BDDC3C36.png', alt: 'Story 006 — Cap grey', span: '' },
  { src: '/images/stories/002/441321A6-97CB-44AD-91E2-C546ED192431.jpg', alt: 'Story 002 — No Mercy label detail', span: '' },
  { src: '/images/story/7715701D-9327-4728-BC7B-27DDC1749863.jpg', alt: 'Story 001 — Clear model front', span: '' },
  { src: '/images/stories/005/9F9D7CB8-192F-4600-AAEE-4D9C1D67CB84.png', alt: 'Story 005 — Beanie black', span: '' },
]

export function LookbookSection() {
  return (
    <section className="lookbook section-padding scroll-trigger animate--fade-in" aria-label="Lookbook">
      <div className="lookbook__grid">
        {gallery.map((item) => (
          <div className={`lookbook__tile${item.span ? ` lookbook__tile--${item.span}` : ''}`} key={item.src}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width:749px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={80} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
