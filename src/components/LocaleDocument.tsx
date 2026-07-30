'use client'

import { useEffect } from 'react'
import type { Locale } from '@/lib/catalog'

export function LocaleDocument({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
