import type { ReactNode } from 'react';
import { cn, useReveal } from '@/lib';
import { Eyebrow } from '../Eyebrow';

export interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  /** `dark` is the deep field the hero and the closing band share. */
  tone?: 'canvas' | 'sheet' | 'dark';
  /** Centres the heading block. Off by default — a left rag reads as a document. */
  centered?: boolean;
  className?: string;
}

const TONES = {
  canvas: 'bg-canvas text-ink',
  sheet: 'bg-sheet text-ink',
  dark: 'bg-backdrop text-onbackdrop',
} as const;

/**
 * One section shell for the whole page: the band, the gutter, the heading block, and the
 * reveal that its children animate against.
 *
 * The reveal lives here rather than on each element because the CSS animates
 * `.is-revealed .reveal-item` — so a section becomes visible once and everything inside it
 * follows, staggered by a `--reveal-delay` per child. One observer per section instead of
 * one per paragraph.
 */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  tone = 'canvas',
  centered = false,
  className,
}: SectionProps) {
  const reveal = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={reveal.ref}
      className={cn('px-6 py-20 sm:px-8 md:py-28', TONES[tone], reveal.className, className)}
    >
      <div className="mx-auto max-w-6xl">
        {eyebrow || title || lede ? (
          <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
            {eyebrow ? (
              <Eyebrow tone={tone === 'dark' ? 'inverse' : 'default'} className="reveal-item">
                {eyebrow}
              </Eyebrow>
            ) : null}
            {title ? (
              <h2
                className={cn(
                  'reveal-item mt-3 text-balance font-semibold text-3xl tracking-tight sm:text-4xl',
                  tone === 'dark' ? 'text-white' : 'text-brand-900',
                )}
                style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
              >
                {title}
              </h2>
            ) : null}
            {lede ? (
              <p
                className={cn(
                  'reveal-item mt-4 text-pretty text-lg leading-relaxed',
                  tone === 'dark' ? 'text-onbackdrop' : 'text-ink-muted',
                )}
                style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
              >
                {lede}
              </p>
            ) : null}
          </div>
        ) : null}

        {children}
      </div>
    </section>
  );
}
