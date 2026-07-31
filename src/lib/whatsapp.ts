import type { Language } from './i18n'
import type { StoreProduct } from './store-data'

export const WHATSAPP_NUMBER = '593962393863'

export function buildWhatsAppLink(product: StoreProduct, language: Language, color?: string) {
  const lines = language === 'es'
    ? [
        `Hola, quiero consultar disponibilidad de:`,
        `Historia ${product.storyNumber} · ${product.title}`,
        color ? `Color: ${color}` : null,
        product.priceConfirmed ? `Precio: ${product.priceLabel}` : 'Precio: a confirmar',
      ]
    : [
        `Hi, I'd like to ask about availability for:`,
        `Story ${product.storyNumber} · ${product.title}`,
        color ? `Color: ${color}` : null,
        product.priceConfirmed ? `Price: ${product.priceLabel}` : 'Price: pending confirmation',
      ]

  const message = lines.filter(Boolean).join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
