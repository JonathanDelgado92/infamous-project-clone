'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { dictionary, type Language } from './i18n'

const STORAGE_KEY = 'infamous-language'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  strings: (typeof dictionary)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Synchronizes React state from the external localStorage source on mount;
  // starting at 'en' keeps the client's first render matching the server-rendered HTML.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === 'es' || stored === 'en') setLanguageState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (next: Language) => {
    setLanguageState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, strings: dictionary[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
