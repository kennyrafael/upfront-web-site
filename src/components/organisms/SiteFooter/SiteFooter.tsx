import { LocaleSwitch } from '@/components/molecules';
import { APP_URL, CONTACT_EMAIL, useCopy } from '@/lib';

const YEAR = new Date().getFullYear();

/** Small, quiet, and carrying the second language switch for anyone who reached the end. */
export function SiteFooter() {
  const copy = useCopy();

  return (
    <footer className="border-hairline border-t bg-canvas px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-brand-900 text-lg tracking-tight">Upfront</p>
          <p className="mt-1 text-ink-muted text-sm">{copy.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav
            aria-label={copy.footer.elsewhere}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
          >
            <a href="#bookings" className="text-ink-muted hover:text-brand-ink">
              {copy.nav.bookings}
            </a>
            <a href="#payments" className="text-ink-muted hover:text-brand-ink">
              {copy.nav.payments}
            </a>
            <a href="#compliance" className="text-ink-muted hover:text-brand-ink">
              {copy.nav.compliance}
            </a>
            <a href={APP_URL} className="text-ink-muted hover:text-brand-ink">
              {copy.nav.openApp}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-muted hover:text-brand-ink">
              {CONTACT_EMAIL}
            </a>
          </nav>
          <LocaleSwitch />
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-ink-muted text-xs leading-relaxed">
        © {YEAR} Upfront. {copy.footer.legal}
      </p>
    </footer>
  );
}
