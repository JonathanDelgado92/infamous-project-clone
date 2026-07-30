'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import type { CatalogStory, Locale } from '@/lib/catalog'

const whatsappNumber = '593996370700'

export function ProductDetail({ story, locale, nextStory }: { story: CatalogStory; locale: Locale; nextStory: CatalogStory }) {
  const [selected, setSelected] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState(story.variants[0] ?? '')
  const content = story.content[locale]
  const copy = locale === 'es'
    ? { story: 'HISTORIA', represents: 'A QUÉ HACE REFERENCIA', construction: 'CONFECCIÓN Y DETALLES', variants: 'VARIANTE', availability: 'CONSULTAR DISPONIBILIDAD', buy: 'COMPRAR POR WHATSAPP', next: 'SIGUIENTE HISTORIA', close: 'Cerrar galería', previous: 'Anterior', following: 'Siguiente', size: 'Talla por confirmar' }
    : { story: 'STORY', represents: 'WHAT IT REPRESENTS', construction: 'CONSTRUCTION AND DETAILS', variants: 'VARIANT', availability: 'CHECK AVAILABILITY', buy: 'BUY VIA WHATSAPP', next: 'NEXT STORY', close: 'Close gallery', previous: 'Previous', following: 'Next', size: 'Size to confirm' }

  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (!modalOpen) return
      if (event.key === 'Escape') setModalOpen(false)
      if (event.key === 'ArrowRight') setSelected((value) => (value + 1) % story.media.length)
      if (event.key === 'ArrowLeft') setSelected((value) => (value - 1 + story.media.length) % story.media.length)
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [modalOpen, story.media.length])

  const whatsappHref = useMemo(() => {
    const message = locale === 'es'
      ? `Hola, quiero consultar disponibilidad de STORY ${story.id} — ${story.name}. Variante: ${selectedVariant || 'Por confirmar'}. ${copy.size}.`
      : `Hello, I would like to check availability for STORY ${story.id} — ${story.name}. Variant: ${selectedVariant || 'To confirm'}. ${copy.size}.`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }, [copy.size, locale, selectedVariant, story.id, story.name])

  return (
    <section className="story-detail page-width">
      <div className="story-detail__gallery">
        <button className="story-detail__hero" type="button" onClick={() => setModalOpen(true)} aria-label={`${locale === 'es' ? 'Abrir imagen de' : 'Open image of'} ${story.name}`}>
          <Image src={story.media[selected]} alt={`${story.name} ${selected + 1}`} fill priority sizes="(max-width: 990px) 100vw, 56vw" />
          <span>+</span>
        </button>
        <div className="story-detail__thumbs" aria-label={`${story.name} media`}>
          {story.media.map((src, index) => <button className={selected === index ? 'is-active' : ''} type="button" key={src} onClick={() => setSelected(index)} aria-label={`${locale === 'es' ? 'Ver imagen' : 'Show image'} ${index + 1}`}><Image src={src} alt="" fill sizes="90px" /></button>)}
        </div>
      </div>
      <article className="story-detail__content">
        <p className="eyebrow">{copy.story} {story.id}</p>
        <p className="story-detail__category">{content.category}</p>
        <h1>{story.name}</h1>
        <p className="story-detail__tagline">{content.tagline}</p>
        <p className="product-price">{story.priceLabel}</p>
        <p className="story-detail__availability">{copy.availability}</p>
        {story.variants.length > 0 && <fieldset className="story-detail__variants"><legend>{copy.variants}: <strong>{selectedVariant}</strong></legend><div>{story.variants.map((variant) => <button className={selectedVariant === variant ? 'is-selected' : ''} type="button" key={variant} aria-pressed={selectedVariant === variant} onClick={() => setSelectedVariant(variant)}>{variant}</button>)}</div></fieldset>}
        <a className="button story-detail__whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">{copy.buy}</a>
        <div className="story-detail__narrative"><h2>{content.tagline}</h2>{content.narrative.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="story-detail__information"><h2>{copy.represents}</h2><p>{content.represents}</p></div>
        <div className="story-detail__information"><h2>{copy.construction}</h2><ul>{content.construction.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <p className="story-detail__catalog-copy">{content.catalogCopy}</p>
        <Link className="story-detail__next" href={`/${locale}/products/${nextStory.slug}`}><span>{copy.next}</span><strong>STORY {nextStory.id} · {nextStory.name}</strong></Link>
      </article>
      {modalOpen && <div className="media-modal" role="dialog" aria-modal="true" aria-label={`${story.name} media viewer`}><button className="media-modal__close" onClick={() => setModalOpen(false)} aria-label={copy.close}>×</button><button className="media-modal__prev" onClick={() => setSelected((selected - 1 + story.media.length) % story.media.length)} aria-label={copy.previous}>‹</button><Image src={story.media[selected]} alt={`${story.name} ${selected + 1}`} width={1600} height={2000} sizes="90vw" /><button className="media-modal__next" onClick={() => setSelected((selected + 1) % story.media.length)} aria-label={copy.following}>›</button></div>}
    </section>
  )
}
