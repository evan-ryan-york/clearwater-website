# Design System Reference

## Brand Identity

### Mission Statement
Making water delivery work for everyone in Africa.

### Brand Values
- **Transparency:** Open, honest, no hidden costs
- **Reliability:** Dependable service, consistent quality
- **Inclusivity:** Serving all stakeholders equally
- **Innovation:** Modern solutions for real problems
- **Sustainability:** Building for the long term

### Voice & Tone
- **Professional but approachable:** Not corporate, not casual
- **Action-oriented:** Focus on solutions, not just problems
- **Hopeful but realistic:** Optimistic without being naive
- **Inclusive language:** "We" not "us vs. them"
- **Clear and direct:** No jargon, no tech-speak

---

## Color Palette

### Primary Colors

#### Deep Blue
- **Hex:** `#0A4C6E`
- **RGB:** `10, 76, 110`
- **Use:** Primary brand color, headers, trustworthy elements
- **Meaning:** Water, trust, stability, professionalism
- **Tailwind:** `blue-900` (custom)

```css
/* Define in globals.css */
@theme {
  --color-primary: #0A4C6E;
  --color-primary-dark: #083A52;
  --color-primary-light: #0E5F87;
}
```

#### Bright Cyan
- **Hex:** `#00D4FF`
- **RGB:** `0, 212, 255`
- **Use:** Accents, hover states, digital elements
- **Meaning:** Clarity, freshness, innovation, digital
- **Tailwind:** `cyan-400` (custom)

```css
@theme {
  --color-secondary: #00D4FF;
  --color-secondary-dark: #00A8CC;
  --color-secondary-light: #33DDFF;
}
```

### Accent Colors

#### Warm Orange
- **Hex:** `#FF6B35`
- **RGB:** `255, 107, 53`
- **Use:** CTAs, buttons, important actions
- **Meaning:** Energy, action, warmth, urgency
- **Tailwind:** `orange-500` (custom)

```css
@theme {
  --color-accent: #FF6B35;
  --color-accent-dark: #E55A2B;
  --color-accent-light: #FF8C5F;
}
```

### Neutral Colors

#### Off-White
- **Hex:** `#F8F9FA`
- **RGB:** `248, 249, 250`
- **Use:** Backgrounds, light sections
- **Tailwind:** `gray-50`

#### Light Gray
- **Hex:** `#E9ECEF`
- **RGB:** `233, 236, 239`
- **Use:** Borders, dividers, disabled states
- **Tailwind:** `gray-200`

#### Medium Gray
- **Hex:** `#6C757D`
- **RGB:** `108, 117, 125`
- **Use:** Secondary text, captions
- **Tailwind:** `gray-500`

#### Charcoal
- **Hex:** `#2D3436`
- **RGB:** `45, 52, 54`
- **Use:** Body text, dark elements
- **Tailwind:** `gray-800`

### Semantic Colors

#### Success Green
- **Hex:** `#28A745`
- **RGB:** `40, 167, 69`
- **Use:** Success messages, positive feedback

#### Error Red
- **Hex:** `#DC3545`
- **RGB:** `220, 53, 69`
- **Use:** Error messages, validation errors

#### Warning Yellow
- **Hex:** `#FFC107`
- **RGB:** `255, 193, 7`
- **Use:** Warning messages, cautions

### Color Usage Guidelines

**Do's:**
- Use Deep Blue for trust-building elements (headers, navigation)
- Use Warm Orange sparingly for CTAs (maintain visual hierarchy)
- Use Bright Cyan for hover states and digital elements
- Maintain sufficient contrast (minimum 4.5:1 for body text)

**Don'ts:**
- Don't use orange for large backgrounds (too intense)
- Don't combine cyan and orange directly (jarring contrast)
- Don't use multiple accent colors in the same section
- Don't sacrifice readability for aesthetics

---

## Typography

### Font Families

#### Poppins (Headings)
- **Weights:** 700 (Bold)
- **Use:** H1, H2, H3, buttons, emphasis
- **Characteristics:** Modern, geometric, friendly
- **Source:** Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
```

#### Inter (Body Text)
- **Weights:** 400 (Regular), 600 (Semi-Bold)
- **Use:** Body text, captions, UI elements
- **Characteristics:** Highly readable, neutral, professional
- **Source:** Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
```

### Type Scale

#### Desktop

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| H1 (Hero) | Poppins | 60px | 700 | 1.1 | -0.02em |
| H2 (Section) | Poppins | 48px | 700 | 1.2 | -0.01em |
| H3 (Subsection) | Poppins | 32px | 700 | 1.3 | 0 |
| H4 (Card Title) | Poppins | 24px | 700 | 1.4 | 0 |
| Body Large | Inter | 20px | 400 | 1.6 | 0 |
| Body | Inter | 18px | 400 | 1.7 | 0 |
| Body Small | Inter | 16px | 400 | 1.6 | 0 |
| Caption | Inter | 14px | 400 | 1.5 | 0 |
| Button | Poppins | 18px | 600 | 1.2 | 0.02em |

#### Mobile

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 (Hero) | Poppins | 36px | 700 | 1.2 |
| H2 (Section) | Poppins | 32px | 700 | 1.3 |
| H3 (Subsection) | Poppins | 24px | 700 | 1.4 |
| H4 (Card Title) | Poppins | 20px | 700 | 1.4 |
| Body Large | Inter | 18px | 400 | 1.6 |
| Body | Inter | 16px | 400 | 1.7 |
| Body Small | Inter | 14px | 400 | 1.6 |
| Caption | Inter | 12px | 400 | 1.5 |
| Button | Poppins | 16px | 600 | 1.2 |

### Tailwind Configuration

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subsection': ['32px', { lineHeight: '1.3' }],
        'card-title': ['24px', { lineHeight: '1.4' }],
      }
    }
  }
}
```

### Typography Usage Guidelines

**Headlines:**
- Use Poppins Bold for all headlines
- Keep headlines short and punchy (5-10 words max)
- Use sentence case, not ALL CAPS
- Maintain visual hierarchy (H1 > H2 > H3)

**Body Text:**
- Use Inter Regular for readability
- Keep line length between 50-75 characters
- Use adequate line height (1.6-1.7) for readability
- Break up long paragraphs (3-4 sentences max)

**Buttons:**
- Use Poppins Semi-Bold
- Use action verbs ("Get Started", not "Click Here")
- Keep button text short (1-3 words)

---

## Spacing System

### Base Unit: 4px

All spacing should be multiples of 4px for consistency.

### Spacing Scale (Tailwind)

| Token | Value | Use Case |
|-------|-------|----------|
| `space-1` | 4px | Tight spacing, icon gaps |
| `space-2` | 8px | Input padding, small gaps |
| `space-3` | 12px | Button padding vertical |
| `space-4` | 16px | Default spacing, card padding |
| `space-5` | 20px | Medium spacing |
| `space-6` | 24px | Button padding horizontal |
| `space-8` | 32px | Large spacing, section gaps |
| `space-10` | 40px | XL spacing |
| `space-12` | 48px | Section padding (mobile) |
| `space-16` | 64px | Section padding (tablet) |
| `space-20` | 80px | Section padding (desktop) |
| `space-24` | 96px | XXL spacing |
| `space-32` | 128px | Section padding (large desktop) |

### Layout Spacing

#### Sections
- **Desktop:** `py-32` (128px top/bottom)
- **Tablet:** `py-24` (96px top/bottom)
- **Mobile:** `py-16` (64px top/bottom)

#### Container
- **Max Width:** 1280px (Tailwind `max-w-6xl`)
- **Padding:** `px-4` (16px mobile), `px-6` (24px tablet), `px-8` (32px desktop)

#### Cards
- **Padding:** `p-6` (24px) on mobile, `p-8` (32px) on desktop
- **Gap between cards:** `gap-6` (24px) on mobile, `gap-8` (32px) on desktop

---

## Grid System

### Breakpoints

| Breakpoint | Min Width | Tailwind | Container Width |
|------------|-----------|----------|-----------------|
| Mobile | 0px | (default) | 100% |
| Small (sm) | 640px | `sm:` | 640px |
| Medium (md) | 768px | `md:` | 768px |
| Large (lg) | 1024px | `lg:` | 1024px |
| XL (xl) | 1280px | `xl:` | 1280px |
| 2XL (2xl) | 1536px | `2xl:` | 1536px |

### Grid Patterns

#### Three-Column Layout (Problem/Solution Sections)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* Cards */}
</div>
```

#### Two-Column Layout (About Section with Photo)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
  {/* Content */}
</div>
```

#### Four-Column Timeline
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
  {/* Steps */}
</div>
```

---

## Components

### Buttons

#### Primary Button (CTA)
```tsx
<button className="
  bg-orange-500 hover:bg-orange-600
  text-white font-semibold
  px-6 py-3 md:px-8 md:py-4
  rounded-md
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
">
  Get Early Access
</button>
```

#### Secondary Button
```tsx
<button className="
  bg-blue-600 hover:bg-blue-700
  text-white font-semibold
  px-6 py-3
  rounded-md
  transition-colors duration-200
">
  Learn More
</button>
```

#### Ghost Button
```tsx
<button className="
  bg-transparent hover:bg-gray-100
  text-blue-900 font-semibold
  px-6 py-3
  rounded-md
  border-2 border-blue-900
  transition-colors duration-200
">
  Contact Us
</button>
```

### Cards

#### Base Card
```tsx
<div className="
  bg-white
  rounded-lg
  p-6 md:p-8
  shadow-sm hover:shadow-md
  transition-shadow duration-200
  border border-gray-200
">
  {/* Content */}
</div>
```

#### Icon Card (Problem/Solution)
```tsx
<div className="
  bg-white
  rounded-lg
  p-6 md:p-8
  text-center
  shadow-sm hover:shadow-lg
  transition-all duration-200
  border border-gray-200
  hover:translate-y-[-4px]
">
  <div className="
    w-16 h-16 mx-auto mb-4
    bg-cyan-100 rounded-full
    flex items-center justify-center
  ">
    {/* Icon */}
  </div>
  <h3 className="text-xl font-bold mb-2">Title</h3>
  <p className="text-gray-600">Description</p>
</div>
```

### Forms

#### Email Input
```tsx
<input
  type="email"
  placeholder="Enter your email"
  className="
    w-full
    h-12 md:h-14
    px-4 md:px-6
    text-base md:text-lg
    rounded-md
    border-2 border-gray-300
    focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500
    transition-colors duration-200
  "
/>
```

#### Form Layout (Hero/Timeline)
```tsx
<form className="
  flex flex-col sm:flex-row
  gap-3
  max-w-md mx-auto
">
  <input type="email" className="flex-1" />
  <button type="submit" className="sm:w-auto">Submit</button>
</form>
```

### Sections

#### Section Container
```tsx
<section className="
  py-16 md:py-24 lg:py-32
  bg-white
">
  <div className="
    container mx-auto
    px-4 md:px-6 lg:px-8
    max-w-6xl
  ">
    {/* Content */}
  </div>
</section>
```

#### Section Header
```tsx
<div className="text-center mb-12 md:mb-16">
  <h2 className="
    text-3xl md:text-4xl lg:text-5xl
    font-bold font-heading
    text-blue-900
    mb-4
  ">
    Section Title
  </h2>
  <p className="
    text-lg md:text-xl
    text-gray-600
    max-w-3xl mx-auto
  ">
    Optional description text
  </p>
</div>
```

---

## Icons

### Library: Lucide React

### Icon Sizes
- **Small:** 16px (w-4 h-4)
- **Medium:** 24px (w-6 h-6)
- **Large:** 32px (w-8 h-8)
- **XL:** 48px (w-12 h-12)

### Icon Recommendations

| Section | Icon | Lucide Component |
|---------|------|------------------|
| Driver Problem | Truck + Question | `<TruckIcon />` + custom styling |
| Customer Problem | Clock | `<Clock />` |
| System Problem | Droplets | `<Droplets />` or `<AlertCircle />` |
| Driver Solution | Smartphone + Route | `<Smartphone />` or `<Navigation />` |
| Customer Solution | Calendar | `<Calendar />` or `<CalendarCheck />` |
| Depot Solution | Dashboard | `<LayoutDashboard />` or `<BarChart3 />` |
| Timeline Step 1 | Handshake | `<Handshake />` |
| Timeline Step 2 | Truck + Phone | `<Truck />` or `<Smartphone />` |
| Timeline Step 3 | House | `<Home />` or `<Building />` |
| Timeline Step 4 | Checkmark | `<CheckCircle />` or `<CheckCheck />` |
| Email | Mail | `<Mail />` |
| Location | Map Pin | `<MapPin />` |
| Social - LinkedIn | LinkedIn | Use custom SVG or `<Linkedin />` |
| Social - Twitter | Twitter/X | Use custom SVG or `<Twitter />` |

### Icon Usage
```tsx
import { Truck, Clock, CheckCircle } from 'lucide-react';

// Standard icon
<Clock className="w-6 h-6 text-blue-900" />

// Icon in colored circle
<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
  <Truck className="w-8 h-8 text-cyan-600" />
</div>
```

---

## Animations

### Timing Functions
- **Ease:** `transition-all duration-200 ease-in-out` (default)
- **Smooth:** `transition-all duration-300 ease-out` (modals, large elements)
- **Snappy:** `transition-all duration-150 ease-in-out` (hover states)

### Hover Effects

#### Card Lift
```tsx
<div className="
  transition-all duration-200
  hover:shadow-lg hover:-translate-y-1
">
```

#### Button Scale
```tsx
<button className="
  transition-transform duration-150
  hover:scale-105 active:scale-95
">
```

### Scroll Animations

#### Fade In from Bottom
```tsx
<div className="
  opacity-0 translate-y-8
  transition-all duration-500
  [&.visible]:opacity-100 [&.visible]:translate-y-0
">
```

#### Stagger Animation (for card grids)
```tsx
{items.map((item, index) => (
  <div
    key={item.id}
    className="opacity-0 translate-y-8 transition-all duration-500"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {item.content}
  </div>
))}
```

---

## Imagery Guidelines

### Hero Video
- **Aspect Ratio:** 16:9
- **Resolution:** 1920x1080 minimum
- **File Size:** < 5MB (desktop), < 2MB (mobile)
- **Format:** MP4 (H.264 codec)
- **Duration:** 15-30 seconds (looping)
- **Content:** B-roll of water delivery operations in Ghana
- **Mood:** Authentic, hopeful, operational (not poverty porn)

### Photos
- **Format:** WebP (with JPEG fallback)
- **Resolution:** Max 1920px width
- **Aspect Ratios:**
  - Hero images: 16:9
  - Profile photos: 1:1 (square)
  - Card images: 4:3
- **Compression:** Use Next.js Image optimization
- **Alt Text:** Always include descriptive alt text

### Open Graph Image
- **Size:** 1200x630px
- **Format:** JPEG or PNG
- **Content:** Clearwater logo + tagline
- **File Size:** < 500KB

---

## Accessibility

### Color Contrast
All text must meet WCAG AA standards:
- **Normal text (< 18px):** Minimum 4.5:1 contrast ratio
- **Large text (≥ 18px):** Minimum 3:1 contrast ratio
- **UI elements:** Minimum 3:1 contrast ratio

### Tested Combinations
✅ Deep Blue (#0A4C6E) on White (#FFFFFF) = 8.2:1
✅ Charcoal (#2D3436) on White (#FFFFFF) = 12.6:1
✅ White (#FFFFFF) on Deep Blue (#0A4C6E) = 8.2:1
✅ White (#FFFFFF) on Orange (#FF6B35) = 3.2:1 (large text only)
❌ Cyan (#00D4FF) on White (#FFFFFF) = 2.1:1 (fails - don't use for text)

### Focus States
All interactive elements must have visible focus indicators:
```tsx
focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
```

### Screen Reader Support
- Use semantic HTML (h1, h2, nav, main, footer)
- Include ARIA labels for icon-only buttons
- Ensure form inputs have associated labels
- Use alt text for all images

---

## Responsive Design Principles

### Mobile-First Approach
Start with mobile design, then enhance for larger screens:
```tsx
className="
  text-base           {/* Mobile */}
  md:text-lg          {/* Tablet */}
  lg:text-xl          {/* Desktop */}
"
```

### Touch Targets
All interactive elements must be at least **44x44px** on mobile:
```tsx
<button className="min-h-[44px] min-w-[44px] p-3">
```

### Content Stacking
Stack grid layouts vertically on mobile:
```tsx
<div className="
  grid grid-cols-1           {/* Mobile: Stack */}
  md:grid-cols-2             {/* Tablet: 2 columns */}
  lg:grid-cols-3             {/* Desktop: 3 columns */}
  gap-6
">
```

---

## Design Tokens Implementation

Create `lib/design-tokens.ts`:

```typescript
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
  }
};

export const spacing = {
  section: {
    mobile: '4rem',    // 64px
    tablet: '6rem',    // 96px
    desktop: '8rem',   // 128px
  },
  card: {
    mobile: '1.5rem',  // 24px
    desktop: '2rem',   // 32px
  }
};

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
    }
  }
};
```

---

## Brand Assets Checklist

- [ ] Logo (SVG)
- [ ] Logo variations (light/dark backgrounds)
- [ ] Favicon (multiple sizes)
- [ ] Hero video (desktop + mobile fallback)
- [ ] Founder photo (optional)
- [ ] Open Graph image
- [ ] Twitter Card image
- [ ] Icon set (Lucide React)

---

## Design Review Checklist

Before launching, verify:

### Visual Consistency
- [ ] All colors match the defined palette
- [ ] Typography is consistent throughout
- [ ] Spacing follows the 4px grid system
- [ ] Icons are consistent in size and style

### Responsive Design
- [ ] Test on mobile (320px, 375px, 428px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] No horizontal scrolling on any screen size
- [ ] Touch targets are at least 44x44px

### Accessibility
- [ ] Color contrast ratios pass WCAG AA
- [ ] Heading hierarchy is logical
- [ ] Focus states are visible
- [ ] Alt text is present on all images
- [ ] Forms have proper labels

### Performance
- [ ] Images are optimized
- [ ] Video is compressed
- [ ] Fonts load efficiently
- [ ] No layout shifts (CLS < 0.1)

---

## References

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Lucide React Icons](https://lucide.dev)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design Color System](https://m2.material.io/design/color/the-color-system.html)
