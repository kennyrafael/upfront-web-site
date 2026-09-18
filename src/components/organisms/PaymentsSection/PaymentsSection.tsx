import { Section } from '@/components/atoms';
import { SplitFigure } from '@/components/molecules';

const POINTS = [
  {
    heading: 'Nothing, a deposit, or the whole price',
    body: 'Your call, per shop. A deposit is the most direct defence against a no-show there is, and it is the thing that makes a public link safe to hand to a stranger.',
  },
  {
    heading: 'Take the rest at the counter',
    body: 'When the work is done, push a request for what is still owed to their phone — or to another number, given there and then. It replaces a card terminal you may not have.',
  },
  {
    heading: 'Money reaches you, not us',
    body: 'Client funds are credited to your own account at the payment institution and paid out from there. Upfront instructs the split; it never holds your money.',
  },
];

/**
 * The payments half.
 *
 * The figure carries the argument that took the longest to settle — a full payment is two
 * amounts, and only one of them is ever kept — so the prose stays out of its way and covers
 * the three things a provider will ask instead.
 */
export function PaymentsSection() {
  return (
    <Section
      id="payments"
      tone="sheet"
      eyebrow="Payments"
      title="Money that arrives with the booking"
      lede="MB Way and card collection tied to the appointment rather than sitting beside it, so a paid deposit and a held slot are the same fact."
    >
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center lg:order-last">
          <SplitFigure />
        </div>

        <div>
          <dl className="space-y-7">
            {POINTS.map((point, index) => (
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

          {/* Said here rather than discovered at signup. A page that implies you can take
              real money today, when the gateway is still on a sandbox, buys one demo and
              costs the relationship. */}
          <p
            className="reveal-item mt-8 rounded-xl bg-brand-700/6 px-4 py-3 text-ink-muted text-sm leading-relaxed"
            style={{ '--reveal-delay': '360ms' } as React.CSSProperties}
          >
            Collection is built and running end to end against our payment institution's sandbox.
            Live money is not switched on yet — we will say so here when it is.
          </p>
        </div>
      </div>
    </Section>
  );
}
