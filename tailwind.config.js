/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {},
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        }
      }
    },
  },
  plugins: [],
}