export function PasswordFooter() {
  return (
    <footer
      className="password__footer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundColor: '#000',
        color: 'rgb(255,255,255)',
      }}
    >
      <ul
        className="list-social"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <li className="list-social__item">
          <a
            href="https://instagram.com"
            className="link list-social__link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1.1rem',
              color: 'rgb(255,255,255)',
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}
          >
            <svg aria-hidden="true" focusable="false" className="icon icon-instagram" viewBox="0 0 20 20" width="22" height="22">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.23 3.47c-.84-.04-1.11-.06-3.23-.06s-2.39.02-3.23.06c-1.33.07-2 .36-2.47.6-.62.31-.96.76-1.3 1.21-.33.45-.56.99-.7 1.6-.35 1.5-.35 3.9-.35 3.9s0 2.4.35 3.9c.14.61.37 1.15.7 1.6.34.45.68.9 1.3 1.21.47.24 1.14.53 2.47.6.84.04 1.11.06 3.23.06s2.39-.02 3.23-.06c1.33-.07 2-.36 2.47-.6.62-.31.96-.76 1.3-1.21.33-.45.56-.99.7-1.6.35-1.5.35-3.9.35-3.9s0-2.4-.35-3.9c-.14-.61-.37-1.15-.7-1.6-.34-.45-.68-.9-1.3-1.21-.47-.24-1.14-.53-2.47-.6zm-5.23 8.7c-1.17 0-2.12-.94-2.12-2.1s.95-2.1 2.12-2.1 2.12.94 2.12 2.1-.95 2.1-2.12 2.1zm3.57-4.53c-.39 0-.7-.31-.7-.7s.31-.7.7-.7.7.31.7.7-.31.7-.7.7zm-2.21 1.76a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
      <div className="password__footer-caption" style={{ marginTop: '3rem', fontSize: '1.3rem', textAlign: 'center' }}>
        This shop will be powered by{' '}
        <a
          href="https://www.shopify.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <svg className="icon icon-shopify" viewBox="0 0 150 43" width="70" height="20" style={{ verticalAlign: 'top', color: 'rgb(255,255,255)' }}>
            <path fill="currentColor" d="M33.3 8.9s0-.1-.1-.1-.1-.1-.1-.1l-.1-.1s-.1 0-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1-.1-.1-.1-.2-.1l-.1-.1c-.1-.1-.1-.1-.2-.1l-.1-.1c-.1-.1-.1-.1-.2-.1l-.1-.1c-.1-.1-.1-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c-.1-.1-.2-.1-.2-.1l-.1-.1c0-.1-.1-.1-.1-.2" />
          </svg>
        </a>
      </div>
      <div className="password__footer-login" style={{ marginTop: '1.2rem', paddingBottom: '4rem', fontSize: '1.3rem' }}>
        Are you the store owner?{' '}
        <Link href="/admin" className="link underlined-link" style={{ color: 'inherit', textDecoration: 'underline', padding: 0, fontSize: '1.3rem', fontWeight: 400 }}>
          Log in here
        </Link>
      </div>
    </footer>
  )
}
import Link from 'next/link'
