import { Section } from '@/components/atoms';
import { FeatureCard } from '@/components/molecules';
import { useCopy } from '@/lib';

/** The rest of it, stated flatly. A grid is the right shape for a list nobody reads in order. */
export function Capabilities() {
  const copy = useCopy().capabilities;

  const features = [
    { title: copy.clientsTitle, body: copy.clientsBody, shape: 'circle' as const },
    { title: copy.remindersTitle, body: copy.remindersBody, shape: 'arc' as const },
    { title: copy.brandTitle, body: copy.brandBody, shape: 'square' as const },
    { title: copy.calendarTitle, body: copy.calendarBody, shape: 'bars' as const },
    { title: copy.rolesTitle, body: copy.rolesBody, shape: 'square' as const },
    { title: copy.ledgerTitle, body: copy.ledgerBody, shape: 'bars' as const },
  ];

  return (
    <Section eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            shape={feature.shape}
            delay={index * 70}
          >
            {feature.body}
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
}
