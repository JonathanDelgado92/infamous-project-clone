export type Language = 'es' | 'en'

export const languages: Language[] = ['es', 'en']

export const dictionary = {
  es: {
    nav: { catalog: 'Catálogo' },
    story: {
      whatItRepresents: 'A qué hace referencia',
      construction: 'Confección y detalles',
      priceLabel: 'Precio',
      pricePending: 'Precio a confirmar',
      color: 'Color',
      size: 'Talla',
      quantity: 'Cantidad',
      nextStory: 'Siguiente historia',
      previousStory: 'Historia anterior',
      shop: 'COMPRAR',
      shopAll: 'VER TODO',
      addToCart: 'Añadir al carrito',
      addedToCart: 'Añadido al carrito',
    },
    footer: {
      whatsapp: 'Contáctanos por WhatsApp',
      sizeGuide: 'Guía de tallas',
      shipping: 'Envíos',
      exchanges: 'Cambios',
      productCare: 'Cuidado de la prenda',
      faq: 'Preguntas frecuentes',
      privacy: 'Política de Privacidad',
    },
    policy: {
      comingSoonText: 'Estamos preparando esta información. Mientras tanto, escríbenos por WhatsApp y te ayudamos directamente.',
      contactCta: 'Contactar por WhatsApp',
    },
    privacyPolicy: {
      title: 'Política de Privacidad',
      effectiveDate: 'Vigente desde el 2 de agosto de 2026',
      sections: [
        {
          heading: '1. Responsable del tratamiento',
          paragraphs: [
            'Hansem Argotty, quien opera comercialmente bajo la marca INFAMOUS PROJECT (RUC 1723046593001), es el responsable del tratamiento de los datos personales recopilados a través de este sitio web.',
          ],
        },
        {
          heading: '2. Datos que recopilamos',
          paragraphs: [
            'Correo electrónico, cuando te suscribes a nuestras novedades a través del formulario del sitio.',
            'Nombre, teléfono, ciudad y dirección de envío, cuando nos escribes por WhatsApp para confirmar un pedido. Estos datos se envían directamente a nuestro WhatsApp y no quedan almacenados en los servidores del sitio.',
          ],
        },
        {
          heading: '3. Finalidad del tratamiento',
          paragraphs: [
            'Enviarte novedades, nuevas historias, lanzamientos y ofertas por correo electrónico, únicamente si diste tu consentimiento expreso mediante el formulario de suscripción.',
            'Coordinar contigo la disponibilidad, el costo de envío y la forma de pago de tu pedido.',
          ],
        },
        {
          heading: '4. Doble confirmación de tu suscripción',
          paragraphs: [
            'Cuando te suscribes, te enviamos un correo electrónico para confirmar que realmente quieres recibir novedades. Solo quedas activo en nuestra lista después de confirmar. Puedes darte de baja en cualquier momento desde el enlace incluido en cada correo que te enviemos.',
          ],
        },
        {
          heading: '5. Proveedores que procesan tus datos',
          paragraphs: [
            'Usamos Brevo para el envío de correos y la gestión de la lista de suscriptores, y una hoja de cálculo interna (Google Sheets) como respaldo operativo de esa misma información. Estos proveedores procesan tus datos únicamente para los fines descritos en esta política y no los utilizan con otros propósitos.',
          ],
        },
        {
          heading: '6. Cookies y almacenamiento en tu navegador',
          paragraphs: [
            'Este sitio no utiliza cookies de rastreo ni herramientas de analítica de terceros. Guardamos dos datos exclusivamente en tu propio navegador (localStorage), necesarios para el funcionamiento del sitio: tu idioma preferido y el contenido de tu carrito de compras.',
            'Ninguno de estos datos se comparte ni se envía a nuestros servidores. Puedes borrarlos en cualquier momento desde la configuración de tu navegador.',
          ],
        },
        {
          heading: '7. Seguridad',
          paragraphs: [
            'Aplicamos medidas razonables para proteger tus datos, incluyendo el enmascaramiento de direcciones IP y correos electrónicos en nuestros registros internos, y límites de frecuencia para prevenir el uso automatizado (bots) de nuestros formularios.',
          ],
        },
        {
          heading: '8. Tus derechos',
          paragraphs: [
            'Puedes solicitar acceso, rectificación, actualización o eliminación de tus datos personales, así como retirar tu consentimiento en cualquier momento, escribiéndonos a infamousproject.store@gmail.com.',
          ],
        },
        {
          heading: '9. Menores de edad',
          paragraphs: [
            'Nuestros productos y comunicaciones están dirigidos a personas mayores de edad. Si eres menor de edad, te pedimos usar este sitio con la supervisión de un adulto responsable.',
          ],
        },
        {
          heading: '10. Cambios a esta política',
          paragraphs: [
            'Podemos actualizar esta política cuando existan cambios legales, técnicos o relacionados con el funcionamiento del sitio web. La fecha de vigencia indicada al inicio de este documento corresponde a la versión más reciente.',
          ],
        },
      ],
      contactNote: 'Para consultas o para ejercer tus derechos sobre tus datos personales, escríbenos a',
    },
    subscriptionConfirmed: {
      title: 'SUSCRIPCIÓN CONFIRMADA',
      message: 'Ya formas parte de INFAMOUS PROJECT. Te avisaremos apenas haya nuevas historias.',
      cta: 'Ver el catálogo',
    },
    unsubscribed: {
      title: 'TE DIMOS DE BAJA',
      message: 'Ya no recibirás más correos de INFAMOUS PROJECT. Puedes volver a suscribirte cuando quieras.',
      cta: 'Volver al inicio',
    },
    cart: {
      title: 'TU CARRITO',
      empty: 'Tu carrito está vacío',
      continueShopping: 'Seguir comprando',
      remove: 'Eliminar',
      quantity: 'Cantidad',
      subtotal: 'Subtotal',
      total: 'Total estimado',
      shippingNote: 'El total no incluye el costo de envío.',
      sendWhatsapp: 'Enviar pedido por WhatsApp',
      itemsCount: 'artículos',
      formTitle: 'DATOS PARA CONFIRMAR TU PEDIDO',
      name: 'Nombre',
      phone: 'Teléfono / WhatsApp',
      city: 'Ciudad',
      address: 'Dirección de envío',
      reference: 'Punto de referencia (opcional)',
      comment: 'Comentario (opcional)',
      requiredNote: 'Completa nombre, teléfono, ciudad y dirección para enviar tu pedido.',
    },
    announcement: 'EDICIONES LIMITADAS. HISTORIAS EN CADA PIEZA. INFAMOUS YA ESTÁ AQUÍ.',
    hero: {
      cta: 'EXPLORAR LAS HISTORIAS',
    },
    founder: {
      caption: 'CONOCE AL FUNDADOR',
      title: 'LA MENTE DETRÁS DE INFAMOUS',
      text: 'Infamous no fue creado para quienes persiguen atención, sino para aquellos que trabajan en silencio y dejan que sus resultados sean tan grandes que resulte imposible ignorarlos. No viven por los likes ni buscan ser aceptados. Visten oversized, pero caminan con la presencia de alguien a quien el mundo le debe algo. Se construyen en las sombras, avanzan sin pedir permiso y crean un legado tan poderoso que, al final, todos terminan hablando de ellos.',
    },
    editorial: {
      eyebrowTop: 'ESTO NO ES UN DROP.',
      eyebrowBottom: 'ES UNA HISTORIA.',
      bodyPara1: 'En INFAMOUS PROJECT, cada pieza nace de una idea, una mentalidad y un capítulo que vale la pena contar. Cada mensaje, tela, color, estampado y detalle de confección está diseñado intencionalmente para formar parte de una narrativa más grande.',
      bodyPara2: 'Creamos para quienes se construyen en silencio, avanzan sin necesitar aprobación y llevan consigo una presencia que se vuelve imposible de ignorar.',
    },
    newsletter: {
      title: 'ÚNETE A INFAMOUS PROJECT',
      subtitle: 'Entérate de las nuevas historias apenas estén listas.',
      placeholder: 'Correo electrónico',
      consentBefore: 'Autorizo a INFAMOUS PROJECT a tratar mi correo electrónico para enviarme novedades, nuevas historias, lanzamientos y ofertas. He sido informado mediante la',
      consentLinkText: 'Política de Privacidad',
      consentAfter: 'y puedo retirar mi consentimiento en cualquier momento.',
      loading: 'PROCESANDO...',
      pendingTitle: 'REVISA TU CORREO',
      pendingMessage: 'Te enviamos un enlace para confirmar que quieres formar parte de INFAMOUS PROJECT.',
      alreadyPendingTitle: 'REVISA TU BANDEJA DE ENTRADA',
      alreadyPendingMessage: 'Ya enviamos un enlace de confirmación a este correo.',
      alreadySubscribedTitle: "YOU'RE ALREADY PART OF THE STORY",
      alreadySubscribedMessage: 'Este correo ya forma parte de INFAMOUS PROJECT.',
      errorTitle: 'NO PUDIMOS COMPLETARLO',
      errorMessage: 'Revisa el correo o inténtalo nuevamente.',
      retry: 'Intentar de nuevo',
    },
    instagram: 'SÍGUENOS EN INSTAGRAM',
    collection: {
      title: 'LAS HISTORIAS',
      products: 'productos',
    },
    status: {
      available: 'Disponible',
      'coming-soon': 'Próximamente',
      'sold-out': 'Agotado',
      archived: 'Archivado',
    },
  },
  en: {
    nav: { catalog: 'Catalog' },
    story: {
      whatItRepresents: 'What it represents',
      construction: 'Construction and details',
      priceLabel: 'Price',
      pricePending: 'Price pending confirmation',
      color: 'Color',
      size: 'Size',
      quantity: 'Quantity',
      nextStory: 'Next story',
      previousStory: 'Previous story',
      shop: 'SHOP',
      shopAll: 'SHOP ALL',
      addToCart: 'Add to cart',
      addedToCart: 'Added to cart',
    },
    footer: {
      whatsapp: 'Contact us on WhatsApp',
      sizeGuide: 'Size guide',
      shipping: 'Shipping',
      exchanges: 'Exchanges',
      productCare: 'Product care',
      faq: 'FAQ',
      privacy: 'Privacy Policy',
    },
    policy: {
      comingSoonText: "We're putting this information together. In the meantime, reach out on WhatsApp and we'll help you directly.",
      contactCta: 'Contact us on WhatsApp',
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      effectiveDate: 'Effective August 2, 2026',
      sections: [
        {
          heading: '1. Data controller',
          paragraphs: [
            'Hansem Argotty, operating commercially under the brand INFAMOUS PROJECT (RUC 1723046593001, Ecuador), is the controller responsible for the personal data collected through this website.',
          ],
        },
        {
          heading: '2. Data we collect',
          paragraphs: [
            'Email address, when you subscribe to our updates through the form on this site.',
            'Name, phone number, city and shipping address, when you message us on WhatsApp to confirm an order. This information is sent directly to our WhatsApp and is not stored on this site’s servers.',
          ],
        },
        {
          heading: '3. Purpose of processing',
          paragraphs: [
            'To send you updates, new stories, launches and offers by email, only if you gave your express consent through the subscription form.',
            'To coordinate availability, shipping cost and payment method for your order.',
          ],
        },
        {
          heading: '4. Double opt-in confirmation',
          paragraphs: [
            'When you subscribe, we send you an email to confirm you actually want to receive updates. You only become active on our list after confirming. You can unsubscribe at any time using the link included in every email we send.',
          ],
        },
        {
          heading: '5. Providers that process your data',
          paragraphs: [
            'We use Brevo to send emails and manage our subscriber list, and an internal spreadsheet (Google Sheets) as an operational backup of that same information. These providers process your data solely for the purposes described in this policy and do not use it for any other purpose.',
          ],
        },
        {
          heading: '6. Cookies and browser storage',
          paragraphs: [
            'This site does not use tracking cookies or third-party analytics tools. We store two pieces of information exclusively in your own browser (localStorage), required for the site to work: your preferred language and the contents of your shopping cart.',
            'None of this data is shared or sent to our servers. You can clear it at any time from your browser settings.',
          ],
        },
        {
          heading: '7. Security',
          paragraphs: [
            'We apply reasonable measures to protect your data, including masking IP addresses and email addresses in our internal logs, and rate limits to prevent automated (bot) abuse of our forms.',
          ],
        },
        {
          heading: '8. Your rights',
          paragraphs: [
            'You can request access, correction, update or deletion of your personal data, and withdraw your consent at any time, by writing to infamousproject.store@gmail.com.',
          ],
        },
        {
          heading: '9. Minors',
          paragraphs: [
            'Our products and communications are intended for adults. If you are a minor, please use this site under the supervision of a responsible adult.',
          ],
        },
        {
          heading: '10. Changes to this policy',
          paragraphs: [
            'We may update this policy when there are legal, technical or operational changes to the website. The effective date shown at the top of this document corresponds to the most recent version.',
          ],
        },
      ],
      contactNote: 'For questions or to exercise your rights over your personal data, write to us at',
    },
    subscriptionConfirmed: {
      title: 'SUBSCRIPTION CONFIRMED',
      message: "You're officially part of INFAMOUS PROJECT. We'll let you know as soon as there are new stories.",
      cta: 'Shop the catalog',
    },
    unsubscribed: {
      title: "YOU'VE BEEN UNSUBSCRIBED",
      message: "You won't receive any more emails from INFAMOUS PROJECT. You can subscribe again anytime.",
      cta: 'Back to home',
    },
    cart: {
      title: 'YOUR CART',
      empty: 'Your cart is empty',
      continueShopping: 'Continue shopping',
      remove: 'Remove',
      quantity: 'Quantity',
      subtotal: 'Subtotal',
      total: 'Estimated total',
      shippingNote: 'Total does not include shipping cost.',
      sendWhatsapp: 'Send order via WhatsApp',
      itemsCount: 'items',
      formTitle: 'DETAILS TO CONFIRM YOUR ORDER',
      name: 'Name',
      phone: 'Phone / WhatsApp',
      city: 'City',
      address: 'Shipping address',
      reference: 'Reference point (optional)',
      comment: 'Comment (optional)',
      requiredNote: 'Fill in name, phone, city and address to send your order.',
    },
    announcement: 'LIMITED RELEASES. STORIES IN EVERY PIECE. INFAMOUS IS NOW LIVE.',
    hero: {
      cta: 'SHOP THE STORIES',
    },
    founder: {
      caption: 'MEET THE FOUNDER',
      title: 'THE MIND BEHIND INFAMOUS',
      text: "Infamous wasn't created for those chasing attention, but for those who work in silence and let their results grow so large they become impossible to ignore. They don't live for likes or seek approval. They dress oversized, yet carry themselves with the presence of someone the world owes something to. They build in the shadows, move without asking permission, and create a legacy so powerful that, in the end, everyone ends up talking about them.",
    },
    editorial: {
      eyebrowTop: 'THIS IS NOT A DROP.',
      eyebrowBottom: 'THIS IS A STORY.',
      bodyPara1: 'At INFAMOUS PROJECT, every piece begins with an idea, a mindset and a chapter worth telling. Every message, fabric, color, print and construction detail is intentionally designed to become part of a larger narrative.',
      bodyPara2: 'We create for those who build in silence, move without approval and carry themselves with a presence that becomes impossible to ignore.',
    },
    newsletter: {
      title: 'JOIN INFAMOUS PROJECT',
      subtitle: 'Find out about new stories as soon as they drop.',
      placeholder: 'Email',
      consentBefore: 'I authorize INFAMOUS PROJECT to process my email address to send me news, new stories, launches and offers. I have been informed through the',
      consentLinkText: 'Privacy Policy',
      consentAfter: 'and may withdraw my consent at any time.',
      loading: 'PROCESSING...',
      pendingTitle: 'CHECK YOUR EMAIL',
      pendingMessage: "We sent you a link to confirm you want to be part of INFAMOUS PROJECT.",
      alreadyPendingTitle: 'CHECK YOUR INBOX',
      alreadyPendingMessage: 'We already sent a confirmation link to this email.',
      alreadySubscribedTitle: "YOU'RE ALREADY PART OF THE STORY",
      alreadySubscribedMessage: 'This email is already part of INFAMOUS PROJECT.',
      errorTitle: "WE COULDN'T COMPLETE THIS",
      errorMessage: 'Check the email or try again.',
      retry: 'Try again',
    },
    instagram: 'FOLLOW US ON INSTAGRAM',
    collection: {
      title: 'THE STORIES',
      products: 'products',
    },
    status: {
      available: 'Available',
      'coming-soon': 'Coming soon',
      'sold-out': 'Sold out',
      archived: 'Archived',
    },
  },
} as const

export function t(language: Language) {
  return dictionary[language]
}
