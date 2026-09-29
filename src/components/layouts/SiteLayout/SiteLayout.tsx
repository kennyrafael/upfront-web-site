import type { ReactNode } from 'react';
import { SiteNav } from '@/components/organisms/SiteNav';
import { useCopy } from '@/lib';

export interface SiteLayoutProps {
  children: ReactNode;
  /** Passed through to the bar: solid from the start on a page with no dark hero. */
  solidNav?: boolean;
}

/**
 * The page shell: a fixed bar and a skip link, and nothing else.
 *
 * The skip link is not ceremony. The bar is fixed and the page is long, so a keyboard
 * visitor would otherwise tab through the whole nav on every section anchor they follow.
 */
export function SiteLayout({ children, solidNav = false }: SiteLayoutProps) {
  const copy = useCopy();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-sheet focus:px-4 focus:py-2 focus:font-medium focus:text-brand-900 focus:text-sm focus:shadow-lg"
      >
        {copy.nav.skipToContent}
      </a>
      <SiteNav solid={solidNav} />
      <main id="main">{children}</main>
    </>
  );
}
