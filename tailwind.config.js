/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  corePlugins: {
    preflight: false,
    tableLayout: false
  },
  purge: false,
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
        '1/2vw': '50vw',
        'page': '1320px'
      },
      colors: {
        vi: {
          light: '#F6BE00',
          DEFAULT: '#F6BE00',
          dark: '#F6BE00',
        },
        viGray: {
          light: '#dbdbda',
          DEFAULT: '#dbdbda',
          dark: '#dbdbda',
        }
      }
    },
  },
  plugins: []
}