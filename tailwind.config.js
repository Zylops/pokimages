module.exports = {
  mode: "jit",
  purge: ['./**/**/*.html', './**/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rubik': "Rubik",
        'pokefont': "Pokemon"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
