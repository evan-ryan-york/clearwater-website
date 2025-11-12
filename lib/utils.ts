/**
 * Utility Functions
 *
 * Common utility functions used throughout the application
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names and merges Tailwind CSS classes
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts
 *
 * @example
 * cn('px-4 py-2', 'bg-blue-500', { 'text-white': isActive })
 * // => 'px-4 py-2 bg-blue-500 text-white'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
