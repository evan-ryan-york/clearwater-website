import posthog from 'posthog-js';

export function initPostHog() {
  if (typeof window !== 'undefined') {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    console.log('PostHog Key:', posthogKey ? 'Present' : 'Missing');
    console.log('PostHog Host:', posthogHost ? 'Present' : 'Missing');

    if (posthogKey && posthogHost) {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        capture_pageview: false, // We'll handle pageviews manually
        capture_pageleave: true, // Capture when users leave the page
        loaded: () => {
          console.log('PostHog initialized successfully');
        },
      });
    } else {
      console.warn('PostHog environment variables not set. Key:', posthogKey, 'Host:', posthogHost);
    }
  }
}

export { posthog };
