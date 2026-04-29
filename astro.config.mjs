// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import partytown from "@astrojs/partytown";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://voicealarm.app",
  image: {
    service: passthroughImageService(),
  },
  integrations: [partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});
