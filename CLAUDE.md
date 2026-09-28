# upfront-web-site

The Upfront public landing page. React + Vite, port 5174, deployed to Vercel as a static build.

**The product brief, the roadmap and every design document live in the `upfront` repository**,
not here — including the positioning this page is meant to express. This file covers only what
is true about *this* codebase.

## What this is, and what it deliberately is not

The same stack and the same atomic-design conventions as the dashboard, so nothing is relearned
moving between them — **but no router, no stores and no API client.** It is a page, not an
application. Keep it that way; the moment it needs to read data it belongs in the dashboard.

It is **pinned to the light appearance**, for the same reason the public booking page is: it
belongs to visitors rather than to anyone who works here.

Every call to action points at the dashboard through one `APP_URL` constant, fed by
`VITE_APP_URL`. **That variable going unset is not hypothetical** — it was never set on the
Vercel project and had no `.env.example` to name it, so every button on the live page pointed at
`localhost:5173` until somebody read the deployed bundle. A fallback to localhost is a fallback
that ships.

## Conventions worth keeping

Every folder has an `index.ts`. Biome for lint and format.

**This repository's `Button` and the dashboard's disagree**, and knowing that is the point: here
`secondary` maps to Themes' `surface` and there is no `danger` variant; there it maps to `soft`
and there is one, with a different size vocabulary. A shared design system was planned and is
harder now that these are separate repositories — so if you change a shared-looking component,
you are changing one of two, not both.

## Deployment

No `vercel.json`. A static build with no router needs no rewrites, and the file that used to be
here held nothing but a build-filter command from when this lived in a monorepo.
