import { useState } from 'react';
import { Section } from '@/components/atoms';
import { PlanCard } from '@/components/molecules';
import { annualCents, type BillingCycle, cn, formatEuros, signupUrl, TIERS, useCopy } from '@/lib';

/**
 * The plans, as cards.
 *
 * **This component holds the pricing structure and the dictionaries hold only words** — the
 * rule at the top of `pt.ts`. Four tiers with feature lists of four different lengths is
 * exactly the case that rule exists for: a list of three in one language and two in another
 * would typecheck and ship wrong.
 *
 * Each tier lists what it *adds* over the one below. That is how the pricing decision is
 * written down, and repeating six free-tier lines on all four cards would bury the one line
 * that differs.
 */
export function Plans() {
  const dictionary = useCopy();
  const copy = dictionary.plans;
  const [cycle, setCycle] = useState<BillingCycle>('month');

  /** Which words belong to which tier. The only place that decides it. */
  const CONTENT: Record<
    string,
    { name: string; who: string; builtOn?: string; features: string[] }
  > = {
    free: {
      name: copy.freeName,
      who: copy.freeWho,
      features: [
        copy.freeOnePerson,
        copy.freeBookingPage,
        copy.freeClients,
        copy.freeDeposits,
        copy.freeCompliance,
        copy.freeEmail,
      ],
    },
    solo: {
      name: copy.soloName,
      who: copy.soloWho,
      builtOn: copy.builtOn(copy.freeName),
      features: [copy.soloRecurring],
    },
    standard: {
      name: copy.standardName,
      who: copy.standardWho,
      builtOn: copy.builtOn(copy.soloName),
      features: [copy.standardPeople, copy.standardCalendar, copy.standardSms],
    },
    pro: {
      name: copy.proName,
      who: copy.proWho,
      builtOn: copy.builtOn(copy.standardName),
      features: [copy.proWaitlist, copy.proSms],
    },
  };

  const tag = dictionary.meta.localeTag;

  return (
    <Section eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} centered>
      {/* A pair of buttons rather than a Switch: a switch says on and off, and neither of
          these is off. Radio semantics, so a screen reader hears two choices and which one
          is taken. */}
      <div className="mt-10 flex justify-center">
        <fieldset className="inline-flex rounded-full bg-sheet p-1 ring-1 ring-hairline">
          <legend className="sr-only">{copy.cycleLabel}</legend>
          {(
            [
              ['month', copy.monthly, undefined],
              ['year', copy.annual, copy.annualSaving],
            ] as const
          ).map(([value, label, badge]) => (
            <label
              key={value}
              className={cn(
                'cursor-pointer rounded-full px-4 py-1.5 font-medium text-sm transition-colors',
                'has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-700 has-[:focus-visible]:outline-offset-2',
                cycle === value ? 'bg-brand-700 text-white' : 'text-ink-muted hover:text-brand-ink',
              )}
            >
              {/* Real radios rather than buttons wearing `role="radio"`: one keyboard visitor
                  reaches this with arrow keys instead of tab-and-enter, and the focus ring is
                  the input's own, borrowed by the label through `has-[:focus-visible]`. */}
              <input
                type="radio"
                name="billing-cycle"
                value={value}
                checked={cycle === value}
                onChange={() => setCycle(value)}
                className="sr-only"
              />
              {label}
              {badge ? (
                <span
                  className={cn(
                    'ml-2 text-xs',
                    cycle === value ? 'text-white/80' : 'text-brand-ink',
                  )}
                >
                  {badge}
                </span>
              ) : null}
            </label>
          ))}
        </fieldset>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier, index) => {
          const content = CONTENT[tier.key];
          const free = tier.monthlyCents === 0;
          const yearly = cycle === 'year';
          const total = yearly ? annualCents(tier.monthlyCents) : tier.monthlyCents;

          return (
            <PlanCard
              key={tier.key}
              name={content.name}
              who={content.who}
              // A free tier says "Grátis" rather than "0 €", which reads like a price that
              // failed to load.
              price={free ? copy.freePrice : formatEuros(total, tag)}
              priceSuffix={free || yearly ? undefined : copy.perMonth}
              priceNote={
                free
                  ? undefined
                  : yearly
                    ? // The yearly card shows the year's total, so the useful second line is
                      // what that comes to a month — the figure the monthly card shows, which
                      // is how somebody compares the two.
                      copy.monthlyEquivalent(formatEuros(Math.round(total / 12), tag))
                    : copy.annualBilled(formatEuros(annualCents(tier.monthlyCents), tag))
              }
              builtOn={content.builtOn}
              features={content.features}
              cta={free ? copy.startFree : copy.start}
              href={signupUrl(tier.key, cycle)}
              featured={tier.featured}
              delay={index * 70}
            />
          );
        })}
      </div>

      {/* The three things a pricing page owes somebody who reads the small print, and the
          reason they are here rather than in a footer: the commission is the larger cost of
          using Upfront, and a plans page that only shows subscriptions is not telling them
          what this costs. */}
      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-2 text-center text-ink-muted text-sm">
        <p>{copy.feeNote}</p>
        <p>{copy.vatNote}</p>
        <p>{copy.neverGated}</p>
      </div>

      <div className="reveal-item mx-auto mt-12 max-w-xl rounded-2xl bg-sheet p-6 text-center ring-1 ring-hairline">
        <h3 className="font-semibold text-base text-brand-900">{copy.doubtTitle}</h3>
        <p className="mt-2 text-ink-muted text-sm leading-relaxed">{copy.doubtBody}</p>
      </div>
    </Section>
  );
}
