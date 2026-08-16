import { BUSINESS } from '@/lib/config'

export default function PrivacyPage() {
  return (
    <div className="bg-warm min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-graphite/80 space-y-8">
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">1. Information We Collect</h2>
            <p>We collect personal information such as name, address, email, and payment information when you place an order.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">2. How We Use Your Information</h2>
            <p>We use your information to process orders, communicate order status, and improve our services.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">3. Third Parties</h2>
            <p>Personal information will not be shared with Third Parties except as necessary to process payments and ship orders.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">5. Cookies</h2>
            <p>We may use cookies to enhance your browsing experience and analyze site traffic.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">6. Test Results</h2>
            <p>Your test results and personal health information are kept confidential and are only accessible to you.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">7. Data Retention</h2>
            <p>We retain your information only as long as necessary to fulfill the purposes outlined in this policy.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">8. Third-Party Services</h2>
            <p>We may use third-party services for payment processing and shipping. These services have their own privacy policies.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">9. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information by contacting us at {BUSINESS.email}.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">10. Children&apos;s Privacy</h2>
            <p>Our services are not intended for individuals under 18. We do not knowingly collect personal information from children.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">11. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-graphite">12. Contact</h2>
            <p>For privacy inquiries, contact us at {BUSINESS.email}.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
