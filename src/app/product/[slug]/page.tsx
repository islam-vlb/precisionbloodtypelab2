import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/lib/supabase'
import { Check, ShoppingCart, ArrowRight, Minus } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return notFound()

  const isSupplement = product.category === 'supplement'
  const relatedProduct = isSupplement ? products.find((p) => p.category === 'test-kit') : products.find((p) => p.category === 'supplement')

  return (
    <div className="bg-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="text-copper hover:underline">Home</Link></li>
            <li className="text-graphite/30">/</li>
            <li className="text-graphite/60">{product.name}</li>
          </ol>
        </nav>

        {!isSupplement ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="aspect-square bg-warm-dark border border-graphite/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="h-32 w-32 text-copper/40" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <rect x="20" y="20" width="80" height="80" />
                  <rect x="30" y="30" width="60" height="60" />
                  <line x1="20" y1="20" x2="100" y2="100" />
                  <line x1="100" y1="20" x2="20" y2="100" />
                </svg>
              </div>
              <div className="absolute top-4 left-4 text-xs text-graphite/30 font-mono">PRODUCT</div>
              <div className="absolute bottom-4 right-4 text-xs text-graphite/30 font-mono">FIG. 01</div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">
                {product.category === 'test-kit' ? 'Test Kit' : 'Supplement'}
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-copper mb-6">${product.price.toFixed(2)}</p>
              <p className="text-graphite/70 leading-relaxed mb-8">{product.description}</p>

              <div className="flex flex-wrap gap-4 mb-10">
                <AddToCartButton product={product} />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">What&apos;s Included</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className="h-5 w-5 text-copper flex-shrink-0 mt-0.5" />
                        <span className="text-graphite/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">How It Works</h2>
                  <p className="text-graphite/70 text-sm leading-relaxed">
                    Use the included kit to collect your sample at home following the simple instructions. 
                    Place your sample in the prepaid return envelope and drop it off at any USPS location. 
                    Access your results online privately and share them with your physician if desired.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">Important Information</h2>
                  <div className="bg-warm-dark border border-graphite/10 p-6">
                    <p className="text-sm text-graphite/80 leading-relaxed">{product.medicalDisclaimer}</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading text-sm font-bold text-graphite mb-2">What does this test measure?</h3>
                      <p className="text-sm text-graphite/70">This test measures key hormones commonly associated with metabolism, energy, and weight, including cortisol. Results are provided for informational purposes.</p>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-graphite mb-2">How do I collect my sample?</h3>
                      <p className="text-sm text-graphite/70">The kit includes simple instructions for at-home sample collection. Follow the steps carefully for the best results.</p>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-graphite mb-2">How long until I get results?</h3>
                      <p className="text-sm text-graphite/70">Results are typically available within a few days after your sample is received at the lab.</p>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-graphite mb-2">How is my information protected?</h3>
                      <p className="text-sm text-graphite/70">Personal information will not be shared with Third Parties. We only collect the information necessary to process and ship your order.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-graphite mb-4">Shipping & Returns</h2>
                  <p className="text-sm text-graphite/70 leading-relaxed">
                    Orders are shipped via USPS Priority Mail for a flat rate of $7.95 per order. 
                    We accept returns within 30 days of the date received. Please see our Refund Policy for full details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <nav className="mb-4 text-sm">
                  <ol className="flex items-center gap-2">
                    <li><Link href="/" className="text-copper hover:underline">Home</Link></li>
                    <li className="text-graphite/30">/</li>
                    <li><Link href="/product/at-home-metabolism-test-kit" className="text-copper hover:underline">At-Home Metabolism Test Kit</Link></li>
                    <li className="text-graphite/30">/</li>
                    <li className="text-graphite/60">{product.name}</li>
                  </ol>
                </nav>
                <p className="text-xs font-medium tracking-widest text-copper uppercase mb-4">Wellness Supplement</p>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-4">{product.name}</h1>
                <p className="text-graphite/70 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-graphite mb-4">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-5 w-5 text-copper flex-shrink-0 mt-0.5" />
                      <span className="text-graphite/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-graphite mb-4">Ingredients</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-warm-dark">
                        <th className="border border-graphite/10 px-4 py-3 text-left font-semibold text-graphite text-sm">Ingredient</th>
                        <th className="border border-graphite/10 px-4 py-3 text-left font-semibold text-graphite text-sm">Amount per Serving</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.ingredients?.map((ing) => (
                        <tr key={ing.name}>
                          <td className="border border-graphite/10 px-4 py-3 text-graphite/80 text-sm">{ing.name}</td>
                          <td className="border border-graphite/10 px-4 py-3 text-graphite/80 text-sm">{ing.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-warm-dark border border-graphite/10 p-6">
                <p className="text-xs font-medium tracking-widest text-copper uppercase mb-3">FDA Disclosure</p>
                <p className="text-sm text-graphite/80 leading-relaxed">{product.fdaDisclosure}</p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-graphite mb-4">Privacy & Information Protection</h2>
                <p className="text-sm text-graphite/70 leading-relaxed">
                  Personal information will not be shared with Third Parties. We only collect the information necessary to process and ship your order.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white border border-graphite/10 p-8">
                <div className="aspect-square bg-warm-dark border border-graphite/10 flex items-center justify-center mb-6 overflow-hidden">
                  <svg viewBox="0 0 120 120" className="h-24 w-24 text-lab/30" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <rect x="20" y="20" width="80" height="80" />
                    <rect x="30" y="30" width="60" height="60" />
                    <line x1="20" y1="20" x2="100" y2="100" />
                    <line x1="100" y1="20" x2="20" y2="100" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-copper mb-6">${product.price.toFixed(2)}</p>
                <AddToCartButton product={product} />
                <div className="mt-6 flex items-center gap-3">
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
                <p className="mt-4 text-xs text-graphite/60">Charges will appear as PrecisionMetabolismLab on your statement</p>
                <div className="mt-6 pt-6 border-t border-graphite/10">
                  <p className="text-sm text-graphite/70 mb-2">Looking for our main product?</p>
                  <Link href="/" className="text-copper font-semibold hover:underline inline-flex items-center gap-1">
                    At-Home Metabolism Test Kit <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
