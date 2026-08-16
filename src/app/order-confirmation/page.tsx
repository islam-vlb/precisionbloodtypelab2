import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function OrderConfirmationPage() {
  return (
    <div className="bg-warm min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white border border-graphite/10 p-8 sm:p-12">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-4">Thank You for Your Order!</h1>
          <p className="text-graphite/70 mb-8">Your order has been placed successfully. We&apos;ll send you a confirmation email shortly.</p>
          <p className="text-sm text-graphite/60 mb-8">Charges will appear as PrecisionMetabolismLab on your statement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-block border border-graphite/20 px-8 py-3 font-heading font-semibold text-graphite hover:border-copper hover:text-copper transition-colors">
              Return to Home
            </Link>
            <Link href="/" className="inline-block border border-graphite/10 px-8 py-3 font-heading font-semibold text-graphite/70 hover:text-graphite transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
