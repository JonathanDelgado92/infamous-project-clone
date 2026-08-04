'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export function ImageWithText() {
  const { strings } = useLanguage()

  return (
    <div className="section" id="founder">
      <div className="gradient color-scheme-2" style={{ padding: '36px 0' }}>
        <div className="page-width content-shell">
          <div className="scroll-trigger animate--slide-in image-with-text image-with-text--no-overlap isolate" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div
              className="image-with-text__media image-with-text__media--adapt global-media-settings founder-logo"
              style={{
                aspectRatio: '980 / 700',
                width: '100%',
                borderRadius: '0',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/founder-logo-white.png"
                alt="Infamous Project"
                fill
                sizes="(max-width: 749px) 100vw, 50vw"
                className="founder-logo__img founder-logo__img--white"
                style={{ objectFit: 'contain', padding: '4rem' }}
              />
              <Image
                src="/images/founder-logo-black.png"
                alt=""
                fill
                sizes="(max-width: 749px) 100vw, 50vw"
                className="founder-logo__img founder-logo__img--black"
                style={{ objectFit: 'contain', padding: '4rem' }}
                aria-hidden="true"
              />
            </div>
            <div
              className="image-with-text__content image-with-text__content--middle image-with-text__content--desktop-left"
              style={{ padding: '0' }}
            >
              <p className="image-with-text__text--caption" style={{ fontSize: '1.2rem', letterSpacing: '0.13rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                {strings.founder.caption}
              </p>
              <h2 className="image-with-text__heading h1" style={{ fontSize: 'calc(2.4rem + 1vw)', lineHeight: 1.1, color: '#fff', fontFamily: 'Oswald, sans-serif', fontWeight: 700, margin: '1rem 0' }}>
                {strings.founder.title}
              </h2>
              <div className="image-with-text__text rte body" style={{ fontSize: '1.6rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', margin: '1rem 0 2rem' }}>
                <p>{strings.founder.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
