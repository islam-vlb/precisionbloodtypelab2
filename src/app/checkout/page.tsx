'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { BUSINESS } from '@/lib/config'

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
]

export default function CheckoutPage() {
  const { items, subtotal } = useCart()
  const [agreed, setAgreed] = useState(false)
  const shipping = 7.95
  const total = subtotal + (items.length > 0 ? shipping : 0)
  const hasSupplement = items.some((item) => item.product.category === 'supplement')

  if (items.length === 0) {
    return (
      <div className="bg-warm min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading text-3xl font-bold text-graphite mb-4">Your Cart is Empty</h1>
          <p className="text-graphite/70 mb-8">Add items to your cart before checking out.</p>
          <Link href="/" className="inline-block border border-graphite/20 px-8 py-3 font-heading font-semibold text-graphite hover:border-copper hover:text-copper transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-warm min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-3xl font-bold text-graphite mb-8">Checkout</h1>
        <form className="grid grid-cols-1 lg:grid-cols-3 gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-graphite/10 p-6">
              <h2 className="font-heading text-xl font-bold text-graphite mb-4">Billing Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">First Name</label>
                  <input type="text" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">Last Name</label>
                  <input type="text" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-graphite mb-1">Address</label>
                  <input type="text" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">City</label>
                  <input type="text" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">State</label>
                  <select required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none">
                    <option value="">Select state</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">ZIP Code</label>
                  <input type="text" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">Country</label>
                  <input type="text" value="United States" readOnly className="w-full border border-graphite/20 px-4 py-2 bg-warm-dark" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-graphite mb-1">Email</label>
                  <input type="email" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-graphite mb-1">Phone</label>
                  <input type="tel" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-graphite/10 p-6">
              <h2 className="font-heading text-xl font-bold text-graphite mb-4">Payment</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-graphite mb-1">Expiry</label>
                    <input type="text" placeholder="MM/YY" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-graphite mb-1">CVC</label>
                    <input type="text" placeholder="123" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <svg viewBox="0 0 50 32" className="h-8 w-auto rounded" aria-label="Visa" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="32" rx="5" fill="#1A1F71"/>
                  <text x="25" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">VISA</text>
                </svg>
                <svg viewBox="0 0 50 32" className="h-8 w-auto rounded" aria-label="Mastercard" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="32" rx="5" fill="#1C1C1C"/>
                  <circle cx="19" cy="16" r="11" fill="#EB001B"/>
                  <circle cx="31" cy="16" r="11" fill="#F79E1B"/>
                  <path d="M25 7.5a11 11 0 0 1 0 17A11 11 0 0 1 25 7.5z" fill="#FF5F00"/>
                </svg>
              </div>
            </div>

            <div className="bg-white border border-graphite/10 p-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-graphite/20 text-copper focus:ring-copper"
                />
                <span className="text-sm text-graphite/80">
                  I have read and agree to the{' '}
                  <Link href="/terms" className="font-semibold text-copper underline">Terms & Conditions</Link>,{' '}
                  <Link href="/privacy" className="font-semibold text-copper underline">Privacy Policy</Link>, and{' '}
                  <Link href="/refund" className="font-semibold text-copper underline">Refund Policy</Link>.
                </span>
              </label>
              <p className="mt-3 text-sm text-graphite/80">I agree to be billed <span className="font-semibold">${total.toFixed(2)}</span>.</p>
              <p className="mt-1 text-sm text-graphite/80">Your credit card will be charged <span className="font-semibold">${total.toFixed(2)}</span>.</p>
              <p className="mt-1 text-xs text-graphite/60">Charges will appear as PrecisionMetabolismLab on your statement</p>
              <p className="mt-2 text-xs text-copper">⚠️ Individuals under 18 are not permitted to purchase</p>
              <p className="mt-1 text-xs text-graphite/60">Personal information will not be shared with Third Parties</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-graphite/10 p-6 sticky top-24">
              <h2 className="font-heading text-xl font-bold text-graphite mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <span className="text-graphite/70">{item.product.name} × {item.quantity}</span>
                    <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-graphite/10 pt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-graphite/70">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-graphite/70">Shipping</span>
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base pt-2 border-t border-graphite/10">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                disabled={!agreed}
                className={`mt-6 w-full border px-6 py-3 font-heading font-semibold transition-colors ${
                  agreed
                    ? 'bg-copper text-white border-copper hover:bg-copper-dark'
                    : 'bg-graphite/10 text-graphite/50 border-graphite/10 cursor-not-allowed'
                }`}
              >
                Place Order
              </button>
              {!agreed && (
                <p className="mt-2 text-xs text-center text-graphite/60">Please agree to the terms to place your order.</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
