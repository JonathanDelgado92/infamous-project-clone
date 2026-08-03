'use client'

import { useEffect, useId, useRef } from 'react'

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: { sitekey: string; callback: (token: string) => void; 'expired-callback'?: () => void; theme?: 'light' | 'dark' | 'auto'; size?: 'normal' | 'flexible' | 'compact' },
      ) => string
      reset: (widgetId?: string) => void
    }
  }
}

// Se renderiza como no-op mientras NEXT_PUBLIC_TURNSTILE_SITE_KEY esté vacío
// (Fase 5.3, pendiente de crear el widget en Cloudflare).
export function TurnstileWidget({ onToken }: { onToken: (token: string | null) => void }) {
  const containerId = useId()
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (!SITE_KEY) return

    const renderWidget = () => {
      const container = document.getElementById(containerId)
      if (!container || !window.turnstile || widgetIdRef.current) return
      widgetIdRef.current = window.turnstile.render(container, {
        sitekey: SITE_KEY,
        callback: (token) => onToken(token),
        'expired-callback': () => onToken(null),
        theme: 'dark',
        size: 'flexible',
      })
    }

    if (window.turnstile) {
      renderWidget()
      return
    }

    const existingScript = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (existingScript) {
      existingScript.addEventListener('load', renderWidget)
      return () => existingScript.removeEventListener('load', renderWidget)
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.addEventListener('load', renderWidget)
    document.body.appendChild(script)

    return () => script.removeEventListener('load', renderWidget)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerId])

  if (!SITE_KEY) return null

  return <div id={containerId} className="newsletter-turnstile" />
}
