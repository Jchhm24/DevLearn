/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background' : '#255059'
      },

      fontFamily:{
        'Inter' : '"Inter", serif'
      }
    },
  },
  plugins: [],
}

