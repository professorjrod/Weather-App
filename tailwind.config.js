const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
      }
    },
  },
  plugins: [],
  variants: {

    extend: {
      borderRadius: ['hover'],

    },

 },
}
