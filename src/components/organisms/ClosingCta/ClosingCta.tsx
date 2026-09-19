import { Button } from '@/components/atoms';
import { APP_URL, CONTACT_EMAIL, useCopy, useReveal } from '@/lib';

/**
 * The last thing on the page, and the only place that asks for anything.
 *
 * Two doors rather than one funnel: somebody who wants to look around should not have to
 * talk to a person first, and somebody with a shop full of specifics should not have to
 * work it out from a signup form.
 */
export function ClosingCta() {
  const copy = useCopy().cta;
  const reveal = useReveal<HTMLElement>();

  return (
    <section
      ref={reveal.ref}
      className={`relative overflow-hidden bg-backdrop px-6 py-24 sm:px-8 md:py-32 ${reveal.className ?? ''}`}
    >
      {/* Two rings, off-centre, echoing the hero so the page closes where it opened. */}
      <div
        aria-hidden="true"
        className="-translate-x-1/2 -bottom-72 absolute left-1/2 size-[42rem] rounded-full border border-white/8"
      />
      <div
        aria-hidden="true"
        className="-translate-x-1/2 -bottom-56 absolute left-1/2 size-[30rem] rounded-full border border-white/6"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2
          className="reveal-item text-balance font-semibold text-3xl text-white tracking-tight sm:text-4xl"
          style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
        >
          {copy.title}
        </h2>
        <p
          className="reveal-item mt-5 text-pretty text-lg text-onbackdrop leading-relaxed"
          style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
        >
          {copy.body}
        </p>

        <div
          className="reveal-item mt-9 flex flex-wrap justify-center gap-3"
          style={{ '--reveal-delay': '160ms' } as React.CSSProperties}
        >
          <Button href={APP_URL}>{copy.primary}</Button>
          <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
            {copy.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
