<script setup lang="ts">
import type { Collections } from "@nuxt/content"

const route = useRoute()
const category = route.params.category as keyof Collections
const slug = route.params.slug

const { data: post } = await useAsyncData(`${category}-${slug}`, () => {
  return queryCollection(category).path(`/${category}/${slug}`).first()
})
</script>

<template>
  <template v-if="post">
    <ContentRenderer :value="post" />
  </template>
  <template v-else>
    <div>No Post: {{ route.fullPath }}</div>
    <NuxtLink to="/">Go back to home</NuxtLink>
  </template>
</template>
