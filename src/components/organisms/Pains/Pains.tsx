import { Section } from '@/components/atoms';

const PAINS = [
  {
    heading: 'The phone rings mid-appointment',
    body: 'You are holding scissors. It goes to voicemail, and most of those people book somewhere else instead of calling back.',
  },
  {
    heading: 'The slot was held on trust',
    body: 'Someone who paid nothing to book has no reason to turn up, and an empty chair on a Saturday is the most expensive hour of the week.',
  },
  {
    heading: 'The paperwork is a separate life',
    body: 'Recibos verdes in one place, the IVA ceiling in nobody’s head, and Segurança Social dates you remember the week after.',
  },
];

/**
 * What this is actually for, before anything about what it does.
 *
 * Three sentences a provider recognises, stated as their problem rather than our features.
 * If none of these lands, nothing further down will either, and it is better that somebody
 * finds that out in ten seconds than after a demo.
 */
export function Pains() {
  return (
    <Section
      tone="sheet"
      eyebrow="Why this exists"
      title="Three problems that are really one problem"
      lede="They are not separate tools in a provider's day. A missed call is a lost booking, a lost booking is a gap in the takings, and the takings are what the paperwork is made of."
    >
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-hairline sm:grid-cols-3">
        {PAINS.map((pain, index) => (
          <div
            key={pain.heading}
            className="reveal-item bg-sheet p-7"
            style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
          >
            {/* The number is geometry too — a counter, set like one. */}
            <span
              aria-hidden="true"
              className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-700/10 font-semibold text-brand-ink text-sm"
            >
              {index + 1}
            </span>
            <h3 className="mt-4 font-semibold text-base text-brand-900">{pain.heading}</h3>
            <p className="mt-2 text-ink-muted text-sm leading-relaxed">{pain.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
