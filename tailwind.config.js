/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/static/src/**/*.{html,js}", './app/templates/**/*.{html,js,jinja2,j2}'],
  theme: {
    extend: {
      colors: {
        body: 'rgba(25,25,35,1)',
        light_body: 'rgb(218,218,218)',
        soft_white: '#EDEDED',
        my_gray: '#8c8c8e',
        soft: '#222222',
        my: '#6c6c6e',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

