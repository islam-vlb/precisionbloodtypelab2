'use client'

import React from 'react'
import Link from 'next/link'
import { Check, ShoppingCart } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'

const mainProduct = products[0]

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
      title: 'Collect Your Sample',
      desc: 'Use the included kit to collect your sample at home following the simple instructions.',
    },
    {
      num: '02',
      title: 'Send It In',
      desc: 'Place your sample in the prepaid return envelope and drop it off at any USPS location.',
    },
    {
      num: '03',
      title: 'Review Your Results',
      desc: 'Access your results online privately and share them with your physician if desired.',
    },
  ]

  const faqs = [
    {
      q: 'What does this test measure?',
      a: 'This test measures key hormones commonly associated with metabolism, energy, and weight, including cortisol. Results are provided for informational purposes.',
    },
    {
      q: 'How do I collect my sample?',
      a: 'The kit includes simple instructions for at-home sample collection. Follow the steps carefully for the best results.',
    },
    {
      q: 'How long until I get results?',
      a: 'Results are typically available within a few days after your sample is received at the lab.',
    },
    {
      q: 'What is your return policy?',
      a: 'We accept returns within 30 days of the date received. Please see our Refund Policy for full details.',
    },
    {
      q: 'How is my information protected?',
      a: 'Personal information will not be shared with Third Parties. We only collect the information necessary to process and ship your order.',
    },
  ]

  return (
    <div>
      <section id="features" className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
                Understand Your <span className="text-sage">Metabolism</span> — At Home
              </h1>
              <div className="mt-4 h-1 w-24 bg-coral" />
              <p className="mt-6 text-lg text-espresso/80 leading-relaxed">
                {mainProduct.longDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => addItem(mainProduct)}
                  className="inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-4 font-heading font-semibold text-white hover:bg-coral-dark transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Order Your Kit
                </button>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-sage px-8 py-4 font-heading font-semibold text-sage hover:bg-sage hover:text-white transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl bg-cream-dark border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg viewBox="0 0 120 120" className="h-32 w-32 mx-auto mb-4 text-sage" fill="currentColor">
                    <path d="M60 10c-15 25-40 45-40 65 0 15 12 27 27 27 8 0 15-3 20-8 5 5 12 8 20 8 15 0 27-12 27-27 0-20-25-40-40-65z"/>
                  </svg>
                  <p className="text-sm text-gray-500 font-medium">At-Home Metabolism Test Kit — Product Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Simple At-Home Collection', 'Private Results', 'Fast Turnaround', 'Secure Checkout'].map((text) => (
              <div key={text} className="flex flex-col items-center text-center">
                <Check className="h-8 w-8 text-sage mb-2" />
                <span className="text-sm font-medium text-espresso">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-espresso text-center mb-12">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4">
                <Check className="h-6 w-6 text-sage flex-shrink-0 mt-1" />
                <p className="text-espresso/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-espresso text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <span className="font-heading text-5xl font-bold text-sage">{step.num}</span>
                <h3 className="mt-4 font-heading text-xl font-bold text-espresso">{step.title}</h3>
                <p className="mt-2 text-espresso/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-espresso text-center mb-8">
            Product Details
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-espresso/80 leading-relaxed">{mainProduct.longDescription}</p>
            <ul className="mt-6 space-y-3">
              {mainProduct.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="h-5 w-5 text-sage flex-shrink-0 mt-1" />
                  <span className="text-espresso/80">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border-2 border-sage/30 bg-cream-dark p-6">
              <p className="text-sm text-espresso/80 leading-relaxed">{mainProduct.medicalDisclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-espresso text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-heading text-lg font-bold text-espresso mb-2">{faq.q}</h3>
                <p className="text-espresso/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-6">
            Ready to understand your metabolism?
          </h2>
          <button
            onClick={() => addItem(mainProduct)}
            className="inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-4 font-heading font-semibold text-white hover:bg-coral-dark transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            Order Your Kit
          </button>
        </div>
      </section>
    </div>
  )
}
