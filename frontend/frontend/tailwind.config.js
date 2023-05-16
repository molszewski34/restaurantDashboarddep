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
      'layout-tablesPanel': 'repeat(2, 60px)',
      'layout-ordersCaegory': 'repeat(auto, 60px)'
    }},
    colors: {
      'primary-bg-color': '#296F63',
      'secondary-bg-color':'#CADFDE',
      'white': '#fff',
      'primary-gray': '#ADADAD',
      'gray-light' : '#D9D9D9',
      'secondary-gray' : '#484242'
    },
  },
  plugins: [],
};
