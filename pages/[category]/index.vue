<script setup lang="ts">
import type { PageCollection } from "@nuxt/content"

const route = useRoute()
const category = route.params.category as keyof PageCollection

const { data: navigations } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("content")
})

const posts = computed(
  () => navigations.value?.find((nav) => nav.stem === category)?.children || [],
)

if (!posts.value.length) {
  throw createError({
    statusCode: 404,
    statusMessage: `No posts found for category: ${category}`,
  })
}
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.path">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>
