<script setup lang="ts">
import type { NuxtError } from "#app"
import LayoutsDefault from "~/layouts/default.vue"

defineProps({
  error: Object as () => NuxtError,
})

useTheme()
</script>

<template>
  <LayoutsDefault>
    <div
      class="flex h-full w-full flex-col items-center justify-center gap-y-4"
    >
      <h1 class="text-8xl font-bold">{{ error?.statusCode }}</h1>
      <h2 class="text-xl">{{ error?.statusMessage }}</h2>
      <NuxtLink to="/">
        <UButton size="lg">Go back home</UButton>
      </NuxtLink>
    </div>
  </LayoutsDefault>
</template>
