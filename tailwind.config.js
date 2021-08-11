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
      ]
    },
  },
  plugins: [
    plugin(function selectionVariant({ addVariant, e }) {
      addVariant('selection', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`selection${separator}${className}`)}::selection`;
        })
      })
    })
  ],
}
