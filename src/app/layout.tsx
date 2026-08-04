import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/language-context'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Infamous Project',
  description: 'NOT MADE FOR HYPE. MADE FOR LEGACY',
  icons: {
    icon: '/images/infamous-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
