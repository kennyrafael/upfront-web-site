import { Section } from '@/components/atoms';
import { useCopy } from '@/lib';

/**
 * What this is actually for, before anything about what it does.
 *
 * Three sentences a provider recognises, stated as their problem rather than our features.
 * If none of these lands, nothing further down will either, and it is better that somebody
 * finds that out in ten seconds than after a demo.
 */
export function Pains() {
  const copy = useCopy().pains;

  const items = [
    { heading: copy.phoneHeading, body: copy.phoneBody },
    { heading: copy.trustHeading, body: copy.trustBody },
    { heading: copy.paperHeading, body: copy.paperBody },
  ];

  return (
    <Section tone="sheet" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-hairline sm:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.heading}
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
            <h3 className="mt-4 font-semibold text-base text-brand-900">{item.heading}</h3>
            <p className="mt-2 text-ink-muted text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
