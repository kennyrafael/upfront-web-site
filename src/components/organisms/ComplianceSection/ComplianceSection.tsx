import { Section } from '@/components/atoms';
import { CeilingFigure } from '@/components/molecules';
import { useCopy } from '@/lib';

/**
 * The part nobody else touches.
 *
 * Booking tools stop at the calendar and answering services stop at the call. The reason
 * this section exists at all is that the paperwork is the half of the job providers
 * actually dread, and it is made out of the bookings that are already here.
 *
 * The limit is stated as plainly as the capability. Upfront produces drafts and warnings; a
 * person files them. Implying otherwise would be a claim about somebody else's tax return.
 */
export function ComplianceSection() {
  const copy = useCopy().compliance;

  const items = [
    { heading: copy.recibosHeading, body: copy.recibosBody },
    { heading: copy.ceilingHeading, body: copy.ceilingBody },
    { heading: copy.datesHeading, body: copy.datesBody },
  ];

  return (
    <Section id="compliance" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li
                key={item.heading}
                className="reveal-item flex gap-4"
                style={{ '--reveal-delay': `${index * 110}ms` } as React.CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-3 shrink-0 rotate-45 rounded-[3px] bg-brand-700/60"
                />
                <div>
                  <p className="font-semibold text-base text-brand-900">{item.heading}</p>
                  <p className="mt-1.5 text-ink-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <p
            className="reveal-item mt-8 border-brand-700/30 border-l-2 pl-4 text-ink-muted text-sm leading-relaxed"
            style={{ '--reveal-delay': '380ms' } as React.CSSProperties}
          >
            <strong className="font-semibold text-brand-900">{copy.disclaimerStrong}</strong>
            {copy.disclaimerBody}
          </p>
        </div>

        <div className="flex justify-center">
          <CeilingFigure />
        </div>
      </div>
    </Section>
  );
}
