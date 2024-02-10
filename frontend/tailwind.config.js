/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        crimson: ["Crimson Text", "serif"],
      },
      colors : {
        bgdark : "#1B1B1F",
        bglight : "#FFFFFF",
        textdark : "#1e293b",
        textlight : "#3C3C43"
      }
    },
  },
  plugins: [],
  darkMode:"class",
};
