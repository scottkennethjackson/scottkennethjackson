/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
        'source': ['"Source Sans 3"', 'Arial', 'sans-serif'],
        'code': ['"Courier New"', 'Courier', 'monospace']
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
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
        'nav': '50px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px'
      },

      boxShadow: {
        'simple': '-0.5rem 0.5rem rgba(0, 0, 0, 0.5)'
      }
    },
  },

  darkMode: 'selector',

  plugins: [
    require('flowbite/plugin')
  ],
}

