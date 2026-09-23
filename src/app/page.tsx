'use client'

import React from 'react'
import Link from 'next/link'
import { Check, ArrowRight, Activity, Scale, TrendingUp, Heart } from 'lucide-react'
import { products, getDefaultVariant } from '@/lib/supabase'

const mainProduct = products[0]

export default function HomePage() {
  const mainDefaultVariant = getDefaultVariant(mainProduct)
  const features = mainProduct.features

  return (
    <div>
      {/* 01 — HERO */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest text-copper uppercase mb-6">
                At-Home Wellness Tracking
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-graphite leading-[1.1] mb-8">
                Understand Your Body Composition Trends.
              </h1>
              <p className="text-lg text-graphite/70 leading-relaxed mb-10 max-w-xl">
                {mainProduct.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/product/${mainProduct.slug}`}
                  className="inline-flex items-center gap-2 bg-copper px-8 py-4 font-heading font-semibold text-white hover:bg-copper-dark transition-colors"
                >
                  View Product
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
                  src="/images/hero-scale.jpg"
                  alt="Smart body composition scale used as part of a daily wellness routine"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">FIG. 01</div>
                <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">WELLNESS TRACKING</div>
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
              { label: 'WEIGHT', icon: Scale },
              { label: 'BODY FAT %', icon: Activity },
              { label: 'TRENDS', icon: TrendingUp },
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
                <img
                  src={mainProduct.image}
                  alt={mainProduct.name}
                  className="w-full h-full object-contain"
                />
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
              <p className="text-2xl font-bold text-copper mb-6">Starting at ${mainDefaultVariant.price.toFixed(2)}</p>
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
                <Link
                  href={`/product/${mainProduct.slug}`}
                  className="inline-flex items-center gap-2 bg-copper px-6 py-3 font-heading font-semibold text-white hover:bg-copper-dark transition-colors"
                >
                  View Pricing Options
                </Link>
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
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">Process</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-6">Your {mainProduct.name}, Made Simple</h2>
            <p className="text-lg text-graphite/70 leading-relaxed">
              Simple setup. Instant readings. All from the comfort of home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              {
                number: '1',
                title: 'Choose Your Scale',
                description: `Select the ${mainProduct.name} option that's right for you.`,
              },
              {
                number: '2',
                title: 'Step On at Home',
                description: 'Place the scale on a hard, flat surface and step on with bare feet in the comfort of your home.',
              },
              {
                number: '3',
                title: 'Get an Instant Reading',
                description: 'View your weight and body composition trend estimates right on the display, with no account or outside processing required.',
              },
            ].map((step) => (
              <div key={step.number} className="border-t-2 border-copper pt-6">
                <span className="text-sm font-medium tracking-widest text-copper">0{step.number}</span>
                <h3 className="font-heading text-xl font-bold text-graphite mt-4 mb-3">{step.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{step.description}</p>
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
                  <text x="200" y="250" textAnchor="middle" fill="#4a7c59" fontSize="10" fontFamily="monospace" opacity="0.6">BODY COMPOSITION TRENDS</text>
                </svg>
                <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">FIG. 03</div>
                <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">EDUCATIONAL</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">
                Wellness Note
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-6">
                Your Body Composition, Explained Simply.
              </h2>
              <div className="space-y-4 text-graphite/70 leading-relaxed">
                <p>
                  Body composition trend tracking looks at more than the number on a scale, offering a broader
                  view of weight, estimated body fat percentage, and BMI over time.
                </p>
                <p>
                  This smart scale uses bioelectrical impedance technology to estimate these values each time
                  you step on, using a simple at-home reading with no sample collection required.
                </p>
                <p>
                  Readings are provided for trend tracking and informational purposes and can be shared with a
                  healthcare provider for further guidance. This product is not a diagnostic or medical device
                  and does not test, diagnose, or analyze any biological sample.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
