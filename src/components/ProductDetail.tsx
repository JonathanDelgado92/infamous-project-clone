'use client'

import type { StoreProduct } from '@/lib/store-data'
import { useEffect, useState } from 'react'

export function ProductDetail({ product }: { product: StoreProduct }) {
  const [selected, setSelected] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (!modalOpen) return
      if (event.key === 'Escape') setModalOpen(false)
      if (event.key === 'ArrowRight') setSelected(value => (value + 1) % product.media.length)
      if (event.key === 'ArrowLeft') setSelected(value => (value - 1 + product.media.length) % product.media.length)
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [modalOpen, product.media.length])
  return (
    <section className="product-page page-width">
      <div className="product-gallery scroll-trigger animate--fade-in">
        <button className="product-main-media" onClick={() => setModalOpen(true)} aria-label="Open product image">
          <img src={product.media[selected]} alt={`${product.title} view ${selected + 1}`} />
          <span>⌕</span>
        </button>
        <div className="product-thumbnails" aria-label="Product media">
          {product.media.map((src, index) => <button className={selected === index ? 'is-active' : ''} key={`${src}-${index}`} onClick={() => setSelected(index)} aria-label={`Show image ${index + 1}`}><img src={src} alt="" /></button>)}
        </div>
      </div>
      <div className="product-info scroll-trigger animate--slide-in">
        <p className="eyebrow">Infamous Project</p><h1>{product.title}</h1><p className="product-price">${product.price.toFixed(2)} USD</p>
        {product.colors.length > 0 && <fieldset><legend>Color</legend><div className="sold-options">{product.colors.map(color => <button key={color} disabled>{color}<small>Sold out</small></button>)}</div></fieldset>}
        <label className="quantity-label" htmlFor="quantity">Quantity</label>
        <div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">−</button><input id="quantity" value={quantity} readOnly /><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button></div>
        <button className="sold-out-button" disabled>SOLD OUT</button>
        <div className="product-description"><h2>{product.descriptionTitle}</h2>{product.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      {modalOpen && <div className="media-modal" role="dialog" aria-modal="true" aria-label="Product media viewer"><button className="media-modal__close" onClick={() => setModalOpen(false)} aria-label="Close">×</button><button className="media-modal__prev" onClick={() => setSelected((selected - 1 + product.media.length) % product.media.length)} aria-label="Previous">‹</button><img src={product.media[selected]} alt={`${product.title} enlarged view`} /><button className="media-modal__next" onClick={() => setSelected((selected + 1) % product.media.length)} aria-label="Next">›</button></div>}
    </section>
  )
}
