'use client'

import { useLanguage } from '@/lib/language-context'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={language === 'es' ? 'is-active' : ''}
        aria-pressed={language === 'es'}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={language === 'en' ? 'is-active' : ''}
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  )
}
