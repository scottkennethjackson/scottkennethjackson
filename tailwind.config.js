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
        'offwhite': '#eef0ee',
        'orange': '#f68330',
        'activeorange': '#db752c',
        'yellow': '#f7c412',
        'activeyellow': '#deb110',
        'lightblue': '#b4ddd5',
        'mediumblue': '#033756',
        'darkblue': '#08143a'
      },

      spacing: {
        '50px': '50px'
      },
    },
  },
  plugins: [],
}

