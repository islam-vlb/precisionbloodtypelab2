'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product, ProductVariant } from '@/lib/supabase'

export interface CartItem {
  cartItemId: string
  productId: number
  productSlug: string
  productName: string
  productCategory: Product['category']
  variantId: string
  variantLabel: string
  price: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void
  removeItem: (cartItemId: string) => void
  updateQuantity: (cartItemId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('cart')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch {
        setItems([])
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items, mounted])

  const addItem = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    const cartItemId = `${product.id}-${variant.id}`
    setItems(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId)
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...prev,
        {
          cartItemId,
          productId: product.id,
          productSlug: product.slug,
          productName: product.name,
          productCategory: product.category,
          variantId: variant.id,
          variantLabel: variant.label,
          price: variant.price,
          quantity,
        },
      ]
    })
  }

  const removeItem = (cartItemId: string) => {
    setItems(prev => prev.filter(item => item.cartItemId !== cartItemId))
  }

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemId)
      return
    }
    setItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => setItems([])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal, total }}
    >
      {children}
    </CartContext.Provider>
  )
}
