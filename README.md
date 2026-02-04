# Crash Party Website

Website for Crash Party. Built with Astro 5, Svelte 5, and plain CSS.

## Setup

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Project Structure

```
src/
├── components/    # Astro and Svelte components
├── layouts/       # Page layouts
├── pages/         # Route-based pages
│   └── [locale]/  # Locale-specific routes
├── styles/        # Global styles
└── i18n.ts        # Translations and locale helpers
public/
├── content/       # Media assets (audio, images, photos, video)
└── fonts/
```

## i18n

French (default) and English. Routes are locale-prefixed: `/fr/`, `/en/`.
