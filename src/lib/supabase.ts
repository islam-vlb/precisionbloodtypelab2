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
    image: '/images/products/scale-1x.jpg',
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
        image: '/images/products/scale-1x.jpg',
      },
      {
        id: 'tk-multi-2',
        label: '2-Scale Bundle',
        detail: '2 Scales',
        price: 86.88,
        section: 'Multi-Scale Bundle Offers',
        isBundle: false,
        scaleCount: 2,
        image: '/images/products/scale-2x.jpg',
      },
      {
        id: 'tk-multi-3',
        label: '3-Scale Bundle',
        detail: '3 Scales',
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
    image: '/images/products/resistance-bands-1x.jpg',
    medicalDisclaimer: 'This product is a general fitness accessory intended for everyday exercise routines. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any condition. Consult a qualified healthcare provider before beginning any new exercise routine.',
    defaultVariantId: 'bands-1-set',
    variants: [
      {
        id: 'bands-1-set',
        label: '1 Set',
        detail: '1 Resistance Band Fitness Set',
        price: 19.99,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/resistance-bands-1x.jpg',
      },
      {
        id: 'bands-2-set',
        label: '2 Sets',
        detail: '2 Resistance Band Fitness Sets',
        price: 34.99,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/resistance-bands-2x.jpg',
      },
      {
        id: 'bands-3-set',
        label: '3 Sets',
        detail: '3 Resistance Band Fitness Sets',
        price: 46.99,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/resistance-bands-3x.jpg',
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
