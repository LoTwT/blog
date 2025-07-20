import process from "node:process"

const isDevelopment = process.env.NODE_ENV === "development"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
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
    preset: isDevelopment ? "cloudflare-dev" : "cloudflare-module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
})
