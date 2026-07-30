import Link from 'next/link'

export function ImageBannerTwo() {
  return (
    <section className="secondary-banner scroll-trigger animate--fade-in" aria-labelledby="drop-title">
      <img src="/images/story/E3646497-A42C-4556-A5BB-D2F504CCD19B-1.jpg" alt="Reference visual" loading="lazy" />
      <div className="secondary-banner__overlay" />
      <div className="secondary-banner__content">
        <h2 id="drop-title">STAY AHEAD OF THE DROP</h2>
        <p>LIMITED RELEASES. EXCLUSIVE DROPS. EARLY ACCESS. SONDER PIECES DON&apos;T WAIT—AND NEITHER SHOULD YOU.</p>
        <Link className="button button--secondary" href="/collections/all">SHOP NOW</Link>
      </div>
    </section>
  )
}
