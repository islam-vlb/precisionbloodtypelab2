export interface ProductVariant {
  id: string
  label: string
  detail?: string
  price: number
  section: string
  isBundle: boolean
  scaleCount?: number
  image: string
}

export interface Product {
  id: number
  slug: string
  name: string
  category: 'device' | 'accessory'
  description: string
  longDescription?: string
  features: string[]
  variants: ProductVariant[]
  defaultVariantId: string
  image: string
  medicalDisclaimer?: string
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
    image: '/images/products/zealta/zealta-scale-1-standard.png',
    medicalDisclaimer: 'This product is a general wellness scale intended for trend tracking and informational purposes. It is not a diagnostic or medical device and does not test, diagnose, or analyze any biological sample. Bioelectrical readings may be affected by hydration, recent exercise, or other factors and should be used for trend awareness only. Always consult a qualified healthcare provider regarding any health concerns. This device should not be used by individuals with pacemakers or other implanted medical devices.',
    defaultVariantId: 'tk-single-test',
    variants: [
      {
        id: 'tk-single-test',
        label: '1 Smart Body Composition Scale',
        detail: '1 Scale',
        price: 47.89,
        section: 'Single Scale Offer',
        isBundle: false,
        scaleCount: 1,
        image: '/images/products/zealta/zealta-scale-1-standard.png',
      },
      {
        id: 'tk-bundle-supp-30',
        label: '1 Smart Body Composition Scale + Resistance Band Fitness Set',
        detail: 'Includes 1 Resistance Band Fitness Set',
        price: 49.76,
        section: 'Single Scale Offer',
        isBundle: true,
        scaleCount: 1,
        image: '/images/products/zealta/zealta-scale-1-plus.png',
      },
      {
        id: 'tk-bundle-supp-60',
        label: '1 Smart Body Composition Scale + 2 Resistance Band Fitness Sets',
        detail: 'Includes 2 Resistance Band Fitness Sets',
        price: 53.45,
        section: 'Single Scale Offer',
        isBundle: true,
        scaleCount: 1,
        image: '/images/products/zealta/zealta-scale-1-premium.png',
      },
      {
        id: 'tk-bundle-supp-90',
        label: '1 Smart Body Composition Scale + 3 Resistance Band Fitness Sets — Complete Kit',
        detail: 'Includes 3 Resistance Band Fitness Sets — best value',
        price: 54.95,
        section: 'Single Scale Offer',
        isBundle: true,
        scaleCount: 1,
        image: '/images/products/zealta/zealta-scale-1-complete.png',
      },
      {
        id: 'tk-multi-2',
        label: '2-Scale Bundle — Standard',
        detail: '2 Scales',
        price: 86.88,
        section: 'Multi-Scale Bundle Offers',
        isBundle: false,
        scaleCount: 2,
        image: '/images/products/zealta/zealta-scale-2-standard.png',
      },
      {
        id: 'tk-multi-2-supp-30',
        label: '2 Scales + Resistance Band Fitness Set',
        detail: 'Includes 1 Resistance Band Fitness Set',
        price: 87.64,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
        scaleCount: 2,
        image: '/images/products/zealta/zealta-scale-2-plus.png',
      },
      {
        id: 'tk-multi-2-supp-60',
        label: '2 Scales + 2 Resistance Band Fitness Sets',
        detail: 'Includes 2 Resistance Band Fitness Sets',
        price: 87.76,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
        scaleCount: 2,
        image: '/images/products/zealta/zealta-scale-2-premium.png',
      },
      {
        id: 'tk-multi-2-supp-90',
        label: '2 Scales + 3 Resistance Band Fitness Sets — Complete Kit',
        detail: 'Includes 3 Resistance Band Fitness Sets — best value',
        price: 94.82,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
        scaleCount: 2,
        image: '/images/products/zealta/zealta-scale-2-complete.png',
      },
      {
        id: 'tk-multi-3',
        label: '3-Scale Bundle',
        detail: '3 Scales',
        price: 96.95,
        section: 'Multi-Scale Bundle Offers',
        isBundle: false,
        scaleCount: 3,
        image: '/images/products/zealta/zealta-scale-3.png',
      },
    ],
  },
  {
    id: 2,
    slug: 'daily-energy-vitality-support',
    name: 'Resistance Band Fitness Set',
    category: 'accessory',
    description: 'A set of resistance bands for general at-home fitness use, offering multiple resistance levels for a range of exercises. A general fitness accessory intended for everyday exercise routines — not a medical device and not intended to diagnose, treat, or prevent any condition.',
    longDescription: 'A set of resistance bands for general at-home fitness use, offering multiple resistance levels so you can work through a range of exercises as part of an everyday fitness routine.',
    features: [
      'Multiple resistance levels included',
      'Portable, lightweight design',
      'Suitable for general strength and mobility exercises',
      'Compact storage pouch included',
      'Pairs naturally with a daily wellness routine alongside the Smart Body Composition Scale',
    ],
    image: '/images/products/zealta/zealta-bands-1-plus.png',
    medicalDisclaimer: 'This product is a general fitness accessory intended for everyday exercise routines. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any condition. Consult a qualified healthcare provider before beginning any new exercise routine.',
    defaultVariantId: 'bands-standard-set',
    variants: [
      {
        id: 'bands-starter-set',
        label: '1 Set — Standard',
        detail: '1 Resistance Band Fitness Set',
        price: 9.99,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/zealta/zealta-bands-1-standard.png',
      },
      {
        id: 'bands-standard-set',
        label: '1 Set — Plus',
        detail: '1 Resistance Band Fitness Set',
        price: 13.95,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/zealta/zealta-bands-1-plus.png',
      },
      {
        id: 'bands-extended-set',
        label: '1 Set — Premium',
        detail: '1 Resistance Band Fitness Set',
        price: 14.75,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/zealta/zealta-bands-1-premium.png',
      },
      {
        id: 'bands-complete-set',
        label: '1 Set — Complete',
        detail: '1 Resistance Band Fitness Set',
        price: 17.95,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/zealta/zealta-bands-1-complete.png',
      },
      {
        id: '2-set-value-bundle',
        label: '2-Set Value Bundle',
        detail: '2 Resistance Band Fitness Sets',
        price: 18.75,
        section: 'Bundle Offers',
        isBundle: true,
        image: '/images/products/zealta/zealta-bands-2.png',
      },
      {
        id: '3-set-savings-bundle',
        label: '3-Set Savings Bundle',
        detail: '3 Resistance Band Fitness Sets',
        price: 28.76,
        section: 'Bundle Offers',
        isBundle: true,
        image: '/images/products/zealta/zealta-bands-3.png',
      },
      {
        id: '4-set-best-value-bundle',
        label: '4-Set Best Value Bundle',
        detail: '4 Resistance Band Fitness Sets',
        price: 38.64,
        section: 'Bundle Offers',
        isBundle: true,
        image: '/images/products/zealta/zealta-bands-4.png',
      },
    ],
  },
]

export const products = FALLBACK_PRODUCTS

export function getDefaultVariant(product: Product): ProductVariant {
  return product.variants.find((v) => v.id === product.defaultVariantId) ?? product.variants[0]
}

export function getStartingPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price))
}
