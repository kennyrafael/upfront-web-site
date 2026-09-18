import { APP_URL, CONTACT_EMAIL } from '@/lib';

const YEAR = new Date().getFullYear();

/** Small, quiet, and honest about what is not here yet. */
export function SiteFooter() {
  return (
    <footer className="border-hairline border-t bg-canvas px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-brand-900 text-lg tracking-tight">Upfront</p>
          <p className="mt-1 text-ink-muted text-sm">
            Operations for independent service providers. Portugal first.
          </p>
        </div>

        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#bookings" className="text-ink-muted hover:text-brand-ink">
            Bookings
          </a>
          <a href="#payments" className="text-ink-muted hover:text-brand-ink">
            Payments
          </a>
          <a href="#compliance" className="text-ink-muted hover:text-brand-ink">
            Compliance
          </a>
          <a href={APP_URL} className="text-ink-muted hover:text-brand-ink">
            Open the app
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-muted hover:text-brand-ink">
            {CONTACT_EMAIL}
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-ink-muted text-xs leading-relaxed">
        © {YEAR} Upfront. Compliance figures in the product are a planning aid, not tax advice —
        Upfront produces drafts and reminders and files nothing on your behalf.
      </p>
    </footer>
  );
}
