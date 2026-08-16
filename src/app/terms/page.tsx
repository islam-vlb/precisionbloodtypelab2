import Link from 'next/link'
import { products } from '@/lib/supabase'
import { BUSINESS } from '@/lib/config'

export default function TermsPage() {
  return (
    <div className="bg-warm min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none text-graphite/80 space-y-8">
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">1. Introduction</h2>
            <p>These Terms & Conditions govern your use of PrecisionMetabolismLab.com, operated by {BUSINESS.name}.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">2. Products</h2>
            <p>We sell the following products:</p>
            <ul className="list-disc pl-6 space-y-2">
              {products.map((p) => (
                <li key={p.id}>
                  <span className="font-semibold">{p.name}</span> — ${p.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">3. Pricing</h2>
            <p>All prices are listed in US Dollars and are subject to change without notice. Shipping is $7.95 per order.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">4. Order Acceptance</h2>
            <p>We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing, or suspected fraud.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">5. Payment</h2>
            <p>We accept Visa and Mastercard. Payment is processed securely at checkout.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">6. Shipping</h2>
            <p>Orders are shipped via USPS Priority Mail for $7.95. Shipping is limited to the United States. Please see our Shipping Policy for full details.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">7. Returns</h2>
            <p>Returns are accepted within 30 days of the date received. Please see our Refund Policy for full details.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">8. Medical Disclaimer</h2>
            <p>The At-Home Metabolism Test Kit is intended for general wellness and informational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">9. Supplement Disclaimer</h2>
            <p>The Daily Energy & Vitality Support is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">10. Age Requirement</h2>
            <p>Individuals under 18 are not permitted to purchase from this site.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">11. Privacy</h2>
            <p>Please review our Privacy Policy for information on how we collect and use your personal information.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">12. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Oklahoma, United States.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">13. Contact</h2>
            <p>For questions about these terms, contact us at {BUSINESS.email}.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">14. Changes</h2>
            <p>We reserve the right to update these terms at any time. Changes take effect immediately upon posting.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
