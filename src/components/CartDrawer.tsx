'use client'

import React from 'react'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'
import { X, Plus, Minus, ShoppingCart, Check } from 'lucide-react'
import Link from 'next/link'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, shipping, total, itemCount } = useCart()
  const [isOpen, setIsOpen] = React.useState(false)

  const supplementItems = items.filter(item => item.product.category === 'supplement')

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 hover:bg-sage/10 rounded-full transition-colors"
        aria-label="Open cart"
      >
        <ShoppingCart className="h-6 w-6 text-espresso" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-coral text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream shadow-xl z-50 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-sage/20">
              <h2 className="text-xl font-heading font-bold text-espresso">Your Cart</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-sage/10 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-12 w-12 text-sage/40 mx-auto mb-4" />
                  <p className="text-espresso/60 font-body">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.product.id} className="border-b border-sage/20 pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-heading font-semibold text-espresso">{item.product.name}</h3>
                          <p className="text-sm text-espresso/70">${item.product.price.toFixed(2)}</p>
                        </div>
                        <button onClick={() => removeItem(item.product.id)} className="p-1 hover:bg-coral/10 rounded-full transition-colors">
                          <X className="h-4 w-4 text-coral" />
                        </button>
                      </div>
                      {item.product.category === 'supplement' && item.product.fdaDisclosure && (
                        <p className="text-xs text-espresso/60 mt-1">{item.product.fdaDisclosure}</p>
                      )}
                      <div className="flex items-center gap-3 mt-3">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1 border border-sage/30 rounded hover:bg-sage/10 transition-colors">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1 border border-sage/30 rounded hover:bg-sage/10 transition-colors">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-sage/20 p-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-espresso/70">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-espresso/70">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-heading font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Link href="/checkout" onClick={() => setIsOpen(false)} className="block w-full bg-coral hover:bg-coral-dark text-white text-center py-3 rounded-lg font-heading font-semibold transition-colors">
                  Checkout
                </Link>
                <button onClick={() => setIsOpen(false)} className="block w-full text-center text-sage hover:text-sage-dark font-medium py-2">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
