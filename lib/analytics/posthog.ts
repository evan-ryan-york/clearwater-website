import posthog from 'posthog-js';

export function initPostHog() {
  if (typeof window !== 'undefined') {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (posthogKey && posthogHost) {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        capture_pageview: false, // We'll handle pageviews manually
        capture_pageleave: true, // Capture when users leave the page
      });
    }
  }
}

export { posthog };
