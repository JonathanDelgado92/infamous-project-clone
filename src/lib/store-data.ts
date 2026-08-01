export type LocalizedStoryContent = {
  phrase: string
  narrative: string[]
  whatItRepresents: string
  construction: string[]
  keywords: string[]
}

export type StoreProduct = {
  slug: string
  storyNumber: string
  title: string
  fabricLabel: string
  price: number | null
  priceLabel: string
  priceConfirmed: boolean
  primaryImage: string
  hoverImage?: string
  media: string[]
  colors: string[]
  colorVariants?: {
    name: string
    swatch: string
    media: string[]
    price?: number
  }[]
  content: {
    es: LocalizedStoryContent
    en: LocalizedStoryContent
  }
}

export const products: StoreProduct[] = [
  {
    slug: 'every-shadow-hides-a-story',
    storyNumber: '001',
    title: 'EVERY SHADOW HIDES A STORY',
    fabricLabel: '100% Cotton, 200 g/m²',
    price: 25,
    priceLabel: 'From $25.00 USD',
    priceConfirmed: true,
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
      '/images/story/photo-output.jpg',
    ],
    colors: ['Black', 'Clear', 'Acid Wash', 'Steel'],
    colorVariants: [
      { name: 'Black', swatch: '#171717', media: ['/images/story/386FAE83-BC50-41B9-94E5-113A22817D1C.png', '/images/story/1A9A0344-9A78-40B6-82B9-7EF30F4AAE37.png', '/images/story/2BE1729C-E9E7-4D17-AE85-AD32204BC224.jpg'] },
      { name: 'Clear', swatch: '#f2f1ea', media: ['/images/story/7715701D-9327-4728-BC7B-27DDC1749863.jpg', '/images/story/2BE1729C-E9E7-4D17-AE85-AD32204BC224.jpg'] },
      { name: 'Acid Wash', swatch: '#a6a7a7', media: ['/images/story/5B3FF8DD-5516-4124-9E50-598F422FF339.jpg', '/images/story/2BE1729C-E9E7-4D17-AE85-AD32204BC224.jpg'], price: 30 },
      { name: 'Steel', swatch: '#577a83', media: ['/images/story/AEF75A06-AF6D-4711-A1E5-AD3F5FB2BD67.jpg', '/images/story/54EA95E3-3503-4E18-8A98-5B8D3EB02C98.jpg', '/images/story/7384EB4D-91F7-44E8-A56B-BF1336F6F162.jpg', '/images/story/CEEE0001-EFA7-48D4-834A-A7C5884CE9C1.jpg'] },
    ],
    content: {
      es: {
        phrase: 'Toda presencia visible comenzó con un proceso que nadie vio.',
        narrative: [
          'Every Shadow Hides a History es la historia que da origen a INFAMOUS PROJECT. Habla de la etapa anterior al reconocimiento: las horas silenciosas, las decisiones difíciles, la repetición, las dudas y la disciplina que se sostienen cuando todavía no existe una recompensa visible.',
          'Cada sombra esconde una historia porque detrás de cada resultado existe un proceso que rara vez se muestra completo. La oscuridad no representa derrota; representa el espacio en el que se construye la fuerza, la identidad y la preparación.',
          'Esta es la prenda principal de la marca porque resume su promesa: construirse en las sombras y demostrarse en la luz. Cuando llega el momento de ser visto, no hace falta explicar el camino; la presencia y los resultados hablan por sí mismos.',
        ],
        whatItRepresents: 'Representa a la persona que trabaja sin necesidad de aplausos, protege su proceso y entiende que el reconocimiento es una consecuencia, no el objetivo. Es el comienzo del proyecto y el capítulo que establece todo su lenguaje: sombra, historia, disciplina y luz.',
        construction: [
          'Silueta oversize, diseñada para una caída amplia y una presencia visual fuerte.',
          'Confección en 100% algodón de 200 g/m², con cuerpo suficiente para conservar la forma sin perder comodidad.',
          'Cuello estructurado y terminaciones limpias para acompañar la silueta oversize.',
          'Logo frontal INFAMOUS PROJECT aplicado mediante serigrafía 3D en alto relieve, con acabado táctil y sutil.',
          'Gráfica posterior de gran formato que cubre la espalda y convierte la historia en el elemento principal de la prenda.',
        ],
        keywords: ['origen', 'sombras', 'proceso', 'historia', 'disciplina silenciosa', 'resultados', 'luz'],
      },
      en: {
        phrase: 'Every visible presence began with a process no one saw.',
        narrative: [
          'Every Shadow Hides a History is the story that gives birth to INFAMOUS PROJECT. It speaks about the stage before recognition: the silent hours, difficult decisions, repetition, doubt, and discipline sustained when no visible reward exists yet.',
          'Every shadow hides a history because behind every result lies a process that is rarely shown in full. Darkness does not represent defeat; it represents the space where strength, identity, and preparation are built.',
          "This is the brand's central garment because it summarizes its promise: to build in the shadows and prove itself in the light. When the moment comes to be seen, there is no need to explain the journey; presence and results speak for themselves.",
        ],
        whatItRepresents: "It represents the person who works without needing applause, protects their process, and understands that recognition is a consequence rather than the objective. It is the beginning of the project and the chapter that establishes its entire language: shadow, history, discipline, and light.",
        construction: [
          'Oversized silhouette designed for a wide drape and strong visual presence.',
          'Made from 100% cotton at 200 g/m², with enough body to retain its shape without sacrificing comfort.',
          'Structured collar and clean finishes that support the oversized silhouette.',
          'Front INFAMOUS PROJECT logo applied through raised 3D screen printing, with a subtle tactile finish.',
          "Large-format back graphic covering the back and turning the story into the garment's main visual element.",
        ],
        keywords: ['origin', 'shadows', 'process', 'history', 'silent discipline', 'results', 'light'],
      },
    },
  },
  {
    slug: 'no-mercy-for-weak-visions',
    storyNumber: '002',
    title: 'NO MERCY FOR WEAK VISIONS',
    fabricLabel: 'Cotton Interlock, ~320 g/m²',
    price: 45,
    priceLabel: '$45.00 USD',
    priceConfirmed: true,
    primaryImage: '/images/stories/002/69202655-B37A-4C0B-BE0B-A96CF9FF38DE.png',
    hoverImage: '/images/stories/002/IMG_4823.JPG',
    media: [
      '/images/stories/002/IMG_4823.JPG',
      '/images/stories/002/69202655-B37A-4C0B-BE0B-A96CF9FF38DE.png',
      '/images/stories/002/photo-output.jpeg',
      '/images/stories/002/FC35573A-DD11-42DC-A208-709F03237203.png',
      '/images/stories/002/36B8ABAD-2113-42F3-8D3C-3D7BE699CF63.png',
      '/images/stories/002/441321A6-97CB-44AD-91E2-C546ED192431.jpg',
      '/images/stories/002/24A1682A-7348-44D1-825B-29BB02C970E1.png',
      '/images/stories/002/8B2BEE29-33B0-404C-AB35-EF7D85DF5B92.png',
      '/images/stories/002/C23C2313-C815-47F6-93D0-AB21912EAE73.png',
      '/images/stories/002/IMG_4821.JPG',
      '/images/stories/002/139309A9-0401-47DA-8F27-C9A91A697901.png',
      '/images/stories/002/64D7FF1B-1871-4C9B-BEAA-40AEE0CF02E1.png',
    ],
    colors: [],
    content: {
      es: {
        phrase: 'Una visión fuerte no se negocia con el ruido.',
        narrative: [
          'No Mercy for Weak Visions representa a quienes deciden proteger su dirección. Una visión puede debilitarse cuando busca aprobación, cuando se adapta a cada opinión o cuando permite que el entorno elija el futuro.',
          'Esta historia es una declaración contra los objetivos pequeños impuestos por otros, las excusas cómodas y las decisiones tomadas por miedo a no encajar. No habla de despreciar a las personas; habla de no tener misericordia con las ideas que reducen el potencial propio.',
          'La camiseta y la bermuda forman una unidad visual. El conjunto transmite estructura, peso y control: la misma firmeza que necesita una persona para sostener una visión incluso cuando el resto todavía no la entiende.',
        ],
        whatItRepresents: 'Hace referencia a quienes no siguen visiones débiles, no buscan aprobación y no permiten que el ruido controle su futuro. Representa claridad, criterio, independencia y compromiso con un objetivo que no se abandona para satisfacer expectativas externas.',
        construction: [
          'Conjunto de dos piezas: camiseta oversize y bermuda de silueta amplia.',
          'Confección en tejido interlock de aproximadamente 320 g/m², elegido por su cuerpo, estructura y sensación de prenda sólida.',
          'La camiseta presenta logo INFAMOUS PROJECT frontal en serigrafía 3D de alto relieve.',
          'Impresión "No Mercy for Weak Visions" ubicada en la parte inferior izquierda como detalle secundario de identidad.',
          'Frase principal aplicada en la espalda, con una escala que sostiene el peso visual del conjunto.',
          'Bermuda confeccionada para complementar el volumen de la camiseta y mantener una proporción oversize equilibrada.',
        ],
        keywords: ['visión', 'enfoque', 'dirección', 'anti-ruido', 'independencia', 'carácter', 'conjunto'],
      },
      en: {
        phrase: 'A strong vision is not negotiated with noise.',
        narrative: [
          'No Mercy for Weak Visions represents those who choose to protect their direction. A vision can become weak when it seeks approval, adapts to every opinion, or allows the environment to decide the future.',
          'This story is a declaration against small goals imposed by others, comfortable excuses, and decisions made out of fear of not fitting in. It is not about despising people; it is about showing no mercy to ideas that reduce one\'s own potential.',
          'The T-shirt and bermuda shorts form a visual unit. The set conveys structure, weight, and control: the same firmness a person needs to sustain a vision even when others do not yet understand it.',
        ],
        whatItRepresents: 'It refers to those who refuse to follow weak visions, do not seek approval, and do not allow noise to control their future. It represents clarity, judgment, independence, and commitment to a goal that is not abandoned merely to satisfy external expectations.',
        construction: [
          'Two-piece set: oversized T-shirt and wide-silhouette bermuda shorts.',
          'Made from approximately 320 g/m² interlock fabric, selected for its body, structure, and substantial feel.',
          'The T-shirt features a front INFAMOUS PROJECT logo in raised 3D screen printing.',
          '"No Mercy for Weak Visions" print positioned on the lower left as a secondary identity detail.',
          "Main phrase applied to the back at a scale that supports the set's visual weight.",
          'Bermuda shorts constructed to complement the volume of the T-shirt and maintain a balanced oversized proportion.',
        ],
        keywords: ['vision', 'focus', 'direction', 'anti-noise', 'independence', 'character', 'set'],
      },
    },
  },
  {
    slug: 'silent-attraction',
    storyNumber: '003',
    title: 'SILENT ATTRACTION',
    fabricLabel: '100% Cotton, 200 g/m²',
    price: 25,
    priceLabel: '$25.00 USD',
    priceConfirmed: true,
    primaryImage: '/images/stories/003/736B14DC-D6D7-4EBD-B5C8-7F72F8937F1F.png',
    hoverImage: '/images/stories/003/96EEC23F-6C6B-4285-89EA-357D17EF8019.png',
    media: [
      '/images/stories/003/96EEC23F-6C6B-4285-89EA-357D17EF8019.png',
      '/images/stories/003/736B14DC-D6D7-4EBD-B5C8-7F72F8937F1F.png',
      '/images/stories/003/IMG_5195.JPG',
      '/images/stories/003/64D7FF1B-1871-4C9B-BEAA-40AEE0CF02E1.png',
      '/images/stories/003/6FFF7D18-9C1C-49D4-B59F-FF20A0D48637.png',
      '/images/stories/003/B62D3053-C537-4DCC-AC86-353259CD742E.png',
    ],
    colors: ['White', 'Black'],
    colorVariants: [
      { name: 'White', swatch: '#f2f1ea', media: ['/images/stories/003/96EEC23F-6C6B-4285-89EA-357D17EF8019.png', '/images/stories/003/736B14DC-D6D7-4EBD-B5C8-7F72F8937F1F.png', '/images/stories/003/IMG_5195.JPG'] },
      { name: 'Black', swatch: '#171717', media: ['/images/stories/003/64D7FF1B-1871-4C9B-BEAA-40AEE0CF02E1.png', '/images/stories/003/6FFF7D18-9C1C-49D4-B59F-FF20A0D48637.png', '/images/stories/003/B62D3053-C537-4DCC-AC86-353259CD742E.png'] },
    ],
    content: {
      es: {
        phrase: 'La presencia real no persigue atención. La genera.',
        narrative: [
          'Silent Attraction nace de una forma de seguridad que no necesita demostraciones exageradas. Representa a la mujer que ocupa su espacio desde el carácter, la confianza y la forma en que ha construido su identidad.',
          'No se trata de desaparecer ni de limitar la expresión. Se trata de comprender que la presencia más fuerte no siempre es la más ruidosa. Los resultados, la actitud y la autenticidad pueden atraer miradas sin pedirlas.',
          'La palabra INFAMOUS dividida horizontalmente en la espalda refuerza esta idea: incluso cuando la identidad no se muestra de manera completa u obvia, sigue siendo reconocible. Lo que tiene carácter no necesita explicarse por completo para dejar una impresión.',
        ],
        whatItRepresents: 'Hace referencia a una atracción construida desde la seguridad interna. Habla de presencia, autonomía, feminidad fuerte y carácter; de no seguir una tendencia para sentirse validada y de permitir que la autenticidad sea aquello que llama la atención.',
        construction: [
          'Silueta crop para mujer, pensada para una apariencia contemporánea y una proporción visual definida.',
          'Confección en 100% algodón de 200 g/m², combinando comodidad, estabilidad y buena lectura de los estampados.',
          'Logo INFAMOUS PROJECT en la parte frontal del pecho mediante serigrafía 3D en alto relieve.',
          'Gráfica posterior con la palabra INFAMOUS dividida horizontalmente a la mitad.',
          'Cuello, mangas y dobladillo con terminaciones limpias para conservar la forma del crop.',
        ],
        keywords: ['presencia', 'seguridad', 'atracción silenciosa', 'carácter', 'identidad', 'autonomía'],
      },
      en: {
        phrase: 'Real presence does not chase attention. It creates it.',
        narrative: [
          'Silent Attraction comes from a form of confidence that does not require exaggerated displays. It represents the woman who occupies her space through character, confidence, and the way she has built her identity.',
          'It is not about disappearing or limiting expression. It is about understanding that the strongest presence is not always the loudest. Results, attitude, and authenticity can attract attention without asking for it.',
          'The word INFAMOUS, split horizontally across the back, reinforces this idea: even when identity is not shown completely or obviously, it remains recognizable. What has character does not need to be fully explained to leave an impression.',
        ],
        whatItRepresents: 'It refers to attraction built from inner confidence. It speaks of presence, autonomy, strong femininity, and character; of not following a trend in order to feel validated and allowing authenticity to become what draws attention.',
        construction: [
          "Women's crop silhouette designed for a contemporary appearance and a clearly defined visual proportion.",
          'Made from 100% cotton at 200 g/m², combining comfort, stability, and clear print reproduction.',
          'INFAMOUS PROJECT logo on the front chest through raised 3D screen printing.',
          'Back graphic featuring the word INFAMOUS divided horizontally in half.',
          "Clean finishes on the collar, sleeves, and hem to preserve the crop's shape.",
        ],
        keywords: ['presence', 'confidence', 'silent attraction', 'character', 'identity', 'autonomy'],
      },
    },
  },
  {
    slug: 'life-hits-hard-no-regrets',
    storyNumber: '004',
    title: 'LIFE HITS HARD, NO REGRETS',
    fabricLabel: 'Cotton, 200 g/m²',
    price: 20,
    priceLabel: '$20.00 USD',
    priceConfirmed: true,
    primaryImage: '/images/stories/004/50222BC0-0CF5-4462-A8A9-98530CBC3850.png',
    hoverImage: '/images/stories/004/8C1B52DB-DE88-449F-B1FE-1F30AD2354C5.png',
    media: [
      '/images/stories/004/50222BC0-0CF5-4462-A8A9-98530CBC3850.png',
      '/images/stories/004/8C1B52DB-DE88-449F-B1FE-1F30AD2354C5.png',
      '/images/stories/004/6DB2CC98-E09F-4E91-9606-712213EF9252.png',
    ],
    colors: [],
    content: {
      es: {
        phrase: 'La vida golpea fuerte. La visión decide lo que haces después.',
        narrative: [
          'Life Hits Hard, No Regrets parte de una verdad directa: la vida puede golpear sin aviso. Los errores, las pérdidas, la presión y los cambios forman parte del proceso, pero no tienen que convertirse en una sentencia.',
          'No regrets no significa negar lo vivido. Significa aprender, asumir las consecuencias y seguir adelante sin permitir que el remordimiento paralice el siguiente paso. Cada golpe puede convertirse en enfoque si existe disciplina para continuar.',
          'El tank representa movimiento, entrenamiento y resistencia. Es una pieza para quien mantiene el cuerpo activo y la mente alineada con la visión, incluso cuando el camino exige más de lo esperado.',
        ],
        whatItRepresents: 'Hace referencia a la capacidad de enfrentar los golpes de la vida sin abandonar la dirección. Representa resiliencia, disciplina, aprendizaje, enfoque y fidelidad a la visión: aceptar lo ocurrido, convertirlo en fuerza y continuar sin vivir atrapado en el pasado.',
        construction: [
          'Tank o BVD para hombre, con construcción sin mangas y silueta cómoda para entrenamiento o uso urbano.',
          'Confección en algodón de 200 g/m², con cuerpo suficiente para sostener la forma y permitir movilidad.',
          'Logo INFAMOUS PROJECT aplicado en la parte frontal mediante serigrafía 3D en alto relieve.',
          'Sisas y cuello con terminaciones limpias y resistentes, adecuadas para el uso frecuente.',
        ],
        keywords: ['resiliencia', 'sin remordimientos', 'disciplina', 'entrenamiento', 'enfoque', 'visión'],
      },
      en: {
        phrase: 'Life hits hard. Vision decides what you do next.',
        narrative: [
          'Life Hits Hard, No Regrets begins with a direct truth: life can strike without warning. Mistakes, losses, pressure, and change are part of the process, but they do not have to become a sentence.',
          'No regrets does not mean denying what happened. It means learning, accepting the consequences, and moving forward without allowing remorse to paralyze the next step. Every blow can become focus when there is enough discipline to continue.',
          'The tank represents movement, training, and endurance. It is a piece for those who keep their body active and their mind aligned with the vision, even when the path demands more than expected.',
        ],
        whatItRepresents: "It refers to the ability to face life's hard blows without abandoning direction. It represents resilience, discipline, learning, focus, and loyalty to the vision: accepting what happened, turning it into strength, and continuing without living trapped in the past.",
        construction: [
          'Men\'s tank top or sleeveless shirt, with a sleeveless construction and a comfortable silhouette for training or urban use.',
          'Made from 200 g/m² cotton, with enough body to hold its shape while allowing mobility.',
          'Front INFAMOUS PROJECT logo applied through raised 3D screen printing.',
          'Clean, durable finishes around the armholes and neckline, suitable for frequent use.',
        ],
        keywords: ['resilience', 'no regrets', 'discipline', 'training', 'focus', 'vision'],
      },
    },
  },
  {
    slug: 'cold-discipline',
    storyNumber: '005',
    title: 'COLD DISCIPLINE',
    fabricLabel: 'Heavyweight Wool',
    price: 15,
    priceLabel: '$15.00 USD',
    priceConfirmed: true,
    primaryImage: '/images/stories/005/6EE98C32-C23F-487E-BACE-6208431E9FA3.png',
    hoverImage: '/images/stories/005/4551CDA5-83C1-4186-98D4-C0B645ECAA53.png',
    media: [
      '/images/stories/005/6EE98C32-C23F-487E-BACE-6208431E9FA3.png',
      '/images/stories/005/4551CDA5-83C1-4186-98D4-C0B645ECAA53.png',
      '/images/stories/005/0A10DCE9-CBDB-4C86-904E-6AE5CF99059D.png',
      '/images/stories/005/D3262C92-476F-496C-B32A-64944B180115.png',
      '/images/stories/005/EEF41790-B591-4562-933D-A37E91E3E4D6.png',
      '/images/stories/005/2D2A25FB-F8FA-4E49-9A37-3B05EA520537.png',
      '/images/stories/005/9F9D7CB8-192F-4600-AAEE-4D9C1D67CB84.png',
      '/images/stories/005/CDEC5FFD-F663-47B8-9965-D0E7C47DF257.png',
    ],
    colors: ['Grey', 'Black'],
    colorVariants: [
      { name: 'Grey', swatch: '#a7a7a7', media: ['/images/stories/005/0A10DCE9-CBDB-4C86-904E-6AE5CF99059D.png', '/images/stories/005/D3262C92-476F-496C-B32A-64944B180115.png', '/images/stories/005/EEF41790-B591-4562-933D-A37E91E3E4D6.png'] },
      { name: 'Black', swatch: '#171717', media: ['/images/stories/005/2D2A25FB-F8FA-4E49-9A37-3B05EA520537.png', '/images/stories/005/9F9D7CB8-192F-4600-AAEE-4D9C1D67CB84.png', '/images/stories/005/CDEC5FFD-F663-47B8-9965-D0E7C47DF257.png'] },
    ],
    content: {
      es: {
        phrase: 'La disciplina no depende del clima, la comodidad ni la motivación.',
        narrative: [
          'Cold Discipline representa a quienes comienzan antes de que el mundo despierte. A quienes cumplen el entrenamiento, el trabajo o el plan incluso cuando hace frío, cuando cuesta levantarse y cuando nadie está observando.',
          'La disciplina fría es una forma de control: hacer lo necesario sin esperar el estado de ánimo perfecto. Es mantener la mente firme cuando la comodidad invita a detenerse y continuar aunque el resultado todavía parezca lejano.',
          'El beanie funciona como símbolo de esa constancia. No es únicamente una pieza para el frío; es un recordatorio de que la visión se protege con hábitos repetidos, decisiones sobrias y trabajo silencioso.',
        ],
        whatItRepresents: 'Hace referencia a la constancia que se mantiene en condiciones incómodas: madrugadas, cansancio, presión, silencio y ausencia de reconocimiento. Representa disciplina práctica, hábitos firmes y la capacidad de avanzar sin depender de la motivación.',
        construction: [
          'Beanie confeccionado en lana de alto gramaje para una sensación cálida, consistente y estructurada.',
          'Tejido con cuerpo, diseñado para conservar su forma y ofrecer una apariencia premium.',
          'Borde doblado frontal que sostiene el elemento principal de branding.',
          'Etiqueta de plastisol en alto relieve colocada en la parte frontal.',
        ],
        keywords: ['disciplina fría', 'madrugada', 'constancia', 'hábito', 'presión', 'lana', 'enfoque'],
      },
      en: {
        phrase: 'Discipline does not depend on the weather, comfort, or motivation.',
        narrative: [
          'Cold Discipline represents those who begin before the world wakes up. Those who complete the training session, the work, or the plan even when it is cold, when getting up is difficult, and when no one is watching.',
          'Cold discipline is a form of control: doing what is necessary without waiting for the perfect state of mind. It means keeping the mind firm when comfort invites you to stop and continuing even when the result still seems far away.',
          'The beanie functions as a symbol of that consistency. It is not only a piece for cold weather; it is a reminder that vision is protected through repeated habits, restrained decisions, and silent work.',
        ],
        whatItRepresents: 'It refers to consistency maintained under uncomfortable conditions: early mornings, fatigue, pressure, silence, and lack of recognition. It represents practical discipline, firm habits, and the ability to move forward without depending on motivation.',
        construction: [
          'Beanie made from heavyweight wool for a warm, substantial, and structured feel.',
          'Fabric with body, designed to retain its shape and provide a premium appearance.',
          'Folded front cuff supporting the main branding element.',
          'Raised plastisol label placed on the front.',
        ],
        keywords: ['cold discipline', 'early morning', 'consistency', 'habit', 'pressure', 'wool', 'focus'],
      },
    },
  },
  {
    slug: 'self-made-culture',
    storyNumber: '006',
    title: 'SELF-MADE CULTURE',
    fabricLabel: 'Structured Cap, 3D Embroidery',
    price: 20,
    priceLabel: '$20.00 USD',
    priceConfirmed: true,
    primaryImage: '/images/stories/006/11497762-D19D-4DD7-92AD-77859F5C8C01.png',
    hoverImage: '/images/stories/006/176AED32-290B-47D7-9E0C-A0AE62204F39.png',
    media: [
      '/images/stories/006/11497762-D19D-4DD7-92AD-77859F5C8C01.png',
      '/images/stories/006/176AED32-290B-47D7-9E0C-A0AE62204F39.png',
      '/images/stories/006/C2333160-D518-4B4D-8E4D-631AB52648B3.png',
      '/images/stories/006/E26C1E51-E4AE-4117-AF1E-99F4BDDC3C36.png',
    ],
    colors: ['Beige', 'Grey'],
    colorVariants: [
      { name: 'Beige', swatch: '#d8cdb8', media: ['/images/stories/006/176AED32-290B-47D7-9E0C-A0AE62204F39.png', '/images/stories/006/C2333160-D518-4B4D-8E4D-631AB52648B3.png'] },
      { name: 'Grey', swatch: '#a7a7a7', media: ['/images/stories/006/11497762-D19D-4DD7-92AD-77859F5C8C01.png', '/images/stories/006/E26C1E51-E4AE-4117-AF1E-99F4BDDC3C36.png'] },
    ],
    content: {
      es: {
        phrase: 'Una cultura propia no se hereda. Se construye.',
        narrative: [
          'Self-Made Culture representa a quienes han levantado su camino mediante esfuerzo, aprendizaje y dedicación. Personas que no esperan ser elegidas para comenzar y que convierten recursos limitados en oportunidades reales.',
          'Ser self-made no significa negar la ayuda recibida. Significa reconocer que ninguna oportunidad se sostiene sin trabajo personal, responsabilidad y la capacidad de resolver. La cultura se crea cuando una forma de pensar se convierte en hábito, identidad y ejemplo.',
          'Las gorras funcionan como emblemas cotidianos de esa mentalidad. El bordado frontal proyecta la marca con volumen y presencia; el branding posterior completa una pieza diseñada para pertenecer a una comunidad que construye su propio camino.',
        ],
        whatItRepresents: 'Hace referencia a personas que han conseguido avanzar por su propio esfuerzo y dedicación. Representa autonomía, iniciativa, aprendizaje, perseverancia y la decisión de crear una identidad propia en lugar de esperar permiso o validación.',
        construction: [
          'Gorra estructurada, confeccionada para conservar una silueta firme y una apariencia limpia.',
          'Bordado frontal INFAMOUS en alto relieve, con volumen visible y lectura clara.',
          'Branding adicional en la parte posterior de la gorra.',
          'Visera estructurada y combinación cromática definida según cada variante.',
        ],
        keywords: ['self-made', 'cultura propia', 'esfuerzo', 'autonomía', 'dedicación', 'identidad', 'bordado'],
      },
      en: {
        phrase: 'A culture of your own is not inherited. It is built.',
        narrative: [
          'Self-Made Culture represents those who have built their path through effort, learning, and dedication. People who do not wait to be chosen before they begin and who turn limited resources into real opportunities.',
          'Being self-made does not mean denying the help one has received. It means recognizing that no opportunity can be sustained without personal work, responsibility, and the ability to solve problems. Culture is created when a way of thinking becomes habit, identity, and example.',
          'The caps function as everyday emblems of that mindset. The front embroidery projects the brand with volume and presence; the rear branding completes a piece designed to belong to a community that builds its own path.',
        ],
        whatItRepresents: 'It refers to people who have managed to move forward through their own effort and dedication. It represents autonomy, initiative, learning, perseverance, and the decision to create an identity of one\'s own instead of waiting for permission or validation.',
        construction: [
          'Structured cap made to retain a firm silhouette and a clean appearance.',
          'Raised INFAMOUS embroidery on the front, with visible volume and clear readability.',
          'Additional branding on the back of the cap.',
          'Structured visor and a color combination defined for each variant.',
        ],
        keywords: ['self-made', 'own culture', 'effort', 'autonomy', 'dedication', 'identity', 'embroidery'],
      },
    },
  },
]

export const referenceImages = [
  '/images/story/2BE1729C-E9E7-4D17-AE85-AD32204BC224.jpg',
  '/images/story/54EA95E3-3503-4E18-8A98-5B8D3EB02C98.jpg',
  '/images/story/7384EB4D-91F7-44E8-A56B-BF1336F6F162.jpg',
  '/images/story/7715701D-9327-4728-BC7B-27DDC1749863.jpg',
  '/images/story/AEF75A06-AF6D-4711-A1E5-AD3F5FB2BD67.jpg',
]

export function getNextProduct(slug: string): StoreProduct {
  const index = products.findIndex((product) => product.slug === slug)
  const nextIndex = index === -1 ? 0 : (index + 1) % products.length
  return products[nextIndex]
}
