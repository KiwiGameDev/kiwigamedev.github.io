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
        'background': 'var(--color-background)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
        'highlight': 'var(--color-highlight)',
      },
    },
  },
  plugins: [],
}