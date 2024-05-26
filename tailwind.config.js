/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      boxShadow: {
        boxWhite: "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
      },
      colors: {
        primary: "#5b21b6",
        secondary: "#334155",
        dark: "#000000",
        bright: "#ECF2FF",
        secBright: "#9ca3af",
        secDark: "#0c0c0c",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
