import { AnnouncementBar } from '@/components/AnnouncementBar'
import { CoreStories } from '@/components/CoreStories'
import { EditorialSection } from '@/components/EditorialSection'
import { ImageBanner } from '@/components/ImageBanner'
import { ImageBannerTwo } from '@/components/ImageBannerTwo'
import { ImageWithText } from '@/components/ImageWithText'
import { MarqueeSection } from '@/components/MarqueeSection'
import { ScrollObserver } from '@/components/ScrollObserver'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <AnnouncementBar />
      <SiteHeader />
      <main id="MainContent">
        <ImageBanner />
        <MarqueeSection />
        <CoreStories />
        <EditorialSection />
        <ImageWithText />
        <ImageBannerTwo />
      </main>
      <SiteFooter />
    </>
  )
}
