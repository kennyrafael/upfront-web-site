import { Section } from '@/components/atoms';
import { AvailabilityFigure, TeamFigure } from '@/components/molecules';

const POINTS = [
  {
    heading: 'A page your clients use themselves',
    body: 'Your own address, your own colours, your own logo. Off until you publish it — the calendar is private until you say otherwise.',
  },
  {
    heading: 'Times that are actually free',
    body: 'Availability is the shop being open, that person working, and them being neither away nor already booked. Offering a slot you cannot honour is worse than offering none.',
  },
  {
    heading: 'Clients cancel and move without ringing you',
    body: 'A manage link in their confirmation, so the slot comes back on the calendar the moment they let it go, rather than when you find out.',
  },
];

/**
 * The booking half, in two figures.
 *
 * The intersection first because it is the counter-intuitive one — people assume opening
 * hours are the answer — and the columns second because "we are four people" is the
 * objection that ends most demos of a single-provider tool.
 */
export function BookingsSection() {
  return (
    <Section
      id="bookings"
      eyebrow="Bookings"
      title="Taken while you are working, not after you close"
      lede="A public page per shop, backed by the same availability rules the app itself enforces — so a client can never book something the calendar would refuse."
    >
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
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
        </div>

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
            Most shops are not one person
          </h3>
          <p
            className="reveal-item mt-4 text-ink-muted leading-relaxed"
            style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
          >
            Everyone gets their own hours, their own time off and their own list of services — with
            a different price or a different length where they need one. A client picks a person or
            leaves it to you, and one visit can span two of them: a cut with Ana and a beard trim
            with Rui, on one booking.
          </p>
          <p
            className="reveal-item mt-4 text-ink-muted leading-relaxed"
            style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
          >
            Owners and managers see the whole floor. Staff see their own day. The front desk takes
            money and books people in without being able to read the compliance file.
          </p>
        </div>
      </div>
    </Section>
  );
}
