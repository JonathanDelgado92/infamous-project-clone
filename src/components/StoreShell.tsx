import type { ReactNode } from 'react'
import { AnnouncementBar } from './AnnouncementBar'
import { ScrollObserver } from './ScrollObserver'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function StoreShell({ children }: { children: ReactNode }) {
  return <><ScrollObserver /><AnnouncementBar /><SiteHeader /><main id="MainContent">{children}</main><SiteFooter /></>
}
