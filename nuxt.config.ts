// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  devtools: { enabled: false },

  css: ['~/assets/css/styles.css','bootstrap/dist/css/bootstrap.min.css'],

  build: {
    transpile: [

    ]
  },

  plugins: [
    //{ src: '~/plugins/tinymce802/tinymce.min.js', mode: 'client' },
    { src: '~/plugins/tinymce.client.ts', mode: 'client' },
  ],

  image: {
        dir: 'assets'
      },

  app: {
    head: {
      title: 'Xenoboard',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        //{ hid: 'description', name: 'description', content: 'Xenoboard message board' },
      ],
      script: [
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        },
        {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: 'anonymous'
        },
        {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ]
    },
  },

  vuestic: {
    config: {
      // Config here
    },
    fonts: false,
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@bootstrap-vue-next/nuxt',
    '@pinia/nuxt',
    '@vuestic/nuxt',
    '@nuxtjs/sitemap',
    'nuxt-seo-utils',
  ]
})