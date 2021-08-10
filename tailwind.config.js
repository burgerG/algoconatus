const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')



module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      }
    },
  },
  variants: {
    extend: {
      textColor: [
        "selection"
      ],
      backgroundColor: [
        "selection"
      ],
    },
  },
  plugins: [
    plugin(function selectionVariant({ addVariant, e }) {
      addVariant('selection', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          // console.log(`.${e(`selection${separator}${className}`)} ::selection`);
          return `.${e(`selection${separator}${className}`)} ::selection`;
        })
      })
      let string = 'TEM ESSA MERDA PRA ARRUMAR AINDA (descobrir como adicionar o selection)'
      Array.from(string).forEach(char => {
        console.log('\x1b[91m\x1b[107m%s\x1b[0m', string);

      });
    })
  ],
}
