// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/content"],

  css: ["@/assets/styles/main.css"],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "dark-plus",
        },
      },
    },
  },

  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
})
