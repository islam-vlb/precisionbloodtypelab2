export interface ProductVariant {
  id: string
  label: string
  price: number
  section: string
  isBundle: boolean
  bottleCount?: number
  capsuleCount?: number
  scaleCount?: number
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
  category: 'device' | 'supplement'
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
    slug: 'smart-body-composition-scale',
    name: 'Smart Body Composition Scale',
    category: 'device',
    description: 'A smart digital scale that uses bioelectrical impedance technology to provide weight and general body composition trend data, including estimated body fat percentage and BMI, as part of a daily wellness routine. Readings are intended for trend tracking over time rather than precise clinical measurement. This device does not test or analyze any biological sample.',
    longDescription: 'Track your wellness journey from the comfort of home. The Smart Body Composition Scale uses bioelectrical impedance technology to provide weight and general body composition trend data, including estimated body fat percentage and BMI, as part of a daily wellness routine. Readings are intended for trend tracking over time rather than precise clinical measurement.',
    features: [
      'Bioelectrical impedance sensor technology',
      'Tracks weight, estimated body fat %, and BMI trends',
      'Large, easy-to-read digital display',
      'Auto on/off function',
      'Compact design, tempered glass platform',
      'Battery included',
    ],
    image: '/images/products/scale-1x.jpg',
    medicalDisclaimer: 'This product is a general wellness scale intended for trend tracking and informational purposes. It is not a diagnostic or medical device and does not test, diagnose, or analyze any biological sample. Bioelectrical readings may be affected by hydration, recent exercise, or other factors and should be used for trend awareness only. Always consult a qualified healthcare provider regarding any health concerns. This device should not be used by individuals with pacemakers or other implanted medical devices.',
    defaultVariantId: 'tk-single-test',
    variants: [
      {
        id: 'tk-single-test',
        label: '1 Smart Body Composition Scale',
        price: 47.89,
        section: 'Single Scale Offer',
        isBundle: false,
        scaleCount: 1,
        image: '/images/products/scale-1x.jpg',
      },
      {
        id: 'tk-bundle-supp-30',
        label: '1 Scale + 1 Bottle (30 Capsules)',
        price: 49.76,
        section: 'Scale + Supplement Bundle Offers',
        isBundle: true,
        scaleCount: 1,
        bottleCount: 1,
        capsuleCount: 30,
        image: '/images/products/scale-1x-supp30.jpg',
      },
      {
        id: 'tk-bundle-supp-60',
        label: '1 Scale + 1 Bottle (60 Capsules)',
        price: 53.45,
        section: 'Scale + Supplement Bundle Offers',
        isBundle: true,
        scaleCount: 1,
        bottleCount: 1,
        capsuleCount: 60,
        image: '/images/products/scale-1x-supp60.jpg',
      },
      {
        id: 'tk-bundle-supp-90',
        label: '1 Scale + 1 Bottle (90 Capsules)',
        price: 54.95,
        section: 'Scale + Supplement Bundle Offers',
        isBundle: true,
        scaleCount: 1,
        bottleCount: 1,
        capsuleCount: 90,
        image: '/images/products/scale-1x-supp90.jpg',
      },
      {
        id: 'tk-multi-2',
        label: '2-Scale Bundle — includes 2 Scales',
        price: 86.88,
        section: 'Multi-Scale Bundle Offers',
        isBundle: false,
        scaleCount: 2,
        image: '/images/products/scale-2x.jpg',
      },
      {
        id: 'tk-multi-2-supp-30',
        label: '2-Scale + Supplement Bundle — includes 2 Scales + 1 Bottle (30 Capsules)',
        price: 87.64,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
        scaleCount: 2,
        bottleCount: 1,
        capsuleCount: 30,
        image: '/images/products/scale-2x-supp30.jpg',
      },
      {
        id: 'tk-multi-2-supp-60',
        label: '2-Scale + Supplement Bundle — includes 2 Scales + 1 Bottle (60 Capsules)',
        price: 87.76,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
        scaleCount: 2,
        bottleCount: 1,
        capsuleCount: 60,
        image: '/images/products/scale-2x-supp60.jpg',
      },
      {
        id: 'tk-multi-2-supp-90',
        label: '2-Scale + Supplement Bundle — includes 2 Scales + 1 Bottle (90 Capsules)',
        price: 94.82,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
        scaleCount: 2,
        bottleCount: 1,
        capsuleCount: 90,
        image: '/images/products/scale-2x-supp90.jpg',
      },
      {
        id: 'tk-multi-3',
        label: '3-Scale Bundle — includes 3 Scales',
        price: 96.95,
        section: 'Multi-Scale Bundle Offers',
        isBundle: false,
        scaleCount: 3,
        image: '/images/products/scale-3x.jpg',
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
