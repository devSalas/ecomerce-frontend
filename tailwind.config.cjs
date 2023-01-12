/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        modal: {
          '0%': {opacity:0 },
          '50%':{opacity: 0.5},
          '100%': { opacity: 1 },
        }
      },
      animation: {
        modal: 'modal 1s ease-in-out ',
      }
    
    },
  },
  plugins: [],
}
