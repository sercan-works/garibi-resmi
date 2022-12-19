/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        container:{
          center: true,
          padding: '3.7rem',
        },

        backgroundImage:{
          'hero-bg':"url('../assets/img/background.jpg')"
        },

        fontFamily:{
          Barlow : 'Barlow Condensed',
          Bellefair : 'Bellefair'
        }
    },
  },
  plugins: [],
}
