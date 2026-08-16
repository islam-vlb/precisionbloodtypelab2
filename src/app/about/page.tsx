import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-espresso mb-8">About TrevCore LLC</h1>
        <div className="prose prose-lg max-w-none text-espresso/80 space-y-6">
          <p>
            TrevCore LLC is the company behind PrecisionMetabolismLab. We are based in Tulsa, Oklahoma and operate this website to provide informational metabolism test kits and health supplements to customers across the United States.
          </p>
          <p>
            Our mission is to make basic metabolic information accessible and convenient. The At-Home Metabolism Test Kit allows individuals to measure key hormones associated with metabolism and energy from the privacy of their home using a simple at-home sample collection.
          </p>
          <p>
            We also offer the Daily Energy & Vitality Support, a daily supplement formulated with B-vitamins, iodine, and adaptogenic herbs that may help support everyday energy levels and overall vitality as part of a healthy lifestyle.
          </p>
          <p>
            TrevCore LLC is committed to clear communication, accurate product information, and responsible customer service. All charges appear as PrecisionMetabolismLab on your statement.
          </p>
          <div className="bg-cream-dark rounded-lg p-6 border border-gray-200 mt-8">
            <h2 className="font-heading text-xl font-bold text-espresso mb-2">Business Information</h2>
            <p className="text-sm text-espresso/80">{BUSINESS.name}</p>
            <p className="text-sm text-espresso/80">{BUSINESS.address}</p>
            <p className="text-sm text-espresso/80 mt-2">{BUSINESS.email}</p>
            <p className="text-sm text-espresso/80">{BUSINESS.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
