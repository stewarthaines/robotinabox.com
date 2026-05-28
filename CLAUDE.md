# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

robotinabox.com is a product site for SEED (Simple EPUB Editor), a standalone browser-based EPUB editor. Built with Astro + Starlight, hosted on GitHub Pages.

## Development

```bash
nvm use          # switch to Node 22 (see .nvmrc)
npm run dev      # dev server at localhost:4321
npm run build    # build to dist/
npm run preview  # preview the built site
```

## Deployment

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages automatically.

**One-time setup required:** In GitHub repo Settings → Pages, the source must be set to "GitHub Actions" (not "Deploy from branch").

**Critical:** `public/CNAME` must not be deleted — it controls the `robotinabox.com` custom domain.

## Structure

- `src/pages/index.astro` — landing page
- `src/content/docs/docs/` — Starlight docs (served at `/docs/[slug]/`)
- `public/seed/` — SEED app (replace `index.html` with the real SEED.html when ready)
- `public/` — static assets passed through untouched (CNAME, favicon, img)

## Node version

Requires Node 22+. Version pinned in `.nvmrc`.
