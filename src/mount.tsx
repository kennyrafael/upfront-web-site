import { type ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
/**
 * Radix Themes assembled by hand, the same way the app does it and for the same reason:
 * `styles.css` carries all twenty-six colour scales in two appearances, and this site uses
 * three in one.
 *
 * **The order is load-bearing.** Scales define `--gray-*` literally; `base.css` remaps it
 * onto the chosen `grayColor`. Equal specificity, so the last import wins — put `base.css`
 * first and every grey silently reverts to plain gray with nothing visibly broken.
 */
import '@radix-ui/themes/tokens/colors/jade.css';
import '@radix-ui/themes/tokens/colors/sage.css';
import '@radix-ui/themes/tokens/colors/gray.css';
import '@radix-ui/themes/tokens/base.css';
import '@radix-ui/themes/components.css';
import '@radix-ui/themes/utilities.css';
// Last: ours redefines a handful of these variables and has to win.
import './index.css';

/**
 * Puts a page in the document.
 *
 * Shared by both entry points rather than copied into each. The site is **two documents, not
 * a single-page app** — see `vite.config.ts` — so each has its own entry module, and the
 * import order above is the one thing in this file that would be dangerous to duplicate:
 * two copies means one of them can be reordered and only that page turns grey.
 */
export function mount(page: ReactNode): void {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error('Root element #root not found');
  }

  createRoot(container).render(<StrictMode>{page}</StrictMode>);
}
