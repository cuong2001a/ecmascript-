module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      img: false
    },
  },
  variants: {
    extend: {
      transitionDuration: ['responsive', 'hover', 'focus'],
      transformOrigin: ['responsive', 'hover', 'focus'],
      translate: ['responsive', 'hover', 'focus', 'active', 'group-hover']
    },
  },
  plugins: [],
}
