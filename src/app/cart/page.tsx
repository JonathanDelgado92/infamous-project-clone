import Link from 'next/link'
import { StoreShell } from '@/components/StoreShell'
export default function CartPage() { return <StoreShell><section className="empty-state page-width"><h1>Your cart is empty</h1><Link className="button" href="/collections/all">Continue shopping</Link><h2>Have an account?</h2><p><span className="disabled-link">Log in</span> to check out faster.</p></section></StoreShell> }
