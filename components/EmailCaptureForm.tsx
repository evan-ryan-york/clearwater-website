'use client';

/**
 * Email Capture Form Component
 *
 * Reusable email capture form with validation and submission
 * Used in Hero and Launch Timeline sections
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema, type EmailFormData } from '@/lib/validation/emailSchema';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { posthog } from '@/lib/analytics/posthog';

export interface EmailCaptureFormProps {
  source: 'hero' | 'timeline' | 'cta';
  placeholder?: string;
  buttonText?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export function EmailCaptureForm({
  source,
  placeholder = 'Enter your email',
  buttonText = 'Get Early Access',
  className,
  variant = 'light',
}: EmailCaptureFormProps) {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setSubmitStatus('loading');

    try {
      // Submit to API
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          source,
          metadata: {
            referrer: typeof window !== 'undefined' ? document.referrer : undefined,
            screen_width: typeof window !== 'undefined' ? window.screen.width : undefined,
            screen_height: typeof window !== 'undefined' ? window.screen.height : undefined,
            timezone: typeof window !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone : undefined,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      console.log('Email submitted successfully:', result);

      // Track with PostHog
      if (typeof window !== 'undefined') {
        posthog.capture('email_submitted', {
          source,
          email_hash: result.data?.id, // Using the database ID as a reference
        });
      }

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email submission error:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div
        className={cn(
          'text-center text-lg font-semibold',
          variant === 'light' ? 'text-[#0A4C6E]' : 'text-white',
          className
        )}
      >
        ✓ Thanks! We&apos;ll be in touch soon.
      </div>
    );
  }

  const inputClasses = cn(
    'w-full md:flex-1 h-12 md:h-14 px-4 md:px-6 text-base md:text-lg rounded-md',
    'border-2 transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'min-w-0',
    errors.email
      ? 'border-[#DC3545] focus:ring-[#DC3545]'
      : 'border-gray-300 focus:border-[#00D4FF]',
    variant === 'light' && 'bg-white text-gray-900',
    variant === 'dark' && 'bg-white/90 text-gray-900 placeholder:text-gray-500'
  );

  const buttonClasses = cn(
    'h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold rounded-md',
    'transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D4FF]',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'bg-[#00D4FF] hover:bg-[#00A8CC] text-white',
    'whitespace-nowrap w-full md:w-auto md:flex-shrink-0'
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        'flex flex-col gap-3 w-full max-w-2xl mx-auto',
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-3 w-full items-start">
        <input
          type="email"
          placeholder={placeholder}
          {...register('email')}
          className={inputClasses}
          disabled={submitStatus === 'loading'}
          aria-label="Email address"
        />
        <button type="submit" className={buttonClasses} disabled={submitStatus === 'loading'}>
          {submitStatus === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="hidden sm:inline">Submitting...</span>
            </span>
          ) : (
            buttonText
          )}
        </button>
      </div>
      {errors.email && (
        <p className="text-sm text-[#DC3545] w-full" role="alert">
          {errors.email.message}
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-sm text-[#DC3545] w-full" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
