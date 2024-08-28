// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    display: "swap",
    download: true,
    preload: true,
    useStylesheet: true,
    families: {
      'Proxima Nova': [400, 700],
      "Crimson Text": [400, 600, 700],
      'Playfair Display': [400, 600, 700]
    },
  },

  routeRules: {
    '/': { prerender: true }
  },

  devtools: {
    enabled: false
  },

  typescript: {
    strict: false
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11'
})
