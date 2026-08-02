'use client'

import { PolicyPlaceholder } from '@/components/PolicyPlaceholder'
import { useLanguage } from '@/lib/language-context'

export default function FaqPage() {
  const { strings } = useLanguage()
  return <PolicyPlaceholder title={strings.footer.faq} />
}
