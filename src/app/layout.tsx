import type { Metadata } from 'next'
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
      <body>{children}</body>
    </html>
  )
}
