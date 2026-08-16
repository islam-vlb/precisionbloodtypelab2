'use client'

import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { Trash2, Plus, Minus } from 'lucide-react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()
  const shipping = 7.95
  const total = subtotal + (items.length > 0 ? shipping : 0)

  if (items.length === 0) {
    return (
      <div className="bg-warm min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading text-3xl font-bold text-graphite mb-4">Your Cart is Empty</h1>
          <p className="text-graphite/70 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link href="/" className="inline-block border border-graphite/20 px-8 py-3 font-heading font-semibold text-graphite hover:border-copper hover:text-copper transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-warm min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-3xl font-bold text-graphite mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white border border-graphite/10 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-graphite">{item.product.name}</h3>
                    <p className="text-sm text-graphite/70">${item.product.price.toFixed(2)} each</p>
                    {item.product.category === 'supplement' && (
                      <p className="mt-2 text-xs text-copper">
                        These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center border border-graphite/20 text-graphite/70 hover:border-copper hover:text-copper transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center border border-graphite/20 text-graphite/70 hover:border-copper hover:text-copper transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-semibold text-graphite min-w-[80px] text-right">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-graphite/40 hover:text-copper transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-graphite/10 p-6 sticky top-24">
              <h2 className="font-heading text-xl font-bold text-graphite mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-graphite/70">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-graphite/70">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-graphite/10 pt-3 text-base">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="mt-6 block w-full border border-graphite/20 px-6 py-3 text-center font-heading font-semibold text-graphite hover:border-copper hover:text-copper transition-colors"
              >
                Proceed to Checkout
              </Link>
              <Link
                href="/"
                className="mt-3 block w-full border border-graphite/10 px-6 py-3 text-center font-heading font-semibold text-graphite/70 hover:text-graphite transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
