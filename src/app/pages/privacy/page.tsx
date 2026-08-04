'use client'

import { StoreShell } from '@/components/StoreShell'
import { useLanguage } from '@/lib/language-context'

export default function PrivacyPage() {
  const { strings } = useLanguage()
  const { title, effectiveDate, sections, contactNote } = strings.privacyPolicy

  return (
    <StoreShell>
      <section className="legal-page page-width">
        <h1>{title}</h1>
        <p className="legal-page__date">{effectiveDate}</p>

        {sections.map((section) => (
          <div className="legal-page__section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}

        <p className="legal-page__contact">
          {contactNote} <a href="mailto:infamousproject.store@gmail.com">infamousproject.store@gmail.com</a>
        </p>
      </section>
    </StoreShell>
  )
}
