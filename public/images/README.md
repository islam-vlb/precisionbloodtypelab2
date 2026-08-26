# Images

- `/images/hero-medical-lab.jpg` — Homepage hero laboratory visual
- `/images/products/*.jpg` — Real At-Home Metabolism Test Kit photos, one per Test Kit variant (see `variants[].image` in `src/lib/supabase.ts`)
- `/images/supplements/*.jpg` — Real Daily Energy & Vitality Support photos, one per supplement variant (see `variants[].image` in `src/lib/supabase.ts`)

Each product variant carries its own `image` field. The product detail page (`src/components/ProductDetail.tsx`) swaps the displayed photo live as the shopper selects a different bundle/quantity option, using that variant's image.
