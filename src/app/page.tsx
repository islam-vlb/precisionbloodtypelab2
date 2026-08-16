'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingCart, Check, ArrowRight, Activity, Beaker, Microscope, Heart } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'

const mainProduct = products[0]
const supplement = products[1]

export default function HomePage() {
  const { addItem } = useCart()

  const features = [
    'Measures key hormones associated with metabolism and energy',
    'Simple at-home sample collection with included instructions',
    'Discreet packaging for shipping and storage',
    'Results available quickly',
    'Results may be shared with your physician for follow-up guidance',
    'For informational and wellness purposes',
  ]

  const steps = [
    {
      num: '01',
      title: 'COLLECT',
      desc: 'Use the included kit to collect your sample at home following the simple instructions.',
    },
    {
      num: '02',
      title: 'SEND',
      desc: 'Place your sample in the prepaid return envelope and drop it off at any USPS location.',
    },
    {
      num: '03',
      title: 'REVIEW',
      desc: 'Access your results online privately and share them with your physician if desired.',
    },
  ]

  return (
    <div>
      {/* 01 — HERO */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest text-copper uppercase mb-6">
                At-Home Metabolic Screening
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-graphite leading-[1.1] mb-8">
                Understand What Shapes Your Metabolism.
              </h1>
              <p className="text-lg text-graphite/70 leading-relaxed mb-10 max-w-xl">
                {mainProduct.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#flagship"
                  className="inline-flex items-center gap-2 bg-copper px-8 py-4 font-heading font-semibold text-white hover:bg-copper-dark transition-colors"
                >
                  Explore the Test Kit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 border border-graphite/20 px-8 py-4 font-heading font-semibold text-graphite hover:border-copper hover:text-copper transition-colors"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-warm-dark border border-graphite/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="h-32 w-32 text-copper" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="60" cy="60" r="50" />
                    <circle cx="60" cy="60" r="35" />
                    <circle cx="60" cy="60" r="20" />
                    <line x1="60" y1="10" x2="60" y2="110" />
                    <line x1="10" y1="60" x2="110" y2="60" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">FIG. 01</div>
                <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">METABOLIC SCREENING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — SCIENCE STRIP */}
      <section className="bg-white border-y border-graphite/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'METABOLISM', icon: Activity },
              { label: 'ENERGY', icon: Beaker },
              { label: 'HORMONES', icon: Microscope },
              { label: 'WELLNESS', icon: Heart },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <item.icon className="h-8 w-8 text-copper mb-4" />
                <span className="text-xs font-medium tracking-widest text-graphite/80 uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — FLAGSHIP PRODUCT */}
      <section id="flagship" className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-warm-dark border border-graphite/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="h-32 w-32 text-copper/40" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <rect x="20" y="20" width="80" height="80" />
                    <rect x="30" y="30" width="60" height="60" />
                    <line x1="20" y1="20" x2="100" y2="100" />
                    <line x1="100" y1="20" x2="20" y2="100" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">PRODUCT</div>
                <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">FIG. 02</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">
                Flagship Product
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-4">
                {mainProduct.name}
              </h2>
              <p className="text-2xl font-bold text-copper mb-6">${mainProduct.price.toFixed(2)}</p>
              <p className="text-graphite/70 leading-relaxed mb-8">
                {mainProduct.description}
              </p>
              <ul className="space-y-3 mb-10">
                {features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="h-5 w-5 text-copper flex-shrink-0 mt-0.5" />
                    <span className="text-graphite/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => addItem(mainProduct)}
                  className="inline-flex items-center gap-2 bg-copper px-6 py-3 font-heading font-semibold text-white hover:bg-copper-dark transition-colors"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
                <Link
                  href={`/product/${mainProduct.slug}`}
                  className="inline-flex items-center gap-2 border border-graphite/20 px-6 py-3 font-heading font-semibold text-graphite hover:border-copper hover:text-copper transition-colors"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — HOW IT WORKS */}
      <section id="how-it-works" className="bg-white border-y border-graphite/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">Process</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-graphite">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-heading text-4xl font-bold text-copper/20">{step.num}</span>
                  <div className="h-px flex-1 bg-graphite/10" />
                </div>
                <h3 className="font-heading text-xl font-bold text-graphite mb-3">{step.title}</h3>
                <p className="text-graphite/70 leading-relaxed">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-graphite/10 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — LAB NOTE / EDUCATIONAL SECTION */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-warm-dark border border-graphite/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="h-32 w-32 text-lab/30" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <circle cx="60" cy="60" r="50" />
                    <circle cx="60" cy="60" r="35" />
                    <circle cx="60" cy="60" r="20" />
                    <line x1="60" y1="10" x2="60" y2="110" />
                    <line x1="10" y1="60" x2="110" y2="60" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">FIG. 03</div>
                <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">EDUCATIONAL</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">
                Lab Note
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-6">
                Your Metabolism, Explained Simply.
              </h2>
              <div className="space-y-4 text-graphite/70 leading-relaxed">
                <p>
                  Metabolism refers to the chemical processes that occur within a living organism to maintain life. 
                  Hormones play a key role in regulating these processes, influencing energy, weight, and overall wellness.
                </p>
                <p>
                  This at-home test measures key hormones commonly associated with metabolism, energy, and weight — 
                  including cortisol — using a simple at-home sample collection.
                </p>
                <p>
                  Results are provided for informational purposes and can be shared with a healthcare provider 
                  for further guidance. This product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — WELLNESS PRODUCT */}
      <section className="bg-white border-t border-graphite/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">
                Wellness Support
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-4">
                {supplement.name}
              </h2>
              <p className="text-2xl font-bold text-copper mb-6">${supplement.price.toFixed(2)}</p>
              <p className="text-graphite/70 leading-relaxed mb-8">
                {supplement.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/product/${supplement.slug}`}
                  className="inline-flex items-center gap-2 border border-graphite/20 px-6 py-3 font-heading font-semibold text-graphite hover:border-copper hover:text-copper transition-colors"
                >
                  Explore Wellness
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-warm-dark border border-graphite/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="h-32 w-32 text-lab/30" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <rect x="20" y="20" width="80" height="80" />
                    <rect x="30" y="30" width="60" height="60" />
                    <line x1="20" y1="20" x2="100" y2="100" />
                    <line x1="100" y1="20" x2="20" y2="100" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">WELLNESS</div>
                <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">FIG. 04</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
