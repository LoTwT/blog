<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const normalizedSlugArray = Array.isArray(slug) ? slug : [slug]
const normalizedPath = normalizedSlugArray.join("/")

const { data: post } = await useAsyncData(() => {
  return queryCollection("content").path(`/${normalizedPath}`).first()
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
