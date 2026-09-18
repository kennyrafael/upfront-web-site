import { Section } from '@/components/atoms';
import { FeatureCard } from '@/components/molecules';

const FEATURES = [
  {
    title: 'Client records that build themselves',
    shape: 'circle' as const,
    body: 'Every booking matches a client by phone rather than making a new one, so a regular is a history instead of nine near-identical rows.',
  },
  {
    title: 'Reminders that go out once',
    shape: 'arc' as const,
    body: 'A confirmation when they book and a reminder before the day — and a restart in between does not send either of them twice.',
  },
  {
    title: 'Your page, your colours',
    shape: 'square' as const,
    body: 'A hex and a logo, and the booking page wears them. The text contrast is worked out from the colour you picked, so it stays readable whatever you choose.',
  },
  {
    title: 'A calendar per person, or all of them',
    shape: 'bars' as const,
    body: 'A column each for the day, one person at a time for the week, and publicly-made bookings badged — they arrived while nobody was watching.',
  },
  {
    title: 'Roles that fit a shop floor',
    shape: 'square' as const,
    body: 'Owner, manager, front desk, staff. The front desk takes payments; the compliance file belongs to whoever signs the recibos.',
  },
  {
    title: 'The ledger shows what you actually get',
    shape: 'bars' as const,
    body: 'Net of our commission, never gross. Reporting what a client paid as though it all reached you overstates what you are owed by exactly our fee.',
  },
];

/** The rest of it, stated flatly. A grid is the right shape for a list nobody reads in order. */
export function Capabilities() {
  return (
    <Section
      eyebrow="Also in the box"
      title="The unglamorous half"
      lede="None of this is a headline feature. All of it is the difference between software you keep using and software you tried."
    >
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
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
