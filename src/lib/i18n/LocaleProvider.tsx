import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { en } from './en';
import { type Dictionary, pt } from './pt';

export const LOCALES = ['pt', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

const DICTIONARIES: Record<Locale, Dictionary> = { pt, en };

export const LOCALE_NAMES: Record<Locale, string> = { pt: 'Português', en: 'English' };

const STORAGE_KEY = 'upfront.site.locale';

/**
 * **Portuguese unless the visitor says otherwise**, and deliberately not read from the
 * browser.
 *
 * The market is Portugal. A Portuguese provider on a laptop that shipped in English would
 * otherwise land on the English page, which is exactly the wrong way round for the only
 * audience this page has. Somebody who wants English is one click away and that click is
 * remembered.
 */
function readLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return LOCALES.includes(stored as Locale) ? (stored as Locale) : 'pt';
  } catch {
    // Private windows and blocked site data both throw. A language preference is not worth
    // a crash, so the default stands.
    return 'pt';
  }
}

interface LocaleState {
  locale: Locale;
  copy: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleState | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale);
  const copy = DICTIONARIES[locale];

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // See readLocale. It applies for this visit either way.
    }
  }, []);

  useEffect(() => {
    // The document has to agree with the page, and not only for tidiness: `lang` is what a
    // screen reader picks a voice from, and what a translation prompt reads. A Portuguese
    // page announced as English is read aloud in the wrong accent, word by word.
    document.documentElement.lang = copy.meta.localeTag;
    document.title = copy.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.meta.description);
  }, [copy]);

  // `.Provider` explicitly. React 19 allows the context itself as the provider, and it did
  // not work here — the consumers read null. Not worth the archaeology when the form that
  // has always worked is the same length.
  return (
    <LocaleContext.Provider value={{ locale, copy, setLocale }}>{children}</LocaleContext.Provider>
  );
}

function useLocaleState(): LocaleState {
  const state = useContext(LocaleContext);
  if (!state) throw new Error('useCopy must be used inside a LocaleProvider');
  return state;
}

/** The strings, for a component that only reads them. */
export function useCopy(): Dictionary {
  return useLocaleState().copy;
}

/** The switch, for the one or two places that change the language. */
export function useLocale(): Omit<LocaleState, 'copy'> {
  const { locale, setLocale } = useLocaleState();
  return { locale, setLocale };
}
