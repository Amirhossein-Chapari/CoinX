/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5235E8',
        secondary: '#E7E3FC', 
        dark_blue: '#0E0637', 
        dark_gray: '#131316',
        neutral_gray: '#717184'
      }
    },
  },
  plugins: [],
}