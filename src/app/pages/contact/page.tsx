'use client'

import { FormEvent, useState } from 'react'
import { StoreShell } from '@/components/StoreShell'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <StoreShell><section className="contact-page page-width"><div><h1>CONNECT WITH SONDER</h1><h2>CONTACT INFORMATION</h2><p>For questions about products, orders, or the brand, use the form and our team will get back to you.</p></div><div><h2>CONTACT FORM</h2>{sent && <p className="form-success" role="status">Thanks for contacting us. We&apos;ll get back to you as soon as possible.</p>}<form onSubmit={submit}><label>Name<input name="name" autoComplete="name" /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label><label>Comment<textarea name="comment" rows={8} required /></label><button type="submit">Send</button></form></div></section></StoreShell>
}
