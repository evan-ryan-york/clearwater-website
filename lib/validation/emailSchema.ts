/**
 * Email Validation Schema
 *
 * Zod schema for validating email submissions
 */

import { z } from 'zod';

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),
});

export const emailSubmissionSchema = emailSchema.extend({
  source: z.enum(['hero', 'timeline', 'cta']),
  metadata: z
    .object({
      posthog_id: z.string().optional(),
      utm_source: z.string().optional(),
      utm_medium: z.string().optional(),
      utm_campaign: z.string().optional(),
      referrer: z.string().optional(),
    })
    .optional(),
});

export type EmailFormData = z.infer<typeof emailSchema>;
export type EmailSubmission = z.infer<typeof emailSubmissionSchema>;
