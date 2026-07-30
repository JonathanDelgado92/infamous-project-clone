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
    primaryImage: '/images/story/386FAE83-BC50-41B9-94E5-113A22817D1C.png',
    hoverImage: '/images/story/1A9A0344-9A78-40B6-82B9-7EF30F4AAE37.png',
    media: [
      '/images/story/386FAE83-BC50-41B9-94E5-113A22817D1C.png',
      '/images/story/1A9A0344-9A78-40B6-82B9-7EF30F4AAE37.png',
      '/images/story/31421B72-9C79-4978-8A41-93AEDF91B1AB.png',
      '/images/story/34A978F9-0808-42B0-87F6-7E9D3A000BC1.png',
      '/images/story/821B0A6D-53C5-4C9D-9E7B-E43EACDCFF0D.png',
      '/images/story/96448C35-8F8C-4BA8-A9DB-C630B7B9B3B5.png',
      '/images/story/BBDF1752-CCD6-44B9-BDD8-96B41A2553C0.png',
      '/images/story/BEC2F4D6-F900-4DCF-8553-C48FF16F5416.png',
      '/images/story/E3646497-A42C-4556-A5BB-D2F504CCD19B.png',
      '/images/story/E37771FD-4D85-457E-80A8-38C2A6D13EB1.png',
      '/images/story/E5911F41-E44A-4941-8840-F944E3A6CE76.png',
      '/images/story/EF3559EE-A9B2-498A-AD2F-5CDBFB1F26C2.png',
      '/images/story/5DD0FE54-6871-4EC6-8205-07FEDC9D8B64.png',
      '/images/story/photo-output.png',
      '/images/story/2BE1729C-E9E7-4D17-AE85-AD32204BC224.jpg',
      '/images/story/54EA95E3-3503-4E18-8A98-5B8D3EB02C98.jpg',
      '/images/story/5B3FF8DD-5516-4124-9E50-598F422FF339.jpg',
      '/images/story/7384EB4D-91F7-44E8-A56B-BF1336F6F162.jpg',
      '/images/story/7715701D-9327-4728-BC7B-27DDC1749863.jpg',
      '/images/story/9AF83EBE-2929-452B-821C-3266FBD5E55A.JPEG',
      '/images/story/AEF75A06-AF6D-4711-A1E5-AD3F5FB2BD67.jpg',
      '/images/story/CEEE0001-EFA7-48D4-834A-A7C5884CE9C1.jpg',
      '/images/story/E3646497-A42C-4556-A5BB-D2F504CCD19B-1.jpg',
      '/images/story/E3646497-A42C-4556-A5BB-D2F504CCD19B.jpg',
      '/images/story/FE5E2ADC-051C-49DC-B7A9-A92B0C410B6F.jpeg',
      '/images/story/IMG_5149.JPEG',
      '/images/story/IMG_5157.JPG',
      '/images/story/LOGO INFAMOUS.pdf.png',
      '/images/story/photo-output.jpg',
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
