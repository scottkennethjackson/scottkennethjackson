/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './node_modules/flowbite/**/*.js'
  ],
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
        'white': '#ffffff',
        'offwhite': '#eef0ee',
        'lightred': '#fef2f2',
        'mediumred': '#ef4444',
        'darkred': '#7f1d1d',
        'orange': '#f68330',
        'activeorange': '#db752c',
        'yellow': '#f7c412',
        'activeyellow': '#deb110',
        'lightgreen': '#f0fdf4',
        'mediumgreen': '#22c55e',
        'darkgreen': '#14532d',
        'lightblue': '#b4ddd5',
        'mediumblue': '#033756',
        'darkblue': '#08143a',
        'balck': '#000000'
      },

      spacing: {
        'nav': '50px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px'
      },

      boxShadow: {
        'simple': '-0.5rem 0.5rem rgba(0, 0, 0, 0.5)',
        'small': '-0.25rem 0.25rem rgba(0, 0, 0, 0.5)'
      },

      cursor: {
        'pen': 'url(../images/pen.png), crosshair'
      }
    },
  },

  darkMode: 'selector',

  plugins: [
    require('flowbite/plugin')
  ],
};