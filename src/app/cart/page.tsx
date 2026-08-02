'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { StoreShell } from '@/components/StoreShell'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { buildCartWhatsAppLink } from '@/lib/whatsapp'

export default function CartPage() {
  const { strings, language } = useLanguage()
  const { lines, removeLine, setQuantity, totalUnits, totalPrice } = useCart()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [reference, setReference] = useState('')
  const [comment, setComment] = useState('')

  if (lines.length === 0) {
    return (
      <StoreShell>
        <section className="empty-state page-width">
          <h1>{strings.cart.empty}</h1>
          <Link className="button" href="/collections/all">{strings.cart.continueShopping}</Link>
        </section>
      </StoreShell>
    )
  }

  const canSend = name.trim().length > 0 && phone.trim().length > 0 && city.trim().length > 0 && address.trim().length > 0
  const whatsappHref = canSend
    ? buildCartWhatsAppLink(lines, language, { name, phone, city, address, reference: reference || undefined, comment: comment || undefined })
    : undefined

  return (
    <StoreShell>
      <section className="cart-page page-width">
        <h1>{strings.cart.title}</h1>
        <p className="cart-page__count">{totalUnits} {strings.cart.itemsCount}</p>
        <ul className="cart-lines">
          {lines.map((line) => (
            <li className="cart-line" key={line.key}>
              <div className="cart-line__media">
                <Image src={line.image} alt={line.title} fill sizes="120px" style={{ objectFit: 'cover' }} quality={70} />
              </div>
              <div className="cart-line__info">
                <p className="cart-line__title">{line.title}</p>
                {line.color && <p className="cart-line__color">{strings.story.color}: {line.color}</p>}
                <p className="cart-line__price">${line.price.toFixed(2)} USD</p>
                <div className="quantity">
                  <button onClick={() => setQuantity(line.key, line.quantity - 1)} disabled={line.quantity <= 1} aria-label="Decrease quantity">-</button>
                  <input value={line.quantity} readOnly aria-label={strings.cart.quantity} />
                  <button onClick={() => setQuantity(line.key, line.quantity + 1)} aria-label="Increase quantity">+</button>
                </div>
                <button type="button" className="cart-line__remove" onClick={() => removeLine(line.key)}>{strings.cart.remove}</button>
              </div>
              <p className="cart-line__subtotal">{strings.cart.subtotal}<br /><strong>${(line.price * line.quantity).toFixed(2)}</strong></p>
            </li>
          ))}
        </ul>

        <div className="cart-summary">
          <p className="cart-summary__total">{strings.cart.total}<strong>${totalPrice.toFixed(2)} USD</strong></p>
          <p className="cart-summary__note">{strings.cart.shippingNote}</p>

          <form className="cart-order-form" onSubmit={(event) => event.preventDefault()}>
            <h2>{strings.cart.formTitle}</h2>
            <label>
              {strings.cart.name}
              <input value={name} onChange={(event) => setName(event.target.value)} required />
            </label>
            <label>
              {strings.cart.phone}
              <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required />
            </label>
            <label>
              {strings.cart.city}
              <input value={city} onChange={(event) => setCity(event.target.value)} required />
            </label>
            <label>
              {strings.cart.address}
              <input value={address} onChange={(event) => setAddress(event.target.value)} required />
            </label>
            <label>
              {strings.cart.reference}
              <input value={reference} onChange={(event) => setReference(event.target.value)} />
            </label>
            <label>
              {strings.cart.comment}
              <textarea value={comment} onChange={(event) => setComment(event.target.value)} rows={3} />
            </label>
          </form>

          {canSend ? (
            <a className="whatsapp-button" href={whatsappHref} target="_blank" rel="noreferrer">
              {strings.cart.sendWhatsapp}
            </a>
          ) : (
            <>
              <span className="whatsapp-button whatsapp-button--disabled" aria-disabled="true">{strings.cart.sendWhatsapp}</span>
              <p className="cart-order-form__note">{strings.cart.requiredNote}</p>
            </>
          )}
          <Link className="cart-summary__continue" href="/collections/all">{strings.cart.continueShopping}</Link>
        </div>
      </section>
    </StoreShell>
  )
}
