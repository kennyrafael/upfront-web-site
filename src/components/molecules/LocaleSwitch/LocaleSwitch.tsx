import { cn, LOCALE_NAMES, LOCALES, type Locale, useCopy, useLocale } from '@/lib';

export interface LocaleSwitchProps {
  /** `inverse` is for the transparent bar over the hero, where muted ink disappears. */
  tone?: 'default' | 'inverse';
  className?: string;
}

/**
 * Two languages, both always on screen.
 *
 * A dropdown would be the reflex and it is the wrong shape for two options: it hides the
 * one you want behind a click, and it has to be told what language to label itself in.
 * `PT · EN` needs no translating and says what it does from across the page.
 *
 * A `fieldset` with a visually hidden `legend` rather than a div wearing `role="group"` —
 * the grouping is what tells a screen reader these two buttons are alternatives rather than
 * two unrelated controls, and the element that means that already exists.
 */
export function LocaleSwitch({ tone = 'default', className }: LocaleSwitchProps) {
  const { locale, setLocale } = useLocale();
  const copy = useCopy();

  return (
    <fieldset className={cn('flex items-center gap-0.5 border-0 font-semibold text-xs', className)}>
      <legend className="sr-only">{copy.nav.language}</legend>

      {LOCALES.map((option: Locale, index) => (
        <span key={option} className="flex items-center">
          {index > 0 ? (
            <span
              aria-hidden="true"
              className={tone === 'inverse' ? 'px-1 text-white/25' : 'px-1 text-ink-muted/40'}
            >
              ·
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setLocale(option)}
            // `aria-current` rather than `aria-pressed`: these are two views of one page,
            // and "this is the one you are on" is what a reader needs to hear.
            aria-current={locale === option ? 'true' : undefined}
            title={LOCALE_NAMES[option]}
            className={cn(
              'rounded px-1 py-0.5 uppercase transition-colors',
              locale === option
                ? tone === 'inverse'
                  ? 'text-white'
                  : 'text-brand-ink'
                : tone === 'inverse'
                  ? 'text-white/45 hover:text-white/80'
                  : 'text-ink-muted hover:text-brand-ink',
            )}
          >
            {option}
          </button>
        </span>
      ))}
    </fieldset>
  );
}
