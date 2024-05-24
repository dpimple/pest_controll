import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        btncolor: '#ff0000',
      }
    },
  },
  plugins: [],
} satisfies Config