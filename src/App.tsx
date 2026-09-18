import { Theme } from '@radix-ui/themes';
import {
  BookingsSection,
  Capabilities,
  ClosingCta,
  ComplianceSection,
  Hero,
  Horizon,
  Pains,
  PaymentsSection,
  SiteFooter,
  SiteLayout,
} from '@/components';

/**
 * Jade and sage, like the app, and pinned light.
 *
 * The accent matches because a screenshot of the product should not look like it came from
 * a different company. The appearance is pinned for the same reason the public booking page
 * is: this belongs to visitors, and an institutional page is a document before it is an
 * interface.
 */
export function App() {
  return (
    <Theme accentColor="jade" grayColor="sage" radius="large" appearance="light">
      <SiteLayout>
        <Hero />
        <Pains />
        <BookingsSection />
        <PaymentsSection />
        <ComplianceSection />
        <Capabilities />
        <Horizon />
        <ClosingCta />
        <SiteFooter />
      </SiteLayout>
    </Theme>
  );
}
