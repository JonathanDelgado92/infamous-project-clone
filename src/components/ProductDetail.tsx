'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { StoreProduct } from '@/lib/store-data'
import { getNextProduct } from '@/lib/store-data'
import { useEffect, useState, type CSSProperties } from 'react'
import { useLanguage } from '@/lib/language-context'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function ProductDetail({ product }: { product: StoreProduct }) {
  const { language, strings } = useLanguage()
  const content = product.content[language]
  const nextProduct = getNextProduct(product.slug)
  const [selected, setSelected] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colorVariants?.[0]?.name ?? product.colors[0] ?? '')
  const activeMedia = product.media

  const jumpToColor = (color: string) => {
    setSelectedColor(color)
    const variant = product.colorVariants?.find((item) => item.name === color)
    const firstShot = variant?.media[0]
    const index = firstShot ? activeMedia.indexOf(firstShot) : -1
    setSelected(index === -1 ? 0 : index)
  }

  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (!modalOpen) return
      if (event.key === 'Escape') setModalOpen(false)
      if (event.key === 'ArrowRight') setSelected((value) => (value + 1) % activeMedia.length)
      if (event.key === 'ArrowLeft') setSelected((value) => (value - 1 + activeMedia.length) % activeMedia.length)
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [modalOpen, activeMedia.length])

  return (
    <section className="product-page page-width">
      <div className="product-gallery scroll-trigger animate--fade-in">
        <button className="product-main-media" onClick={() => setModalOpen(true)} aria-label="Open product image">
          <Image
            src={activeMedia[selected]}
            alt={`${product.title} ${selectedColor || 'product'} view ${selected + 1}`}
            fill
            sizes="(max-width: 749px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            quality={85}
            priority={selected === 0}
          />
          <span>+</span>
        </button>
        <div className="product-thumbnails" aria-label="Product media">
          {activeMedia.map((src, index) => <button className={selected === index ? 'is-active' : ''} key={`${src}-${index}`} onClick={() => setSelected(index)} aria-label={`Show image ${index + 1} for ${selectedColor || 'product'}`}>
            <Image src={src} alt="" fill sizes="112px" style={{ objectFit: 'cover' }} quality={70} />
          </button>)}
        </div>
      </div>
      <div className="product-info scroll-trigger animate--slide-in">
        <p className="eyebrow">Infamous Project · {language === 'es' ? 'Historia' : 'Story'} {product.storyNumber}</p>
        <h1>{product.title}</h1>
        {product.priceConfirmed ? (
          <p className="product-price">${product.price?.toFixed(2)} USD</p>
        ) : (
          <p className="product-price price-pending">{strings.story.pricePending}</p>
        )}
        {product.colors.length > 0 && <fieldset><legend>{strings.story.color}: <strong>{selectedColor}</strong></legend><div className="sold-options">{product.colors.map((color) => {
          const variant = product.colorVariants?.find((item) => item.name === color)
          const isSelected = selectedColor === color
          return <button className={isSelected ? 'is-selected' : ''} key={color} type="button" aria-pressed={isSelected} onClick={() => jumpToColor(color)}>
            {variant && <span className="color-swatch" style={{ '--swatch': variant.swatch } as CSSProperties} aria-hidden="true" />}
            <span>{color}</span>
          </button>
        })}</div></fieldset>}
        <label className="quantity-label" htmlFor="quantity">{strings.story.quantity}</label>
        <div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">-</button><input id="quantity" value={quantity} readOnly /><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button></div>
        <a className="whatsapp-button" href={buildWhatsAppLink(product, language, selectedColor || undefined)} target="_blank" rel="noreferrer">
          {strings.story.buyWhatsapp}
        </a>

        <div className="story-narrative">
          <p className="story-narrative__phrase">{content.phrase}</p>
          {content.narrative.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <h2>{strings.story.whatItRepresents}</h2>
          <p>{content.whatItRepresents}</p>

          <h2>{strings.story.construction} · {product.fabricLabel}</h2>
          <ul>
            {content.construction.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <Link className="story-next" href={`/products/${nextProduct.slug}`}>
          <span>{strings.story.nextStory}</span>
          <strong>{nextProduct.title} →</strong>
        </Link>
      </div>
      {modalOpen && <div className="media-modal" role="dialog" aria-modal="true" aria-label="Product media viewer"><button className="media-modal__close" onClick={() => setModalOpen(false)} aria-label="Close">x</button><button className="media-modal__prev" onClick={() => setSelected((selected - 1 + activeMedia.length) % activeMedia.length)} aria-label="Previous">&lt;</button><div className="media-modal__frame"><Image src={activeMedia[selected]} alt={`${product.title} ${selectedColor || 'product'} enlarged view`} fill sizes="90vw" style={{ objectFit: 'contain' }} quality={90} /></div><button className="media-modal__next" onClick={() => setSelected((selected + 1) % activeMedia.length)} aria-label="Next">&gt;</button></div>}
    </section>
  )
}
