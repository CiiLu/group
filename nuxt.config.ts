// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon', '@nuxt/ui'],
  content: {
    experimental: {
      nativeSqlite: true
    }
  },
  app: {
    head: {
      titleTemplate: '%s - MC 疑难杂症交流群'
    }
  },
  fonts: {
    provider: 'local'
  },

  css: ['~/assets/css/main.css']
})