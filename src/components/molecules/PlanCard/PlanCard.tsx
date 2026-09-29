import { Button } from '@/components/atoms';
import { cn } from '@/lib';

export interface PlanCardProps {
  name: string;
  who: string;
  /** Already formatted — the card does no arithmetic and knows nothing about cycles. */
  price: string;
  /** `/mês` beside the figure, or nothing at all on a free tier. */
  priceSuffix?: string;
  /** What the figure means in the other cycle: billed yearly, or the monthly equivalent. */
  priceNote?: string;
  /** "Everything in Solo, plus:" — absent on the cheapest tier, which adds to nothing. */
  builtOn?: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
  delay?: number;
}

/**
 * One tier.
 *
 * **The feature list arrives as strings and the card never decides what is in it.** Which
 * tier carries which capability is a product decision that lives in `Plans.tsx` beside the
 * prices; a card that reached into the dictionary itself would put half the pricing model in
 * a presentational component.
 *
 * The button sits **above** the feature list rather than under it. Four lists of different
 * lengths would otherwise put the four buttons at four different heights, and the one thing
 * the page is asking for would be the one thing that moves from card to card.
 */
export function PlanCard({
  name,
  who,
  price,
  priceSuffix,
  priceNote,
  builtOn,
  features,
  cta,
  href,
  featured = false,
  delay = 0,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        'reveal-item flex flex-col rounded-2xl p-6 transition-shadow',
        featured
          ? 'bg-sheet ring-2 ring-brand-700/40 hover:shadow-brand-900/10 hover:shadow-xl'
          : 'bg-sheet ring-1 ring-hairline hover:shadow-brand-900/5 hover:shadow-lg',
      )}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      <h3 className="font-semibold text-base text-brand-900">{name}</h3>
      <p className="mt-1 text-ink-muted text-sm leading-relaxed">{who}</p>

      <p className="mt-5 flex items-baseline gap-1">
        <span className="font-semibold text-3xl text-brand-900 tracking-tight">{price}</span>
        {priceSuffix ? <span className="text-ink-muted text-sm">{priceSuffix}</span> : null}
      </p>
      {/* Reserved whether or not it is filled, so the four price blocks line up and the
          feature lists start on the same line across the row. */}
      <p className="mt-1 min-h-5 text-ink-muted text-xs">{priceNote}</p>

      <Button href={href} className="mt-5" variant={featured ? 'primary' : 'secondary'}>
        {cta}
      </Button>

      {builtOn ? <p className="mt-6 font-medium text-brand-900 text-xs">{builtOn}</p> : null}
      <ul className={cn('flex flex-col gap-2 text-ink text-sm', builtOn ? 'mt-3' : 'mt-6')}>
        {features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            {/* A tick, drawn rather than typed: the character renders at a different weight in
                every font and sits on the wrong baseline in most of them. */}
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 stroke-brand-700"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.5 8.5l3 3 6-7" />
            </svg>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
