import type { ReactNode } from 'react';
import { cn } from '@/lib';

export interface FeatureCardProps {
  title: string;
  children: ReactNode;
  /** A small geometric mark. Kept flat and monochrome — this is not an icon set. */
  shape?: 'square' | 'circle' | 'arc' | 'bars';
  delay?: number;
  className?: string;
}

const SHAPES: Record<string, ReactNode> = {
  square: <rect x="6" y="6" width="20" height="20" rx="5" />,
  circle: <circle cx="16" cy="16" r="10" />,
  arc: <path d="M6 22a10 10 0 0 1 20 0" strokeWidth="4" fill="none" strokeLinecap="round" />,
  bars: (
    <g>
      <rect x="6" y="14" width="6" height="12" rx="2" />
      <rect x="14" y="8" width="6" height="18" rx="2" />
      <rect x="22" y="18" width="6" height="8" rx="2" />
    </g>
  ),
};

/** One capability, stated plainly. The mark is a wayfinder, not an illustration. */
export function FeatureCard({
  title,
  children,
  shape = 'square',
  delay = 0,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'reveal-item rounded-2xl bg-sheet p-6 ring-1 ring-hairline transition-shadow hover:shadow-lg hover:shadow-brand-900/5',
        className,
      )}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="size-8 fill-brand-700/70 stroke-brand-700/70"
      >
        {SHAPES[shape]}
      </svg>
      <h3 className="mt-4 font-semibold text-base text-brand-900">{title}</h3>
      <p className="mt-2 text-ink-muted text-sm leading-relaxed">{children}</p>
    </div>
  );
}
