# upfront-web-site

The Upfront public landing page. React + Vite, port 5174, deployed to Vercel as a static build.

**The product brief, the roadmap and every design document live in the `upfront` repository**,
not here — including the positioning this page is meant to express. This file covers only what
is true about *this* codebase.

## What this is, and what it deliberately is not

The same stack and the same atomic-design conventions as the dashboard, so nothing is relearned
moving between them — **but no router, no stores and no API client.** It is a page, not an
application. Keep it that way; the moment it needs to read data it belongs in the dashboard.

**Two documents, not one, since 2026-09-29**: `/` and `/planos`. Still no router — each is its
own HTML file with its own entry, listed in `vite.config.ts` under `build.rollupOptions.input`,
sharing `src/mount.tsx` for the load-bearing CSS import order. A third page is three lines.

The visitor's language survives a full page load because it lives in `localStorage`, which is
the only thing a router would have bought here. Two consequences worth knowing:

- **`appType: 'mpa'` is not optional.** The default hands any unknown path to `index.html`, so
  `/planos` would serve the home page in development and nowhere else.
- **A new page needs adding to `PAGES` in `vite.config.ts`.** Vite's dev server resolves
  `/planos/` but not `/planos`, and the deployment is the other way round; the little
  `extensionlessPages` plugin makes development agree with production so a nav link can be
  correct in both.

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

`vercel.json` holds two lines and no rewrites: `cleanUrls` and `trailingSlash: false`, so
`planos/index.html` is served at `/planos`. It came back on 2026-09-29 with the second page —
the file deleted before it held nothing but a build-filter command from when this lived in a
monorepo, and the reason it was not needed ("a static build with no router needs no rewrites")
was about a single document rather than about rewrites.

**Deliberately not a catch-all rewrite.** A `/(.*) → /index.html` rule is how an SPA is
deployed and it is also how a typo becomes the home page with a 200: every wrong URL renders
something, so a missing page is invisible until somebody reports it. `cleanUrls` says how files
are addressed and leaves a genuine 404 alone.

## `@upfront/ui`

`Button` comes from the shared package as of 2026-09-30, along with the token bridge in
`index.css`. `Eyebrow` and `Section` stayed here: they are this page's own furniture, and a
component earns a place in the package when a second app wants it.

**The variant this page needed has a name now.** Its `secondary` used to map to Themes'
`surface` while the dashboard's mapped to `soft` — one word, two looks, which is the drift
`docs/ecosystem.md` predicted. `secondary` now means `soft` everywhere and the bordered,
translucent button this page wants **over the dark hero** is `outline`. The three call sites that
sit on that dark field say so explicitly; the plan cards, which sit on pale sheets, use
`secondary`.

Two things that must not be forgotten when touching the stylesheet or the config:

- `index.css` needs `@source '../node_modules/@upfront/ui/dist'` **above** the tokens import, or
  Tailwind never generates the classes used inside the atoms and they come out subtly unstyled
  with nothing in the console.
- `vite.config.ts` needs `resolve.dedupe` for react, react-dom and `@radix-ui/themes`. A linked
  package resolves its own copies first, and two Reacts means every hook inside an atom reads a
  null dispatcher.

⚠ **The dependency is `file:../ui`, which a Vercel build cannot resolve** — each project builds
from its own repository. The package has to be pushed and depended on by tag, or published,
before this deploys again.
