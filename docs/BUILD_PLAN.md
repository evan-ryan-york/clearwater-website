# Clearwater Africa Website - Build Plan

## Overview
This document outlines the step-by-step process for building the Clearwater Africa single-page website. The site is designed to introduce the platform, capture leads, and build credibility ahead of the 2026 Accra launch.

## Project Context
- **Type:** Single-page marketing website
- **Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Target:** Desktop and mobile responsive
- **Primary Goal:** Email capture and stakeholder engagement

---

## Phase 1: Foundation & Setup

### Step 1.1: Design System Implementation (2-3 hours)
**Objective:** Establish the visual foundation for the entire site

**Tasks:**
1. Configure Tailwind theme in `app/globals.css`:
   - Define color palette (deep blue, cyan, orange, neutrals)
   - Set up typography (Poppins for headings, Inter for body)
   - Configure spacing scale
   - Add custom animations

2. Create design tokens file at `lib/design-tokens.ts`:
   - Export color constants
   - Define typography scales
   - Set spacing/sizing constants

3. Set up Google Fonts in `app/layout.tsx`:
   - Import Poppins (700 weight)
   - Import Inter (400, 600 weights)

**Deliverables:**
- Updated `app/globals.css`
- New `lib/design-tokens.ts`
- Fonts loaded in layout

**Testing:**
- Verify fonts load correctly
- Test color contrast for accessibility

---

### Step 1.2: Core Component Library (3-4 hours)
**Objective:** Build reusable UI components that will be used throughout the site

**Tasks:**
1. Create `components/ui/` directory structure:
   ```
   components/
   └── ui/
       ├── Button.tsx
       ├── Input.tsx
       ├── Section.tsx
       ├── Card.tsx
       └── Icon.tsx
   ```

2. Build Button component:
   - Primary, secondary, ghost variants
   - Multiple sizes
   - Loading state
   - Use class-variance-authority for variants

3. Build Input component:
   - Email input variant
   - Error states
   - Integration with react-hook-form

4. Build Section component:
   - Wrapper for consistent section padding/margins
   - Background color variants

5. Build Card component:
   - For problem/solution cards
   - Hover states

6. Set up Lucide React icon system

**Deliverables:**
- 5 base UI components
- Type definitions for all components
- Storybook-style documentation (comments)

**Testing:**
- Test all component variants
- Verify responsive behavior
- Test keyboard navigation

---

## Phase 2: Section Components

### Step 2.1: Hero Section with Video Background (4-5 hours)
**Objective:** Create compelling full-screen hero with video background and email capture

**Tasks:**
1. Create `components/sections/HeroSection.tsx`

2. Implement video background:
   - Use HTML5 video element
   - Set up autoplay, loop, muted attributes
   - Add dark overlay (CSS)
   - Fallback image for mobile/load states
   - Lazy loading optimization

3. Build centered content:
   - Headline: "Making Water Delivery Work for Everyone"
   - Subheadline text
   - Email capture form component

4. Create `components/EmailCaptureForm.tsx`:
   - Single email input
   - "Get Early Access" CTA button
   - React Hook Form integration
   - Zod validation schema
   - Success/error states
   - PostHog event tracking

5. Responsive design:
   - Full viewport height
   - Stack elements on mobile
   - Replace video with static image on mobile (performance)

**Deliverables:**
- `components/sections/HeroSection.tsx`
- `components/EmailCaptureForm.tsx`
- `lib/validation/emailSchema.ts`
- Video assets placed in `public/videos/`

**Testing:**
- Video plays and loops correctly
- Email validation works
- Form submission (connect to backend in Phase 5)
- Performance on slow connections
- Mobile image fallback works

---

### Step 2.2: Problem Section (2-3 hours)
**Objective:** Three-column layout explaining stakeholder pain points

**Tasks:**
1. Create `components/sections/ProblemSection.tsx`

2. Implement three-column layout:
   - Use CSS Grid for desktop (3 columns)
   - Stack vertically on mobile
   - Equal height cards

3. Create problem cards:
   - FOR DRIVERS: Wasted Time & Fuel
   - FOR CUSTOMERS: Unreliable Delivery
   - FOR THE SYSTEM: No Visibility
   - Each with icon, headline, body text

4. Icon selection from Lucide React:
   - Truck with question mark → `TruckIcon` + custom styling
   - Clock/hourglass → `Clock` or `Hourglass`
   - Leaky pipe → `Droplets` or `AlertCircle`

5. Add subtle animations:
   - Fade in on scroll using intersection observer
   - Stagger animation for each card

**Deliverables:**
- `components/sections/ProblemSection.tsx`
- `components/ProblemCard.tsx`
- Animation utilities

**Testing:**
- Grid layout works on all screen sizes
- Animations trigger appropriately
- Icons render correctly

---

### Step 2.3: Solution Section (3-4 hours)
**Objective:** Parallel three-card layout showing platform solutions

**Tasks:**
1. Create `components/sections/SolutionSection.tsx`

2. Implement three solution cards:
   - FOR DRIVERS: Find Water Faster
   - FOR CUSTOMERS: Reliable Delivery
   - FOR DEPOTS & GWL: Complete Visibility

3. Card structure:
   - Icon at top
   - Headline
   - Bulleted feature list
   - Aspirational tagline

4. Responsive design:
   - Horizontal scroll on mobile (optional)
   - OR stack vertically on mobile
   - Ensure readability on all devices

5. Add hover effects:
   - Subtle lift/shadow on hover
   - Icon animation

**Deliverables:**
- `components/sections/SolutionSection.tsx`
- `components/SolutionCard.tsx`

**Testing:**
- Card layouts responsive
- Hover states work
- Mobile scroll (if implemented) is smooth

---

### Step 2.4: How It Works Section (3-4 hours)
**Objective:** Visual timeline showing the platform workflow

**Tasks:**
1. Create `components/sections/HowItWorksSection.tsx`

2. Implement horizontal timeline:
   - Four steps with arrows between them
   - Desktop: left-to-right flow
   - Mobile: vertical stack with arrows pointing down

3. Create step component:
   - Icon in circle
   - Step number
   - Headline
   - Description text
   - Arrow connector (except last step)

4. Icons:
   - Step 1 (Handshake) → `Handshake`
   - Step 2 (Truck + phone) → `Truck` + `Smartphone`
   - Step 3 (House) → `Home` or `Building`
   - Step 4 (Checkmark) → `CheckCircle`

5. Visual connectors:
   - Arrows or dotted lines between steps
   - Responsive behavior

**Deliverables:**
- `components/sections/HowItWorksSection.tsx`
- `components/TimelineStep.tsx`

**Testing:**
- Timeline flows correctly on desktop
- Vertical stack works on mobile
- Icons and text are clear

---

### Step 2.5: Launch Timeline Section (2-3 hours)
**Objective:** 2026 launch announcement with second email capture

**Tasks:**
1. Create `components/sections/LaunchTimelineSection.tsx`

2. Layout:
   - Centered headline: "Coming to Accra — 2026"
   - Centered body text (~400 words)
   - Second email capture form

3. Reuse `EmailCaptureForm` component:
   - Different CTA text: "Subscribe for Updates"
   - Same validation/submission logic

4. Typography:
   - Larger, more readable body text
   - Proper line height for readability

**Deliverables:**
- `components/sections/LaunchTimelineSection.tsx`

**Testing:**
- Text is readable and well-spaced
- Email form works correctly
- Looks good on mobile

---

### Step 2.6: Who We Are Section (2-3 hours)
**Objective:** Founder credibility section with bio and optional photo

**Tasks:**
1. Create `components/sections/AboutSection.tsx`

2. Layout:
   - Centered headline: "Building for the Long Term"
   - Single column, centered text
   - Optional: Photo of Ryan (professional)

3. Implement two-column layout (optional):
   - Left: Photo
   - Right: Bio text
   - OR just centered text

4. Add image optimization:
   - Use Next.js Image component
   - Optimize for web

**Deliverables:**
- `components/sections/AboutSection.tsx`
- Placeholder for founder photo

**Testing:**
- Image loads and displays correctly
- Text is readable
- Responsive layout

---

### Step 2.7: Get Involved Section (3-4 hours)
**Objective:** Three segmented CTAs for different audience types

**Tasks:**
1. Create `components/sections/GetInvolvedSection.tsx`

2. Implement three CTA cards:
   - Card 1: I'm a Driver or Fleet Owner
   - Card 2: I'm a Business or Homeowner
   - Card 3: I'm a Partner or Investor

3. Card structure:
   - Headline (audience type)
   - Description text
   - CTA button with different action

4. CTA actions:
   - "Contact Us" → mailto or contact form
   - "Sign Up for Updates" → email form modal
   - "Get in Touch" → mailto or contact form

5. Card hover effects:
   - Subtle shadow/lift
   - Button color change

**Deliverables:**
- `components/sections/GetInvolvedSection.tsx`
- `components/CTACard.tsx`

**Testing:**
- All CTA buttons work
- Cards are visually distinct
- Responsive on mobile

---

### Step 2.8: Footer (1-2 hours)
**Objective:** Simple footer with contact info and social links

**Tasks:**
1. Create `components/Footer.tsx`

2. Layout:
   - Company name + tagline
   - Email: ryan@clearwaterafrica.com
   - Location: "Launching in Accra, Ghana - 2026"
   - Social media icons (LinkedIn, Twitter/X)
   - Copyright

3. Styling:
   - Dark background
   - Light text
   - Social icons with hover effects

4. Links:
   - Email: mailto link
   - Social: placeholder links (update later)

**Deliverables:**
- `components/Footer.tsx`

**Testing:**
- All links work
- Icons display correctly
- Responsive layout

---

## Phase 3: Page Assembly & Scroll Experience

### Step 3.1: Main Page Assembly (2-3 hours)
**Objective:** Assemble all sections into single-page layout

**Tasks:**
1. Update `app/page.tsx`:
   - Import all section components
   - Stack sections vertically
   - Ensure proper spacing between sections

2. Implement smooth scroll:
   - Add smooth scroll CSS
   - Optional: Add scroll-to-section navigation

3. Section ordering:
   ```
   1. HeroSection
   2. ProblemSection
   3. SolutionSection
   4. HowItWorksSection
   5. LaunchTimelineSection
   6. AboutSection
   7. GetInvolvedSection
   8. Footer
   ```

4. Add section IDs for anchor links (optional):
   - `#problem`
   - `#solution`
   - etc.

**Deliverables:**
- Updated `app/page.tsx`
- Full single-page layout

**Testing:**
- All sections render in order
- Scroll experience is smooth
- No layout shifts or jumping

---

### Step 3.2: Scroll Animations (2-3 hours)
**Objective:** Add subtle scroll-triggered animations

**Tasks:**
1. Create scroll animation hook:
   - `hooks/useScrollAnimation.ts`
   - Use Intersection Observer API
   - Return visibility state

2. Apply animations to sections:
   - Fade in from bottom
   - Stagger animations for card grids
   - Use CSS transitions or Framer Motion

3. Performance optimization:
   - Lazy load images
   - Intersection observer thresholds
   - Reduce animations on mobile for performance

**Deliverables:**
- `hooks/useScrollAnimation.ts`
- Animated section components

**Testing:**
- Animations trigger at right scroll position
- No performance issues
- Works on mobile

---

## Phase 4: Responsive Design & Polish

### Step 4.1: Mobile Optimization (3-4 hours)
**Objective:** Ensure flawless mobile experience

**Tasks:**
1. Test all sections on mobile viewports:
   - 320px (small phone)
   - 375px (iPhone SE)
   - 390px (iPhone 12/13)
   - 428px (iPhone 14 Pro Max)

2. Optimize hero section:
   - Replace video with static image
   - Adjust text sizes
   - Ensure CTA button is easily tappable

3. Stack all grid layouts vertically:
   - Problem cards
   - Solution cards
   - CTA cards

4. Adjust typography:
   - Smaller headlines on mobile
   - Adjust line heights
   - Ensure readability

5. Touch targets:
   - Ensure all buttons are at least 44x44px
   - Add proper spacing between interactive elements

**Deliverables:**
- Mobile-responsive CSS
- Image/video optimization

**Testing:**
- Test on real devices if possible
- Use Chrome DevTools device emulation
- Test touch interactions

---

### Step 4.2: Accessibility (2-3 hours)
**Objective:** Ensure WCAG 2.1 AA compliance

**Tasks:**
1. Semantic HTML:
   - Use proper heading hierarchy (h1, h2, h3)
   - Add ARIA labels where needed
   - Ensure form labels are properly associated

2. Keyboard navigation:
   - Test tab order
   - Ensure focus states are visible
   - Test form submission with keyboard

3. Color contrast:
   - Test all text/background combinations
   - Ensure 4.5:1 ratio for body text
   - Ensure 3:1 ratio for large text

4. Alt text:
   - Add descriptive alt text to all images
   - Add title to video element

5. Screen reader testing:
   - Test with VoiceOver (Mac) or NVDA (Windows)

**Deliverables:**
- Accessibility improvements
- ARIA labels
- Alt text

**Testing:**
- Use Lighthouse accessibility audit
- Manual screen reader testing
- Keyboard navigation testing

---

### Step 4.3: Performance Optimization (2-3 hours)
**Objective:** Achieve excellent performance scores

**Tasks:**
1. Image optimization:
   - Use Next.js Image component everywhere
   - Compress all images (use Sharp/ImageOptim)
   - Implement lazy loading

2. Video optimization:
   - Compress hero video (use HandBrake or similar)
   - Create mobile-optimized version
   - Add loading="lazy"

3. Code splitting:
   - Lazy load non-critical components
   - Use dynamic imports for heavy components

4. Font optimization:
   - Use font-display: swap
   - Preload critical fonts

5. Bundle analysis:
   - Run `npm run build` and check bundle sizes
   - Remove unused dependencies

**Deliverables:**
- Optimized assets
- Performance improvements

**Testing:**
- Run Lighthouse performance audit (target: 90+)
- Test on slow 3G connection
- Check bundle size

---

## Phase 5: Backend Integration

### Step 5.1: Supabase Setup (2-3 hours)
**Objective:** Configure Supabase for email capture

**Tasks:**
1. Set up Supabase project:
   - Create new project at supabase.com
   - Note project URL and anon key

2. Create database table:
   ```sql
   CREATE TABLE email_signups (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     email TEXT UNIQUE NOT NULL,
     source TEXT, -- 'hero' or 'timeline'
     created_at TIMESTAMP DEFAULT NOW(),
     metadata JSONB -- for PostHog ID, user agent, etc.
   );
   ```

3. Set up Row Level Security (RLS):
   - Allow anonymous inserts
   - No reads/updates/deletes from client

4. Create environment variables:
   - `.env.local` file
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Deliverables:**
- Supabase project configured
- Database table created
- Environment variables set

**Testing:**
- Test database connection
- Verify RLS policies work

---

### Step 5.2: Email Capture Integration (2-3 hours)
**Objective:** Connect forms to Supabase

**Tasks:**
1. Create Supabase client:
   - `lib/supabase/client.ts`
   - Initialize with environment variables

2. Create email submission function:
   - `lib/supabase/submitEmail.ts`
   - Handle success/error states
   - Return proper TypeScript types

3. Update `EmailCaptureForm` component:
   - Connect to submission function
   - Show loading state
   - Show success message
   - Handle errors gracefully

4. Add PostHog tracking:
   - Initialize PostHog in `app/layout.tsx`
   - Track "Email Submitted" event
   - Include source (hero vs timeline)

**Deliverables:**
- `lib/supabase/client.ts`
- `lib/supabase/submitEmail.ts`
- Updated email form with integration
- PostHog tracking

**Testing:**
- Submit test emails
- Verify emails appear in Supabase
- Check PostHog events
- Test error scenarios

---

### Step 5.3: Email Notification Setup (1-2 hours)
**Objective:** Send notification when someone signs up

**Tasks:**
1. Option A: Supabase Edge Function
   - Create edge function to send email via SendGrid/Postmark
   - Trigger on new row in email_signups table

2. Option B: Webhook to Zapier/Make
   - Set up webhook in Supabase
   - Connect to email service

3. Option C: Simple mailto
   - Not automated, but works for MVP

4. Send welcome email (optional):
   - Thank subscriber
   - Set expectations for updates

**Deliverables:**
- Email notification system
- Optional welcome email

**Testing:**
- Submit test email
- Verify notification arrives
- Check email formatting

---

## Phase 6: Analytics & Monitoring

### Step 6.1: PostHog Analytics (1-2 hours)
**Objective:** Track user behavior and conversions

**Tasks:**
1. Initialize PostHog:
   - Add to `app/layout.tsx`
   - Use environment variable for API key
   - Set up auto-capture

2. Set up custom events:
   - Page load
   - Scroll depth (25%, 50%, 75%, 100%)
   - Section visibility
   - Email form interactions (focus, error, submit)
   - CTA button clicks

3. Create conversion funnels:
   - Landing → Email Focus → Email Submit
   - Landing → Scroll to CTA → Click CTA

**Deliverables:**
- PostHog integration
- Custom event tracking
- Funnel setup

**Testing:**
- Verify events fire correctly
- Check PostHog dashboard

---

### Step 6.2: SEO Setup (2-3 hours)
**Objective:** Optimize for search engines

**Tasks:**
1. Update metadata in `app/layout.tsx`:
   - Title: "Clearwater Africa | Making Water Delivery Work for Everyone"
   - Description: "Clearwater brings transparency and reliability to Ghana's water delivery network. Launching in Accra 2026."
   - Keywords
   - Open Graph tags
   - Twitter Card tags

2. Add structured data:
   - JSON-LD schema for Organization
   - Logo, contact info, social profiles

3. Create `robots.txt`:
   - Allow all crawlers

4. Create `sitemap.xml`:
   - Single page sitemap

5. Add canonical URL

**Deliverables:**
- Updated metadata
- `public/robots.txt`
- `public/sitemap.xml`
- Structured data

**Testing:**
- Use Google Rich Results Test
- Verify Open Graph with Facebook debugger
- Test Twitter Card with Twitter validator

---

## Phase 7: Testing & QA

### Step 7.1: Cross-Browser Testing (2-3 hours)
**Objective:** Ensure compatibility across browsers

**Tasks:**
1. Test on major browsers:
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

2. Test on mobile browsers:
   - Safari iOS
   - Chrome Android

3. Fix browser-specific issues:
   - CSS prefixes
   - JavaScript polyfills if needed

**Deliverables:**
- Cross-browser compatibility

**Testing:**
- Manual testing on each browser
- Use BrowserStack if available

---

### Step 7.2: User Testing (2-3 hours)
**Objective:** Get feedback from real users

**Tasks:**
1. Recruit 3-5 testers:
   - Ideally people unfamiliar with the project
   - Mix of desktop and mobile users

2. Create testing script:
   - Ask them to visit the site
   - Observe their behavior
   - Ask questions about clarity, trust, value prop

3. Collect feedback:
   - What's confusing?
   - Would they sign up?
   - What questions do they have?

4. Iterate based on feedback:
   - Fix critical issues
   - Note nice-to-haves for future

**Deliverables:**
- User testing insights
- Improvements based on feedback

---

### Step 7.3: Final QA Checklist (1-2 hours)
**Objective:** Comprehensive final check

**Tasks:**
1. Functional testing:
   - [ ] Hero video plays/loops
   - [ ] All images load
   - [ ] Email forms submit successfully
   - [ ] Success/error messages display
   - [ ] All links work
   - [ ] Social icons link correctly (or disabled if not ready)

2. Visual testing:
   - [ ] All sections look correct on desktop
   - [ ] All sections look correct on mobile
   - [ ] No layout shifts
   - [ ] Animations work smoothly
   - [ ] Typography is consistent

3. Performance:
   - [ ] Lighthouse score 90+ (performance)
   - [ ] Images optimized
   - [ ] Video compressed
   - [ ] Page loads quickly

4. Accessibility:
   - [ ] Lighthouse score 90+ (accessibility)
   - [ ] Keyboard navigation works
   - [ ] Screen reader compatible
   - [ ] Color contrast passes

5. SEO:
   - [ ] Metadata complete
   - [ ] Open Graph tags work
   - [ ] Sitemap exists
   - [ ] robots.txt configured

6. Analytics:
   - [ ] PostHog tracking works
   - [ ] Email submissions tracked
   - [ ] Scroll tracking works

**Deliverables:**
- Completed QA checklist
- List of any remaining issues

---

## Phase 8: Deployment

### Step 8.1: Pre-Deployment Setup (1-2 hours)
**Objective:** Prepare for production deployment

**Tasks:**
1. Environment variables:
   - Set up production environment variables in hosting platform
   - Verify all keys are correct

2. Domain setup:
   - Purchase domain (if not done)
   - Configure DNS
   - Set up SSL certificate

3. Create deployment checklist:
   - [ ] All environment variables set
   - [ ] Domain configured
   - [ ] SSL certificate active
   - [ ] Supabase production project ready
   - [ ] PostHog production project ready

**Deliverables:**
- Domain configured
- Environment variables set
- Deployment checklist

---

### Step 8.2: Deploy to Vercel (1 hour)
**Objective:** Deploy site to production

**Tasks:**
1. Connect GitHub repo to Vercel:
   - Import project
   - Configure build settings
   - Add environment variables

2. Set custom domain:
   - Add domain to Vercel
   - Update DNS records
   - Verify SSL

3. Configure deployment settings:
   - Enable automatic deployments from main branch
   - Set up preview deployments for PRs

4. Deploy:
   - Trigger deployment
   - Monitor build logs
   - Verify deployment success

**Deliverables:**
- Live production site
- Custom domain configured

**Testing:**
- Visit production URL
- Test all functionality
- Verify analytics tracking

---

### Step 8.3: Post-Launch Monitoring (Ongoing)
**Objective:** Monitor site performance and fix issues

**Tasks:**
1. Set up monitoring:
   - Vercel Analytics
   - PostHog dashboards
   - Supabase database monitoring
   - Error tracking (Sentry optional)

2. Monitor key metrics:
   - Page load times
   - Email signups
   - Conversion rates
   - User behavior

3. Create weekly review process:
   - Check analytics
   - Review email signups
   - Monitor errors
   - Plan improvements

**Deliverables:**
- Monitoring dashboards
- Weekly review process

---

## Estimated Timeline

| Phase | Tasks | Time Estimate |
|-------|-------|---------------|
| **Phase 1: Foundation** | Design system + components | 5-7 hours |
| **Phase 2: Sections** | All 8 sections | 20-26 hours |
| **Phase 3: Assembly** | Page assembly + animations | 4-6 hours |
| **Phase 4: Polish** | Responsive + accessibility + performance | 7-10 hours |
| **Phase 5: Backend** | Supabase + email integration | 5-8 hours |
| **Phase 6: Analytics** | PostHog + SEO | 3-5 hours |
| **Phase 7: Testing** | Cross-browser + user testing + QA | 5-8 hours |
| **Phase 8: Deployment** | Deploy + monitoring | 2-3 hours |
| **TOTAL** | | **51-73 hours** |

**Realistic timeline:**
- **2-3 weeks** working full-time (40 hours/week)
- **4-6 weeks** working part-time (15-20 hours/week)

---

## Success Criteria

### Launch Criteria (Must Have)
- [ ] All 8 sections implemented and functional
- [ ] Email capture working and storing in Supabase
- [ ] Mobile responsive (tested on iOS and Android)
- [ ] Lighthouse performance score > 85
- [ ] Lighthouse accessibility score > 90
- [ ] Video background works on desktop
- [ ] All copy matches provided spec
- [ ] PostHog analytics tracking
- [ ] Domain configured with SSL
- [ ] No critical bugs

### Nice to Have (Post-Launch)
- [ ] Animations polish
- [ ] Additional email templates
- [ ] A/B testing setup
- [ ] Blog section
- [ ] Case studies/testimonials
- [ ] Multi-language support

---

## Risk Mitigation

### Technical Risks
1. **Video file size too large**
   - Mitigation: Compress aggressively, use CDN, implement mobile fallback

2. **Email submissions fail**
   - Mitigation: Add error handling, fallback mailto link, log errors

3. **Performance issues on mobile**
   - Mitigation: Aggressive lazy loading, image optimization, reduce animations

### Content Risks
1. **No video content yet**
   - Mitigation: Use placeholder video or stock footage, replace later

2. **No founder photo**
   - Mitigation: Make photo optional, launch without it if needed

---

## Next Steps After Launch

1. **Week 1:** Monitor analytics, fix any bugs
2. **Week 2:** Start A/B testing email capture CTAs
3. **Month 1:** Add blog section for content marketing
4. **Month 2:** Create case studies/testimonials section
5. **Month 3:** Implement multi-language support (Twi, English)

---

## Notes
- This plan assumes solo development. Adjust timelines if working with a team.
- Use feature branches and pull requests for all changes.
- Document any deviations from this plan.
- Keep user feedback central to all decisions.
