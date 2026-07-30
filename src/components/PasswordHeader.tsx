'use client'

import { useState } from 'react'

export function PasswordHeader() {
  const [open, setOpen] = useState(false)

  return (
    <div id="shopify-section-main-password-header" className="shopify-section">
      <style>{`.password-logo { max-width: 300px; }
@media only screen and (min-width: 750px) {
  .password-header {
    display: grid !important;
    gap: 3rem;
    grid-template-columns: 1fr 1.5fr 1fr;
    padding: 2rem 5rem 2.5rem;
    text-align: left;
  }
  .password-logo { margin-bottom: 0; }
  .password-content { margin-bottom: 0; margin-top: 0; }
}`}</style>
      <div className="color-scheme-1 gradient">
        <div
          className="password-header"
          style={{
            padding: '2rem 1.5rem 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'rgb(255,255,255)',
            maxWidth: '160rem',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <img
            src="/images/infamous-logo.png"
            alt="Infamous Project"
            width="300"
            height="94.7"
            className="password-logo"
            style={{ width: '100%', marginBottom: '1.5rem' }}
          />
          <div className="password-content" style={{ marginBottom: '1.8rem', marginTop: '1rem' }}>
            NOT MADE FOR HYPE. MADE FOR LEGACY
          </div>
          <div className="password-modal-wrapper" style={{ justifySelf: 'flex-end' }}>
            <details className="password-modal modal" open={open} onToggle={() => {}}>
              <summary
                className="modal__toggle"
                aria-haspopup="dialog"
                onClick={(e) => { e.preventDefault(); setOpen(!open) }}
                style={{ listStyle: 'none', cursor: 'pointer' }}
              >
                <div className="modal__toggle-open password-link link underlined-link" style={{ display: open ? 'none' : 'flex', alignItems: 'center', fontSize: '1.4rem', fontWeight: 400, whiteSpace: 'nowrap', color: 'rgb(255,255,255)' }}>
                  <svg fill="none" className="icon icon-padlock" viewBox="0 0 16 21" width="18" height="18" style={{ marginRight: '1rem' }}>
                    <path fill="currentColor" fillRule="evenodd" d="M5.03 1.79A3.73 3.73 0 0 1 8 .5c1.28 0 2.28.48 2.97 1.29.67.8 1 1.87 1.03 3V7.5h3c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V8c0-.28.22-.5.5-.5h3V4.8c0-1.1.36-2.15 1.03-3.01M11 6.4v1.09H5V4.82c.03-.99.31-1.82.8-2.4A2.75 2.75 0 0 1 8 1.49c1.01 0 1.73.37 2.2.93.49.58.77 1.41.8 2.4zM1.5 8.49v11h13v-11zm6.51 2.5a1.5 1.5 0 0 0-.7 2.82v2.5a.68.68 0 0 0 1.36 0v-2.47A1.5 1.5 0 0 0 8 11z" clipRule="evenodd" />
                  </svg>
                  Enter using password
                </div>
                <div className="modal__toggle-close" aria-hidden="true" style={{ display: open ? 'flex' : 'none', padding: '0.8rem', zIndex: 1 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="icon icon-close" viewBox="0 0 18 17" width="17" height="17">
                    <path fill="currentColor" d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z" />
                  </svg>
                </div>
              </summary>
              <div className="modal__content" role="dialog" aria-labelledby="DialogHeading" aria-modal="true">
                <div
                  className="password-modal__content"
                  tabIndex={-1}
                  style={{ padding: '4.5rem 3.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}
                >
                  <button
                    type="button"
                    className="modal__close-button link"
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                    style={{
                      position: 'absolute', top: '2.2rem', right: '2.2rem',
                      padding: '0.8rem', color: 'rgb(255,255,255)',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 17" width="17" height="17">
                      <path fill="currentColor" d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z" />
                    </svg>
                  </button>
                  <h2 className="password-modal__content-heading" id="DialogHeading" style={{ fontSize: '1.8rem', fontWeight: 400 }}>
                    Enter store using password:
                  </h2>
                  <form
                    method="post"
                    action=""
                    className="password-form"
                    style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: '4rem', marginBottom: '2rem', width: '100%', maxWidth: '50rem' }}
                  >
                    <div className="password-field field" style={{ flex: '1 20rem' }}>
                      <input
                        type="password"
                        name="password"
                        id="Password"
                        autoComplete="current-password"
                        placeholder="Your password"
                        style={{
                          width: '100%', padding: '1.5rem', fontSize: '1.6rem',
                          background: 'transparent', border: '1px solid rgba(255,255,255,0.55)',
                          color: '#fff', outline: 'none', fontFamily: 'inherit',
                          letterSpacing: '0.07rem',
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      name="commit"
                      style={{
                        marginTop: '0', marginLeft: '2rem', width: 'auto', alignSelf: 'start',
                        padding: '1.2rem 3rem', background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.55)', color: '#fff',
                        fontSize: '1.5rem', cursor: 'pointer', letterSpacing: '0.1rem',
                        fontFamily: 'inherit',
                      }}
                    >
                      Enter
                    </button>
                  </form>
                  <small className="password__footer-text" style={{ fontSize: '1.3rem', fontWeight: 400 }}>
                    Are you the store owner?{' '}
                    <a href="/admin" className="link underlined-link" style={{ color: 'inherit', textDecoration: 'underline', padding: 0, fontSize: '1.3rem', fontWeight: 400 }}>
                      Log in here
                    </a>
                  </small>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
      <hr style={{ margin: 0, border: 'none', borderTop: '0.1rem solid rgba(255,255,255,0.1)' }} />
    </div>
  )
}
