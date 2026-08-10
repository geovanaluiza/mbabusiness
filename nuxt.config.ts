// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: false,
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Welcome — NU School of Business',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=1080, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover' },
        { name: 'theme-color', content: '#00263d' },
        { name: 'description', content: 'Welcome to the Northwest University School of Business — Fall 2026 Cohorts' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap' },
      ],
    },
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/'],
    },
  },
})
