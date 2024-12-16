/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
          primary: '#7b1fa2',
          primaryLight: '#B39DDB',
          secondary: '#66bb6a',
          secondaryLight: '#1B5E20',
          primaryDark: '#7b1fa2'
         }
    },
  },
  plugins: [],
}