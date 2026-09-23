/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF8F5',
          light: '#FCFBF9',
          dark: '#F3EFEA',
          muted: '#EFEAE3',
        },
        charcoal: {
          DEFAULT: '#1C1917',
          dark: '#0F0E0D',
          medium: '#292524',
          muted: '#57534E',
          light: '#78716C',
        },
        warmbrown: {
          DEFAULT: '#78350F',
          hover: '#612A0C',
          light: '#92400E',
          soft: '#FBF5EE',
          border: '#E8D5C4',
        },
        subtlepurple: {
          DEFAULT: '#6D28D9',
          hover: '#5B21B6',
          light: '#7C3AED',
          soft: '#F5F3FF',
          border: '#DDD6FE',
        },
        border: {
          DEFAULT: '#E7E5E4',
          subtle: '#F0EEE9',
          strong: '#D6D3D1',
        },
      },
      fontFamily: {
        serif: [
          '"Playfair Display"',
          'Georgia',
          'Cambria',
          'serif',
        ],
        sans: [
          'Manrope',
          '"Plus Jakarta Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      letterSpacing: {
        'technical': '0.12em',
        'wide-tech': '0.2em',
      }
    },
  },
  plugins: [],
}
