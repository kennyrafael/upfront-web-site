import { Section } from '@/components/atoms';
import { CeilingFigure } from '@/components/molecules';

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
  return (
    <Section
      id="compliance"
      eyebrow="Compliance"
      title="The paperwork is made of work you have already done"
      lede="Every appointment that happened is a line on a recibo and a number against your IVA ceiling. Upfront already knows about both, so it keeps the count for you."
    >
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <ul className="space-y-6">
            {[
              [
                'Recibos verdes, drafted from the bookings',
                'Pick the appointments, get a numbered draft with the IVA worked out. Sequential, and fixed once issued.',
              ],
              [
                'The exemption ceiling, watched all year',
                'It warns you on the way up rather than after you have crossed it, which is when it stops being a choice.',
              ],
              [
                'IVA and Segurança Social dates',
                'The ones that arrive quarterly and are remembered annually.',
              ],
            ].map(([heading, body], index) => (
              <li
                key={heading}
                className="reveal-item flex gap-4"
                style={{ '--reveal-delay': `${index * 110}ms` } as React.CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-3 shrink-0 rotate-45 rounded-[3px] bg-brand-700/60"
                />
                <div>
                  <p className="font-semibold text-base text-brand-900">{heading}</p>
                  <p className="mt-1.5 text-ink-muted text-sm leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <p
            className="reveal-item mt-8 border-brand-700/30 border-l-2 pl-4 text-ink-muted text-sm leading-relaxed"
            style={{ '--reveal-delay': '380ms' } as React.CSSProperties}
          >
            <strong className="font-semibold text-brand-900">Upfront never files anything.</strong>{' '}
            It produces drafts, counts and reminders, and an export your accountant can work from.
            What goes to the Autoridade Tributária is sent by a person who meant to send it.
          </p>
        </div>

        <div className="flex justify-center">
          <CeilingFigure />
        </div>
      </div>
    </Section>
  );
}
