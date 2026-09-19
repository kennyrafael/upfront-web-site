import { useCopy } from '@/lib';

/**
 * One payment, two amounts.
 *
 * The bar is the price a client approves; the marked-off part at the left is the deposit
 * portion, which is what the business keeps if the appointment is cancelled. That
 * distinction is the whole argument for letting a shop take the full price up front:
 * "never refunded" is a fair rule for a €6.60 deposit and an indefensible one for €65.
 *
 * Bars grow from the left on reveal rather than fading in, because the thing being shown is
 * a proportion and a proportion is easier to read while it is being drawn.
 */
export function SplitFigure() {
  const copy = useCopy().splitFigure;

  return (
    <div className="w-full max-w-md">
      <div className="flex items-baseline justify-between">
        <span className="font-medium text-ink-muted text-sm">{copy.service}</span>
        <span className="font-semibold text-brand-900 text-xl tabular-nums">{copy.price}</span>
      </div>

      {/* The bar. Two segments in one track, so the split is a boundary rather than a gap. */}
      <div className="mt-3 flex h-12 overflow-hidden rounded-xl ring-1 ring-hairline">
        <div
          className="animate-grow flex w-[20%] items-center justify-center bg-brand-900"
          style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
        >
          <span className="font-semibold text-[11px] text-white">{copy.keptAmount}</span>
        </div>
        <div
          className="animate-grow flex flex-1 items-center justify-center bg-brand-700/20"
          style={{ '--reveal-delay': '260ms' } as React.CSSProperties}
        >
          <span className="font-semibold text-[11px] text-brand-900">{copy.returnedAmount}</span>
        </div>
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        <div
          className="reveal-item flex gap-3"
          style={{ '--reveal-delay': '420ms' } as React.CSSProperties}
        >
          <span aria-hidden="true" className="mt-1.5 size-2.5 shrink-0 rounded-sm bg-brand-900" />
          <div>
            <dt className="font-medium text-ink">{copy.keptHeading}</dt>
            <dd className="text-ink-muted">{copy.keptBody}</dd>
          </div>
        </div>
        <div
          className="reveal-item flex gap-3"
          style={{ '--reveal-delay': '500ms' } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="mt-1.5 size-2.5 shrink-0 rounded-sm bg-brand-700/40"
          />
          <div>
            <dt className="font-medium text-ink">{copy.returnedHeading}</dt>
            <dd className="text-ink-muted">{copy.returnedBody}</dd>
          </div>
        </div>
      </dl>
    </div>
  );
}
