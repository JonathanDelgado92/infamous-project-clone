'use client'

import { useLanguage } from '@/lib/language-context'

export function AnnouncementBar() {
  const { strings } = useLanguage()

  return (
    <div className="announcement-bar-section">
      <div className="utility-bar color-scheme-2 gradient utility-bar--bottom-border header-localization">
        <div className="page-width utility-bar__grid utility-bar__grid--3-col">
          <div className="announcement-bar" role="region" aria-label="Announcement">
            <p className="announcement-bar__message h5">
              <span>{strings.announcement}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
