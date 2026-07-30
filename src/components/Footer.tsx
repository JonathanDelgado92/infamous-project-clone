import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/40 px-6 lg:px-12 py-16 lg:py-20 border-t border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <p className="font-display text-[1.1rem] tracking-[0.18em] uppercase text-white mb-1">INFAMOUS</p>
            <p className="font-sackers text-[0.5rem] tracking-[0.28em] uppercase text-egeo mb-3 font-normal">
              Not made for hype. Made for legacy.
            </p>
            <p className="text-[0.72rem] leading-relaxed max-w-[220px]">
              Prendas de carácter duradero. Construidas para el tiempo, no para la temporada.
            </p>
          </div>
          <div>
            <h4 className="text-[0.55rem] tracking-[0.25em] uppercase text-white mb-4">Colección</h4>
            <ul className="list-none space-y-2">
              {['Camisetas', 'Gorras', 'Accesorios', 'Drop 001'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[0.72rem] text-white/40 no-underline transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.55rem] tracking-[0.25em] uppercase text-white mb-4">Servicio</h4>
            <ul className="list-none space-y-2">
              {['Envíos', 'Devoluciones', 'Guía de tallas', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[0.72rem] text-white/40 no-underline transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.55rem] tracking-[0.25em] uppercase text-white mb-4">Marca</h4>
            <ul className="list-none space-y-2">
              {['Nuestra historia', 'Editorial', 'Instagram'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[0.72rem] text-white/40 no-underline transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.08] pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-[0.65rem] tracking-[0.08em]">
          <span>© 2026 INFAMOUS PROJECT. Todos los derechos reservados.</span>
          <span className="font-england text-accent text-[0.85rem]">Not made for hype. Made for legacy.</span>
        </div>
      </div>
    </footer>
  )
}
