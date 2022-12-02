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
      content: {
        'bg-vector-left': "url('images/vectorLeft.svg')",
        'bg-vector-right': "url('images/vectorRight.svg')",
      },
      backgroundImage: {
        'left-vector': "url('images/vectorLeft.svg')",
        'right-vector': "url('images/vectorRight.svg')",
      },
      backgroundColor: {
        'main': 'background: linear-gradient(133.39deg, #100F1A -18.47%, #140F1A 111.16%)',
        'gradient-first': '#100F1A',
        'gradient-second': '#140F1A'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateY(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateX(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateX(-5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down .7s ease-out',
        'fade-in-left': 'fade-in-left .7s ease-out',
        'fade-in-right': 'fade-in-right .7s ease-out',
      }
    },
  },
  plugins: [],
}
