'use client'

import { PolicyPlaceholder } from '@/components/PolicyPlaceholder'
import { useLanguage } from '@/lib/language-context'

export default function ShippingPage() {
  const { strings } = useLanguage()
  return <PolicyPlaceholder title={strings.footer.shipping} />
}
