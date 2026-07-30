export type StoreProduct = {
  slug: string
  title: string
  price: number
  priceLabel: string
  available: boolean
  primaryImage: string
  hoverImage?: string
  media: string[]
  colors: string[]
  descriptionTitle: string
  description: string[]
}

export const products: StoreProduct[] = [
  {
    slug: 'every-shadow-hides-a-story',
    title: 'EVERY SHADOW HIDES A STORY',
    price: 25,
    priceLabel: 'From $25.00 USD',
    available: false,
    primaryImage: '/images/shopify/every-shadow-main.png',
    hoverImage: '/images/shopify/every-shadow-hover.png',
    media: [
      '/images/shopify/every-shadow-main.png',
      '/images/shopify/every-shadow-hover.png',
      '/images/story/photo-output.jpg',
      '/images/story/1A9A0344-9A78-40B6-82B9-7EF30F4AAE37.png',
      '/images/story/54EA95E3-3503-4E18-8A98-5B8D3EB02C98.jpg',
      '/images/story/821B0A6D-53C5-4C9D-9E7B-E43EACDCFF0D.png',
    ],
    colors: ['Black', 'Clear', 'Acid Wash', 'Steel'],
    descriptionTitle: 'T-shirt Oversized | 100% Cotton 200 gr',
    description: [
      'Every Shadow Hides a Story es la prenda de entrada de INFAMOUS PROJECT y la primera historia de la marca.',
      'Confeccionada en 100 % algodón de 200 gramos, ofrece una estructura cómoda, una caída firme y una sensación resistente para el uso diario. En el pecho incorpora el logotipo INFAMOUS PROJECT con un acabado de 3D en relieve, aportando profundidad y presencia sin romper la estética minimalista del frente.',
      'Bajo el concepto Every Shadow Hides a History, esta camiseta oversized representa los procesos personales que se construyen en silencio y terminan demostrando su valor con hechos. Su estampado posterior agresivo y de gran formato desarrolla el mensaje: Silent Empire — Built in the Shadows, Proven in the Light.',
      'Una pieza diseñada para expresar fuerza, presencia y todo aquello que nace en las sombras antes de probarse en la luz.',
    ],
  },
  {
    slug: 'no-mercy-for-weak-visions',
    title: 'NO MERCY FOR WEAK VISIONS',
    price: 45,
    priceLabel: '$45.00 USD',
    available: false,
    primaryImage: '/images/shopify/no-mercy-main.jpg',
    media: [
      '/images/shopify/no-mercy-main.jpg',
      '/images/story/7384EB4D-91F7-44E8-A56B-BF1336F6F162.jpg',
      '/images/story/AEF75A06-AF6D-4711-A1E5-AD3F5FB2BD67.jpg',
      '/images/story/5DD0FE54-6871-4EC6-8205-07FEDC9D8B64.png',
      '/images/story/E37771FD-4D85-457E-80A8-38C2A6D13EB1.png',
    ],
    colors: [],
    descriptionTitle: 'Cotton Interlock 320 gr',
    description: [
      'El conjunto está compuesto por una camiseta oversized y una bermuda confeccionadas en interlock pesado de 320 gramos, un tejido de alto gramaje que aporta estructura, cuerpo y una caída firme.',
      'No Mercy For Weak Visions representa la determinación de avanzar sin pedir aprobación y sin permitir que las opiniones externas definan el futuro.',
      'For the ones who never asked for approval, never gave life to weak visions, and never let the noise control their future.',
      'No approval. No weak visions. No control from the noise.',
    ],
  },
]

export const referenceImages = [
  '/images/story/2BE1729C-E9E7-4D17-AE85-AD32204BC224.jpg',
  '/images/story/54EA95E3-3503-4E18-8A98-5B8D3EB02C98.jpg',
  '/images/story/7384EB4D-91F7-44E8-A56B-BF1336F6F162.jpg',
  '/images/story/7715701D-9327-4728-BC7B-27DDC1749863.jpg',
  '/images/story/AEF75A06-AF6D-4711-A1E5-AD3F5FB2BD67.jpg',
]
