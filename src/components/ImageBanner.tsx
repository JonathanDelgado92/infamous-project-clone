import Link from 'next/link'

export function ImageBanner() {
  return (
    <section className="hero-banner scroll-trigger animate--fade-in" aria-labelledby="hero-title">
      <img className="hero-banner__media" src="/images/shopify/hero.png" alt="" fetchPriority="high" />
      <div className="hero-banner__overlay" />
      <div className="hero-banner__content scroll-trigger animate--slide-in">
        <p>We don&apos;t drop clothes. We release stories</p>
        <h1 id="hero-title">STAND OUT. STAY INFAMOUS</h1>
        <Link className="button button--secondary" href="/collections/all">
          SHOP THE STORIES
        </Link>
      </div>
    </section>
  )
}
