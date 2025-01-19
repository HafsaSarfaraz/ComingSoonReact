/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { filter: "blur(15px)" },
          '50%': { filter: "blur(10px)" },
          '100%': { filter: "blur(0px)" },
        }
      }
    },
  },
  plugins: [],
}

