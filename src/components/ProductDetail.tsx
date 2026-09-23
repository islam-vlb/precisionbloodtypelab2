'use client'

import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Product } from '@/lib/supabase'
import ProductPurchaseBox from '@/components/ProductPurchaseBox'

const faqs = [
  {
    q: 'What is the Smart Body Composition Scale?',
    a: 'It is a digital scale that uses bioelectrical impedance technology to provide weight and general body composition trend data, including estimated body fat percentage and BMI.',
  },
  {
    q: 'How accurate is it?',
    a: 'The scale is designed for trend tracking over time rather than precise clinical measurement. Bioelectrical readings can be affected by hydration, recent exercise, and other factors, so results are most useful when viewed as a trend rather than a single reading.',
  },
  {
    q: 'How do I use it?',
    a: 'Place the scale on a hard, flat surface, step on with bare feet, and stand still. Your weight and body composition estimates will appear on the display within seconds.',
  },
  {
    q: 'Does it come with a battery?',
    a: 'Yes. A battery is included, so the scale is ready to use right out of the box.',
  },
  {
    q: "Who shouldn't use this scale?",
    a: 'This device should not be used by individuals with pacemakers or other implanted medical devices. Consult a qualified healthcare provider with any questions about whether this product is right for you.',
  },
]

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedVariantId, setSelectedVariantId] = React.useState(product.defaultVariantId)
  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0]

  return (
    <div className="bg-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="text-copper hover:underline">Home</Link></li>
            <li className="text-graphite/30">/</li>
            <li className="text-graphite/60">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24 aspect-square bg-warm-dark border border-graphite/10 relative overflow-hidden">
              <img
                src={selectedVariant.image}
                alt={`${product.name} — ${selectedVariant.label}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">PRODUCT</div>
              <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">FIG. 01</div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">
                Wellness Device
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-copper mb-6">${selectedVariant.price.toFixed(2)}</p>
              <p className="text-graphite/70 leading-relaxed mb-8">{product.description}</p>

              <div className="mb-10">
                <ProductPurchaseBox
                  product={product}
                  selectedVariantId={selectedVariantId}
                  onSelectVariant={setSelectedVariantId}
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">What&apos;s Included</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className="h-5 w-5 text-copper flex-shrink-0 mt-0.5" />
                        <span className="text-graphite/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">Important Information</h2>
                  <div className="bg-warm-dark border border-graphite/10 p-6">
                    <p className="text-sm text-graphite/80 leading-relaxed">{product.medicalDisclaimer}</p>
                  </div>
                </div>

                <div id="faq">
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq) => (
                      <div key={faq.q}>
                        <h3 className="font-heading text-sm font-bold text-graphite mb-2">{faq.q}</h3>
                        <p className="text-sm text-graphite/70">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">Shipping & Returns</h2>
                  <p className="text-sm text-graphite/70 leading-relaxed">
                    Shipping is included at no additional charge with every order.
                    We accept returns within 30 days of the date received. Please see our Refund Policy for full details.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
