/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {      
      gridTemplateRows: {
      // Simple 8 row grid
      '8': 'repeat(8, minmax(0, 1fr))',

      // Complex site-specific row configuration
      'layout': '150px minmax(150px, 1fr) 100px',
    }},
    colors: {
      'primary-bg-color': '#296F63',
      'secondary-bg-color':'#CADFDE',
      'white': '#fff',
      'primary-gray': '#ADADAD'
    },
  },
  plugins: [],
};
