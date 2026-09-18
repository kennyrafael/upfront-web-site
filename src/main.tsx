import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
/**
 * Radix Themes assembled by hand, the same way the app does it and for the same reason:
 * `styles.css` carries all twenty-six colour scales in two appearances, and this page uses
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

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element #root not found');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
