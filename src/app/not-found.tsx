import Link from 'next/link'
import { StoreShell } from '@/components/StoreShell'
export default function NotFound() { return <StoreShell><section className="empty-state page-width"><p>404</p><h1>Page not found</h1><Link className="button" href="/collections/all">Continue shopping</Link></section></StoreShell> }
