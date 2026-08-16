import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sage: { DEFAULT: '#5B7B6C', light: '#6E8F7E', dark: '#4A6558' },
        cream: { DEFAULT: '#F7F3EC', dark: '#EDE8DE' },
        espresso: '#2B2420',
        coral: { DEFAULT: '#D98C6E', light: '#E39E84', dark: '#C27858' },
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
