/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Fredoka: "'Fredoka', sans-serif",
      Poppins: "'Poppins', sans-serif"
    }
  },
  plugins: []
};
