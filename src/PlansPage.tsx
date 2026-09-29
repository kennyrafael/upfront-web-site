import { Theme } from '@radix-ui/themes';
import { ClosingCta, Plans, SiteFooter, SiteLayout } from '@/components';
import { LocaleProvider } from '@/lib';

/**
 * `/planos`, a second document rather than a route.
 *
 * The same shell as the home page and for the same reasons — jade and sage, pinned light,
 * `LocaleProvider` outside `Theme` because it writes `lang` and the title onto the document.
 *
 * `solidNav` is the one difference that matters: this page opens on a pale band instead of
 * the dark hero, and a bar that starts transparent starts invisible.
 */
export function PlansPage() {
  return (
    <LocaleProvider page="plans">
      <Theme accentColor="jade" grayColor="sage" radius="large" appearance="light">
        <SiteLayout solidNav>
          {/* The fixed bar is 4rem and this page has no hero to sit under it, so the first
              section needs the clearance the hero would otherwise have provided. */}
          <div className="pt-16">
            <Plans />
          </div>
          <ClosingCta />
          <SiteFooter />
        </SiteLayout>
      </Theme>
    </LocaleProvider>
  );
}
