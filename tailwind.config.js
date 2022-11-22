/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#100F1A',
        secondary: '#140F1A',
      },
      backgroundColor: {
        
        'main': 'background: linear-gradient(133.39deg, #100F1A -18.47%, #140F1A 111.16%)',
        'gradient-first': '#100F1A',
        'gradient-second': '#140F1A'
      }
    },
  },
  plugins: [],
}
