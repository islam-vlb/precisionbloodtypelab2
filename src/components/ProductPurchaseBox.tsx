'use client'

import React, { useState } from 'react'
import { Product } from '@/lib/supabase'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import { useCart } from '@/components/CartProvider'

const SHIPPING = 7.95

export default function ProductPurchaseBox({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = React.useState(1)
  const [added, setAdded] = React.useState(false)

  const unitPrice = product.price
  const subtotal = unitPrice * quantity
  const shipping = quantity > 0 ? SHIPPING : 0
  const total = subtotal + shipping

  const handleAddToCart = () => {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-graphite">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-8 w-8 items-center justify-center border border-graphite/20 text-graphite hover:border-copper hover:text-copper transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center font-semibold text-graphite">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex h-8 w-8 items-center justify-center border border-graphite/20 text-graphite hover:border-copper hover:text-copper transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-graphite/70">Subtotal ({quantity} item{quantity > 1 ? 's' : ''})</span>
          <span className="font-semibold text-graphite">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-graphite/70">Shipping</span>
          <span className="font-semibold text-graphite">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-graphite/10 pt-2 text-base">
          <span className="font-bold text-graphite">Total</span>
          <span className="font-bold text-copper">${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full border px-6 py-4 font-heading font-semibold flex items-center justify-center gap-2 transition-colors ${
          added
            ? 'bg-copper text-white border-copper'
            : 'bg-transparent text-graphite border-graphite/20 hover:border-copper hover:text-copper'
        }`}
      >
        <ShoppingCart className="h-5 w-5" />
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>

      <p className="text-xs text-graphite/60">Charges will appear as PrecisionMetabolismLab on your statement</p>
    </div>
  )
}
