/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-bold': ['Inter-Bold'],
        'interregular': ['Inter-Regular'],
      },
      fontSize: {
        sm: ['14px', '21px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        '2xl': ['24px', '36px'],
      },
      colors: {
        'grey': '#333333',
        'dark-grey': '#1F1F1F',
        'off-black': '#141414',
        'neon-green': '#C4F82A',
      },
      screens: {
        'sm': '375px',
      }
    },
  },
  plugins: [],
}