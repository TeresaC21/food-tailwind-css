module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        'primary': '#f3c614',
        'secondary': '#353535'
      },
      height: {
        '80': '20rem',
        '100': '25rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
