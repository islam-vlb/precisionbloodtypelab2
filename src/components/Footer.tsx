import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-graphite text-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#c67b4e" strokeWidth="2" fill="none"/>
                <path d="M20 8C20 8 12 14 12 22C12 26 15 30 20 32C25 30 28 26 28 22C28 14 20 8 20 8Z" fill="#c67b4e"/>
              </svg>
              <span className="font-heading font-bold text-lg text-warm">PrecisionMetabolismLab</span>
            </Link>
            <p className="text-sm text-warm/70 mb-2">{BUSINESS.descriptor}</p>
            <p className="text-sm text-warm/70">{BUSINESS.address}</p>
            <p className="text-sm text-warm/70 mt-2">{BUSINESS.email}</p>
            <p className="text-sm text-warm/70">{BUSINESS.phone}</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-widest mb-6 text-warm/90">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-warm/70 hover:text-copper transition-colors">At-Home Metabolism Test Kit</Link></li>
              <li><Link href="/product/daily-energy-vitality-support" className="text-sm text-warm/70 hover:text-copper transition-colors">Daily Energy & Vitality Support</Link></li>
              <li><Link href="/ingredients" className="text-sm text-warm/70 hover:text-copper transition-colors">Ingredients</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-widest mb-6 text-warm/90">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-warm/70 hover:text-copper transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-warm/70 hover:text-copper transition-colors">Contact</Link></li>
              <li><Link href="/fulfillment-address" className="text-sm text-warm/70 hover:text-copper transition-colors">Fulfillment Address</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-widest mb-6 text-warm/90">Policies</h3>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-sm text-warm/70 hover:text-copper transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-sm text-warm/70 hover:text-copper transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-sm text-warm/70 hover:text-copper transition-colors">Refund Policy</Link></li>
              <li><Link href="/shipping" className="text-sm text-warm/70 hover:text-copper transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-warm/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <p className="text-sm text-warm/70">
                Charges will appear as PrecisionMetabolismLab on your statement
              </p>
              <p className="text-sm text-warm/70">
                Personal information will not be shared with Third Parties
              </p>
            </div>
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
          <div className="mt-8 pt-8 border-t border-warm/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-warm/50">
              © 2026 {BUSINESS.name} — PrecisionMetabolismLab. All rights reserved.
            </p>
            <p className="text-xs text-warm/50">
              ⚠️ Individuals under 18 are not permitted to purchase
            </p>
          </div>
          <div className="mt-4 text-xs text-warm/40 text-center">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </div>
        </div>
      </div>
    </footer>
  )
}
