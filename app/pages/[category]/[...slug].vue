<script setup lang="ts">
import type { PageCollection } from "@nuxt/content"

const route = useRoute()
const category = route.params.category as keyof PageCollection
const slug = route.params.slug as string

const { data: post } = await useAsyncData(() => {
  return queryCollection("content").path(`/${category}/${slug}`).first()
})

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Post not found for category: ${category} and slug: ${slug}`,
  })
}
</script>

<template>
  <ContentRenderer :value="post!" />
</template>
