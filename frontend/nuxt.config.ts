// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-15",
  modules: ["@nuxt/ui"],
  build: {
    transpile: ["@nuxt/ui"],
  },
  nitro: {
    preset: "vercel",
  },
});