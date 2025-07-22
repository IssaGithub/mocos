/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#22c55e',
        'brand-red': '#ef4444',
        'brand-dark': '#1f2937',
        'brand-light': '#f8fafc'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
} 