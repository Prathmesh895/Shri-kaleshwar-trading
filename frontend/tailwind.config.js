/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "redtxt": '#e11d48',
        "greenCustom": '#5AFF80',
        "yellow": '#ffc107',
        "blue": '#007bff',
        "gold": "#ffd700",
        "pink1": "#c30cfa",
        // "green": '#25d366'
      },
    },
  },
  plugins: [],
}