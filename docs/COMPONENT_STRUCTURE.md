# Component Structure & Architecture

## Overview

This document outlines the component architecture for the Clearwater Africa website. The site follows a modular, component-based approach using React Server Components by default, with Client Components only where necessary.

---

## Component Hierarchy

```
app/page.tsx (Main Landing Page)
├── HeroSection
│   └── EmailCaptureForm
│
├── ProblemSection
│   └── ProblemCard (x3)
│       └── Icon
│
├── SolutionSection
│   └── SolutionCard (x3)
│       └── Icon
│
├── HowItWorksSection
│   └── TimelineStep (x4)
│       ├── Icon
│       └── Arrow
│
├── LaunchTimelineSection
│   └── EmailCaptureForm
│
├── AboutSection
│   └── Image (optional)
│
├── GetInvolvedSection
│   └── CTACard (x3)
│       └── Button
│
└── Footer
    └── SocialLinks
```

---

## Component Specifications

### 1. HeroSection

**Type:** Server Component (with Client Component for video controls)

**File:** `components/sections/HeroSection.tsx`

**Purpose:** Full-screen hero with video background and email capture

**Props:**
```typescript
interface HeroSectionProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  subtitle: string;
}
```

**Structure:**
```tsx
export function HeroSection({ videoSrc, posterSrc, title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <EmailCaptureForm source="hero" />
      </div>
    </section>
  );
}
```

**Features:**
- Video autoplay with fallback poster image
- Dark overlay for text readability
- Centered content with responsive typography
- Integrated email capture form

**Mobile Optimization:**
- Replace video with static image on mobile using CSS
- Smaller text sizes
- Stack elements vertically

---

### 2. EmailCaptureForm

**Type:** Client Component (requires form state)

**File:** `components/EmailCaptureForm.tsx`

**Purpose:** Reusable email capture with validation and submission

**Props:**
```typescript
interface EmailCaptureFormProps {
  source: 'hero' | 'timeline' | 'cta';
  placeholder?: string;
  buttonText?: string;
  className?: string;
}
```

**Structure:**
```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema } from '@/lib/validation/emailSchema';
import { submitEmail } from '@/lib/supabase/submitEmail';
import { useState } from 'react';

export function EmailCaptureForm({
  source,
  placeholder = 'Enter your email',
  buttonText = 'Get Early Access',
  className
}: EmailCaptureFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(emailSchema)
  });

  const onSubmit = async (data: { email: string }) => {
    setSubmitStatus('loading');

    try {
      await submitEmail({ email: data.email, source });
      setSubmitStatus('success');
      reset();

      // Track with PostHog
      if (typeof window !== 'undefined' && window.posthog) {
        window.posthog.capture('email_submitted', { source });
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center text-white text-lg">
        ✓ Thanks! We'll be in touch soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('flex flex-col sm:flex-row gap-3 max-w-md mx-auto', className)}
    >
      <input
        type="email"
        placeholder={placeholder}
        {...register('email')}
        className="flex-1 h-12 px-4 rounded-md border-2 border-gray-300 focus:border-cyan-500 focus:outline-none"
      />
      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
      >
        {submitStatus === 'loading' ? 'Submitting...' : buttonText}
      </button>
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-sm mt-1">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
```

**Features:**
- React Hook Form for state management
- Zod validation
- Loading/success/error states
- PostHog event tracking
- Supabase integration

---

### 3. ProblemSection

**Type:** Server Component

**File:** `components/sections/ProblemSection.tsx`

**Purpose:** Three-column layout showing stakeholder problems

**Structure:**
```tsx
import { ProblemCard } from '@/components/ProblemCard';
import { Truck, Clock, Droplets } from 'lucide-react';

const problems = [
  {
    icon: Truck,
    title: 'FOR DRIVERS',
    headline: 'Wasted Time & Fuel',
    description: 'Drivers waste hours searching for depots with available water, burning fuel and losing income.'
  },
  {
    icon: Clock,
    title: 'FOR CUSTOMERS',
    headline: 'Unreliable Delivery',
    description: 'Homes and businesses struggle with unpredictable delivery times and uncertain water quality.'
  },
  {
    icon: Droplets,
    title: 'FOR THE SYSTEM',
    headline: 'No Visibility',
    description: 'Without digital tracking, Ghana Water and depot owners lack the data needed to serve demand efficiently.'
  }
];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          The Challenge We're Solving
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 4. ProblemCard

**Type:** Server Component (with Client Component wrapper for animations)

**File:** `components/ProblemCard.tsx`

**Props:**
```typescript
interface ProblemCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  headline: string;
  description: string;
}
```

**Structure:**
```tsx
import { LucideIcon } from 'lucide-react';

export function ProblemCard({ icon: Icon, title, headline, description }: ProblemCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      {/* Icon Circle */}
      <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-cyan-600" />
      </div>

      {/* Title */}
      <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-2">
        {title}
      </p>

      {/* Headline */}
      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
        {headline}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
```

---

### 5. SolutionSection

**Type:** Server Component

**File:** `components/sections/SolutionSection.tsx`

**Purpose:** Three solution cards showing platform benefits

**Structure:**
```tsx
import { SolutionCard } from '@/components/SolutionCard';
import { Smartphone, CalendarCheck, LayoutDashboard } from 'lucide-react';

const solutions = [
  {
    icon: Smartphone,
    audience: 'FOR DRIVERS',
    title: 'Find Water Faster',
    features: [
      'Real-time depot availability',
      'Optimized route planning',
      'Digital payment processing',
      'Customer management tools'
    ],
    tagline: 'Save fuel. Earn more. Work smarter.'
  },
  {
    icon: CalendarCheck,
    audience: 'FOR CUSTOMERS',
    title: 'Reliable Delivery',
    features: [
      'Transparent pricing',
      'Scheduled deliveries',
      'Verified water sources',
      'Digital payment options'
    ],
    tagline: 'Get water when you need it, from drivers you trust.'
  },
  {
    icon: LayoutDashboard,
    audience: 'FOR DEPOTS & GWL',
    title: 'Complete Visibility',
    features: [
      'Real-time transaction monitoring',
      'Automated record-keeping',
      'Demand forecasting',
      'Revenue transparency'
    ],
    tagline: 'Turn operations data into better decisions.'
  }
];

export function SolutionSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          One Platform. Three Solutions.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.audience} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 6. SolutionCard

**Type:** Server Component

**File:** `components/SolutionCard.tsx`

**Props:**
```typescript
interface SolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  audience: string;
  title: string;
  features: string[];
  tagline: string;
}
```

**Structure:**
```tsx
export function SolutionCard({ icon: Icon, audience, title, features, tagline }: SolutionCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 border-2 border-gray-200 hover:border-cyan-500 hover:shadow-lg transition-all">
      {/* Icon */}
      <div className="w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>

      {/* Audience */}
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
        {audience}
      </p>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
        {title}
      </h3>

      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-cyan-500 mr-2">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Tagline */}
      <p className="text-blue-900 font-semibold italic">
        {tagline}
      </p>
    </div>
  );
}
```

---

### 7. HowItWorksSection

**Type:** Server Component

**File:** `components/sections/HowItWorksSection.tsx`

**Purpose:** Four-step timeline showing platform workflow

**Structure:**
```tsx
import { TimelineStep } from '@/components/TimelineStep';
import { Handshake, Truck, Home, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Handshake,
    title: 'Depots Join Network',
    description: 'Depot owners register and share real-time water availability'
  },
  {
    number: 2,
    icon: Truck,
    title: 'Drivers Connect',
    description: 'Tanker operators find available depots and optimize their routes'
  },
  {
    number: 3,
    icon: Home,
    title: 'Customers Order',
    description: 'Homes and businesses request delivery with transparent pricing'
  },
  {
    number: 4,
    icon: CheckCircle,
    title: 'Everyone Wins',
    description: 'Efficient delivery. Verified quality. Complete transparency.'
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Simple. Digital. Transparent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <TimelineStep
              key={step.number}
              {...step}
              showArrow={index < steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 8. TimelineStep

**Type:** Server Component

**File:** `components/TimelineStep.tsx`

**Props:**
```typescript
interface TimelineStepProps {
  number: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  showArrow?: boolean;
}
```

**Structure:**
```tsx
import { ArrowRight } from 'lucide-react';

export function TimelineStep({ number, icon: Icon, title, description, showArrow }: TimelineStepProps) {
  return (
    <div className="relative">
      <div className="text-center">
        {/* Step Number */}
        <div className="text-sm font-semibold text-cyan-600 mb-2">
          Step {number}
        </div>

        {/* Icon Circle */}
        <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
          <Icon className="w-10 h-10 text-blue-900" />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Arrow (desktop only) */}
      {showArrow && (
        <div className="hidden lg:block absolute top-10 -right-4 text-cyan-500">
          <ArrowRight className="w-8 h-8" />
        </div>
      )}
    </div>
  );
}
```

---

### 9. LaunchTimelineSection

**Type:** Server Component

**File:** `components/sections/LaunchTimelineSection.tsx`

**Purpose:** 2026 launch announcement with email capture

**Structure:**
```tsx
import { EmailCaptureForm } from '@/components/EmailCaptureForm';

export function LaunchTimelineSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Coming to Accra — 2026
        </h2>

        <div className="prose prose-lg mx-auto mb-12">
          <p>
            Clearwater Africa is launching in Greater Accra with a pilot program
            designed in partnership with Ghana Water Limited.
          </p>
          <p>
            Our approach is methodical: We're spending 2025 building relationships
            with depot owners, recruiting driver partners, and working with commercial
            clients to ensure the platform serves real needs from day one.
          </p>
          <p>
            This isn't about disruption—it's about coordination. We're organizing
            the existing market to work better for everyone: drivers save time and
            fuel, customers get reliable service, and Ghana Water gains the
            transparency tools they need to manage the network effectively.
          </p>
          <p className="font-semibold text-blue-900">
            Starting in Accra. Scaling across Africa.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
            Want to learn more or get involved?
          </h3>
          <EmailCaptureForm
            source="timeline"
            buttonText="Subscribe for Updates"
          />
        </div>
      </div>
    </section>
  );
}
```

---

### 10. AboutSection

**Type:** Server Component

**File:** `components/sections/AboutSection.tsx`

**Purpose:** Founder credibility section

**Structure:**
```tsx
import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Building for the Long Term
        </h2>

        {/* Optional: Two-column layout with photo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Photo (optional) */}
          <div className="lg:col-span-1">
            <Image
              src="/images/founder-photo.jpg"
              alt="Ryan York, Founder of Clearwater Africa"
              width={300}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>

          {/* Bio */}
          <div className="lg:col-span-2 prose prose-lg">
            <p>
              Clearwater Africa is founded by Ryan York, a systems builder with
              20 years of experience scaling complex operations—from education
              networks serving 10,000+ students to technology platforms used by
              50,000+ people.
            </p>
            <p>
              After seeing firsthand how water scarcity constrains communities
              across Africa, Ryan is dedicating the next chapter of his career
              to solving it. Clearwater Africa is the first step in a 20-year
              mission to make water access as reliable as electricity.
            </p>
            <p className="font-semibold text-blue-900">
              We're building infrastructure, not just an app. We're here for
              the long haul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### 11. GetInvolvedSection

**Type:** Server Component

**File:** `components/sections/GetInvolvedSection.tsx`

**Purpose:** Three segmented CTAs

**Structure:**
```tsx
import { CTACard } from '@/components/CTACard';

const ctas = [
  {
    title: "I'm a Driver or Fleet Owner",
    description: 'Learn how Clearwater can help you save time, reduce costs, and grow your business.',
    buttonText: 'Contact Us',
    buttonLink: 'mailto:ryan@clearwaterafrica.com?subject=Driver Inquiry'
  },
  {
    title: "I'm a Business or Homeowner",
    description: 'Get early access to reliable water delivery when we launch in Accra.',
    buttonText: 'Sign Up for Updates',
    buttonLink: '#signup'
  },
  {
    title: "I'm a Partner or Investor",
    description: "Interested in supporting our mission? Let's talk about how we can work together.",
    buttonText: 'Get in Touch',
    buttonLink: 'mailto:ryan@clearwaterafrica.com?subject=Partnership Inquiry'
  }
];

export function GetInvolvedSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Join Us in Building Clearwater Africa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ctas.map((cta) => (
            <CTACard key={cta.title} {...cta} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 12. CTACard

**Type:** Server Component

**File:** `components/CTACard.tsx`

**Props:**
```typescript
interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
```

**Structure:**
```tsx
import { Button } from '@/components/ui/Button';

export function CTACard({ title, description, buttonText, buttonLink }: CTACardProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 md:p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>

      <Button
        as="a"
        href={buttonLink}
        variant="primary"
        className="w-full"
      >
        {buttonText}
      </Button>
    </div>
  );
}
```

---

### 13. Footer

**Type:** Server Component

**File:** `components/Footer.tsx`

**Structure:**
```tsx
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Clearwater Africa</h3>
          <p className="text-blue-200">Making water delivery work for everyone.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a
            href="mailto:ryan@clearwaterafrica.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            ryan@clearwaterafrica.com
          </a>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Launching in Accra, Ghana - 2026
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://linkedin.com/company/clearwater-africa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/clearwaterafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-blue-200 text-sm">
          © 2025 Clearwater Africa
        </div>
      </div>
    </footer>
  );
}
```

---

## Base UI Components

### Button Component

**File:** `components/ui/Button.tsx`

See TECHNICAL_SPECS.md for full implementation.

### Input Component

**File:** `components/ui/Input.tsx`

See TECHNICAL_SPECS.md for full implementation.

### Section Component

**File:** `components/ui/Section.tsx`

See TECHNICAL_SPECS.md for full implementation.

---

## Hooks

### useScrollAnimation

**File:** `hooks/useScrollAnimation.ts`

**Purpose:** Detect when elements enter viewport for animations

```typescript
'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseScrollAnimationOptions = {}) {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
}
```

**Usage:**
```tsx
'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AnimatedCard({ children }) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={elementRef}
      className={cn(
        'opacity-0 translate-y-8 transition-all duration-500',
        isVisible && 'opacity-100 translate-y-0'
      )}
    >
      {children}
    </div>
  );
}
```

---

### useMediaQuery

**File:** `hooks/useMediaQuery.ts`

**Purpose:** Detect screen size for responsive logic

```typescript
'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
```

**Usage:**
```tsx
'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

---

## Data Flow

### Email Submission Flow

```
User enters email in EmailCaptureForm
  ↓
React Hook Form validates with Zod schema
  ↓
If valid, call submitEmail() function
  ↓
POST to /api/submit-email route
  ↓
Supabase client inserts into email_signups table
  ↓
PostHog tracks "email_submitted" event
  ↓
Return success/error to form
  ↓
Display success message or error to user
```

### Code:
```typescript
// lib/supabase/submitEmail.ts
import { createClient } from '@/lib/supabase/client';
import type { EmailSubmission } from '@/lib/validation/emailSchema';

export async function submitEmail(data: EmailSubmission) {
  const supabase = createClient();

  const { error } = await supabase
    .from('email_signups')
    .insert([{
      email: data.email,
      source: data.source,
      metadata: data.metadata || {}
    }]);

  if (error) {
    console.error('Email submission error:', error);
    throw new Error('Failed to submit email');
  }

  return { success: true };
}
```

---

## Performance Optimization

### Image Loading Strategy

```tsx
import Image from 'next/image';

// Above the fold - eager loading
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  priority
/>

// Below the fold - lazy loading (default)
<Image
  src="/section-image.jpg"
  alt="Section image"
  width={800}
  height={600}
  loading="lazy"
/>
```

### Component Code Splitting

```tsx
// Heavy component - lazy load
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // Optional: disable SSR for client-only components
});
```

---

## Testing Strategy

### Component Testing (Optional for MVP)

```typescript
// __tests__/EmailCaptureForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { EmailCaptureForm } from '@/components/EmailCaptureForm';

describe('EmailCaptureForm', () => {
  it('validates email format', async () => {
    render(<EmailCaptureForm source="hero" />);

    const input = screen.getByPlaceholderText('Enter your email');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'invalid-email' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it('submits valid email', async () => {
    render(<EmailCaptureForm source="hero" />);

    const input = screen.getByPlaceholderText('Enter your email');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/thanks/i)).toBeInTheDocument();
    });
  });
});
```

---

## File Checklist

Before launch, ensure these files exist:

### Core Application
- [ ] `app/layout.tsx`
- [ ] `app/page.tsx`
- [ ] `app/globals.css`
- [ ] `app/api/submit-email/route.ts`

### Section Components
- [ ] `components/sections/HeroSection.tsx`
- [ ] `components/sections/ProblemSection.tsx`
- [ ] `components/sections/SolutionSection.tsx`
- [ ] `components/sections/HowItWorksSection.tsx`
- [ ] `components/sections/LaunchTimelineSection.tsx`
- [ ] `components/sections/AboutSection.tsx`
- [ ] `components/sections/GetInvolvedSection.tsx`

### Card Components
- [ ] `components/ProblemCard.tsx`
- [ ] `components/SolutionCard.tsx`
- [ ] `components/TimelineStep.tsx`
- [ ] `components/CTACard.tsx`

### Shared Components
- [ ] `components/EmailCaptureForm.tsx`
- [ ] `components/Footer.tsx`

### UI Components
- [ ] `components/ui/Button.tsx`
- [ ] `components/ui/Input.tsx`
- [ ] `components/ui/Section.tsx`
- [ ] `components/ui/Card.tsx`

### Utilities
- [ ] `lib/design-tokens.ts`
- [ ] `lib/utils.ts`
- [ ] `lib/supabase/client.ts`
- [ ] `lib/supabase/submitEmail.ts`
- [ ] `lib/validation/emailSchema.ts`
- [ ] `lib/analytics/posthog.ts`

### Hooks
- [ ] `hooks/useScrollAnimation.ts`
- [ ] `hooks/useMediaQuery.ts`

### Assets
- [ ] `public/videos/hero-desktop.mp4`
- [ ] `public/videos/hero-mobile.jpg`
- [ ] `public/images/founder-photo.jpg` (optional)
- [ ] `public/images/og-image.jpg`

---

## Best Practices

### Component Organization
1. **Keep components small and focused** - Each component should do one thing well
2. **Use composition over inheritance** - Build complex UIs from simple components
3. **Colocate related code** - Keep styles, logic, and markup together
4. **Export types alongside components** - Make components easy to consume

### Server vs Client Components
- **Default to Server Components** - Better performance, smaller bundle
- **Use Client Components when:**
  - Component uses React hooks (useState, useEffect, etc.)
  - Component handles user interactions
  - Component uses browser-only APIs

### Naming Conventions
- **Components:** PascalCase (e.g., `EmailCaptureForm`)
- **Files:** PascalCase for components (e.g., `EmailCaptureForm.tsx`)
- **Utilities:** camelCase (e.g., `submitEmail.ts`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `MAX_EMAIL_LENGTH`)

### Accessibility
- Always include alt text on images
- Use semantic HTML (header, nav, main, section, footer)
- Ensure keyboard navigation works
- Add ARIA labels for icon-only buttons
- Test with screen readers

---

## Summary

This component structure provides:
- ✅ **Modularity:** Reusable, composable components
- ✅ **Performance:** Server Components by default
- ✅ **Maintainability:** Clear separation of concerns
- ✅ **Scalability:** Easy to add new sections/features
- ✅ **Type Safety:** Full TypeScript coverage
- ✅ **Accessibility:** WCAG compliant components
- ✅ **Developer Experience:** Clear conventions and patterns

Follow this architecture to build a fast, maintainable, and scalable website.
