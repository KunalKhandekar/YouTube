/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1600px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1100px' },
      'slg': { 'max': '920px' },
      'mmd': { 'max': '810px' },
      'md': { 'max': '759px' },
      'sm': { 'max': '680px' },
      'ssm': { 'max': '590px' },
      'xsm': { 'max': '450px' },
      'xxsm': { 'max': '370px' },
      'xxxsm': { 'max': '355px' }
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

