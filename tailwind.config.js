/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cremita: "#bcae98",
        rojito: "#cd5353",
        amarillito: "#d1902c",
        azulito: "#7c8fe4",
      },
    },
  },
  plugins: [],
};
