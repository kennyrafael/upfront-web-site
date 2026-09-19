import { useCopy } from '@/lib';

/** Monday to Friday, eight rows of half-hours. The shape of a working week, abstracted. */
const COLUMNS = 5;
const ROWS = 8;

/** Which cells carry a booking. Fixed rather than random, so the composition is designed. */
const FILLED = new Set([3, 9, 11, 16, 17, 22, 26, 28, 31, 34]);
/** The one that lands while you watch, a beat after the rest have settled. */
const ARRIVING = 19;

/**
 * The grid, worked out once at module scope.
 *
 * Built here rather than inside the render so a cell is a thing with an identity — its
 * position in the week — instead of a number that happens to be where it sits. The delays
 * are part of that identity: the empty grid draws itself in a wave, then the bookings land,
 * then the new one. Reading order, not decoration.
 */
const CELLS = Array.from({ length: COLUMNS * ROWS }, (_, index) => {
  const column = index % COLUMNS;
  const row = Math.floor(index / COLUMNS);
  const filled = FILLED.has(index);
  const arriving = index === ARRIVING;

  return {
    id: `${column}-${row}`,
    filled,
    arriving,
    delay: arriving ? 1500 : filled ? 700 + (index % 7) * 55 : column * 28 + row * 34,
  };
});

/**
 * The hero's composition: a week, filling up.
 *
 * Geometry that means something rather than shapes for their own sake — the grid is a
 * calendar, the cells are bookings, and the one that arrives last arrives on its own,
 * because a booking taken while you are cutting somebody's hair is the thing this is for.
 *
 * Everything moves on a loop except the cells, which animate once. A page that keeps
 * twitching is hard to read past, and this sits behind a headline somebody is trying to
 * read.
 */
export function HeroFigure() {
  const copy = useCopy().heroFigure;

  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Two soft discs behind the grid, drifting out of phase. They give the composition
          depth without another rectangle in it. */}
      <div
        aria-hidden="true"
        className="animate-drift -left-10 -top-12 absolute size-56 rounded-full bg-brand-500/25 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="animate-soft-pulse -right-8 absolute bottom-0 size-44 rounded-full bg-brand-300/30 blur-2xl"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="relative rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm sm:p-6">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm text-white">{copy.thisWeek}</span>
          <span className="rounded-full bg-white/12 px-2.5 py-1 font-medium text-[11px] text-white/80">
            {copy.timezone}
          </span>
        </div>

        {/* One image to a screen reader rather than forty empty boxes it has to walk. */}
        <div
          role="img"
          aria-label={copy.alt}
          className="mt-4 grid gap-1.5"
          style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}
        >
          {CELLS.map((cell) => (
            <div
              key={cell.id}
              className={`reveal-item h-5 rounded-[5px] sm:h-6 ${
                cell.arriving
                  ? 'bg-brand-300 ring-2 ring-brand-200'
                  : cell.filled
                    ? 'bg-brand-400/80'
                    : 'bg-white/6'
              }`}
              style={{ '--reveal-delay': `${cell.delay}ms` } as React.CSSProperties}
            />
          ))}
        </div>

        <div
          className="reveal-item mt-4 flex items-center gap-2.5 rounded-xl bg-white/10 px-3 py-2.5"
          style={{ '--reveal-delay': '1700ms' } as React.CSSProperties}
        >
          <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-brand-300" />
          <p className="text-[13px] text-white/85">
            <span className="font-semibold text-white">{copy.bookedName}</span> {copy.bookedWhen}
            <span className="text-white/60"> {copy.bookedPaid}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
