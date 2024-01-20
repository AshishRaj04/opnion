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
        dark_neutral100:"#27374D",
        dark_neutral200:"#526D82",
        dark_neutral300:"#9DB2BF",
        dark_neutral400:"#DDE6ED",

        light_neutral100:"#F1F6F9",
        light_neutral200:"#212A3E",
        light_neutral300:"#394867",
        light_neutral400:"#E74646",
      }
    },
  },
  plugins: [],
};
