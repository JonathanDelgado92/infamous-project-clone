import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top page-width">
        <div><h2>QUICK LINKS</h2><Link href="/search">Search</Link></div>
        <div className="site-footer__brand"><p>FASHION WITHOUT LIMITS — DESIGNED FOR IMPACT</p><a href="https://www.instagram.com/infamousproject/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a></div>
      </div>
      <div className="site-footer__bottom"><span className="paypal-mark">PayPal</span><p>© 2026, <Link href="/">Infamous Project</Link> · Powered by Shopify</p></div>
    </footer>
  )
}
