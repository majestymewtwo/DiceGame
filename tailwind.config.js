/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'abel': ['Abel', 'sans-serif'],
        'antonio': ['Antonio', 'sans-serif'],
        'qwitcher': ['Qwitcher Grypen', 'cursive']
      }
    },
  },
  plugins: [],
}
