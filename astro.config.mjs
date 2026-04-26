// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://endore8.github.io",
  base: "/voicealarm-web",
  integrations: [react(), partytown()],
});
