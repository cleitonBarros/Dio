/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "forest-50": "#a7d71f",
        "forest-100": "#a6d12a",
        "forest-200": "#84bd00",
        "forest-300": "#7a9860"
      }
    },
    fontFamily: {
      Fredoka: "'Fredoka', sans-serif",
      Poppins: "'Poppins', sans-serif",
      Garamond: "'EB Garamond', serif"
    }
  },
  plugins: []
};
