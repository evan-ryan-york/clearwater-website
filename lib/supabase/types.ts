export interface EmailSignup {
  id: string;
  email: string;
  source: 'hero' | 'timeline' | 'cta';
  user_agent: string | null;
  created_at: string;
  metadata: Record<string, any>;
}

export interface EmailSubmissionMetadata {
  posthog_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  screen_width?: number;
  screen_height?: number;
  timezone?: string;
}
