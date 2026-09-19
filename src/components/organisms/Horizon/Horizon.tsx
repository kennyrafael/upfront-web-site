import { Section } from '@/components/atoms';
import { useCopy } from '@/lib';

const DOT = {
  done: 'bg-brand-300',
  next: 'bg-brand-300/50 ring-2 ring-brand-300/40',
  later: 'bg-white/25',
};

/**
 * What is built, and what is coming.
 *
 * Here because the alternative is letting a visitor assume everything on the page arrives
 * at once. Saying what is next costs a little and buys the right kind of visitor.
 *
 * **The AI secretary is commented out rather than removed** — decided 2026-09-19. It is not
 * in the MVP, and a roadmap band promising a phone line is the fastest way to get somebody
 * signing up for the wrong thing. The strings stay in both dictionaries and the entry stays
 * here, so putting it back is uncommenting three lines rather than rewriting a section. Add
 * `aiLabel` / `aiHeading` / `aiBody` to `pt.ts` and `en.ts` when that day comes.
 */
export function Horizon() {
  const copy = useCopy().horizon;

  const steps = [
    {
      label: copy.nowLabel,
      heading: copy.nowHeading,
      body: copy.nowBody,
      state: 'done' as const,
    },
    {
      label: copy.nextLabel,
      heading: copy.nextHeading,
      body: copy.nextBody,
      state: 'next' as const,
    },
    // {
    //   label: copy.aiLabel,
    //   heading: copy.aiHeading,
    //   body: copy.aiBody,
    //   state: 'later' as const,
    // },
    {
      label: copy.spainLabel,
      heading: copy.spainHeading,
      body: copy.spainBody,
      state: 'later' as const,
    },
  ];

  return (
    <Section tone="dark" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
        {steps.map((step, index) => (
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
