import { useCopy } from '@/lib';

/** Where each disc sits, and where its label hangs off it. Geometry, not words. */
const PLACES = [
  { cx: 150, cy: 120, labelX: 74, labelY: 52 },
  { cx: 250, cy: 120, labelX: 326, labelY: 52 },
  { cx: 200, cy: 206, labelX: 200, labelY: 300 },
] as const;

/**
 * Three sets, and the slot is where they overlap.
 *
 * Not decoration — this is the actual rule. A bookable time is the shop being open **and**
 * that person working **and** them not being away or already booked, and the reason it is
 * worth a picture is that people expect the first condition alone to be the answer. The
 * shape explains why a salon open 07:00–22:00 with one stylist on 09:00–17:00 offers
 * 09:00–17:00 and nothing else.
 *
 * Drawn with `mix-blend-multiply` so the overlaps darken by themselves: three translucent
 * discs and the intersection is simply where the most ink landed. Hand-computing the lens
 * shapes would be the same picture and impossible to adjust.
 */
export function AvailabilityFigure() {
  const copy = useCopy().availabilityFigure;
  const labels = [copy.shopHours, copy.employeeHours, copy.free];

  return (
    <svg viewBox="0 0 400 330" className="h-auto w-full max-w-md" role="img" aria-label={copy.alt}>
      <title>{copy.title}</title>

      <g style={{ mixBlendMode: 'multiply' }}>
        {PLACES.map((place, index) => (
          <circle
            key={labels[index]}
            cx={place.cx}
            cy={place.cy}
            r="88"
            className="reveal-item fill-brand-700/25 stroke-brand-700/40"
            strokeWidth="1.5"
            style={{ '--reveal-delay': `${index * 130}ms` } as React.CSSProperties}
          />
        ))}
      </g>

      {/* The answer. Sits on top of the blend group so it stays legible however the discs
          stack up underneath it. */}
      <g className="reveal-item" style={{ '--reveal-delay': '520ms' } as React.CSSProperties}>
        <circle cx="200" cy="150" r="27" className="fill-brand-900" />
        <text x="200" y="155" textAnchor="middle" className="fill-white font-semibold text-[13px]">
          14:30
        </text>
      </g>

      {PLACES.map((place, index) => (
        <text
          key={`${labels[index]}-label`}
          x={place.labelX}
          y={place.labelY}
          textAnchor="middle"
          className="reveal-item fill-ink-muted font-medium text-[12px]"
          style={{ '--reveal-delay': `${620 + index * 90}ms` } as React.CSSProperties}
        >
          {labels[index]}
        </text>
      ))}
    </svg>
  );
}
