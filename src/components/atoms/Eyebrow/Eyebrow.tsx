import type { ReactNode } from 'react';
import { cn } from '@/lib';

export interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** For the dark bands, where the muted ink would disappear. */
  tone?: 'default' | 'inverse';
}

/**
 * The small line above a heading that says what kind of thing follows.
 *
 * Its own component because it appears above almost every section and the tracking, weight
 * and size are the sort of thing that drifts when it is retyped nine times.
 */
export function Eyebrow({ children, className, tone = 'default' }: EyebrowProps) {
  return (
    <p
      className={cn(
        'font-semibold text-xs uppercase tracking-[0.14em]',
        tone === 'inverse' ? 'text-brand-400' : 'text-brand-ink',
        className,
      )}
    >
      {children}
    </p>
  );
}
