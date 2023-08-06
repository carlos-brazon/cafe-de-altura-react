/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blackOriginal': '#000000',
        'grey': '#515051',
        'gray': '#6B7280' ,
        'darkgrey': '#2B2A2B',
        'black': '#1F1815',
        'blackTransparent': '#F7F5F31A',
        'taupe': '#E3DED7',
        'green': '#2A5B45',
        'green70':'#2A5B45B2',
        'greentransparen': '#2A5B451A',
        'white': '#ffffff',
        'whiteOff': '#F7F5F3',
        'bluedark': '#111827',
        'aliceblue': '#E3DED74D',
        'blueligth' : '#D1D5DB',
        'blueMedLigth': '#9B9EA3',
        'greenMed' : '#3F8F6B'
      },
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
}