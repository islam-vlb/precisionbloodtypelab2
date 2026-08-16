import { products } from '@/lib/supabase'

export default function IngredientsPage() {
  const supplement = products.find((p) => p.category === 'supplement')
  if (!supplement) return null

  return (
    <div className="bg-warm min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-8">Ingredients</h1>
        <p className="text-graphite/70 mb-8">Full ingredient list for the Daily Energy & Vitality Support.</p>
        <div className="bg-white border border-graphite/10 overflow-hidden mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-warm-dark">
                <th className="border border-graphite/10 px-4 py-3 text-left font-semibold text-graphite text-sm">Ingredient</th>
                <th className="border border-graphite/10 px-4 py-3 text-left font-semibold text-graphite text-sm">Amount per Serving</th>
              </tr>
            </thead>
            <tbody>
              {supplement.ingredients?.map((ing) => (
                <tr key={ing.name}>
                  <td className="border border-graphite/10 px-4 py-3 text-graphite/80 text-sm">{ing.name}</td>
                  <td className="border border-graphite/10 px-4 py-3 text-graphite/80 text-sm">{ing.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-warm-dark border border-graphite/10 p-6">
          <p className="text-xs font-medium tracking-widest text-copper uppercase mb-3">FDA Disclosure</p>
          <p className="text-sm text-graphite/80 leading-relaxed">{supplement.fdaDisclosure}</p>
        </div>
        <div className="mt-8">
          <p className="text-sm text-graphite/60">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  )
}
