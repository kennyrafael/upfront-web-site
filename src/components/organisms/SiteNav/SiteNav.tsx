import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import { APP_URL, cn } from '@/lib';

const LINKS = [
  { href: '#bookings', label: 'Bookings' },
  { href: '#payments', label: 'Payments' },
  { href: '#compliance', label: 'Compliance' },
];

/**
 * Transparent over the hero, solid once you have left it.
 *
 * The hero is a dark field and the bar belongs to it; the moment the page turns pale the bar
 * has to as well or the wordmark disappears. Driven by a scroll listener rather than a
 * sentinel and an observer because it is one number, read passively.
 */
export function SiteNav() {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        lifted ? 'border-hairline border-b bg-canvas/90 backdrop-blur-lg' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-6 sm:px-8">
        <a
          href="#top"
          className={cn(
            'font-semibold text-lg tracking-tight transition-colors',
            lifted ? 'text-brand-900' : 'text-white',
          )}
        >
          Upfront
        </a>

        {/* Hidden rather than collapsed into a drawer: three anchors on a page you can
            simply scroll do not earn a menu, and a menu that exists must then be built
            properly. */}
        <nav className="hidden gap-6 md:flex" aria-label="Sections">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium text-sm transition-colors',
                lifted ? 'text-ink-muted hover:text-brand-ink' : 'text-white/70 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto">
          <Button href={APP_URL} size="2" variant={lifted ? 'primary' : 'secondary'}>
            Open the app
          </Button>
        </div>
      </div>
    </header>
  );
}
