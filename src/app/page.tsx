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
                <img
                  src="/images/hero-medical-lab.jpg"
                  alt="Medical laboratory professional analyzing samples"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">FIG. 01</div>
                <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">LABORATORY ANALYSIS</div>
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
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="400" fill="#f0efeb"/>
                  <rect x="80" y="60" width="240" height="280" rx="8" fill="#1a1a1a" stroke="#c67b4e" strokeWidth="2"/>
                  <rect x="100" y="80" width="200" height="60" rx="4" fill="#c67b4e" opacity="0.2"/>
                  <text x="200" y="118" textAnchor="middle" fill="#c67b4e" fontSize="14" fontFamily="sans-serif" fontWeight="bold">METABOLISM</text>
                  <text x="200" y="135" textAnchor="middle" fill="#c67b4e" fontSize="10" fontFamily="sans-serif" opacity="0.8">TEST KIT</text>
                  <rect x="120" y="160" width="160" height="100" rx="4" fill="#faf9f7" stroke="#c67b4e" strokeWidth="1" opacity="0.3"/>
                  <circle cx="160" cy="200" r="20" stroke="#c67b4e" strokeWidth="1" opacity="0.5"/>
                  <circle cx="200" cy="200" r="20" stroke="#c67b4e" strokeWidth="1" opacity="0.5"/>
                  <circle cx="240" cy="200" r="20" stroke="#c67b4e" strokeWidth="1" opacity="0.5"/>
                  <rect x="140" y="280" width="120" height="40" rx="4" fill="#c67b4e" opacity="0.3"/>
                  <text x="200" y="305" textAnchor="middle" fill="#1a1a1a" fontSize="12" fontFamily="sans-serif" fontWeight="bold">$54.95</text>
                  <text x="200" y="365" textAnchor="middle" fill="#c67b4e" fontSize="9" fontFamily="monospace" opacity="0.6">AT-HOME METABOLISM TEST KIT</text>
                </svg>
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
                <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#1a1a1a"/>
                  <rect x="40" y="30" width="320" height="240" rx="4" stroke="#4a7c59" strokeWidth="1" opacity="0.4"/>
                  <rect x="60" y="50" width="280" height="200" rx="2" stroke="#4a7c59" strokeWidth="0.5" opacity="0.3"/>
                  <path d="M100 150 L200 80 L300 150 L200 220 Z" stroke="#4a7c59" strokeWidth="1.5" opacity="0.6" fill="none"/>
                  <circle cx="200" cy="150" r="40" stroke="#4a7c59" strokeWidth="1" opacity="0.5"/>
                  <circle cx="200" cy="150" r="25" stroke="#4a7c59" strokeWidth="0.5" opacity="0.4"/>
                  <line x1="200" y1="110" x2="200" y2="190" stroke="#4a7c59" strokeWidth="0.5" opacity="0.4"/>
                  <line x1="160" y1="150" x2="240" y2="150" stroke="#4a7c59" strokeWidth="0.5" opacity="0.4"/>
                  <circle cx="200" cy="150" r="6" fill="#4a7c59" opacity="0.8"/>
                  <line x1="140" y1="130" x2="260" y2="170" stroke="#4a7c59" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="140" y1="170" x2="260" y2="130" stroke="#4a7c59" strokeWidth="0.5" opacity="0.3"/>
                  <rect x="80" y="230" width="240" height="30" rx="2" stroke="#4a7c59" strokeWidth="0.5" opacity="0.3"/>
                  <text x="200" y="250" textAnchor="middle" fill="#4a7c59" fontSize="10" fontFamily="monospace" opacity="0.6">HORMONE ANALYSIS</text>
                </svg>
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
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="400" fill="#f0efeb"/>
                  <rect x="120" y="60" width="160" height="280" rx="12" fill="#1a1a1a" stroke="#4a7c59" strokeWidth="2"/>
                  <rect x="140" y="40" width="120" height="40" rx="8" fill="#1a1a1a" stroke="#4a7c59" strokeWidth="1.5"/>
                  <rect x="160" y="50" width="80" height="20" rx="4" fill="#4a7c59" opacity="0.3"/>
                  <rect x="150" y="120" width="100" height="140" rx="6" fill="#faf9f7" stroke="#4a7c59" strokeWidth="1" opacity="0.4"/>
                  <circle cx="200" cy="170" r="30" stroke="#4a7c59" strokeWidth="1.5" opacity="0.6"/>
                  <circle cx="200" cy="170" r="20" stroke="#4a7c59" strokeWidth="1" opacity="0.4"/>
                  <path d="M200 150 L200 190 M180 170 L220 170" stroke="#4a7c59" strokeWidth="1" opacity="0.5"/>
                  <rect x="170" y="290" width="60" height="30" rx="4" fill="#4a7c59" opacity="0.2"/>
                  <text x="200" y="310" textAnchor="middle" fill="#1a1a1a" fontSize="10" fontFamily="sans-serif" fontWeight="bold">60 CAPS</text>
                  <text x="200" y="365" textAnchor="middle" fill="#4a7c59" fontSize="9" fontFamily="monospace" opacity="0.6">DAILY ENERGY & VITALITY</text>
                </svg>
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
