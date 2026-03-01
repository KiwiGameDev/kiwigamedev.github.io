/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      colors: {
        'reddish-black': '#372a39',
        'dark-orange': '#aa644d',
        'pale-green': '#7c9b6aff',
        'pale-yellow': '#f5e9bf',
      },
    },
  },
  plugins: [],
}