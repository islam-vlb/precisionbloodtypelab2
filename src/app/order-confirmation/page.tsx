import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function OrderConfirmationPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-espresso mb-4">Thank You for Your Order!</h1>
          <p className="text-espresso/70 mb-8">Your order has been placed successfully. We&apos;ll send you a confirmation email shortly.</p>
          <p className="text-sm text-espresso/60 mb-8">Charges will appear as PrecisionMetabolismLab on your statement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-block rounded-lg bg-sage px-8 py-3 font-heading font-semibold text-white hover:bg-sage-dark transition-colors">
              Return to Home
            </Link>
            <Link href="/" className="inline-block rounded-lg border-2 border-sage px-8 py-3 font-heading font-semibold text-sage hover:bg-sage hover:text-white transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
