require('dotenv').config()

export default {
  mode: 'universal',

  env: {
    mapKey: process.env.API_GOOGLE_MAP_KEY
  },

  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/google-maps', ssr: true }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n', '@nuxtjs/dotenv'],
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', name: 'Russian' }
    ],
    langDir: '/locales/',
    lazy: true,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    optionsPath: '~/vuetify.options.js'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {},
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
