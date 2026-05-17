---
title: Cloudflare Pages deployment
type: work
created: 2026-05-17
updated: 2026-05-17
---

# Cloudflare Pages deployment

## Build settings

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: local verification used `24.14.0`.

## Static export policy

This project uses `output: 'export'` in `next.config.mjs`.

Keep this project static. If server runtime is needed, switch to Pages Functions or Workers first.

Avoid:

- Route handlers.
- Server Actions.
- Runtime image optimization.
- Middleware.
- Dynamic rendering that cannot be exported.

## Source references

- Cloudflare Pages static Next.js guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Cloudflare Pages custom headers: https://developers.cloudflare.com/pages/configuration/headers/
- Next.js static export guide: https://nextjs.org/docs/app/guides/static-exports
