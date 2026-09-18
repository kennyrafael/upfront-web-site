import { Section } from '@/components/atoms';

const STEPS = [
  {
    label: 'Now',
    heading: 'Bookings, payments, compliance',
    body: 'The public page, the calendar, deposits and balances, recibos and deadlines. This is what exists.',
    state: 'done' as const,
  },
  {
    label: 'Next',
    heading: 'Português, then Español',
    body: 'Deliberately last, so the strings are extracted once rather than three times. The first providers see it in English, and that cost was accepted on purpose.',
    state: 'next' as const,
  },
  {
    label: 'After',
    heading: 'A secretary that answers the phone',
    body: 'Checks the diary, books, moves and cancels — against the same rules the booking page uses. It is one feature among several, and it comes once the rest is solid.',
    state: 'later' as const,
  },
  {
    label: 'Then',
    heading: 'España',
    body: 'The same problems with a different tax code. Autónomos, not trabalhadores independentes.',
    state: 'later' as const,
  },
];

const DOT = {
  done: 'bg-brand-300',
  next: 'bg-brand-300/50 ring-2 ring-brand-300/40',
  later: 'bg-white/25',
};

/**
 * What is built, and what is not.
 *
 * Here because the alternative is implying the voice work already exists, which it does
 * not — and a provider who signs up expecting a phone line and finds a booking page is a
 * provider who leaves. Saying "after" costs a little and buys the right kind of visitor.
 */
export function Horizon() {
  return (
    <Section
      tone="dark"
      eyebrow="Where this is going"
      title="Built in the order that helps first"
      lede="The phone-answering AI is the part people ask about. It is also the part that is worth nothing if the calendar underneath it is wrong, so it comes last."
    >
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <li
            key={step.heading}
            className="reveal-item bg-backdrop p-7"
            style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
          >
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className={`size-2.5 rounded-full ${DOT[step.state]}`} />
              <span className="font-semibold text-[11px] text-white/60 uppercase tracking-[0.14em]">
                {step.label}
              </span>
            </div>
            <h3 className="mt-4 font-semibold text-base text-white">{step.heading}</h3>
            <p className="mt-2 text-onbackdrop text-sm leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
