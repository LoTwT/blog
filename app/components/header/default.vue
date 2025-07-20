<script setup lang="ts">
const headerRoutes = [
  { name: "Home", path: "/" },
  { name: "Daily", path: "/daily" },
  { name: "Technology", path: "/technology" },
]
</script>

<template>
  <header class="flex items-center justify-center gap-x-4">
    <ul class="flex items-center justify-center gap-x-4">
      <li v-for="route in headerRoutes" :key="route.name">
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </li>
    </ul>
    <ThemePicker />
  </header>
</template>
