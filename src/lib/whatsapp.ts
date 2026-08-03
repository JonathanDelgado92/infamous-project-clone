import type { CartLine } from './cart-context'

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '593962393863'

export type OrderDetails = {
  name: string
  phone: string
  city: string
  address: string
  reference?: string
  comment?: string
}

export function buildCartWhatsAppLink(cartLines: CartLine[], details?: OrderDetails) {
  const total = cartLines.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const header = 'Hola, quiero confirmar el siguiente pedido en INFAMOUS PROJECT:'

  const itemLines = cartLines.flatMap((item) => {
    const subtotal = item.quantity * item.price
    return [
      '',
      `Historia ${item.storyNumber} — ${item.title}`,
      item.color ? `Color: ${item.color}` : null,
      item.size ? `Talla: ${item.size}` : null,
      `Cantidad: ${item.quantity}`,
      `Precio unitario: $${item.price.toFixed(2)}`,
      `Subtotal: $${subtotal.toFixed(2)}`,
    ]
  })

  const totalLine = `Total estimado: $${total.toFixed(2)} USD`

  const isOutsideQuito = details != null && details.city.trim().toLowerCase() !== 'quito'

  const detailLines = details
    ? [
        '',
        `Nombre: ${details.name}`,
        `Teléfono: ${details.phone}`,
        `Ciudad: ${details.city}`,
        `Dirección de envío: ${details.address}`,
        details.reference ? `Referencia: ${details.reference}` : null,
        isOutsideQuito ? 'Envío fuera de Quito: costo adicional a confirmar' : null,
        details.comment ? `Comentario: ${details.comment}` : null,
      ]
    : []

  const closing = '¿Me ayudan a confirmar disponibilidad, costo de envío y forma de pago?'

  const message = [header, ...itemLines, '', totalLine, ...detailLines, '', closing].filter((line) => line !== null).join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
