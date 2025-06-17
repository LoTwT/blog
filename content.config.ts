import { defineCollection, defineContentConfig } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    daily: defineCollection({
      type: "page",
      source: "daily/*.md",
    }),
    technology: defineCollection({
      type: "page",
      source: "technology/*.md",
    }),
  },
})
