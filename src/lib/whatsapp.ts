import type { StoreProduct } from './store-data'

export const WHATSAPP_NUMBER = '593962393863'

export function buildWhatsAppLink(product: StoreProduct, color?: string, price?: number | null) {
  const displayPrice = price ?? product.price
  const lines = [
    `Hola, quiero consultar disponibilidad de:`,
    `Historia ${product.storyNumber} · ${product.title}`,
    color ? `Color: ${color}` : null,
    product.priceConfirmed && displayPrice != null ? `Precio: $${Number(displayPrice).toFixed(2)} USD` : 'Precio: a confirmar',
  ]

  const message = lines.filter(Boolean).join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
