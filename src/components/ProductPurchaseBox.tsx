'use client'

import React from 'react'
import { Product, ProductVariant, getDefaultVariant } from '@/lib/supabase'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { BUSINESS } from '@/lib/config'

function groupBySection(variants: ProductVariant[]) {
  const sections: { section: string; variants: ProductVariant[] }[] = []
  for (const variant of variants) {
    let group = sections.find((s) => s.section === variant.section)
    if (!group) {
      group = { section: variant.section, variants: [] }
      sections.push(group)
    }
    group.variants.push(variant)
  }
  return sections
}

interface ProductPurchaseBoxProps {
  product: Product
  selectedVariantId: string
  onSelectVariant: (variantId: string) => void
}

export default function ProductPurchaseBox({ product, selectedVariantId, onSelectVariant }: ProductPurchaseBoxProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = React.useState(1)
  const [added, setAdded] = React.useState(false)

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) ?? getDefaultVariant(product)

  const sections = groupBySection(product.variants)

  const subtotal = selectedVariant.price * quantity
  const total = subtotal

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-8 w-full">
      <div className="space-y-6">
        {sections.map((group) => (
          <div key={group.section}>
            <h3 className="text-xs font-semibold tracking-widest text-lab uppercase mb-3">
              {group.section}
            </h3>
            <div className="space-y-2">
              {group.variants.map((variant) => {
                const isSelected = variant.id === selectedVariantId
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => onSelectVariant(variant.id)}
                    className={`w-full flex items-center justify-between gap-4 border px-4 py-3 text-left transition-colors ${
                      isSelected
                        ? 'border-lab bg-lab/5'
                        : 'border-graphite/15 bg-white hover:border-lab/50'
                    }`}
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span
                        className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? 'border-lab' : 'border-graphite/30'
                        }`}
                      >
                        {isSelected && <span className="h-2 w-2 rounded-full bg-lab" />}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-graphite">
                          {variant.label}
                        </span>
                        {variant.detail && (
                          <span className="block text-xs text-graphite/60 mt-0.5">{variant.detail}</span>
                        )}
                        {variant.isBundle && (
                          <span className="mt-1 inline-block rounded-sm bg-copper/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-copper">
                            Bundle Offer
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="flex-shrink-0 font-semibold text-graphite">
                      ${variant.price.toFixed(2)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-graphite">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-8 w-8 items-center justify-center border border-graphite/20 text-graphite hover:border-lab hover:text-lab transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center font-semibold text-graphite">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex h-8 w-8 items-center justify-center border border-graphite/20 text-graphite hover:border-lab hover:text-lab transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2 text-sm border-t border-graphite/10 pt-4">
        <div className="flex justify-between">
          <span className="text-graphite/70">Subtotal ({quantity} item{quantity > 1 ? 's' : ''})</span>
          <span className="font-semibold text-graphite">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-graphite/70">Shipping</span>
          <span className="font-semibold text-graphite">Included</span>
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
            ? 'bg-lab text-white border-lab'
            : 'bg-transparent text-graphite border-graphite/20 hover:border-lab hover:text-lab'
        }`}
      >
        <ShoppingCart className="h-5 w-5" />
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>

      <p className="text-xs text-graphite/60">Charges will appear as {BUSINESS.descriptor} on your statement</p>
    </div>
  )
}
