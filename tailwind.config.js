/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
  './components/**/*.{html,js}',,
  "./src/**/*.{html,js}",
  "'*.{html,js}'"
  ],
  theme: {
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
