import type { Config } from 'tailwindcss'
import sofa from './app/assets/sofa.jpg'
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        btncolor: '#ff0000',
      },
      backgroundImage: {
        'sofa': "url('./app/assets/sofa.jpg')",
      },
      fontFamily: {
        'body': ['sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config