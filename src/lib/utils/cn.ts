import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merges class names so a later Tailwind utility beats an earlier one of the same family. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
