/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html","./public/**/main.js"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(0,92,39,0.17979691876750703) 0%, rgba(0,0,0,0) 100%);',
        'imortalWoun-gradient':'linear-gradient(0deg, rgba(34,193,195,0) 0%, rgba(21,21,21,1) 100%);',
        'imortalWound-gradient':'linear-gradient(81deg, rgba(21,21,21,1) 2%, rgba(21,21,21,0) 27%, rgba(21,21,21,1) 66%);',
        'sub-gradient':'linear-gradient(0deg, rgba(21,21,21,1) 6%, rgba(21,21,21,0) 83%, rgba(21,21,21,1) 100%);',
        'fa-grad':'linear-gradient(0deg, rgba(21,21,21,1) 0%, rgba(9,9,9,1) 0%, rgba(0,0,0,0.4599089635854342) 100%);'
      },
    },
  }, 
  plugins: [],
}

