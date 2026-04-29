# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Voice Alarm (iOS app). Single-page Astro 6 site styled with Tailwind 4, deployed to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

## Commands

Package manager is pnpm (10.7.1, Node ≥22.12). Astro provides `dev`, `build`, `preview`.

- `pnpm dev` — local server at `localhost:4321`
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — serve the built site locally
- `pnpm astro check` — type-check `.astro` files (via `@astrojs/check`)

There are no tests, lint config, or formatter config in this repo.

## Architecture notes

- **Single page**: `src/pages/index.astro` composes `Hero`, `Features`, `SocialProof`, `FAQ` inside `Layout.astro`. `Layout.astro` wraps everything with `Navbar` + `Footer` and imports `styles/global.css` (which is just `@import "tailwindcss"` — Tailwind v4 with no separate config file; classes are scanned from the templates).
- **Tailwind v4 via Vite plugin**: configured in `astro.config.mjs` (`@tailwindcss/vite`), not via `tailwind.config.js`. Use Tailwind v4 syntax (e.g. `bg-linear-to-br`, not `bg-gradient-to-br`).
- **GitHub Pages base path**: `astro.config.mjs` sets `base: "/voicealarm-web"` only when `GITHUB_ACTIONS` is set, so local dev runs at root. Use root-relative `/...` hrefs and `Astro.url`/`import.meta.env.BASE_URL` if you need the prefix.
- **Image handling**: `passthroughImageService()` is configured — no Sharp transforms; images are served as-is. Local images in `src/assets/` use `astro:assets` `<Image>`, public files in `public/`.
- **Icons**: Lucide via `@lucide/astro` (note: prop is `stroke-width`, not `strokeWidth`). Brand glyphs live as hand-rolled `.astro` files in `src/components/icons/`.
- **Partytown** is registered as an integration but no third-party scripts are wired up yet.

## Conventions

- Components are `.astro` only — no React/Vue/Svelte. Keep it that way unless asked.
- Indentation in existing files is mixed (tabs in some, 4-space in others); match the surrounding file rather than reformatting.
