/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: '#FCFAF7',
          DEFAULT: '#F7F3ED',
          dark: '#ECE5D9',
        },
        charcoal: {
          light: '#3A3A3A',
          DEFAULT: '#222222',
          dark: '#141414',
        },
        sage: {
          light: '#CCD6C6',
          DEFAULT: '#A8B5A0',
          dark: '#7D8C74',
        },
        rose: {
          light: '#E7CECC',
          DEFAULT: '#D8B8B5',
          dark: '#B08885',
        },
        beige: {
          light: '#E8DFD3',
          DEFAULT: '#D8CBB8',
          dark: '#AC9C86',
        },
        navy: {
          DEFAULT: '#1B2A38',
          light: '#2C3E50',
        },
        burgundy: {
          DEFAULT: '#5C1D24',
          light: '#7A2832',
        },
        terracotta: '#C46D54',
        olive: '#5E6A4B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'elevated': '0 20px 40px rgba(34, 34, 34, 0.08)',
        'editorial': '0 15px 35px -5px rgba(34, 34, 34, 0.07), 0 0 0 1px rgba(34, 34, 34, 0.04)',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'luxury': '0.15em',
      }
    },
  },
  plugins: [],
}
