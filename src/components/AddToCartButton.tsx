'use client'

import React from 'react'
import { useCart } from '@/components/CartProvider'
import { Product } from '@/lib/supabase'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = React.useState(false)

  const handleClick = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full rounded-lg px-6 py-4 font-heading font-semibold flex items-center justify-center gap-2 transition-colors ${
        added
          ? 'bg-coral-dark text-white'
          : 'bg-sage text-white hover:bg-sage-dark'
      }`}
    >
      <ShoppingCart className="h-5 w-5" />
      {added ? 'Added to Cart' : 'Add to Cart'}
    </button>
  )
}
