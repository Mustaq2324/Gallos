/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      'vast-shadow': ['Vast Shadow', 'serif'],
    },},
  },
  plugins: [],
}