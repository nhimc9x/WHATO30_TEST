/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'ct-orange-color': '#f96400',
        'ct-yellow-color': '#f9c200',
        'ct-blue-color': '#0565bb',
        'ct-black-color': {
          'bold': '#111111',
          'normal': '#222222',
          'light': '#333333',
        },
        'ct-border-color': '#020001',
      },
    },
  },
  plugins: [],
}

