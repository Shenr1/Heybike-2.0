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
      fontSize: {
        '4_5xl': ['2.5rem','3rem'],
        '3_5xl': ['2rem','2.5rem'],
        '1_5xl': ['1.375rem','1.875rem']
      },
      margin: {
        '18': '4.5rem',
        '13': '3.25rem'
      },
      padding: {
        '18': '4.5rem',
        '13': '3.25rem'
      },
      fontFamily: {
        'ProductSans': 'Product Sans, Arial, sans-serif'
      },
      maxWidth: {
        '1/2': '50%',
        '1/2vw': '50vw',
        'page': '1320px'
      },
      borderRadius: {
        'section': '3rem'
      },
      colors: {
        vi: {
          light: '#ffcf2c',
          DEFAULT: '#F6BE00',
          dark: '#e4b000',
        },
        viGray: {
          light: '#dbdbda',
          DEFAULT: '#dbdbda',
          dark: '#dbdbda',
        },
        black: {
          100: '#ffffff',
          200: '#eeeeee',
          300: '#cccccc',
          400: '#aaaaaa',
          500: '#888888',
          600: '#666666',
          700: '#444444',
          800: '#222222',
          900: '#000000',
        },
      }
    },
  },
  plugins: []
}