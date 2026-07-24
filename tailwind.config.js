/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sangsang: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#0F172A',
        },
        accent: {
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
          orange: '#F97316',
        }
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
