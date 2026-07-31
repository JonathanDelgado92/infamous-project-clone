import { ProductDetail } from '@/components/ProductDetail'
import { StoreShell } from '@/components/StoreShell'
import { products } from '@/lib/store-data'
export default function Page() { return <StoreShell><ProductDetail product={products[5]} /></StoreShell> }
