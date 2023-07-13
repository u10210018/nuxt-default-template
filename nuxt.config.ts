// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // doc: https://github.com/vueuse/vueuse
    '@vueuse/nuxt',
    // doc: https://github.com/vueuse/motion
    '@vueuse/motion/nuxt',
    // doc: https://github.com/nuxt-modules/tailwindcss
    '@nuxtjs/tailwindcss',
    // doc: https://github.com/vuejs/pinia
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
    // doc: https://github.com/prazdevs/pinia-plugin-persistedstate
    '@pinia-plugin-persistedstate/nuxt',
    // doc: https://github.com/nuxt-modules/icon
    'nuxt-icon',
    // doc: https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // doc: https://github.com/fumeapp/dayjs
    'dayjs-nuxt',
    // doc: https://github.com/cpreston321/nuxt-swiper
    'nuxt-swiper',
  ],
})
