/**
 * `Button` now comes from `@kennycorrea/ui`, shared with the dashboard and the admin app.
 *
 * It used to live here, and its `secondary` mapped to Themes' `surface` while the dashboard's
 * mapped to `soft` — the same word meaning two things in two products, which is the drift
 * `docs/ecosystem.md` named. `secondary` now means one thing everywhere and the bordered look
 * this page wants over its dark hero is called `outline`.
 *
 * `Eyebrow` and `Section` stay: they are this page's own furniture, and a component belongs in
 * the package when a second app wants it, not in anticipation of one.
 */
export * from '@kennycorrea/ui';
export * from './Eyebrow';
export * from './Section';
