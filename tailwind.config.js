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
        darkpurple: '#1A0554',
        lightpurple: '#664EAE',
      },
      content : {
        'bg-vector-left': "url('images/vectorLeft.svg')",
        'bg-vector-right': "url('images/vectorRight.svg')",
      },
      backgroundImage:{
        'left-vector': "url('images/vectorLeft.svg')",
        'right-vector': "url('images/vectorRight.svg')",
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
