'use client'

import { PolicyPlaceholder } from '@/components/PolicyPlaceholder'
import { useLanguage } from '@/lib/language-context'

export default function ProductCarePage() {
  const { strings } = useLanguage()
  return <PolicyPlaceholder title={strings.footer.productCare} />
}
