import { useEffect, useRef, useState } from 'react';

/** Matches the CSS. Asked once rather than watched: nobody changes this mid-scroll. */
function wantsLessMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  );
}

/**
 * Adds `is-revealed` to an element the first time it comes into view, and then stops
 * watching it.
 *
 * One observer per section rather than one per animated element: the CSS animates
 * `.is-revealed .reveal-item`, so a section reveals its own children and their stagger is a
 * `--reveal-delay` on each, costing nothing at runtime.
 *
 * **It starts revealed in two cases**, both of which matter more than the animation does:
 * when the visitor has asked for reduced motion, and when `IntersectionObserver` is missing.
 * A page whose content is invisible until an effect runs is a page that is sometimes blank,
 * and no entrance is worth that.
 */
export function useReveal<T extends HTMLElement>(options?: { threshold?: number }) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(
    () => wantsLessMotion() || typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || revealed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setRevealed(true);
          // Once seen, it stays seen. Re-animating on the way back up is a tic, not a
          // feature, and it makes a long page feel unstable to scroll through.
          observer.disconnect();
        }
      },
      // A little short of the fold, so a section has started before it is fully in view.
      { threshold: options?.threshold ?? 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [revealed, options?.threshold]);

  return { ref, className: revealed ? 'is-revealed' : undefined };
}
