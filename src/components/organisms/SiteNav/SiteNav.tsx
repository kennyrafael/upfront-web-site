import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import { LocaleSwitch } from '@/components/molecules';
import { APP_URL, cn, useCopy } from '@/lib';

/**
 * Transparent over the hero, solid once you have left it.
 *
 * The hero is a dark field and the bar belongs to it; the moment the page turns pale the bar
 * has to as well or the wordmark disappears. Driven by a scroll listener rather than a
 * sentinel and an observer because it is one number, read passively.
 */
export interface SiteNavProps {
  /**
   * Solid from the first pixel, for a page that does not open on the dark hero.
   *
   * Without it the bar starts transparent with white text, which is correct over the hero and
   * invisible over anything pale — the plans page would open with no navigation at all until
   * you scrolled.
   */
  solid?: boolean;
}

export function SiteNav({ solid = false }: SiteNavProps) {
  const copy = useCopy();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lifted = solid || scrolled;

  // Rooted at `/` rather than bare fragments, because this bar is now on two pages and
  // `#payments` points at nothing from the plans page. Same-document fragment navigation is
  // unaffected on the home page: the path already matches, so nothing reloads.
  const links = [
    { href: '/#bookings', label: copy.nav.bookings },
    { href: '/#payments', label: copy.nav.payments },
    { href: '/#compliance', label: copy.nav.compliance },
    { href: '/planos', label: copy.nav.plans },
  ];

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        lifted ? 'border-hairline border-b bg-canvas/90 backdrop-blur-lg' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-5 px-6 sm:px-8">
        <a
          href="/"
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
        <nav className="hidden gap-6 md:flex" aria-label={copy.nav.sections}>
          {links.map((link) => (
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

        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          <LocaleSwitch tone={lifted ? 'default' : 'inverse'} />
          <Button href={APP_URL} size="2" variant={lifted ? 'primary' : 'secondary'}>
            {copy.nav.openApp}
          </Button>
        </div>
      </div>
    </header>
  );
}
