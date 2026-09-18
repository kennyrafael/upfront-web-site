const CIRCLES = [
  { cx: 150, cy: 120, label: 'Shop hours', labelX: 74, labelY: 52 },
  { cx: 250, cy: 120, label: "Ana's hours", labelX: 326, labelY: 52 },
  { cx: 200, cy: 206, label: 'Not booked or away', labelX: 200, labelY: 300 },
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
  return (
    <svg
      viewBox="0 0 400 330"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Three overlapping circles — shop hours, one employee's hours, and time that is neither booked nor away. A bookable slot is the small area where all three overlap."
    >
      <title>How a bookable slot is worked out</title>

      <g style={{ mixBlendMode: 'multiply' }}>
        {CIRCLES.map((circle, index) => (
          <circle
            key={circle.label}
            cx={circle.cx}
            cy={circle.cy}
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

      {CIRCLES.map((circle, index) => (
        <text
          key={`${circle.label}-label`}
          x={circle.labelX}
          y={circle.labelY}
          textAnchor="middle"
          className="reveal-item fill-ink-muted font-medium text-[12px]"
          style={{ '--reveal-delay': `${620 + index * 90}ms` } as React.CSSProperties}
        >
          {circle.label}
        </text>
      ))}
    </svg>
  );
}
