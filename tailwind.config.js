module.exports = {
  purge: [
    'src/pages/calendar.vue',
    'src/pages/dcheroes.vue',
    'src/pages/home.vue',
    'src/pages/markdown.vue',
    'src/pages/slider.vue',
    'src/components/appheader.vue',
    'src/App.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
