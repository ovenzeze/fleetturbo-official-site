// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  pages: true,

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],

  typescript: {
    strict: false,
    builder: 'vite',
    typeCheck: false, 
    tsConfig: {
      "compilerOptions": {
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "moduleResolution": "node",
        "module": "ESNext",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "noEmit": true
      },
    },
  },
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

  devtools: {
    enabled: false
  },

  future: {
    compatibilityVersion: 4
  },


  compatibilityDate: '2024-07-11',
})
