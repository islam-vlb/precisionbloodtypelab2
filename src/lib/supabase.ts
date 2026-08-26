export interface ProductVariant {
  id: string
  label: string
  price: number
  section: string
  isBundle: boolean
  bottleCount?: number
  capsuleCount?: number
  testKitCount?: number
  image: string
}

export interface ProductIngredient {
  name: string
  amount: string
}

export interface Product {
  id: number
  slug: string
  name: string
  category: 'test-kit' | 'supplement'
  description: string
  longDescription?: string
  features: string[]
  variants: ProductVariant[]
  defaultVariantId: string
  image: string
  ingredients?: ProductIngredient[]
  medicalDisclaimer?: string
  fdaDisclosure?: string
  supplementDisclaimer?: string
}

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'at-home-metabolism-test-kit',
    name: 'At-Home Metabolism Test Kit',
    category: 'test-kit',
    description: 'An at-home metabolism test kit that measures key hormones commonly associated with metabolism, energy, and weight — including cortisol — using a simple at-home sample collection. Results are provided for informational purposes and can be shared with your physician to discuss next steps.',
    longDescription: 'Understand your metabolism from the comfort of home. The At-Home Metabolism Test Kit measures key hormones associated with metabolism, energy, and weight using a simple at-home sample collection. Results are provided for informational purposes and can be shared with your physician to discuss next steps.',
    features: [
      'Measures key hormones associated with metabolism and energy',
      'Simple at-home sample collection with included instructions and result-reading card',
      'Discreet packaging for shipping and storage',
      'Results in about 5 minutes',
      'Results can be shared with your physician to discuss next steps',
      'For informational and wellness purposes',
    ],
    image: '/images/products/tk-single-test.jpg',
    medicalDisclaimer: 'This product is intended for general wellness and informational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any health concerns or before making decisions based on your results.',
    defaultVariantId: 'tk-single-test',
    variants: [
      {
        id: 'tk-single-test',
        label: '1 At-Home Metabolism Test Kit',
        price: 47.89,
        section: 'Single Test Offer',
        isBundle: false,
        testKitCount: 1,
        image: '/images/products/tk-single-test.jpg',
      },
      {
        id: 'tk-bundle-supp-30',
        label: '1 Test Kit + 1 Bottle (30 Capsules)',
        price: 49.76,
        section: 'Test + Supplement Bundle Offers',
        isBundle: true,
        testKitCount: 1,
        bottleCount: 1,
        capsuleCount: 30,
        image: '/images/products/tk-bundle-supp-30.jpg',
      },
      {
        id: 'tk-bundle-supp-60',
        label: '1 Test Kit + 1 Bottle (60 Capsules)',
        price: 53.45,
        section: 'Test + Supplement Bundle Offers',
        isBundle: true,
        testKitCount: 1,
        bottleCount: 1,
        capsuleCount: 60,
        image: '/images/products/tk-bundle-supp-60.jpg',
      },
      {
        id: 'tk-bundle-supp-90',
        label: '1 Test Kit + 1 Bottle (90 Capsules)',
        price: 54.95,
        section: 'Test + Supplement Bundle Offers',
        isBundle: true,
        testKitCount: 1,
        bottleCount: 1,
        capsuleCount: 90,
        image: '/images/products/tk-bundle-supp-90.jpg',
      },
      {
        id: 'tk-multi-2',
        label: '2-Test Kit Bundle — includes 2 Test Kits',
        price: 86.88,
        section: 'Multi-Test Bundle Offers',
        isBundle: false,
        testKitCount: 2,
        image: '/images/products/tk-multi-2.jpg',
      },
      {
        id: 'tk-multi-2-supp-30',
        label: '2-Test Kit + Supplement Bundle — includes 2 Test Kits + 1 Bottle (30 Capsules)',
        price: 87.64,
        section: 'Multi-Test Bundle Offers',
        isBundle: true,
        testKitCount: 2,
        bottleCount: 1,
        capsuleCount: 30,
        image: '/images/products/tk-multi-2-supp-30.jpg',
      },
      {
        id: 'tk-multi-2-supp-60',
        label: '2-Test Kit + Supplement Bundle — includes 2 Test Kits + 1 Bottle (60 Capsules)',
        price: 87.76,
        section: 'Multi-Test Bundle Offers',
        isBundle: true,
        testKitCount: 2,
        bottleCount: 1,
        capsuleCount: 60,
        image: '/images/products/tk-multi-2-supp-60.jpg',
      },
      {
        id: 'tk-multi-2-supp-90',
        label: '2-Test Kit + Supplement Bundle — includes 2 Test Kits + 1 Bottle (90 Capsules)',
        price: 94.82,
        section: 'Multi-Test Bundle Offers',
        isBundle: true,
        testKitCount: 2,
        bottleCount: 1,
        capsuleCount: 90,
        image: '/images/products/tk-multi-2-supp-90.jpg',
      },
      {
        id: 'tk-multi-3',
        label: '3-Test Kit Bundle — includes 3 Test Kits',
        price: 96.95,
        section: 'Multi-Test Bundle Offers',
        isBundle: false,
        testKitCount: 3,
        image: '/images/products/tk-multi-3.jpg',
      },
    ],
  },
  {
    id: 2,
    slug: 'daily-energy-vitality-support',
    name: 'Daily Energy & Vitality Support',
    category: 'supplement',
    description: 'A daily nutritional supplement formulated with B-vitamins, iodine, and adaptogenic herbs that provides supplemental support for normal energy levels and everyday nutritional needs, as part of a healthy lifestyle. This product is not intended to diagnose, treat, cure, or prevent any disease.',
    features: [
      'Provides supplemental vitamin B12 and B6 as part of a daily nutritional routine',
      'Contains iodine to support normal nutritional needs',
      'Includes L-theanine, traditionally included in daily wellness routines',
      'Ashwagandha and rhodiola included to support the body\'s normal response to daily stress, as part of a balanced routine',
      'One capsule serving per day, easy to incorporate into a daily routine',
      'Non-GMO and gluten-free formulation',
    ],
    ingredients: [
      { name: 'Vitamin B12 (as Methylcobalamin)', amount: '1000mcg' },
      { name: 'Vitamin B6', amount: '10mg' },
      { name: 'Iodine (as Potassium Iodide)', amount: '150mcg' },
      { name: 'L-Theanine', amount: '100mg' },
      { name: 'Ashwagandha Root Extract', amount: '300mg' },
      { name: 'Rhodiola Rosea Extract', amount: '200mg' },
    ],
    image: '/images/supplements/supp-reg-60.jpg',
    fdaDisclosure: 'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement, especially if you have a thyroid condition, are pregnant or nursing, or are taking medication.',
    supplementDisclaimer: 'This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement.',
    defaultVariantId: 'supp-reg-60',
    variants: [
      {
        id: 'supp-reg-30',
        label: '1 Bottle — 30 Capsules',
        price: 9.99,
        section: 'Regular Product Options',
        isBundle: false,
        bottleCount: 1,
        capsuleCount: 30,
        image: '/images/supplements/supp-reg-30.jpg',
      },
      {
        id: 'supp-reg-60',
        label: '1 Bottle — 60 Capsules',
        price: 13.95,
        section: 'Regular Product Options',
        isBundle: false,
        bottleCount: 1,
        capsuleCount: 60,
        image: '/images/supplements/supp-reg-60.jpg',
      },
      {
        id: 'supp-reg-90',
        label: '1 Bottle — 90 Capsules',
        price: 14.75,
        section: 'Regular Product Options',
        isBundle: false,
        bottleCount: 1,
        capsuleCount: 90,
        image: '/images/supplements/supp-reg-90.jpg',
      },
      {
        id: 'supp-reg-120',
        label: '1 Bottle — 120 Capsules',
        price: 17.95,
        section: 'Regular Product Options',
        isBundle: false,
        bottleCount: 1,
        capsuleCount: 120,
        image: '/images/supplements/supp-reg-120.jpg',
      },
      {
        id: 'supp-bundle-2',
        label: '2-Bottle Bundle — 60 Capsules per Bottle / 120 Capsules Total',
        price: 18.75,
        section: 'Bundle Offers',
        isBundle: true,
        bottleCount: 2,
        capsuleCount: 120,
        image: '/images/supplements/supp-bundle-2.jpg',
      },
      {
        id: 'supp-bundle-3',
        label: '3-Bottle Bundle — 60 Capsules per Bottle / 180 Capsules Total',
        price: 28.76,
        section: 'Bundle Offers',
        isBundle: true,
        bottleCount: 3,
        capsuleCount: 180,
        image: '/images/supplements/supp-bundle-3.jpg',
      },
      {
        id: 'supp-bundle-4',
        label: '4-Bottle Bundle — 60 Capsules per Bottle / 240 Capsules Total',
        price: 38.64,
        section: 'Bundle Offers',
        isBundle: true,
        bottleCount: 4,
        capsuleCount: 240,
        image: '/images/supplements/supp-bundle-4.jpg',
      },
    ],
  },
]

export const products = FALLBACK_PRODUCTS

export function getDefaultVariant(product: Product): ProductVariant {
  return product.variants.find((v) => v.id === product.defaultVariantId) ?? product.variants[0]
}
