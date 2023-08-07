/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./static/src/**/*.{html,js}", './templates/**/*.{html,js,jinja2,j2}'],
  theme: {
    extend: {
      colors: {
        body: 'rgba(25,25,35,1)',
        soft_white: '#EDEDED',
        my_gray: '#8c8c8e',
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

