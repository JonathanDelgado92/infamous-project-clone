export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]

export type StoryContent = {
  category: string
  tagline: string
  cardDescription: string
  narrative: string[]
  represents: string
  construction: string[]
  catalogCopy: string
}

export type CatalogStory = {
  id: string
  slug: string
  name: string
  price: number
  priceLabel: string
  variants: string[]
  media: string[]
  content: Record<Locale, StoryContent>
}

const storyAsset = (story: string, file: string) => `/images/stories/${story}/${file}`

export const catalogStories: CatalogStory[] = [
  {
    id: '001', slug: 'every-shadow-hides-a-history', name: 'EVERY SHADOW HIDES A HISTORY', price: 25, priceLabel: '$25 USD · Acid Wash $30', variants: ['Black', 'Steel', 'White', 'Gray Acid Wash'],
    media: ['386FAE83-BC50-41B9-94E5-113A22817D1C.png', '1A9A0344-9A78-40B6-82B9-7EF30F4AAE37.png', '2BE1729C-E9E7-4D17-AE85-AD32204BC224.jpg', '5B3FF8DD-5516-4124-9E50-598F422FF339.jpg', 'AEF75A06-AF6D-4711-A1E5-AD3F5FB2BD67.jpg'].map((file) => storyAsset('001', file)),
    content: {
      en: { category: 'Oversized T-shirt · Origin of the brand', tagline: 'Every visible presence began with a process no one saw.', cardDescription: 'The chapter that gave birth to INFAMOUS PROJECT.', narrative: ['Every Shadow Hides a History is the story that gives birth to INFAMOUS PROJECT. It speaks about the silent hours, difficult decisions, repetition, doubt, and discipline sustained before recognition.', 'Darkness is not defeat; it is the space where strength, identity, and preparation are built.'], represents: 'Those who work without applause, protect their process, and understand that recognition is a consequence rather than the objective.', construction: ['Oversized silhouette with a wide drape and strong presence.', '100% cotton, 200 g/m², structured collar and clean finishes.', 'Raised 3D front screen print and a large-format back graphic.'], catalogCopy: 'Built in the shadows. Proven in the light.' },
      es: { category: 'Camiseta oversize · Origen de la marca', tagline: 'Toda presencia visible comenzó con un proceso que nadie vio.', cardDescription: 'El capítulo que dio origen a INFAMOUS PROJECT.', narrative: ['Every Shadow Hides a History es la historia que da origen a INFAMOUS PROJECT: horas silenciosas, decisiones difíciles, repetición, dudas y disciplina antes del reconocimiento.', 'La oscuridad no representa derrota; es el espacio donde se construyen fuerza, identidad y preparación.'], represents: 'A quien trabaja sin necesidad de aplausos, protege su proceso y entiende que el reconocimiento es una consecuencia, no el objetivo.', construction: ['Silueta oversize de caída amplia y presencia visual fuerte.', '100% algodón de 200 g/m², cuello estructurado y terminaciones limpias.', 'Serigrafía 3D frontal en relieve y gráfica posterior de gran formato.'], catalogCopy: 'Construida en las sombras. Demostrada en la luz.' },
    },
  },
  {
    id: '002', slug: 'no-mercy-for-weak-visions', name: 'NO MERCY FOR WEAK VISIONS', price: 45, priceLabel: '$45 USD', variants: [],
    media: ['139309A9-0401-47DA-8F27-C9A91A697901.png', '24A1682A-7348-44D1-825B-29BB02C970E1.png', '36B8ABAD-2113-42F3-8D3C-3D7BE699CF63.png', '441321A6-97CB-44AD-91E2-C546ED192431.jpg', '64D7FF1B-1871-4C9B-BEAA-40AEE0CF02E1.png', '69202655-B37A-4C0B-BE0B-A96CF9FF38DE.png', '8B2BEE29-33B0-404C-AB35-EF7D85DF5B92.png', 'C23C2313-C815-47F6-93D0-AB21912EAE73.png', 'FC35573A-DD11-42DC-A208-709F03237203.png', 'IMG_4821.JPG', 'IMG_4823.JPG', 'photo-output.jpeg'].map((file) => storyAsset('002', file)),
    content: {
      en: { category: 'Oversized set · T-shirt and bermuda shorts', tagline: 'A strong vision is not negotiated with noise.', cardDescription: 'Structure, weight, and control for those who protect their direction.', narrative: ['No Mercy for Weak Visions is a declaration against small goals imposed by others, comfortable excuses, and decisions made out of fear of not fitting in.', 'The T-shirt and bermuda shorts form a visual unit built around clarity, judgment, and independence.'], represents: 'Those who refuse weak visions and do not let noise control their future.', construction: ['Two-piece oversized set: T-shirt and wide-silhouette bermuda shorts.', 'Approximately 320 g/m² interlock for body, structure, and a substantial feel.', 'Raised 3D front logo, lower secondary print, and large-scale back statement.'], catalogCopy: 'Your future cannot be left in the hands of a weak vision.' },
      es: { category: 'Conjunto oversize · Camiseta y bermuda', tagline: 'Una visión fuerte no se negocia con el ruido.', cardDescription: 'Estructura, peso y control para quienes protegen su dirección.', narrative: ['No Mercy for Weak Visions es una declaración contra objetivos pequeños impuestos por otros, excusas cómodas y decisiones tomadas por miedo a no encajar.', 'La camiseta y la bermuda forman una unidad visual construida desde claridad, criterio e independencia.'], represents: 'A quienes no siguen visiones débiles y no permiten que el ruido controle su futuro.', construction: ['Conjunto de dos piezas: camiseta oversize y bermuda de silueta amplia.', 'Interlock aproximado de 320 g/m² para cuerpo, estructura y sensación sólida.', 'Logo frontal 3D, impresión inferior secundaria y frase posterior de gran formato.'], catalogCopy: 'Tu futuro no puede quedar en manos de una visión débil.' },
    },
  },
  {
    id: '003', slug: 'silent-attraction', name: 'SILENT ATTRACTION', price: 25, priceLabel: '$25 USD', variants: [],
    media: ['64D7FF1B-1871-4C9B-BEAA-40AEE0CF02E1.png', '6FFF7D18-9C1C-49D4-B59F-FF20A0D48637.png', '736B14DC-D6D7-4EBD-B5C8-7F72F8937F1F.png', '96EEC23F-6C6B-4285-89EA-357D17EF8019.png', 'B62D3053-C537-4DCC-AC86-353259CD742E.png', 'IMG_5195.JPG'].map((file) => storyAsset('003', file)),
    content: {
      en: { category: "Women's crop top", tagline: 'Real presence does not chase attention. It creates it.', cardDescription: 'A chapter about confidence, character, and quiet presence.', narrative: ['Silent Attraction represents the woman who occupies her space through character, confidence, and the identity she has built.', 'The split INFAMOUS word across the back reinforces that real identity remains recognizable without needing to explain itself.'], represents: 'Presence, autonomy, strong femininity, and character that does not need validation.', construction: ['Contemporary crop silhouette in 100% cotton, 200 g/m².', 'Raised 3D front chest logo.', 'Back graphic with INFAMOUS split horizontally, plus clean collar, sleeve, and hem finishes.'], catalogCopy: 'Silent, confident, and difficult to ignore.' },
      es: { category: 'Crop top para mujer', tagline: 'La presencia real no persigue atención. La genera.', cardDescription: 'Un capítulo sobre confianza, carácter y presencia silenciosa.', narrative: ['Silent Attraction representa a la mujer que ocupa su espacio desde el carácter, la confianza y la identidad que ha construido.', 'La palabra INFAMOUS dividida en la espalda refuerza que una identidad real sigue siendo reconocible sin tener que explicarse.'], represents: 'Presencia, autonomía, feminidad fuerte y carácter que no necesita validación.', construction: ['Silueta crop contemporánea en 100% algodón de 200 g/m².', 'Logo frontal de pecho en serigrafía 3D de alto relieve.', 'Gráfica posterior INFAMOUS dividida horizontalmente y terminaciones limpias.'], catalogCopy: 'Silenciosa, segura y difícil de ignorar.' },
    },
  },
  {
    id: '004', slug: 'life-hits-hard-no-regrets', name: 'LIFE HITS HARD, NO REGRETS', price: 20, priceLabel: '$20 USD', variants: [],
    media: ['8C1B52DB-DE88-449F-B1FE-1F30AD2354C5.png', '50222BC0-0CF5-4462-A8A9-98530CBC3850.png', '6DB2CC98-E09F-4E91-9606-712213EF9252.png'].map((file) => storyAsset('004', file)),
    content: {
      en: { category: "Men's tank / BVD", tagline: 'Life hits hard. Vision decides what you do next.', cardDescription: 'Movement, training, and resilience without regret.', narrative: ['Life Hits Hard, No Regrets begins with a direct truth: pressure, mistakes, losses, and change are part of the process, but they do not have to become a sentence.', 'No regrets means learning, accepting consequences, and continuing without allowing remorse to stop the next step.'], represents: 'Resilience, discipline, learning, and fidelity to a vision after life hits hard.', construction: ['Sleeveless tank/BVD construction for training or urban wear.', '200 g/m² cotton construction; exact fiber percentage remains unconfirmed for published copy.', 'Raised 3D front logo with clean, durable neck and armhole finishes.'], catalogCopy: 'Character decides how you continue.' },
      es: { category: 'Tank / BVD para hombre', tagline: 'La vida golpea fuerte. La visión decide lo que haces después.', cardDescription: 'Movimiento, entrenamiento y resiliencia sin remordimientos.', narrative: ['Life Hits Hard, No Regrets parte de una verdad directa: presión, errores, pérdidas y cambios son parte del proceso, pero no tienen que convertirse en una sentencia.', 'No regrets significa aprender, asumir consecuencias y continuar sin permitir que el remordimiento paralice el siguiente paso.'], represents: 'Resiliencia, disciplina, aprendizaje y fidelidad a una visión después de los golpes.', construction: ['Construcción sin mangas tipo tank/BVD para entrenamiento o uso urbano.', 'Confección en algodón de 200 g/m²; el porcentaje exacto de fibra se mantiene sin publicar hasta confirmación.', 'Logo frontal 3D y terminaciones limpias y resistentes en cuello y sisas.'], catalogCopy: 'El carácter decide cómo continúas.' },
    },
  },
  {
    id: '005', slug: 'cold-discipline', name: 'COLD DISCIPLINE', price: 15, priceLabel: '$15 USD', variants: [],
    media: ['0A10DCE9-CBDB-4C86-904E-6AE5CF99059D.png', '2D2A25FB-F8FA-4E49-9A37-3B05EA520537.png', '4551CDA5-83C1-4186-98D4-C0B645ECAA53.png', '6EE98C32-C23F-487E-BACE-6208431E9FA3.png', '9F9D7CB8-192F-4600-AAEE-4D9C1D67CB84.png', 'CDEC5FFD-F663-47B8-9965-D0E7C47DF257.png', 'D3262C92-476F-496C-B32A-64944B180115.png', 'EEF41790-B591-4562-933D-A37E91E3E4D6.png'].map((file) => storyAsset('005', file)),
    content: {
      en: { category: 'Heavyweight wool beanie', tagline: 'Discipline does not depend on weather, comfort, or motivation.', cardDescription: 'A reminder that habits outlast motivation.', narrative: ['Cold Discipline represents those who begin before the world wakes up and keep their training, work, or plan when conditions are uncomfortable.', 'The beanie is not only for the cold; it is a symbol of protecting vision through repeated habits and quiet work.'], represents: 'Consistency under discomfort: early mornings, fatigue, pressure, silence, and no recognition.', construction: ['Heavyweight wool beanie designed for warmth, structure, and shape retention.', 'Folded front cuff carrying the core branding element.', 'Raised plastisol front label with tactile, durable contrast against the knit.'], catalogCopy: 'Motivation changes. Discipline remains.' },
      es: { category: 'Beanie de lana de alto gramaje', tagline: 'La disciplina no depende del clima, la comodidad ni la motivación.', cardDescription: 'Un recordatorio de que los hábitos superan a la motivación.', narrative: ['Cold Discipline representa a quienes comienzan antes de que el mundo despierte y cumplen su entrenamiento, trabajo o plan aun cuando las condiciones incomodan.', 'El beanie no es solo una pieza para el frío; simboliza proteger la visión con hábitos repetidos y trabajo silencioso.'], represents: 'Constancia en condiciones incómodas: madrugadas, cansancio, presión, silencio y ausencia de reconocimiento.', construction: ['Beanie de lana de alto gramaje para abrigo, estructura y conservación de forma.', 'Borde frontal doblado que sostiene el elemento central de branding.', 'Etiqueta frontal de plastisol en alto relieve, táctil y resistente.'], catalogCopy: 'La motivación cambia. La disciplina permanece.' },
    },
  },
  {
    id: '006', slug: 'self-made-culture', name: 'SELF-MADE CULTURE', price: 20, priceLabel: '$20 USD', variants: ['Blue / Beige', 'Gray', 'Camel / Beige'],
    media: ['11497762-D19D-4DD7-92AD-77859F5C8C01.png', '176AED32-290B-47D7-9E0C-A0AE62204F39.png', 'C2333160-D518-4B4D-8E4D-631AB52648B3.png', 'E26C1E51-E4AE-4117-AF1E-99F4BDDC3C36.png'].map((file) => storyAsset('006', file)),
    content: {
      en: { category: 'Structured caps', tagline: 'A culture of your own is not inherited. It is built.', cardDescription: 'An everyday emblem for people who build their own path.', narrative: ['Self-Made Culture represents people who create their path through effort, learning, and dedication rather than waiting to be chosen.', 'A culture becomes real when a way of thinking turns into habit, identity, and example.'], represents: 'Autonomy, initiative, perseverance, and the decision to create identity without permission.', construction: ['Structured cap with balanced panels and a clean silhouette.', 'Raised INFAMOUS front embroidery with visible volume.', 'Rear branding, structured visor, and color combinations defined by each variant.'], catalogCopy: 'A culture created through effort, dedication, and vision.' },
      es: { category: 'Gorras estructuradas', tagline: 'Una cultura propia no se hereda. Se construye.', cardDescription: 'Un emblema cotidiano para quienes construyen su propio camino.', narrative: ['Self-Made Culture representa a quienes levantan su camino mediante esfuerzo, aprendizaje y dedicación en lugar de esperar ser elegidos.', 'Una cultura se vuelve real cuando una forma de pensar se transforma en hábito, identidad y ejemplo.'], represents: 'Autonomía, iniciativa, perseverancia y la decisión de crear identidad sin pedir permiso.', construction: ['Gorra estructurada con paneles equilibrados y silueta limpia.', 'Bordado frontal INFAMOUS en alto relieve y volumen visible.', 'Branding posterior, visera estructurada y combinaciones cromáticas por variante.'], catalogCopy: 'Una cultura creada mediante esfuerzo, dedicación y visión.' },
    },
  },
]

export const getStory = (slug: string) => catalogStories.find((story) => story.slug === slug)
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale)
export const referenceImages = catalogStories[0].media.slice(0, 5)
