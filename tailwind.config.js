/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/custom.js',
  ],
  corePlugins: {
    preflight: false,
    tableLayout: false
  },
  purge: false,
  theme: {
    extend: {
      spacing: {
        '9vh': '90vh',
        '13': '3.25rem',
        '1/5':'20%'
      },
      screens: {
        'md': '769px',
        'pad': '921px',
        '2k': '2048px',
      },
      fontSize: {
        'xxs': ['0.65rem','0.8rem'],
        '1_5xl': ['1.375rem','1.775rem'],
        'xl': ['1.25rem', '1.5rem'],
        '2_5xl': ['1.745rem','2.15rem'],
        '3_5xl': ['2rem','2.5rem'],
        '4_5xl': ['2.5rem','3rem']
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
        '1/3': '33.333%',
        '1/2': '50%',
        '1/2vw': '50vw',
        'page': '1320px'
      },
      width: {
        '38': '9.5rem',
        '1/7': '14.285%'
      },
      borderRadius: {
        'section': '3rem',
        '4xl': '2rem'
      },
      colors: {
        vi: {
          DEFAULT: '#F6BE00',
        },
        black: {
          DEFAULT: '#000000'
        },
      }
    },
  },
  plugins: []
}