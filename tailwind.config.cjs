/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        header: '8vh',
      },
      padding: {
        baseLR: '5vw',
        wholeScreen: '92vh',
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
        gray: '#d0d0d0',
        inputGray: '#4D4D4D',
      },
      zIndex: {
        header: 50,
      },
      fontSize: {
        pageTitle: '3rem',
        formItemTitle: '2.2rem',
        inputText: '1.8rem',
      },
    },
  },
  plugins: [],
};
