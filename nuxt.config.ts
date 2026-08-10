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
        { rel: 'preconnect', href: 'https://use.typekit.net', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://use.typekit.net/ljp0ueo.css' },
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
