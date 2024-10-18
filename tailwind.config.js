/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        textSoft: '#0277EE',
        background: '#F8F9FA',
        textGray: '#6B7280',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}