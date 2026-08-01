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
    announcement: 'EDICIONES LIMITADAS. HISTORIAS EN CADA PIEZA. INFAMOUS YA ESTÁ AQUÍ.',
    hero: {
      subtitle: 'No lanzamos ropa. Liberamos historias',
      title: 'DESTACA. HAZTE INFAMOUS',
      cta: 'EXPLORAR LAS HISTORIAS',
    },
    marquee: {
      primary: ['NO ES HYPE. ES LEGADO', 'EDICIÓN LIMITADA', 'SIN MEDIOCRIDAD', 'BIENVENIDO A LA TIENDA'],
      secondary: ['EDICIÓN LIMITADA', '☯', 'PIEZAS CON CARÁCTER', '☯', 'ÍCONOS DEL FUTURO', '☯'],
    },
    featured: {
      title: 'DISEÑADO PARA ROMPER ESQUEMAS',
      description: 'PIEZAS DE LUJO PARA EL DISRUPTOR MODERNO. CONFECCIÓN DE PRECISIÓN QUE DESAFÍA LO CONVENCIONAL Y REDEFINE LA PRESENCIA. ESTO NO ES SOLO MODA—ES UNA DECLARACIÓN.',
    },
    founder: {
      caption: 'CONOCE AL FUNDADOR',
      title: 'LA VISIÓN DETRÁS DE INFAMOUS',
      text: 'INFAMOUS FUE CREADO PARA QUIENES SE MUEVEN DIFERENTE. CADA PIEZA ESTÁ CONFECCIONADA CON PRECISIÓN, PODER Y PRESENCIA—UN REFLEJO DE INDIVIDUALIDAD Y CARÁCTER. ESTO NO ES SOLO MODA. ES UNA DECLARACIÓN.',
      cta: 'CONOCER MÁS',
    },
    movement: {
      title: 'MOVIMIENTO EN FORMA',
      description: 'LA MODA NO ES ESTÁTICA—SE MUEVE, FLUYE Y EXIGE ATENCIÓN. OBSERVA INFAMOUS EN MOVIMIENTO—SILUETAS AUDACES, DRAPEADO ESTRUCTURADO Y PODER SIN ESFUERZO, CAPTURADO EN CADA CUADRO.',
      autoplay: 'REPRODUCCIÓN AUTOMÁTICA · DESLIZA PARA EXPLORAR',
      swipe: 'DESLIZA PARA EXPLORAR',
    },
    testimonials: {
      title: 'LO QUE DICEN',
      description: 'ESTILO REAL. IMPACTO REAL. INFAMOUS NO ES SOLO ROPA—ES UNA DECLARACIÓN. DESCUBRE LO QUE OPINAN NUESTROS CLIENTES.',
      verified: 'Cliente verificado',
      items: [
        { quote: 'LA ESTRUCTURA. EL CORTE. LA PRESENCIA. LAS PIEZAS DE INFAMOUS SON ÚNICAS—PODER PURO EN FORMA DE TELA.', author: 'JORDAN M.' },
        { quote: 'CADA DETALLE SE SIENTE INTENCIONAL. DESDE LA CONFECCIÓN HASTA LAS TELAS, ESTA MARCA ESTÁ CONSTRUIDA DIFERENTE.', author: 'ALEXIS T.' },
        { quote: 'EDICIÓN LIMITADA SIGNIFICA ALGO AQUÍ. COMPRÉ LA PIEZA ARCHITECTURAL KIMONO, Y CADA VEZ QUE LA USO, LA GENTE PREGUNTA DE DÓNDE ES.', author: 'MARCUS R.' },
      ],
    },
    newsletter: {
      title: 'ÚNETE AL CÍRCULO INFAMOUS',
      subtitle: 'PARA LANZAMIENTOS EXCLUSIVOS Y ACCESO ANTICIPADO',
      placeholder: 'Correo electrónico',
      thanks: '¡Gracias por suscribirte!',
    },
    newsletterPopup: {
      title: 'ADELÁNTATE—OBTÉN 10% DE DESCUENTO',
      text: 'LANZAMIENTOS LIMITADOS. DROPS EXCLUSIVOS. ACCESO ANTICIPADO. ÚNETE AL CÍRCULO INFAMOUS Y OBTÉN 10% EN TU PRIMERA ORDEN.',
      thanks: 'Gracias por suscribirte.',
      legal: 'Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad.',
    },
    secondBanner: {
      title: 'ADELÁNTATE AL DROP',
      text: 'LANZAMIENTOS LIMITADOS. DROPS EXCLUSIVOS. ACCESO ANTICIPADO. LAS PIEZAS INFAMOUS NO ESPERAN—Y TÚ TAMPOCO DEBERÍAS.',
      cta: 'COMPRAR AHORA',
    },
    instagram: 'SÍGUENOS EN INSTAGRAM',
    collection: {
      sortBy: 'Ordenar por',
      featured: 'Destacados',
      priceLow: 'Precio, menor a mayor',
      priceHigh: 'Precio, mayor a menor',
      products: 'productos',
    },
    contact: {
      title: 'CONECTA CON INFAMOUS',
      info: 'INFORMACIÓN DE CONTACTO',
      infoText: 'Para preguntas sobre productos, pedidos o la marca, usa el formulario y nuestro equipo te responderá.',
      formTitle: 'FORMULARIO DE CONTACTO',
      thanks: 'Gracias por contactarnos. Te responderemos lo antes posible.',
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Número de teléfono',
      comment: 'Comentario',
      send: 'Enviar',
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
    announcement: 'LIMITED RELEASES. STORIES IN EVERY PIECE. INFAMOUS IS NOW LIVE.',
    hero: {
      subtitle: 'We don\'t drop clothes. We release stories',
      title: 'STAND OUT. STAY INFAMOUS',
      cta: 'SHOP THE STORIES',
    },
    marquee: {
      primary: ['NOT MADE FOR HYPE. MADE FOR LEGACY', 'LIMITED EDITION', 'NO WEAK SH!T', 'WELCOME TO STORE'],
      secondary: ['LIMITED EDITION', '☯', 'STATEMENT PIECES', '☯', 'FUTURE ICONS', '☯'],
    },
    featured: {
      title: 'DESIGNED TO DISRUPT',
      description: 'LUXURY STAPLES FOR THE MODERN DISRUPTOR. PRECISION-TAILORED PIECES THAT BREAK CONVENTION AND REDEFINE PRESENCE. THIS ISN\'T JUST FASHION—IT\'S A STATEMENT.',
    },
    founder: {
      caption: 'MEET THE FOUNDER',
      title: 'THE VISION BEHIND INFAMOUS',
      text: 'INFAMOUS WAS CREATED FOR THOSE WHO MOVE DIFFERENTLY. EVERY PIECE IS CRAFTED WITH PRECISION, POWER, AND PRESENCE—A REFLECTION OF INDIVIDUALITY AND EDGE. THIS ISN\'T JUST FASHION. IT\'S A STATEMENT.',
      cta: 'LEARN MORE',
    },
    movement: {
      title: 'MOVEMENT IN FORM',
      description: 'FASHION ISN\'T STATIC—IT MOVES, FLOWS, AND COMMANDS ATTENTION. WATCH INFAMOUS IN MOTION—BOLD SILHOUETTES, STRUCTURED DRAPING, AND EFFORTLESS POWER, CAPTURED IN EVERY FRAME.',
      autoplay: 'AUTO-PLAYING · DRAG OR SWIPE TO EXPLORE',
      swipe: 'DRAG OR SWIPE TO EXPLORE',
    },
    testimonials: {
      title: 'WHAT THEY\'RE SAYING',
      description: 'REAL STYLE. REAL IMPACT. INFAMOUS ISN\'T JUST CLOTHING—IT\'S A STATEMENT. SEE WHAT OUR CUSTOMERS HAVE TO SAY.',
      verified: 'Verified Customer',
      items: [
        { quote: 'THE STRUCTURE. THE FIT. THE PRESENCE. INFAMOUS PIECES ARE UNLIKE ANYTHING ELSE—PURE POWER IN FABRIC FORM.', author: 'JORDAN M.' },
        { quote: 'EVERY DETAIL FEELS INTENTIONAL. FROM THE TAILORING TO THE FABRICS, THIS BRAND IS BUILT DIFFERENTLY.', author: 'ALEXIS T.' },
        { quote: 'LIMITED EDITION MEANS SOMETHING HERE. I BOUGHT THE ARCHITECTURAL KIMONO, AND EVERY TIME I WEAR IT, PEOPLE ASK WHERE IT\'S FROM.', author: 'MARCUS R.' },
      ],
    },
    newsletter: {
      title: 'JOIN THE INFAMOUS CIRCLE',
      subtitle: 'FOR EXCLUSIVE DROPS & EARLY ACCESS',
      placeholder: 'Email',
      thanks: 'Thank you for subscribing!',
    },
    newsletterPopup: {
      title: 'STAY AHEAD—GET 10% OFF',
      text: 'LIMITED RELEASES. EXCLUSIVE DROPS. EARLY ACCESS. JOIN THE INFAMOUS CIRCLE AND GET 10% OFF YOUR FIRST ORDER.',
      thanks: 'Thank you for subscribing.',
      legal: 'By signing up for email, you agree to our Terms of Service and Privacy Policy.',
    },
    secondBanner: {
      title: 'STAY AHEAD OF THE DROP',
      text: 'LIMITED RELEASES. EXCLUSIVE DROPS. EARLY ACCESS. INFAMOUS PIECES DON\'T WAIT—AND NEITHER SHOULD YOU.',
      cta: 'SHOP NOW',
    },
    instagram: 'FOLLOW US ON INSTAGRAM',
    collection: {
      sortBy: 'Sort by',
      featured: 'Featured',
      priceLow: 'Price, low to high',
      priceHigh: 'Price, high to low',
      products: 'products',
    },
    contact: {
      title: 'CONNECT WITH INFAMOUS',
      info: 'CONTACT INFORMATION',
      infoText: 'For questions about products, orders, or the brand, use the form and our team will get back to you.',
      formTitle: 'CONTACT FORM',
      thanks: 'Thanks for contacting us. We\'ll get back to you as soon as possible.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone number',
      comment: 'Comment',
      send: 'Send',
    },
  },
} as const

export function t(language: Language) {
  return dictionary[language]
}
