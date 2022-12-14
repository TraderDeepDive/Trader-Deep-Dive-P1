/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px"
      },
      colors: {
        ingisght: "#33997d",
        illume: "#6a3399",
        pursure: "#993376"
      },
      fontFamily: {
        "serif": ['Alegreya', 'serif'],
        "sans": ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}
