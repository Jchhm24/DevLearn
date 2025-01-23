/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background' : '#0e0e11',
        'surface' : '#18181b'
      },

      fontFamily:{
        'Inter' : '"Inter", serif'
      }
    },
  },
  plugins: [],
}

