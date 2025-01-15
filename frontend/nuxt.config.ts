// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],

  build: {
    transpile: ["@nuxt/ui"],
  },
  compatibilityDate: "2025-01-15",
});