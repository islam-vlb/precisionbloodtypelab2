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

export interface CompanionAccessory {
  name: string
  description: string
  features: string[]
  image: string
}

export interface Product {
  id: number
  slug: string
  name: string
  category: 'device'
  description: string
  longDescription?: string
  features: string[]
  variants: ProductVariant[]
  defaultVariantId: string
  image: string
  medicalDisclaimer?: string
  companionAccessory?: CompanionAccessory
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
        label: '1 Smart Body Composition Scale — Standard',
        detail: '1 Scale',
        price: 47.89,
        section: 'Single Scale Offer',
        isBundle: false,
        scaleCount: 1,
        image: '/images/products/scale-1x.jpg',
      },
      {
        id: 'tk-bundle-supp-30',
        label: '1 Smart Body Composition Scale — Plus',
        detail: '1 Scale + Resistance Band Fitness Set',
        price: 49.76,
        section: 'Single Scale Offer',
        isBundle: true,
        scaleCount: 1,
        image: '/images/products/scale-1x.jpg',
      },
      {
        id: 'tk-bundle-supp-60',
        label: '1 Smart Body Composition Scale — Premium',
        detail: '1 Scale + Resistance Band Fitness Set + Door Anchor & Handles',
        price: 53.45,
        section: 'Single Scale Offer',
        isBundle: true,
        scaleCount: 1,
        image: '/images/products/scale-1x.jpg',
      },
      {
        id: 'tk-bundle-supp-90',
        label: '1 Smart Body Composition Scale — Complete',
        detail: '1 Scale + Resistance Band Fitness Set + Door Anchor & Handles + Printed Workout Guide',
        price: 54.95,
        section: 'Single Scale Offer',
        isBundle: true,
        scaleCount: 1,
        image: '/images/products/scale-1x.jpg',
      },
      {
        id: 'tk-multi-2',
        label: '2-Scale Bundle — Standard',
        detail: '2 Scales',
        price: 86.88,
        section: 'Multi-Scale Bundle Offers',
        isBundle: false,
        scaleCount: 2,
        image: '/images/products/scale-2x.jpg',
      },
      {
        id: 'tk-multi-2-supp-30',
        label: '2-Scale Bundle — Plus',
        detail: '2 Scales + Resistance Band Fitness Set',
        price: 87.64,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
        scaleCount: 2,
        image: '/images/products/scale-2x.jpg',
      },
      {
        id: 'tk-multi-2-supp-60',
        label: '2-Scale Bundle — Premium',
        detail: '2 Scales + Resistance Band Fitness Set + Door Anchor & Handles',
        price: 87.76,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
        scaleCount: 2,
        image: '/images/products/scale-2x.jpg',
      },
      {
        id: 'tk-multi-2-supp-90',
        label: '2-Scale Bundle — Complete',
        detail: '2 Scales + Resistance Band Fitness Set + Door Anchor & Handles + Printed Workout Guide',
        price: 94.82,
        section: 'Multi-Scale Bundle Offers',
        isBundle: true,
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
    companionAccessory: {
      name: 'Resistance Band Fitness Set',
      description:
        'A set of resistance bands for general at-home fitness use, offering multiple resistance levels for a range of exercises. A general fitness accessory intended for everyday exercise routines — not a medical device and not intended to diagnose, treat, or prevent any condition.',
      features: [
        'Multiple resistance levels included',
        'Portable, lightweight design',
        'Suitable for general strength and mobility exercises',
        'Compact storage pouch included',
      ],
      image: '/images/products/resistance-bands.jpg',
    },
  },
]

export const products = FALLBACK_PRODUCTS

export function getDefaultVariant(product: Product): ProductVariant {
  return product.variants.find((v) => v.id === product.defaultVariantId) ?? product.variants[0]
}
