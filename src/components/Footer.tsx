import Link from 'next/link'
import { BUSINESS } from '@/lib/config'
import { products } from '@/lib/supabase'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#F7F3EC" strokeWidth="2" fill="none"/>
                <path d="M20 8C20 8 12 14 12 22C12 26 15 30 20 32C25 30 28 26 28 22C28 14 20 8 20 8Z" fill="#F7F3EC"/>
              </svg>
              <span className="font-heading font-bold text-xl">PrecisionMetabolismLab</span>
            </Link>
            <p className="text-cream/80 text-sm font-body">
              {BUSINESS.descriptor}
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-cream">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/80 hover:text-sage transition-colors text-sm">
                  At-Home Metabolism Test Kit
                </Link>
              </li>
              <li>
                <Link href="/product/daily-energy-vitality-support" className="text-cream/80 hover:text-sage transition-colors text-sm">
                  Daily Energy & Vitality Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-cream">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-cream/80 hover:text-sage transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-cream/80 hover:text-sage transition-colors text-sm">Contact</Link></li>
              <li><Link href="/terms" className="text-cream/80 hover:text-sage transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-cream/80 hover:text-sage transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-cream/80 hover:text-sage transition-colors text-sm">Refund Policy</Link></li>
              <li><Link href="/shipping" className="text-cream/80 hover:text-sage transition-colors text-sm">Shipping Policy</Link></li>
              <li><Link href="/ingredients" className="text-cream/80 hover:text-sage transition-colors text-sm">Ingredients</Link></li>
              <li><Link href="/fulfillment-address" className="text-cream/80 hover:text-sage transition-colors text-sm">Fulfillment Address</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-cream">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-cream/80">Email: {BUSINESS.email}</li>
              <li className="text-cream/80">Phone: {BUSINESS.phone}</li>
              <li className="text-cream/80">{BUSINESS.address}</li>
            </ul>
            <p className="text-cream/80 text-xs mt-4">
              Charges will appear as {BUSINESS.descriptor} on your statement
            </p>
            <p className="text-cream/80 text-xs mt-2">
              Personal information will not be shared with Third Parties
            </p>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © 2026 {BUSINESS.name} — PrecisionMetabolismLab. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 50 32" className="h-8 w-auto rounded" aria-label="Visa" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="32" rx="5" fill="#1A1F71"/>
              <text x="25" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">VISA</text>
            </svg>
            <svg viewBox="0 0 50 32" className="h-8 w-auto rounded" aria-label="Mastercard" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="32" rx="5" fill="#1C1C1C"/>
              <circle cx="19" cy="16" r="11" fill="#EB001B"/>
              <circle cx="31" cy="16" r="11" fill="#F79E1B"/>
              <path d="M25 7.5a11 11 0 0 1 0 17A11 11 0 0 1 25 7.5z" fill="#FF5F00"/>
            </svg>
          </div>
        </div>

        <div className="mt-6 text-xs text-cream/60 text-center">
          ⚠️ Individuals under 18 are not permitted to purchase
        </div>
        <div className="mt-2 text-xs text-cream/60 text-center">
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </div>
      </div>
    </footer>
  )
}
