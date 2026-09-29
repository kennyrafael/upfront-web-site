import { Button } from '@/components/atoms';
import { HeroFigure } from '@/components/molecules';
import { APP_URL, useCopy, useReveal } from '@/lib';

/**
 * The promise, in one sentence, over the only dark field on the page.
 *
 * The dark band is doing work rather than being a style: it separates the claim from the
 * evidence that follows it, and it gives the composition somewhere to sit without a
 * photograph. There are no photographs on purpose — there is no shop to photograph yet, and
 * stock pictures of smiling strangers are the fastest way to look like everyone else.
 *
 * The pill says what the product is rather than what stage it is at. A status badge dates
 * itself the day it stops being true, and nobody remembers to take it down.
 */
export function Hero() {
  const copy = useCopy().hero;
  const reveal = useReveal<HTMLDivElement>({ threshold: 0 });

  return (
    <div
      id="top"
      ref={reveal.ref}
      className={`relative overflow-hidden bg-backdrop ${reveal.className ?? ''}`}
    >
      {/* The geometry that frames the field: two large rings and a fine grid, all far enough
          back to be texture rather than content. */}
      <div
        aria-hidden="true"
        className="-right-40 -top-56 absolute size-[34rem] rounded-full border border-white/8"
      />
      <div
        aria-hidden="true"
        className="-left-32 absolute top-1/3 size-[26rem] rounded-full border border-white/6"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pt-32 pb-24 sm:px-8 md:pt-40 md:pb-32 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p
            className="reveal-item inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 font-medium text-[12px] text-white/80"
            style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-300" />
            {copy.pill}
          </p>

          <h1
            className="reveal-item mt-6 text-balance font-semibold text-4xl text-white leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          >
            {copy.headline}
          </h1>

          <p
            className="reveal-item mt-6 max-w-xl text-pretty text-lg text-onbackdrop leading-relaxed"
            style={{ '--reveal-delay': '160ms' } as React.CSSProperties}
          >
            {copy.lede}
          </p>

          <div
            className="reveal-item mt-9 flex flex-wrap gap-3"
            style={{ '--reveal-delay': '240ms' } as React.CSSProperties}
          >
            <Button href="#bookings">{copy.ctaPrimary}</Button>
            <Button href={APP_URL} variant="outline">
              {copy.ctaSecondary}
            </Button>
          </div>

          <p
            className="reveal-item mt-6 text-[13px] text-white/50"
            style={{ '--reveal-delay': '320ms' } as React.CSSProperties}
          >
            {copy.note}
          </p>
        </div>

        <div className="reveal-item" style={{ '--reveal-delay': '200ms' } as React.CSSProperties}>
          <HeroFigure />
        </div>
      </div>
    </div>
  );
}
