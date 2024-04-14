/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center :true,
      padding :"10px"
    },
    extend: {
      colors: {
        primary: '#5b21b6',
        secondary: '#475569',
        dark: '#0f172a',
      },
      screens:{
        "2xl" : "1320px"
      }
    },
  },
  plugins: [],
}

