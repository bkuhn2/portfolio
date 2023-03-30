/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main7': "url('../src/assets/main7.jpg')"
      },
      spacing: {
        '110': '28rem',
        '120': '32rem'
      },
      fontFamily: {
        'font1': ['Averia Serif Libre', 'cursive'],
        'font2': ['Fjalla One', 'sans-serif'],
        'font3': ['Gloock', 'serif'],
        'font4': ['Hammersmith One', 'sans-serif'],
        'font5': ['Hind Siliguri', 'sans-serif'],
        'font6': ['Nanum Myeongjo', 'serif'],
        'font7': ['Satisfy', 'cursive'],
        'font8': [ 'Unica One', 'cursive']
      }
    },
  },
  plugins: [],
}
