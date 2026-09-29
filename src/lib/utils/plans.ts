import { APP_URL } from './links';

/** Monthly or yearly. The names match the query parameter the app reads. */
export const BILLING_CYCLES = ['month', 'year'] as const;
export type BillingCycle = (typeof BILLING_CYCLES)[number];

/**
 * A year costs ten months and a bit.
 *
 * **Derived, never typed beside the monthly figure.** The moment both numbers exist by hand
 * the discount can drift away from the price it is supposed to be a discount on — and it
 * drifts silently, because both look plausible. `api/scripts/create-stripe-plans.ts` computes
 * the Stripe price the same way from the same monthly figure, which is what keeps this page
 * and the thing that charges the card telling the same story.
 */
export const ANNUAL_DISCOUNT = 0.1;

export interface Tier {
  /** Matches the plan key in the API's entitlements catalogue and in Stripe's metadata. */
  key: 'free' | 'solo' | 'standard' | 'pro';
  monthlyCents: number;
  /**
   * The one card with a ring around it.
   *
   * `standard` rather than the dearest, deliberately: it is the first tier that covers
   * Stripe's own per-account cost comfortably, and the shop it is for — more than one pair of
   * hands — is the one this product was rebuilt for.
   */
  featured?: boolean;
}

/**
 * Four tiers, cheapest first.
 *
 * ⚠ **These prices are placeholders and should be read as such.** Nobody has been interviewed
 * and no Iberian provider has been asked what they would pay; what is decided is the shape —
 * three paid tiers and what separates them. See `docs/subscriptions.md` in the product
 * repository, which also records that the gap between €0 and €9 is the most consequential
 * number here and the one nobody has tested.
 */
export const TIERS: Tier[] = [
  { key: 'free', monthlyCents: 0 },
  { key: 'solo', monthlyCents: 900 },
  { key: 'standard', monthlyCents: 1900, featured: true },
  { key: 'pro', monthlyCents: 3900 },
];

/** Twelve months less the discount, rounded to the cent. */
export function annualCents(monthlyCents: number): number {
  return Math.round(monthlyCents * 12 * (1 - ANNUAL_DISCOUNT));
}

/**
 * Euros, in the visitor's own language.
 *
 * Whole amounts lose the decimals — "9 €" rather than "9,00 €", which reads like a form
 * field. Formatted rather than translated, so `97,20 €` and `€97.20` both come out of one
 * number with no string in either dictionary.
 */
export function formatEuros(cents: number, localeTag: string): string {
  const whole = cents % 100 === 0;
  return new Intl.NumberFormat(localeTag, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  }).format(cents / 100);
}

/**
 * Where a card's button goes.
 *
 * **The first deep link this site has ever produced** — every other call to action points at
 * the bare origin. So `VITE_APP_URL` being wrong stops being a cosmetic problem: it was unset
 * on the live project once already, and a plan chosen here would silently arrive nowhere.
 *
 * The plan travels as a query parameter rather than being remembered: the app has to survive
 * somebody typing `/signup` directly, so the parameter is a hint and never a requirement.
 */
export function signupUrl(plan: Tier['key'], cycle: BillingCycle): string {
  return `${APP_URL}/signup?plano=${plan}&ciclo=${cycle}`;
}
