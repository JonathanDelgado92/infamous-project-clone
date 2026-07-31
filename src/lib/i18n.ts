export type Language = 'es' | 'en'

export const languages: Language[] = ['es', 'en']

export const dictionary = {
  es: {
    nav: { home: 'Inicio', catalog: 'Catálogo', contact: 'Contacto' },
    story: {
      whatItRepresents: 'A qué hace referencia',
      construction: 'Confección y detalles',
      priceLabel: 'Precio',
      pricePending: 'Precio a confirmar',
      color: 'Color',
      quantity: 'Cantidad',
      buyWhatsapp: 'Comprar por WhatsApp',
      askAvailability: 'Consultar disponibilidad',
      nextStory: 'Siguiente historia',
      shop: 'COMPRAR',
      shopAll: 'VER TODO',
    },
    footer: {
      quickLinks: 'ENLACES',
      whatsapp: 'Contáctanos por WhatsApp',
    },
  },
  en: {
    nav: { home: 'Home', catalog: 'Catalog', contact: 'Contact' },
    story: {
      whatItRepresents: 'What it represents',
      construction: 'Construction and details',
      priceLabel: 'Price',
      pricePending: 'Price pending confirmation',
      color: 'Color',
      quantity: 'Quantity',
      buyWhatsapp: 'Buy through WhatsApp',
      askAvailability: 'Ask availability',
      nextStory: 'Next story',
      shop: 'SHOP',
      shopAll: 'SHOP ALL',
    },
    footer: {
      quickLinks: 'QUICK LINKS',
      whatsapp: 'Contact us on WhatsApp',
    },
  },
} as const

export function t(language: Language) {
  return dictionary[language]
}
