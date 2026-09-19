import { Section } from '@/components/atoms';
import { AvailabilityFigure, TeamFigure } from '@/components/molecules';
import { useCopy } from '@/lib';

/**
 * The booking half, in two figures.
 *
 * The intersection first because it is the counter-intuitive one — people assume opening
 * hours are the answer — and the columns second because "we are four people" is the
 * objection that ends most demos of a single-provider tool.
 */
export function BookingsSection() {
  const copy = useCopy().bookings;

  const points = [
    { heading: copy.pageHeading, body: copy.pageBody },
    { heading: copy.freeHeading, body: copy.freeBody },
    { heading: copy.manageHeading, body: copy.manageBody },
  ];

  return (
    <Section id="bookings" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <dl className="space-y-7">
          {points.map((point, index) => (
            <div
              key={point.heading}
              className="reveal-item border-brand-700/25 border-l-2 pl-5"
              style={{ '--reveal-delay': `${index * 110}ms` } as React.CSSProperties}
            >
              <dt className="font-semibold text-base text-brand-900">{point.heading}</dt>
              <dd className="mt-1.5 text-ink-muted text-sm leading-relaxed">{point.body}</dd>
            </div>
          ))}
        </dl>

        <div className="flex justify-center">
          <AvailabilityFigure />
        </div>
      </div>

      <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center lg:order-last">
          <TeamFigure />
        </div>

        <div>
          <h3
            className="reveal-item text-balance font-semibold text-2xl text-brand-900 tracking-tight"
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          >
            {copy.teamHeading}
          </h3>
          <p
            className="reveal-item mt-4 text-ink-muted leading-relaxed"
            style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
          >
            {copy.teamBodyOne}
          </p>
          <p
            className="reveal-item mt-4 text-ink-muted leading-relaxed"
            style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
          >
            {copy.teamBodyTwo}
          </p>
        </div>
      </div>
    </Section>
  );
}
