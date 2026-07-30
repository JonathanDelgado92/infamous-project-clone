'use client'

import type { StoreProduct } from '@/lib/store-data'
import { useEffect, useState, type CSSProperties } from 'react'

export function ProductDetail({ product }: { product: StoreProduct }) {
  const [selected, setSelected] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colorVariants?.[0]?.name ?? product.colors[0] ?? '')
  const selectedVariant = product.colorVariants?.find((variant) => variant.name === selectedColor)
  const activeMedia = selectedVariant?.media ?? product.media

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
          <img src={activeMedia[selected]} alt={`${product.title} ${selectedColor || 'product'} view ${selected + 1}`} />
          <span>+</span>
        </button>
        <div className="product-thumbnails" aria-label="Product media">
          {activeMedia.map((src, index) => <button className={selected === index ? 'is-active' : ''} key={`${src}-${index}`} onClick={() => setSelected(index)} aria-label={`Show image ${index + 1} for ${selectedColor || 'product'}`}><img src={src} alt="" /></button>)}
        </div>
      </div>
      <div className="product-info scroll-trigger animate--slide-in">
        <p className="eyebrow">Infamous Project</p><h1>{product.title}</h1><p className="product-price">${product.price.toFixed(2)} USD</p>
        {product.colors.length > 0 && <fieldset><legend>Color: <strong>{selectedColor}</strong></legend><div className="sold-options">{product.colors.map((color) => {
          const variant = product.colorVariants?.find((item) => item.name === color)
          const isSelected = selectedColor === color
          return <button className={isSelected ? 'is-selected' : ''} key={color} type="button" aria-pressed={isSelected} onClick={() => { setSelectedColor(color); setSelected(0) }}>
            {variant && <span className="color-swatch" style={{ '--swatch': variant.swatch } as CSSProperties} aria-hidden="true" />}
            <span>{color}</span><small>{product.available ? 'Available' : 'Sold out'}</small>
          </button>
        })}</div></fieldset>}
        <label className="quantity-label" htmlFor="quantity">Quantity</label>
        <div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">-</button><input id="quantity" value={quantity} readOnly /><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button></div>
        <button className="sold-out-button" disabled>SOLD OUT</button>
        <div className="product-description"><h2>{product.descriptionTitle}</h2>{product.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      {modalOpen && <div className="media-modal" role="dialog" aria-modal="true" aria-label="Product media viewer"><button className="media-modal__close" onClick={() => setModalOpen(false)} aria-label="Close">x</button><button className="media-modal__prev" onClick={() => setSelected((selected - 1 + activeMedia.length) % activeMedia.length)} aria-label="Previous">&lt;</button><img src={activeMedia[selected]} alt={`${product.title} ${selectedColor || 'product'} enlarged view`} /><button className="media-modal__next" onClick={() => setSelected((selected + 1) % activeMedia.length)} aria-label="Next">&gt;</button></div>}
    </section>
  )
}
