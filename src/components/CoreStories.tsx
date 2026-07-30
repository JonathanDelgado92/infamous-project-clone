import Link from 'next/link'

const stories = [
  {
    eyebrow: 'STORY 001',
    title: 'EVERY SHADOW HIDES A STORY',
    description: 'For those who move differently.',
    image: '/images/shopify/core-story-1.png',
    href: '/products/every-shadow-hides-a-story',
    button: 'SHOP',
  },
  {
    eyebrow: 'STORY 002',
    title: 'NO MERCY FOR WEAK VISIONS',
    description: '',
    image: '/images/shopify/core-story-2.jpg',
    href: '/products/no-mercy-for-weak-visions',
    button: 'SHOP ALL',
  },
  {
    eyebrow: 'STORY 003',
    title: 'SILENT ATRACTTION',
    description: '',
    image: '/images/shopify/core-story-3.png',
    href: '',
    button: 'SHOP ALL',
  },
]

export function CoreStories() {
  return (
    <section className="core-stories" aria-labelledby="core-stories-title">
      <h2 id="core-stories-title">CORE STORIES</h2>
      <div className="core-stories__grid">
        {stories.map((story) => (
          <article className="core-story" key={story.eyebrow}>
            <img src={story.image} alt="" loading="lazy" />
            <div className="core-story__shade" />
            <p className="core-story__eyebrow">{story.eyebrow}</p>
            <div className="core-story__content">
              <h3>{story.title}</h3>
              {story.description && <p>{story.description}</p>}
              {story.href ? (
                <Link className="button core-story__button" href={story.href}>{story.button}</Link>
              ) : (
                <span className="button core-story__button" aria-disabled="true">{story.button}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
