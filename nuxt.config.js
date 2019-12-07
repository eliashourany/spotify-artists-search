import i18n from './i18n'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/spotify/',
        },
      }
    : {}

export default {
  ...routerBase,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3aff0f' },
  /*
   ** Active link class for the router
   */
  router: {
    linkExactActiveClass: 'exact-active-link',
  },
  /*
   ** Generate dynamic pages
   */
  generate: {
    fallback: true, // fallback to spa mode - default is 200.html
    exclude: [/.unit/], // exclude unit tests from being generated
  },
  /*
   ** Global CSS
   */
  css: [
    '@mdi/font/css/materialdesignicons.css',
    'roboto-fontface/css/roboto/roboto-fontface.css',
    '@/assets/css/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/pwa'],
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/vuetify',
      {
        defaultAssets: false,
        optionsPath: './vuetify.options.js',
      },
    ],
    ['nuxt-i18n', i18n],
  ],

  // globally load all our sass variables
  // styleResources: {
  //   scss: ['./assets/scss/variables.scss'],
  // },
  purgeCSS: {
    mode: 'postcss',
    whitelistPatterns: [/cookie-consent/],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://api.spotify.com/v1',
    https: true,
  },
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/schemes/oauth2.html
   */
  auth: {
    redirect: {
      login: '/login',
      callback: '/callback',
      home: '/?redirectFrom=callback',
      logout: '/',
    },
    resetOnError: true,
    strategies: {
      local: false,
      spotify: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://accounts.spotify.com/authorize',
        userinfo_endpoint: false,
        scope: [],
        response_type: 'token',
        access_type: undefined,
        access_token_endpoint: undefined,
        token_type: 'Bearer',
        redirect_uri: undefined,
        client_id: '76341d0ea865461090fe13bacbac623f',
        token_key: 'access_token',
      },
    },
    localStorage: false,
    cookie: {
      options: {
        maxAge: 3600,
      },
    },
  },
  // Define the default transition between pages
  pageTransition: {
    name: 'fade',
    mode: '',
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {},
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  server: {
    port: 3000,
  },
}
