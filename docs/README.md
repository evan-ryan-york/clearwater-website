# Clearwater Africa Website Documentation

Welcome to the comprehensive documentation for the Clearwater Africa website project. This documentation will guide you through building a professional, single-page marketing website from start to finish.

---

## Quick Start

1. **Read this README first** to understand the project structure
2. **Start with [BUILD_PLAN.md](BUILD_PLAN.md)** for step-by-step implementation
3. **Reference [TECHNICAL_SPECS.md](TECHNICAL_SPECS.md)** for technical details
4. **Consult [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)** for visual design
5. **Use [COMPONENT_STRUCTURE.md](COMPONENT_STRUCTURE.md)** during development

---

## Documentation Overview

### [BUILD_PLAN.md](BUILD_PLAN.md)
**Your primary guide for building the website**

This document contains:
- **8 Phases** of development from foundation to deployment
- **Step-by-step instructions** for each task
- **Time estimates** for each phase (51-73 hours total)
- **Testing criteria** for each section
- **Success criteria** for launch
- **Risk mitigation** strategies

**Start here if you're ready to build.**

### [TECHNICAL_SPECS.md](TECHNICAL_SPECS.md)
**Technical reference and implementation details**

This document contains:
- Complete **technology stack** overview
- **Project structure** and file organization
- **Database schema** for Supabase
- **API route** specifications
- **Environment variables** setup
- **Component API** specifications
- **Validation schemas** (Zod)
- **Performance targets** and optimization strategies
- **Deployment configuration**

**Reference this during implementation.**

### [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)
**Visual design reference and brand guidelines**

This document contains:
- **Brand identity** and values
- **Color palette** (hex codes, usage guidelines)
- **Typography** (fonts, sizes, line heights)
- **Spacing system** (4px grid)
- **Grid system** and breakpoints
- **Component styles** (buttons, cards, forms)
- **Icon library** recommendations
- **Animation patterns**
- **Accessibility** standards (WCAG 2.1 AA)

**Reference this for all design decisions.**

### [COMPONENT_STRUCTURE.md](COMPONENT_STRUCTURE.md)
**Component architecture and code examples**

This document contains:
- **Component hierarchy** diagram
- **Detailed specifications** for each component
- **Props interfaces** (TypeScript)
- **Complete code examples** for all components
- **Hooks** (useScrollAnimation, useMediaQuery)
- **Data flow** diagrams
- **Performance optimization** strategies
- **Testing strategies**

**Reference this while coding components.**

---

## Project Context

### What Are We Building?

A **single-page marketing website** for Clearwater Africa, a platform that brings transparency and reliability to Ghana's water delivery network.

### Target Audience

1. **Water tanker drivers** - Need efficient routing and depot information
2. **Customers** - Homes and businesses needing reliable water delivery
3. **Depots & Ghana Water Limited** - Need visibility into operations
4. **Potential investors/partners** - Need to understand the mission

### Primary Goals

1. **Email capture** - Build a list for the 2026 Accra launch
2. **Credibility** - Establish founder and mission legitimacy
3. **Clarity** - Explain the platform to all stakeholders
4. **Engagement** - Segment and capture different audience types

---

## Website Structure

### 8 Sections (Single Page)

1. **Hero Section**
   - Full-screen video background
   - Value proposition
   - Email capture form
   - CTA: "Get Early Access"

2. **Problem Section**
   - Three-column layout
   - Drivers, Customers, System pain points
   - Icons for each problem

3. **Solution Section**
   - Three-column layout
   - Platform benefits for each stakeholder
   - Feature lists and taglines

4. **How It Works Section**
   - Four-step timeline
   - Visual workflow from depot to customer
   - Icons and descriptions

5. **Launch Timeline Section**
   - 2026 Accra launch announcement
   - Methodical approach explanation
   - Second email capture

6. **About Section**
   - Founder credibility
   - Mission statement
   - Long-term commitment

7. **Get Involved Section**
   - Three segmented CTAs
   - Driver/Customer/Partner options
   - Different actions for each

8. **Footer**
   - Contact information
   - Social media links
   - Copyright

---

## Tech Stack Summary

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Backend
- **Supabase** - PostgreSQL database, authentication, storage
- **PostHog** - Analytics and event tracking

### UI Components
- **Lucide React** - Icon library
- **class-variance-authority** - Type-safe component variants

### Deployment
- **Vercel** - Hosting and deployment

---

## Development Timeline

### Estimated Time: 51-73 hours

| Phase | Time Estimate | Description |
|-------|---------------|-------------|
| **Phase 1: Foundation** | 5-7 hours | Design system, base components |
| **Phase 2: Sections** | 20-26 hours | All 8 sections |
| **Phase 3: Assembly** | 4-6 hours | Page assembly, animations |
| **Phase 4: Polish** | 7-10 hours | Responsive, accessibility, performance |
| **Phase 5: Backend** | 5-8 hours | Supabase integration |
| **Phase 6: Analytics** | 3-5 hours | PostHog, SEO |
| **Phase 7: Testing** | 5-8 hours | Cross-browser, user testing, QA |
| **Phase 8: Deployment** | 2-3 hours | Deploy to production |

**Realistic calendar time:**
- Full-time (40 hrs/week): **2-3 weeks**
- Part-time (20 hrs/week): **4-6 weeks**

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager
- Supabase account (free tier)
- PostHog account (free tier)
- Vercel account (free tier)
- Code editor (VS Code recommended)

### Initial Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000
   ```

---

## Development Workflow

### Recommended Order

1. **Week 1: Foundation & Core Sections**
   - Set up design system (colors, typography)
   - Build base UI components (Button, Input, Card)
   - Build Hero, Problem, Solution sections
   - Test on desktop and mobile

2. **Week 2: Remaining Sections & Backend**
   - Build How It Works, Timeline, About sections
   - Build Get Involved section and Footer
   - Set up Supabase database
   - Integrate email capture forms
   - Add PostHog analytics

3. **Week 3: Polish & Deploy**
   - Mobile optimization
   - Accessibility audit
   - Performance optimization
   - Cross-browser testing
   - User testing
   - Deploy to production

### Daily Workflow

1. **Start of day:**
   - Review BUILD_PLAN.md for current phase
   - Identify tasks for the day

2. **During development:**
   - Reference TECHNICAL_SPECS.md for implementation details
   - Reference DESIGN_SYSTEM.md for styling
   - Reference COMPONENT_STRUCTURE.md for code examples

3. **End of day:**
   - Test what you built
   - Document any deviations
   - Plan next day's tasks

---

## Key Decisions Already Made

✅ **Technology:** Next.js 16 with App Router
✅ **Styling:** Tailwind CSS 4
✅ **Forms:** React Hook Form + Zod
✅ **Backend:** Supabase
✅ **Analytics:** PostHog
✅ **Hosting:** Vercel
✅ **Design:** Colors, fonts, spacing defined
✅ **Copy:** All section content provided

**You can start building immediately.**

---

## Common Questions

### Q: Where do I start?
**A:** Start with [BUILD_PLAN.md](BUILD_PLAN.md) - Phase 1, Step 1.1 (Design System Implementation).

### Q: What if I need to change something?
**A:** Document the change and update the relevant documentation file. Keep BUILD_PLAN.md as the source of truth.

### Q: How do I handle responsive design?
**A:** Follow the mobile-first approach in DESIGN_SYSTEM.md. Test on mobile (320px, 375px, 428px), tablet (768px, 1024px), and desktop (1280px+).

### Q: What if I don't have video content yet?
**A:** Use a placeholder video or stock footage. Replace later with real B-roll of Ghana operations.

### Q: How do I test email submissions?
**A:** Set up a Supabase project (free tier), create the database table, and connect via environment variables. See TECHNICAL_SPECS.md for details.

### Q: What about browser support?
**A:** Target last 2 versions of Chrome, Firefox, Safari, and Edge. See TECHNICAL_SPECS.md for full list.

### Q: How do I deploy?
**A:** Follow Phase 8 in BUILD_PLAN.md. Connect GitHub to Vercel, set environment variables, and deploy.

---

## Success Criteria

### Before Launch

- [ ] All 8 sections implemented
- [ ] Email capture working
- [ ] Mobile responsive
- [ ] Lighthouse performance > 85
- [ ] Lighthouse accessibility > 90
- [ ] Cross-browser tested
- [ ] No critical bugs

### After Launch (Week 1)

- [ ] Monitor analytics
- [ ] Fix any critical bugs
- [ ] Collect user feedback

### After Launch (Month 1)

- [ ] 100+ email signups
- [ ] A/B test email CTAs
- [ ] Plan content marketing

---

## Resources

### External Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [PostHog Documentation](https://posthog.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Lucide Icons](https://lucide.dev/)

### Design Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Google Fonts](https://fonts.google.com/)

### Tools

- [Lighthouse (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)
- [PostHog](https://posthog.com/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)

---

## File Structure Reference

```
clearwater-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       └── submit-email/
│
├── components/
│   ├── ui/
│   ├── sections/
│   ├── EmailCaptureForm.tsx
│   ├── ProblemCard.tsx
│   ├── SolutionCard.tsx
│   ├── TimelineStep.tsx
│   ├── CTACard.tsx
│   └── Footer.tsx
│
├── lib/
│   ├── design-tokens.ts
│   ├── utils.ts
│   ├── supabase/
│   ├── validation/
│   └── analytics/
│
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useMediaQuery.ts
│
├── public/
│   ├── videos/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
│
├── docs/                       # You are here!
│   ├── README.md               # This file
│   ├── BUILD_PLAN.md
│   ├── TECHNICAL_SPECS.md
│   ├── DESIGN_SYSTEM.md
│   └── COMPONENT_STRUCTURE.md
│
├── .env.local
├── .env.example
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## Support & Feedback

### Issues During Development

1. **Check documentation first** - Answer is likely in one of the docs
2. **Search Google/Stack Overflow** - Common issues likely solved
3. **Check tool documentation** - Next.js, Tailwind, Supabase docs
4. **Document the issue** - Keep notes for future reference

### Feature Requests

- Document in a separate "Future Features" file
- Don't let scope creep delay launch
- Focus on MVP first

---

## What's Next?

**Ready to start?**

1. ✅ Read this README
2. ➡️ **Go to [BUILD_PLAN.md](BUILD_PLAN.md)**
3. Start with Phase 1, Step 1.1
4. Follow the plan step by step
5. Reference other docs as needed

**You have everything you need to build a professional website.**

Good luck! 🚀

---

## Document Versions

| Document | Last Updated | Version |
|----------|--------------|---------|
| README.md | 2025-11-11 | 1.0 |
| BUILD_PLAN.md | 2025-11-11 | 1.0 |
| TECHNICAL_SPECS.md | 2025-11-11 | 1.0 |
| DESIGN_SYSTEM.md | 2025-11-11 | 1.0 |
| COMPONENT_STRUCTURE.md | 2025-11-11 | 1.0 |

---

**Remember:** This is a living document. Update it as you make decisions and learn during development.
