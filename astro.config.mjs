// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import partytown from "@astrojs/partytown";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://endore8.github.io",
  base: process.env.GITHUB_ACTIONS ? "/voicealarm-web" : undefined,
  image: {
    service: passthroughImageService(),
  },
  integrations: [partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});
