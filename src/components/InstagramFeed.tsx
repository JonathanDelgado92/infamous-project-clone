import type { CSSProperties } from 'react'

const images = [
  '/images/story/5DD0FE54-6871-4EC6-8205-07FEDC9D8B64.png',
  '/images/story/96448C35-8F8C-4BA8-A9DB-C630B7B9B3B5.png',
  '/images/story/IMG_5149.JPEG',
  '/images/story/IMG_5157.JPG',
  '/images/story/photo-output.jpg',
  '/images/story/photo-output.png',
]

export function InstagramFeed() {
  return (
    <section className="instagram-section section-padding" aria-labelledby="instagram-title">
      <h2 id="instagram-title" className="scroll-trigger animate--slide-in">FOLLOW US ON INSTAGRAM</h2>
      <div className="instagram-section__grid">
        {images.map((image, index) => (
          <img className="scroll-trigger animate--fade-in" style={{ '--animation-order': index } as CSSProperties} key={image} src={image} alt="Reference visual" loading="lazy" />
        ))}
      </div>
    </section>
  )
}
