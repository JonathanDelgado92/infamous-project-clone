'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'infamous_cart_v1'

export type CartLine = {
  key: string
  slug: string
  title: string
  storyNumber: string
  color: string
  price: number
  image: string
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  addLine: (line: Omit<CartLine, 'quantity'>, quantity: number) => void
  removeLine: (key: string) => void
  setQuantity: (key: string, quantity: number) => void
  clear: () => void
  totalUnits: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Synchronizes React state from the external localStorage source on mount;
  // starting empty keeps the client's first render matching the server-rendered HTML.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (Array.isArray(parsed)) setLines(parsed)
      } catch {
        // ignore corrupted cart data
      }
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines, hydrated])

  const addLine: CartContextValue['addLine'] = (line, quantity) => {
    setLines((current) => {
      const existing = current.find((item) => item.key === line.key)
      if (existing) {
        return current.map((item) => (item.key === line.key ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...current, { ...line, quantity }]
    })
  }

  const removeLine = (key: string) => setLines((current) => current.filter((item) => item.key !== key))

  const setQuantity = (key: string, quantity: number) => {
    if (quantity < 1) return
    setLines((current) => current.map((item) => (item.key === key ? { ...item, quantity } : item)))
  }

  const clear = () => setLines([])

  const totalUnits = lines.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = lines.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <CartContext.Provider value={{ lines, addLine, removeLine, setQuantity, clear, totalUnits, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
