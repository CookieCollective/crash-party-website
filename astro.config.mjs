import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

export default defineConfig({
  base: "/w/crash-party/",
  integrations: [svelte()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
