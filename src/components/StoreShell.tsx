import type { ReactNode } from 'react'
import { AnnouncementBar } from './AnnouncementBar'
import { ScrollObserver } from './ScrollObserver'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import type { Locale } from '@/lib/catalog'

export function StoreShell({ children, locale = 'en' }: { children: ReactNode; locale?: Locale }) {
  return <><ScrollObserver /><AnnouncementBar /><SiteHeader locale={locale} /><main id="MainContent">{children}</main><SiteFooter /></>
}
