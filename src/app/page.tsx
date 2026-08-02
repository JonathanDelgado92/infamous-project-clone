import { AnnouncementBar } from '@/components/AnnouncementBar'
import { CoreStories } from '@/components/CoreStories'
import { EditorialSection } from '@/components/EditorialSection'
import { ImageBanner } from '@/components/ImageBanner'
import { ImageBannerTwo } from '@/components/ImageBannerTwo'
import { ImageWithText } from '@/components/ImageWithText'
import { InstagramFeed } from '@/components/InstagramFeed'
import { MarqueeSection } from '@/components/MarqueeSection'
import { NewsletterPopup } from '@/components/NewsletterPopup'
import { NewsletterSection } from '@/components/NewsletterSection'
import { ScrollObserver } from '@/components/ScrollObserver'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { StoppableVideos } from '@/components/StoppableVideos'
import { TestimonialSlider } from '@/components/TestimonialSlider'

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <AnnouncementBar />
      <SiteHeader />
      <main id="MainContent">
        <ImageBanner />
        <MarqueeSection variant="primary" />
        <CoreStories />
        <EditorialSection />
        <ImageWithText />
        <StoppableVideos />
        <TestimonialSlider />
        <ImageBannerTwo />
        <MarqueeSection variant="secondary" />
        <NewsletterSection />
        <InstagramFeed />
      </main>
      <NewsletterPopup />
      <SiteFooter />
    </>
  )
}
