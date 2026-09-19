import { useCopy } from '@/lib';

/** Semicircle from left to right, radius 110, centred at (140, 130). */
const ARC = 'M 30 130 A 110 110 0 0 1 250 130';
/** π·r for a semicircle. Hard-coded rather than measured, so it cannot drift from the path. */
const ARC_LENGTH = 345.6;
/** How far round the sweep sits. Illustrative — the product reads it from real invoices. */
const PROGRESS = 0.62;

/**
 * Turnover against the IVA exemption ceiling.
 *
 * The number a *trabalhador independente* has to watch and almost nobody tracks until an
 * accountant mentions it in March. Crossing the art. 53.º threshold obliges registering for
 * IVA in the following period, and the difference between knowing in September and finding
 * out afterwards is the whole point of putting a gauge on it.
 *
 * No euro figure on the dial on purpose. The threshold moves with each Orçamento do Estado,
 * and a number baked into a marketing page is a number that goes stale without anyone
 * noticing — the same discipline `compliance.config.ts` applies to itself.
 */
export function CeilingFigure() {
  const copy = useCopy().ceilingFigure;

  return (
    <svg viewBox="0 0 280 175" className="h-auto w-full max-w-sm" role="img" aria-label={copy.alt}>
      <title>{copy.title}</title>

      <path
        d={ARC}
        fill="none"
        strokeWidth="16"
        strokeLinecap="round"
        className="stroke-brand-700/15"
      />

      <path
        d={ARC}
        fill="none"
        strokeWidth="16"
        strokeLinecap="round"
        className="animate-sweep stroke-brand-700"
        strokeDasharray={ARC_LENGTH}
        style={
          {
            '--sweep-length': ARC_LENGTH,
            '--sweep-offset': ARC_LENGTH * (1 - PROGRESS),
            strokeDashoffset: ARC_LENGTH * (1 - PROGRESS),
          } as React.CSSProperties
        }
      />

      {/* The line the whole gauge is about, drawn where registering becomes obligatory. */}
      <line
        x1="250"
        y1="112"
        x2="250"
        y2="148"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="stroke-brand-900"
      />

      <text
        x="140"
        y="120"
        textAnchor="middle"
        className="fill-brand-900 font-semibold text-[26px]"
      >
        {copy.percent}
      </text>
      <text x="140" y="144" textAnchor="middle" className="fill-ink-muted text-[12px]">
        {copy.caption}
      </text>
      <text x="250" y="168" textAnchor="middle" className="fill-ink-muted text-[11px]">
        {copy.article}
      </text>
    </svg>
  );
}
