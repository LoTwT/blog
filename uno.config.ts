import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  rules: [
    ["skip-ink-none", { "text-decoration-skip-ink": "none" }],
    ["skip-ink-auto", { "text-decoration-skip-ink": "auto" }],
  ],
  shortcuts: {
    link: "relative after:block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0.5 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 after:rounded-full",
  },

  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetWebFonts({
      themeKey: "font",
      fonts: {
        sans: ["Noto Sans", "Noto Sans SC"],
        mono: ["DM Mono"],
      },
    }),
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
