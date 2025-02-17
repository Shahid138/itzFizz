/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        area: ["Area", "Normal"],
        area1: ["Area", "Inktrap"],
      },
    },
  },
  plugins: [],
}

