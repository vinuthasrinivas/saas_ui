/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {},
    colors: {
      primaryBlue: "#0096FF",
      black: "#000000",
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "focus-within"],
  },
  plugins: [],
};
