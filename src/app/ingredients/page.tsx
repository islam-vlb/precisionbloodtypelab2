import { products } from '@/lib/supabase'

export default function IngredientsPage() {
  const supplement = products.find((p) => p.category === 'supplement')
  if (!supplement) return null

  return (
    <div className="bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-espresso mb-8">Ingredients</h1>
        <p className="text-espresso/70 mb-8">Full ingredient list for the Daily Energy & Vitality Support.</p>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-cream-dark">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-espresso">Ingredient</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-espresso">Amount per Serving</th>
              </tr>
            </thead>
            <tbody>
              {supplement.ingredients?.map((ing) => (
                <tr key={ing.name}>
                  <td className="border border-gray-200 px-4 py-3 text-espresso/80">{ing.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-espresso/80">{ing.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-lg border-2 border-sage/30 bg-cream-dark p-6">
          <p className="text-sm text-espresso/80 leading-relaxed">{supplement.fdaDisclosure}</p>
        </div>
        <div className="mt-8">
          <p className="text-sm text-espresso/60">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  )
}
