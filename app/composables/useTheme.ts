import colors from "tailwindcss/colors"

export function useTheme() {
  const appConfig = useAppConfig()
  const colorMode = useColorMode()

  const color = computed(() =>
    colorMode.value === "dark"
      ? (colors as any)[appConfig.ui.colors.neutral][900]
      : "white",
  )
  const radius = computed(
    () => `:root { --ui-radius: ${appConfig.theme.radius}rem; }`,
  )
  const blackAsPrimary = computed(() =>
    appConfig.theme.blackAsPrimary
      ? `:root { --ui-primary: black; } .dark { --ui-primary: white; }`
      : ":root {}",
  )

  useHead({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { key: "theme-color", name: "theme-color", content: color },
    ],
    link: [],
    style: [
      { innerHTML: radius, id: "nuxt-ui-radius", tagPriority: -2 },
      {
        innerHTML: blackAsPrimary,
        id: "nuxt-ui-black-as-primary",
        tagPriority: -2,
      },
    ],
  })
}
