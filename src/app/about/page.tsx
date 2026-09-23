import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function AboutPage() {
  return (
    <div className="bg-warm min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-8">About TrevCore LLC</h1>
        <div className="prose prose-lg max-w-none text-graphite/80 space-y-6">
          <p>
            TrevCore LLC is the company behind {BUSINESS.brandName}. We are based in Tulsa, Oklahoma and operate this website to provide wellness devices and accessories to customers across the United States.
          </p>
          <p>
            Our mission is to make everyday wellness tracking accessible and convenient. The Smart Body Composition Scale allows individuals to track weight and general body composition trends, including estimated body fat percentage and BMI, from the privacy of their home as part of a daily wellness routine.
          </p>
          <p>
            We also offer a Resistance Band Fitness Set, a general at-home fitness accessory designed to pair naturally with a daily wellness routine.
          </p>
          <p>
            TrevCore LLC is committed to clear communication, accurate product information, and responsible customer service. All charges appear as {BUSINESS.descriptor} on your statement.
          </p>
          <div className="bg-warm-dark rounded-lg p-6 border border-graphite/10 mt-8">
            <h2 className="font-heading text-xl font-bold text-graphite mb-2">Business Information</h2>
            <p className="text-sm text-graphite/80">{BUSINESS.name}</p>
            <p className="text-sm text-graphite/80">{BUSINESS.address}</p>
            <p className="text-sm text-graphite/80 mt-2">{BUSINESS.email}</p>
            <p className="text-sm text-graphite/80">{BUSINESS.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
