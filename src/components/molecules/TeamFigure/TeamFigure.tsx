const PEOPLE = [
  {
    name: 'Ana',
    blocks: [
      { top: 0, height: 34 },
      { top: 58, height: 22 },
    ],
  },
  {
    name: 'Rui',
    blocks: [
      { top: 16, height: 22 },
      { top: 50, height: 40 },
    ],
  },
  { name: 'Inês', blocks: [{ top: 4, height: 18 }] },
  {
    name: 'Tó',
    blocks: [
      { top: 24, height: 46 },
      { top: 82, height: 16 },
    ],
  },
] as const;

/**
 * A column per person, which is what a day looks like in a shop that is not one person.
 *
 * Everything built before the multi-employee split assumed the business and the person
 * doing the work were the same row. Most salons and barbershops are four of these columns,
 * and one visit can span two of them — a haircut with Ana and a beard trim with Rui.
 *
 * Blocks grow downward on reveal, one column after another, so the figure reads left to
 * right like the day it stands for.
 */
export function TeamFigure() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-sheet p-5 ring-1 ring-hairline">
      <div className="flex items-center justify-between">
        <span className="font-medium text-ink text-sm">Thursday</span>
        <span className="text-ink-muted text-xs">4 people</span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2.5">
        {PEOPLE.map((person, column) => (
          <div key={person.name}>
            <p className="mb-2 text-center font-medium text-[11px] text-ink-muted">{person.name}</p>
            <div className="relative h-32 rounded-lg bg-brand-700/5 ring-1 ring-hairline">
              {person.blocks.map((block) => (
                <div
                  key={`${person.name}-${block.top}`}
                  className="reveal-item absolute inset-x-1 rounded-md bg-brand-700/45"
                  style={
                    {
                      top: `${block.top}%`,
                      height: `${block.height}%`,
                      '--reveal-delay': `${column * 140 + block.top * 2}ms`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
