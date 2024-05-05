/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'source': ['Source Sans 3', 'Arial', 'sans-serif']
      },

      colors: {
        transparent: 'transparent',
        'balck': '#000000',
        'white': '#ffffff',
        'lightblue': '#b4ddd5',
        'orange': '#f68330',
        'yellow': '#f7c412',
        'mediumblue': '#033756',
        'darkblue': '#08143a',
        'offwhite': '#eef0ee',
        'activeyellow': '#deb110'
      },

      spacing: {
        '50px': '50px'
      },
    },
  },
  plugins: [],
}

