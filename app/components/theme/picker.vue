<script setup lang="ts">
import { omit } from "#ui/utils"
import colors from "tailwindcss/colors"

const appConfig = useAppConfig()
const colorMode = useColorMode()

const neutralColors = ["slate", "gray", "zinc", "neutral", "stone"]
const neutral = computed({
  get() {
    return appConfig.ui.colors.neutral
  },
  set(option) {
    appConfig.ui.colors.neutral = option
    window.localStorage.setItem("nuxt-ui-neutral", appConfig.ui.colors.neutral)
  },
})

const colorsToOmit = [
  "inherit",
  "current",
  "transparent",
  "black",
  "white",
  ...neutralColors,
]
const primaryColors = Object.keys(omit(colors, colorsToOmit as any))
const primary = computed({
  get() {
    return appConfig.ui.colors.primary
  },
  set(option) {
    appConfig.ui.colors.primary = option
    window.localStorage.setItem("nuxt-ui-primary", appConfig.ui.colors.primary)
    setBlackAsPrimary(false)
  },
})

const radiuses = [0, 0.125, 0.25, 0.375, 0.5]
const radius = computed({
  get() {
    return appConfig.theme.radius
  },
  set(option) {
    appConfig.theme.radius = option
    window.localStorage.setItem(
      "nuxt-ui-radius",
      String(appConfig.theme.radius),
    )
  },
})

const modes = [
  { label: "light", icon: appConfig.ui.icons.light },
  { label: "dark", icon: appConfig.ui.icons.dark },
  { label: "system", icon: appConfig.ui.icons.system },
]
const mode = computed({
  get() {
    return colorMode.value
  },
  set(option) {
    colorMode.preference = option
  },
})

function setBlackAsPrimary(value: boolean) {
  appConfig.theme.blackAsPrimary = value
  window.localStorage.setItem("nuxt-ui-black-as-primary", String(value))
}
</script>

<template>
  <UPopover :ui="{ content: 'w-72 px-6 py-4 flex flex-col gap-4' }">
    <template #default="{ open }">
      <UButton
        icon="i-lucide-swatch-book"
        color="neutral"
        :variant="open ? 'soft' : 'ghost'"
        square
        aria-label="Color picker"
        :ui="{ leadingIcon: 'text-primary' }"
      />
    </template>

    <template #content>
      <fieldset>
        <legend class="mb-2 text-[11px] leading-none font-semibold">
          Primary
        </legend>

        <div class="-mx-2 grid grid-cols-3 gap-1">
          <ThemePickerButton
            label="Black"
            :selected="appConfig.theme.blackAsPrimary"
            @click="setBlackAsPrimary(true)"
          >
            <template #leading>
              <span
                class="inline-block h-2 w-2 rounded-full bg-black dark:bg-white"
              />
            </template>
          </ThemePickerButton>

          <ThemePickerButton
            v-for="color in primaryColors"
            :key="color"
            :label="color"
            :chip="color"
            :selected="!appConfig.theme.blackAsPrimary && primary === color"
            @click="primary = color"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="mb-2 text-[11px] leading-none font-semibold">
          Neutral
        </legend>

        <div class="-mx-2 grid grid-cols-3 gap-1">
          <ThemePickerButton
            v-for="color in neutralColors"
            :key="color"
            :label="color"
            :chip="color === 'neutral' ? 'old-neutral' : color"
            :selected="neutral === color"
            @click="neutral = color"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="mb-2 text-[11px] leading-none font-semibold">
          Radius
        </legend>

        <div class="-mx-2 grid grid-cols-5 gap-1">
          <ThemePickerButton
            v-for="r in radiuses"
            :key="r"
            :label="String(r)"
            class="justify-center px-0"
            :selected="radius === r"
            @click="radius = r"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="mb-2 text-[11px] leading-none font-semibold">
          Theme
        </legend>

        <div class="-mx-2 grid grid-cols-3 gap-1">
          <ThemePickerButton
            v-for="m in modes"
            :key="m.label"
            v-bind="m"
            :selected="colorMode.preference === m.label"
            @click="mode = m.label"
          />
        </div>
      </fieldset>
    </template>
  </UPopover>
</template>
