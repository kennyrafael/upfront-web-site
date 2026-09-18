import { Button as ThemedButton } from '@radix-ui/themes';
import type { ComponentPropsWithoutRef } from 'react';

type ThemedProps = ComponentPropsWithoutRef<typeof ThemedButton>;

export interface ButtonProps extends Omit<ThemedProps, 'variant' | 'color'> {
  /** `primary` is the one action per screen worth taking; the rest are ways out of it. */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Renders as an anchor. A landing page's buttons are almost all links. */
  href?: string;
}

const VARIANTS: Record<string, Pick<ThemedProps, 'variant'>> = {
  primary: { variant: 'solid' },
  secondary: { variant: 'surface' },
  ghost: { variant: 'ghost' },
};

export function Button({ variant = 'primary', href, size = '3', ...props }: ButtonProps) {
  const themed = <ThemedButton size={size} {...VARIANTS[variant]} {...props} />;

  // `asChild` rather than a styled anchor: the button keeps Radix's own focus ring and
  // sizing, and the anchor keeps being an anchor — middle-click, copy link, the lot.
  return href ? (
    <ThemedButton asChild size={size} {...VARIANTS[variant]} {...props}>
      <a href={href}>{props.children}</a>
    </ThemedButton>
  ) : (
    themed
  );
}
