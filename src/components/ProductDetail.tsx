'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { StoreProduct } from '@/lib/store-data'
import { getNextProduct, getPreviousProduct } from '@/lib/store-data'
import { useEffect, useState, type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react'
import { useLanguage } from '@/lib/language-context'
import { useCart } from '@/lib/cart-context'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const ZOOM = 2.2
const LENS_SIZE = 180

type LensState = {
  visible: boolean
  x: number
  y: number
  containerWidth: number
  containerHeight: number
}

const initialLens: LensState = { visible: false, x: 0, y: 0, containerWidth: 0, containerHeight: 0 }

export function ProductDetail({ product }: { product: StoreProduct }) {
  const { language, strings } = useLanguage()
  const { addLine } = useCart()
  const content = product.content[language]
  const nextProduct = getNextProduct(product.slug)
  const previousProduct = getPreviousProduct(product.slug)
  const [selected, setSelected] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colorVariants?.[0]?.name ?? product.colors[0] ?? '')
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? '')
  const [justAdded, setJustAdded] = useState(false)
  const [lens, setLens] = useState<LensState>(initialLens)
  const [supportsZoom, setSupportsZoom] = useState(false)
  const activeVariant = product.colorVariants?.find((v) => v.name === selectedColor)
  const activeMedia = activeVariant?.media ?? product.media
  const displayPrice = activeVariant?.price ?? product.price
  const mainSrc = activeMedia[selected]

  // Synchronizes React state from the external matchMedia source on mount;
  // starting false keeps the client's first render matching the server-rendered HTML.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSupportsZoom(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  const jumpToColor = (color: string) => {
    setSelectedColor(color)
    setSelected(0)
  }

  const canBuy = product.status === 'available' && product.priceConfirmed && displayPrice != null

  const handleAddToCart = () => {
    if (!canBuy || displayPrice == null) return
    addLine(
      {
        key: `${product.slug}-${selectedColor || 'default'}-${selectedSize || 'default'}`,
        slug: product.slug,
        title: product.title,
        storyNumber: product.storyNumber,
        color: selectedColor,
        size: selectedSize,
        price: displayPrice,
        image: product.primaryImage,
      },
      quantity,
    )
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 2500)
  }

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!supportsZoom) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width)
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height)
    setLens({ visible: true, x, y, containerWidth: rect.width, containerHeight: rect.height })
  }

  return (
    <section className="product-page page-width">
      <div className="product-gallery scroll-trigger animate--fade-in">
        <div
          className="product-main-media"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setLens((value) => ({ ...value, visible: false }))}
        >
          <Image
            src={mainSrc}
            alt={`${product.title} ${selectedColor || 'product'} view ${selected + 1}`}
            fill
            sizes="(max-width: 749px) 100vw, 50vw"
            style={{ objectFit: 'contain' }}
            quality={85}
            priority={selected === 0}
          />
          {lens.visible && (
            <div
              className="product-zoom-lens"
              aria-hidden="true"
              style={{
                left: lens.x - LENS_SIZE / 2,
                top: lens.y - LENS_SIZE / 2,
                width: LENS_SIZE,
                height: LENS_SIZE,
                backgroundImage: `url(${mainSrc})`,
                backgroundSize: `${lens.containerWidth * ZOOM}px ${lens.containerHeight * ZOOM}px`,
                backgroundPosition: `-${lens.x * ZOOM - LENS_SIZE / 2}px -${lens.y * ZOOM - LENS_SIZE / 2}px`,
              }}
            />
          )}
        </div>
        <div className="product-thumbnails" aria-label="Product media">
          {activeMedia.map((src, index) => <button className={selected === index ? 'is-active' : ''} key={`${src}-${index}`} onClick={() => setSelected(index)} aria-label={`Show image ${index + 1} for ${selectedColor || 'product'}`}>
            <Image src={src} alt="" fill sizes="112px" style={{ objectFit: 'cover' }} quality={70} />
          </button>)}
        </div>
      </div>
      <div className="product-info scroll-trigger animate--slide-in">
        <p className="eyebrow">Infamous Project · {language === 'es' ? 'Historia' : 'Story'} {product.storyNumber}</p>
        <h1>{product.title}</h1>
        {product.status !== 'available' && <p className="product-status">{strings.status[product.status]}</p>}
        {product.priceConfirmed ? (
          <p className="product-price">${displayPrice?.toFixed(2)} USD</p>
        ) : (
          <p className="product-price price-pending">{strings.story.pricePending}</p>
        )}
        {product.colors.length > 0 && <fieldset><legend>{strings.story.color}: <strong>{selectedColor}</strong></legend><div className="sold-options">{product.colors.map((color) => {
          const variant = product.colorVariants?.find((item) => item.name === color)
          const isSelected = selectedColor === color
          return <button className={isSelected ? 'is-selected swatch-only' : 'swatch-only'} key={color} type="button" aria-label={color} aria-pressed={isSelected} onClick={() => jumpToColor(color)} title={color}>
            <span className="color-swatch" style={{ '--swatch': variant?.swatch ?? '#888' } as CSSProperties} aria-hidden="true" />
          </button>
        })}</div></fieldset>}
        {product.sizes.length > 1 && <fieldset><legend>{strings.story.size}: <strong>{selectedSize}</strong></legend><div className="sold-options">{product.sizes.map((size) => {
          const isSelected = selectedSize === size
          return <button className={isSelected ? 'is-selected' : ''} key={size} type="button" aria-pressed={isSelected} onClick={() => setSelectedSize(size)}>
            {size}
          </button>
        })}</div></fieldset>}
        <label className="quantity-label" htmlFor="quantity">{strings.story.quantity}</label>
        <div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">-</button><input id="quantity" value={quantity} readOnly /><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button></div>
        {canBuy ? (
          <div className="product-actions">
            <button type="button" className="button button--add-to-cart" onClick={handleAddToCart}>
              {justAdded ? strings.story.addedToCart : strings.story.addToCart}
            </button>
            <a className="whatsapp-button" href={buildWhatsAppLink(product, selectedColor || undefined, displayPrice, language, selectedSize || undefined)} target="_blank" rel="noreferrer">
              {strings.story.buyWhatsapp}
            </a>
          </div>
        ) : (
          <span className="whatsapp-button whatsapp-button--disabled" aria-disabled="true">
            {strings.status[product.status]}
          </span>
        )}
        <p className="visually-hidden" role="status" aria-live="polite">{justAdded ? strings.story.addedToCart : ''}</p>

        <div className="story-narrative">
          <h2>{strings.story.construction} · {product.fabricLabel}</h2>
          <ul>
            {content.construction.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <p className="story-narrative__phrase">{content.phrase}</p>
          {content.narrative.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <h2>{strings.story.whatItRepresents}</h2>
          <p>{content.whatItRepresents}</p>
        </div>

        <div className="story-nav">
          <Link className="story-nav__link story-nav__link--prev" href={`/products/${previousProduct.slug}`}>
            <span>← {strings.story.previousStory}</span>
            <strong>{previousProduct.title}</strong>
          </Link>
          <Link className="story-nav__link story-nav__link--next" href={`/products/${nextProduct.slug}`}>
            <span>{strings.story.nextStory} →</span>
            <strong>{nextProduct.title}</strong>
          </Link>
        </div>
      </div>
    </section>
  )
}
