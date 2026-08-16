import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        graphite: { DEFAULT: '#1a1a1a', light: '#2d2d2d', muted: '#4a4a4a' },
        warm: { DEFAULT: '#faf9f7', dark: '#f0efeb', muted: '#e8e6e1' },
        copper: { DEFAULT: '#c67b4e', light: '#d4855c', dark: '#a8653d' },
        lab: { DEFAULT: '#4a7c59', light: '#5a8a6a', dark: '#3d6649' },
        ink: '#1f1f1f',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
