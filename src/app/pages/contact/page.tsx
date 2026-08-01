'use client'

import { FormEvent, useState } from 'react'
import { StoreShell } from '@/components/StoreShell'
import { useLanguage } from '@/lib/language-context'

export default function ContactPage() {
  const { strings } = useLanguage()
  const [sent, setSent] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <StoreShell><section className="contact-page page-width"><div><h1>{strings.contact.title}</h1><h2>{strings.contact.info}</h2><p>{strings.contact.infoText}</p></div><div><h2>{strings.contact.formTitle}</h2>{sent && <p className="form-success" role="status">{strings.contact.thanks}</p>}<form onSubmit={submit}><label>{strings.contact.name}<input name="name" autoComplete="name" /></label><label>{strings.contact.email}<input name="email" type="email" autoComplete="email" required /></label><label>{strings.contact.phone}<input name="phone" type="tel" autoComplete="tel" /></label><label>{strings.contact.comment}<textarea name="comment" rows={8} required /></label><button type="submit">{strings.contact.send}</button></form></div></section></StoreShell>
}
