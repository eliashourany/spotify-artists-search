module.exports = {
  title: 'Spotify Artists Search',
  description: 'A Nuxt.js + Vuetify project using the Spotify API to search artists and check their albums',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development', link: '/development' },
      { text: 'Vue', link: 'https://vuejs.org/' },
      { text: 'Nuxt', link: 'https://nuxtjs.org/' },
    ],
    sidebar: [
      ['/', 'Introduction'],
      '/development',
      '/architecture',
      '/tech',
      '/nuxt.config',
      '/package.json',
      '/layouts',
      '/pages',
      '/components',
      '/plugins',
      '/i18n',
      '/pwa',
      '/editors',
      '/linting',
      '/production',
      '/performance',
      '/troubleshooting',
    ],
    lastUpdated: 'Last Updated', // string | boolean
  },
}
