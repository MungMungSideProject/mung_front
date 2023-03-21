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
      },
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        accent: '#5F9DF7',
        error: '#ff5c00',
      },
    },
  },
  plugins: [],
};
