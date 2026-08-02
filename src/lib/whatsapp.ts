import type { StoreProduct } from './store-data'
import type { CartLine } from './cart-context'
import type { Language } from './i18n'

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '593962393863'

export function buildWhatsAppLink(product: StoreProduct, color?: string, price?: number | null, language: Language = 'es') {
  const displayPrice = price ?? product.price
  const lines =
    language === 'es'
      ? [
          `Hola, quiero consultar disponibilidad de:`,
          `Historia ${product.storyNumber} · ${product.title}`,
          color ? `Color: ${color}` : null,
          product.priceConfirmed && displayPrice != null ? `Precio: $${Number(displayPrice).toFixed(2)} USD` : 'Precio: a confirmar',
        ]
      : [
          `Hi, I'd like to check availability for:`,
          `Story ${product.storyNumber} · ${product.title}`,
          color ? `Color: ${color}` : null,
          product.priceConfirmed && displayPrice != null ? `Price: $${Number(displayPrice).toFixed(2)} USD` : 'Price: pending confirmation',
        ]

  const message = lines.filter(Boolean).join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type OrderDetails = {
  name: string
  city: string
  delivery: string
  comment?: string
}

export function buildCartWhatsAppLink(cartLines: CartLine[], language: Language = 'es', details?: OrderDetails) {
  const total = cartLines.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const header = language === 'es' ? 'Hola, quiero confirmar el siguiente pedido en INFAMOUS PROJECT:' : 'Hi, I would like to confirm the following order at INFAMOUS PROJECT:'

  const itemLines = cartLines.flatMap((item) => {
    const subtotal = item.quantity * item.price
    return language === 'es'
      ? [
          '',
          `Historia ${item.storyNumber} — ${item.title}`,
          item.color ? `Color: ${item.color}` : null,
          `Cantidad: ${item.quantity}`,
          `Precio unitario: $${item.price.toFixed(2)}`,
          `Subtotal: $${subtotal.toFixed(2)}`,
        ]
      : [
          '',
          `Story ${item.storyNumber} — ${item.title}`,
          item.color ? `Color: ${item.color}` : null,
          `Quantity: ${item.quantity}`,
          `Unit price: $${item.price.toFixed(2)}`,
          `Subtotal: $${subtotal.toFixed(2)}`,
        ]
  })

  const totalLine = language === 'es' ? `Total estimado: $${total.toFixed(2)} USD` : `Estimated total: $${total.toFixed(2)} USD`

  const detailLines = details
    ? language === 'es'
      ? ['', `Nombre: ${details.name}`, `Ciudad: ${details.city}`, `Entrega: ${details.delivery}`, details.comment ? `Comentario: ${details.comment}` : null]
      : ['', `Name: ${details.name}`, `City: ${details.city}`, `Delivery: ${details.delivery}`, details.comment ? `Comment: ${details.comment}` : null]
    : []

  const closing =
    language === 'es'
      ? '¿Me ayudan a confirmar disponibilidad, costo de envío y forma de pago?'
      : 'Can you help me confirm availability, shipping cost, and payment method?'

  const message = [header, ...itemLines, '', totalLine, ...detailLines, '', closing].filter((line) => line !== null).join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
