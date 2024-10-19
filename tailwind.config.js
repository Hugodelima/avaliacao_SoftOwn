/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        textSoft: '#0277EE',
        background: '#F8F9FA',
        textGray: '#6B7280',
        textGreen: '#26B99A',
        textBlack: '#121214',
        hrColor: '#ADB5BD',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}