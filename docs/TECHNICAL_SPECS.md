# Technical Specifications

## Technology Stack

### Core Framework
- **Next.js 16.0.1**
  - App Router (not Pages Router)
  - React Server Components by default
  - Built-in image optimization
  - File-based routing

### Frontend
- **React 19.2.0**
  - Latest stable release
  - New features: Actions, useOptimistic, etc.

- **TypeScript 5.x**
  - Strict mode enabled
  - Type-safe component props
  - Zod for runtime validation

- **Tailwind CSS 4.0**
  - Utility-first styling
  - Custom configuration for brand colors
  - Responsive design utilities
  - Animation support via tw-animate-css

### Forms & Validation
- **React Hook Form 7.66.0**
  - Performant form handling
  - Built-in validation
  - TypeScript support

- **Zod 4.1.12**
  - Schema validation
  - Type inference
  - Runtime type checking

- **@hookform/resolvers 3.9.1**
  - Bridge between React Hook Form and Zod

### Backend & Database
- **Supabase 2.48.1**
  - PostgreSQL database
  - Real-time subscriptions (not used initially)
  - Row Level Security
  - RESTful API

### Analytics & Monitoring
- **PostHog 1.195.1**
  - Event tracking
  - User behavior analytics
  - Funnel analysis
  - Session recording (optional)

### UI Components
- **Lucide React 0.468.0**
  - Icon library
  - Tree-shakeable
  - Consistent design system

- **class-variance-authority 0.7.1**
  - Type-safe component variants
  - Similar to Stitches/CVA pattern

- **clsx 2.1.1** + **tailwind-merge 2.6.0**
  - Conditional class names
  - Tailwind class conflict resolution

### Future (Not Initially Used)
- **Stripe 19.2.0**
  - Payment processing
  - Subscription management
  - Reserved for Phase 2

---

## Project Structure

```
clearwater-website/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Global styles, Tailwind imports
│   └── api/                    # API routes (if needed)
│       └── submit-email/
│           └── route.ts        # Email submission endpoint
│
├── components/
│   ├── ui/                     # Base UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   └── Icon.tsx
│   │
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── LaunchTimelineSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── GetInvolvedSection.tsx
│   │
│   ├── EmailCaptureForm.tsx    # Reusable email form
│   ├── Footer.tsx              # Site footer
│   ├── ProblemCard.tsx         # Problem section card
│   ├── SolutionCard.tsx        # Solution section card
│   ├── TimelineStep.tsx        # Timeline step component
│   └── CTACard.tsx             # CTA card component
│
├── lib/
│   ├── design-tokens.ts        # Design system constants
│   ├── utils.ts                # Utility functions (cn, etc.)
│   │
│   ├── supabase/
│   │   ├── client.ts           # Supabase client initialization
│   │   ├── submitEmail.ts      # Email submission logic
│   │   └── types.ts            # Database types
│   │
│   ├── validation/
│   │   └── emailSchema.ts      # Zod validation schemas
│   │
│   └── analytics/
│       └── posthog.ts          # PostHog initialization
│
├── hooks/
│   ├── useScrollAnimation.ts   # Intersection Observer hook
│   └── useMediaQuery.ts        # Responsive design hook
│
├── public/
│   ├── videos/
│   │   ├── hero-desktop.mp4    # Hero video (desktop)
│   │   └── hero-mobile.jpg     # Hero fallback (mobile)
│   │
│   ├── images/
│   │   ├── founder-photo.jpg   # Ryan's photo
│   │   └── og-image.jpg        # Open Graph image
│   │
│   ├── robots.txt
│   └── sitemap.xml
│
├── docs/
│   ├── BUILD_PLAN.md           # This comprehensive build plan
│   ├── TECHNICAL_SPECS.md      # Technical specifications
│   ├── DESIGN_SYSTEM.md        # Design system reference
│   └── COMPONENT_STRUCTURE.md  # Component architecture
│
├── .env.local                  # Local environment variables
├── .env.example                # Example env vars
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts          # Tailwind configuration
```

---

## Database Schema (Supabase)

### Table: `email_signups`

```sql
CREATE TABLE email_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  source TEXT NOT NULL, -- 'hero' | 'timeline' | 'cta'
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::jsonb,

  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'),
  CONSTRAINT valid_source CHECK (source IN ('hero', 'timeline', 'cta'))
);

-- Index for faster queries
CREATE INDEX idx_email_signups_created_at ON email_signups(created_at DESC);
CREATE INDEX idx_email_signups_source ON email_signups(source);

-- Row Level Security
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts only
CREATE POLICY "Allow anonymous inserts" ON email_signups
  FOR INSERT
  WITH CHECK (true);

-- Policy: No reads from client
CREATE POLICY "No client reads" ON email_signups
  FOR SELECT
  USING (false);
```

### Metadata JSONB Structure
```typescript
{
  posthog_id?: string;        // PostHog distinct ID
  utm_source?: string;        // UTM parameters
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;          // HTTP referrer
  screen_width?: number;      // Device info
  screen_height?: number;
  timezone?: string;          // User timezone
}
```

---

## API Routes

### POST /api/submit-email

**Purpose:** Handle email signup submissions

**Request Body:**
```typescript
{
  email: string;
  source: 'hero' | 'timeline' | 'cta';
  metadata?: {
    posthog_id?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    referrer?: string;
  }
}
```

**Response (Success):**
```typescript
{
  success: true;
  message: "Email submitted successfully"
}
```

**Response (Error):**
```typescript
{
  success: false;
  error: "Email already exists" | "Invalid email" | "Server error"
}
```

**Implementation:**
```typescript
// app/api/submit-email/route.ts
import { createClient } from '@/lib/supabase/client';
import { emailSchema } from '@/lib/validation/emailSchema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validated = emailSchema.parse(body);

    // Submit to Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from('email_signups')
      .insert([{
        email: validated.email,
        source: validated.source,
        user_agent: request.headers.get('user-agent'),
        metadata: validated.metadata || {}
      }])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return NextResponse.json(
          { success: false, error: 'Email already exists' },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: 'Email submitted successfully'
    });

  } catch (error) {
    console.error('Email submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
```

---

## Environment Variables

### Development (.env.local)
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...

# PostHog
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Optional: Stripe (for future)
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production (.env.production)
```bash
# Supabase Production
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...

# PostHog Production
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://clearwaterafrica.com
```

---

## Component API Specifications

### Button Component
```typescript
// components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-orange-500 text-white hover:bg-orange-600',
        secondary: 'bg-blue-600 text-white hover:bg-blue-700',
        ghost: 'hover:bg-gray-100 text-gray-900',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export function Button({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
```

### Input Component
```typescript
// components/ui/Input.tsx
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'flex h-11 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base',
            'focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
```

### Section Component
```typescript
// components/ui/Section.tsx
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue';
  id?: string;
}

export function Section({
  children,
  className,
  background = 'white',
  id
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50'
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        bgColors[background],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
```

---

## Validation Schemas

### Email Schema
```typescript
// lib/validation/emailSchema.ts
import { z } from 'zod';

export const emailSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .max(255, 'Email is too long'),
  source: z.enum(['hero', 'timeline', 'cta']),
  metadata: z.object({
    posthog_id: z.string().optional(),
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    referrer: z.string().optional(),
  }).optional()
});

export type EmailSubmission = z.infer<typeof emailSchema>;
```

---

## Utility Functions

### cn() - Class Name Utility
```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Lighthouse Scores (Target)
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Bundle Size
- **First Load JS:** < 200KB
- **Total Page Size:** < 2MB (including video)

### Image Optimization
- Use WebP format where supported
- Lazy load all images below the fold
- Responsive images with srcset
- Max image size: 1920px width

### Video Optimization
- Desktop video: < 5MB, H.264 codec
- Mobile fallback: Static image < 200KB
- Lazy load video
- Preload="metadata"

---

## Browser Support

### Minimum Supported Versions
- Chrome: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Edge: Last 2 versions
- Mobile Safari: iOS 13+
- Chrome Android: Last 2 versions

### Polyfills
- Not required for target browsers
- Next.js handles most compatibility

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance
- [ ] All images have alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] Color contrast ratio ≥ 3:1 for large text
- [ ] Form inputs have associated labels
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators are visible
- [ ] No keyboard traps
- [ ] Screen reader compatible

### ARIA Labels
- Use semantic HTML first
- Add ARIA labels only when necessary
- Ensure proper ARIA roles

---

## Security Considerations

### Environment Variables
- Never commit .env files
- Use different keys for dev/prod
- Rotate keys periodically

### Email Validation
- Server-side validation always
- Rate limiting on submissions
- Prevent SQL injection (Supabase handles this)

### XSS Prevention
- React automatically escapes output
- Sanitize any user input before display
- Use CSP headers

### CSRF Protection
- Next.js API routes include CSRF protection
- Use SameSite cookies

### Rate Limiting
- Implement rate limiting on email submission
- Max 3 submissions per IP per hour
- Use Vercel Edge Config or Upstash Redis

---

## Testing Strategy

### Unit Tests (Optional for MVP)
- Test utility functions
- Test validation schemas
- Use Vitest or Jest

### Integration Tests
- Test email submission flow
- Test form validation
- Use Playwright or Cypress

### Manual Testing Checklist
- [ ] Email submission works
- [ ] Form validation displays errors
- [ ] Success message appears
- [ ] PostHog events fire
- [ ] Mobile responsive
- [ ] Cross-browser compatible
- [ ] Accessibility audit passes

---

## Deployment Configuration

### Vercel Settings
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "pnpm install"
}
```

### Environment Variables (Vercel)
Set all variables from `.env.production` in Vercel dashboard

### Custom Headers
```javascript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};
```

---

## Monitoring & Alerts

### Vercel Analytics
- Track page views
- Monitor performance
- Track Web Vitals

### PostHog Dashboards
- Conversion funnel: Landing → Email Submit
- Scroll depth analysis
- Session recordings
- User paths

### Supabase Monitoring
- Database performance
- Query times
- Storage usage
- API usage

### Error Tracking (Optional)
- Sentry integration
- Real-time error alerts
- Performance monitoring

---

## Future Enhancements

### Phase 2 Features
- Multi-language support (English, Twi)
- Blog/content section
- Case studies page
- Testimonials
- Partner logos
- FAQ section

### Phase 3 Features
- User dashboard (for drivers/customers)
- Stripe payment integration
- SMS notifications
- Mobile app links

---

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type check
pnpm tsc --noEmit

# Run tests (when implemented)
pnpm test
```

---

## Git Workflow

### Branch Strategy
- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

### Commit Convention
```
type(scope): description

[optional body]

[optional footer]
```

Types: feat, fix, docs, style, refactor, test, chore

Example:
```
feat(hero): add video background with email capture

- Implement HTML5 video element
- Add email capture form
- Connect to Supabase
```

### Pull Request Template
```markdown
## Description
[Describe the changes]

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Manual testing completed
- [ ] Cross-browser tested
- [ ] Mobile tested

## Screenshots (if applicable)
[Add screenshots]
```

---

## Notes
- All TypeScript types should be exported from component files
- Use `use client` directive only when necessary (client components)
- Prefer server components for static content
- Keep components small and focused
- Document complex logic with comments
