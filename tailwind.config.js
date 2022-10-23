module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#151515',
        accent: '#3DD0FF',
        gray: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
