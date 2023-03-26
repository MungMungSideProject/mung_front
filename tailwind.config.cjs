/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        header: '8vh',
        wholeScreen: '92vh',
      },
      padding: {
        baseX: '15vw',
        baseY: '3vh',
      },
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        accent: '#5F9DF7',
        error: '#ff5c00',
        defaultBg: '#fcfcfc',
      },
      zIndex: {
        header: 50,
      },
    },
  },
  plugins: [],
};
