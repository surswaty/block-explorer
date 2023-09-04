/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light_grey: '#F3F3F3',
        grey: '#E8E8E8',
        dark_grey: 'rgba(0, 0, 0, 0.50)',        
      }

    },
  },
  plugins: [],
}