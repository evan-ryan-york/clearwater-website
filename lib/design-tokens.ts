/**
 * Clearwater Africa Design System Tokens
 *
 * Centralized design tokens for colors, typography, spacing, and more.
 * Use these constants throughout the application for consistency.
 */

export const colors = {
  primary: {
    DEFAULT: '#0A4C6E',
    dark: '#083A52',
    light: '#0E5F87',
  },
  secondary: {
    DEFAULT: '#00D4FF',
    dark: '#00A8CC',
    light: '#33DDFF',
  },
  accent: {
    DEFAULT: '#FF6B35',
    dark: '#E55A2B',
    light: '#FF8C5F',
  },
  neutral: {
    50: '#F8F9FA',
    100: '#F1F3F5',
    200: '#E9ECEF',
    300: '#DEE2E6',
    400: '#CED4DA',
    500: '#6C757D',
    600: '#495057',
    700: '#343A40',
    800: '#2D3436',
    900: '#212529',
  },
  semantic: {
    success: '#28A745',
    error: '#DC3545',
    warning: '#FFC107',
  },
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const typography = {
  fontFamily: {
    heading: ['Poppins', 'system-ui', 'sans-serif'].join(', '),
    body: ['Inter', 'system-ui', 'sans-serif'].join(', '),
  },
  fontSize: {
    hero: {
      mobile: '2.25rem',   // 36px
      desktop: '3.75rem',  // 60px
    },
    section: {
      mobile: '2rem',      // 32px
      desktop: '3rem',     // 48px
    },
    subsection: {
      mobile: '1.5rem',    // 24px
      desktop: '2rem',     // 32px
    },
    cardTitle: {
      mobile: '1.25rem',   // 20px
      desktop: '1.5rem',   // 24px
    },
    bodyLarge: '1.25rem', // 20px
    body: '1.125rem',     // 18px
    bodySmall: '1rem',    // 16px
    caption: '0.875rem',  // 14px
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },
} as const;

export const spacing = {
  section: {
    mobile: '4rem',    // 64px
    tablet: '6rem',    // 96px
    desktop: '8rem',   // 128px
  },
  card: {
    mobile: '1.5rem',  // 24px
    desktop: '2rem',   // 32px
  },
  gap: {
    small: '1.5rem',   // 24px
    medium: '2rem',    // 32px
    large: '3rem',     // 48px
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const borderRadius = {
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export const transitions = {
  fast: '150ms ease-in-out',
  normal: '200ms ease-in-out',
  slow: '300ms ease-out',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;
