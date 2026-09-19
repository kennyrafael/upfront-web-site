import { Section } from '@/components/atoms';
import { SplitFigure } from '@/components/molecules';
import { useCopy } from '@/lib';

/**
 * The payments half.
 *
 * The figure carries the argument that took the longest to settle — a full payment is two
 * amounts, and only one of them is ever kept — so the prose stays out of its way and covers
 * the three things a provider will ask instead.
 */
export function PaymentsSection() {
  const copy = useCopy().payments;

  const points = [
    { heading: copy.modesHeading, body: copy.modesBody },
    { heading: copy.counterHeading, body: copy.counterBody },
    { heading: copy.settlementHeading, body: copy.settlementBody },
  ];

  return (
    <Section id="payments" tone="sheet" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center lg:order-last">
          <SplitFigure />
        </div>

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
      </div>
    </Section>
  );
}
