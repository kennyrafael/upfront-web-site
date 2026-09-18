/**
 * Where the product lives.
 *
 * One constant rather than nine hrefs, because the site and the app are deployed
 * separately and the day this changes it must change once. The default is the app's dev
 * server, so the two work together out of a fresh checkout with nothing configured.
 */
export const APP_URL = import.meta.env.VITE_APP_URL ?? 'http://localhost:5173';

/** Where a provider who wants to talk to a person goes. */
export const CONTACT_EMAIL = 'ola@upfront.pt';
