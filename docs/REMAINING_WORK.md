# Clearwater Africa Website - Remaining Work

**Last Updated:** November 11, 2025
**Current Status:** Phases 1-5 Complete (MVP Ready)

---

## 🎯 Quick Summary

**✅ DONE (Phases 1-5):** Website is fully functional with working email capture
**⏳ REMAINING:** Optional enhancements and deployment

---

## 📋 What's Left to Do

### **CRITICAL - Required for Launch**

#### Phase 8: Deployment (2-3 hours)

**Priority:** HIGH - Required to go live
**Estimated Time:** 2-3 hours

**Tasks:**
1. ✅ **Vercel Account Setup** (15 min)
   - Go to https://vercel.com
   - Sign up with GitHub
   - Connect repository

2. ⏳ **Environment Variables Configuration** (15 min)
   - In Vercel dashboard → Settings → Environment Variables
   - Add from `.env.local`:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://ikpkcqcarapdbdruecig.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
     NEXT_PUBLIC_SITE_URL=https://[your-domain].com
     ```
   - Save and redeploy

3. ⏳ **Domain Configuration** (30 min - 24 hours for DNS)
   - Option A: Use Vercel's free domain (yourproject.vercel.app)
   - Option B: Connect custom domain
     - Add domain in Vercel dashboard
     - Update DNS records at your registrar
     - Point to Vercel's nameservers or add CNAME
     - Wait for DNS propagation (5 min - 24 hours)

4. ⏳ **Deploy to Production** (10 min)
   - Push to `main` branch on GitHub
   - Vercel auto-deploys
   - Or manually trigger deployment in dashboard
   - Wait 2-3 minutes for build

5. ⏳ **Post-Deployment Testing** (30 min)
   - Visit live site
   - Test email submission on all 3 forms
   - Check Supabase for saved emails
   - Test on mobile device
   - Verify video plays
   - Check all links work

6. ⏳ **SSL Certificate** (automatic)
   - Vercel handles this automatically
   - No action needed
   - Certificate provisioned within minutes

**Success Criteria:**
- [ ] Site is live and accessible
- [ ] Email forms work in production
- [ ] HTTPS enabled (SSL working)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] All sections load correctly

**Blockers:** None (ready to deploy now)

---

### **OPTIONAL - Recommended for Better Results**

#### Phase 6: Analytics & SEO (3-5 hours)

**Priority:** MEDIUM - Helps with marketing and discovery
**Estimated Time:** 3-5 hours

**Tasks:**

**6.1 PostHog Analytics** (1-2 hours)
- [ ] Create PostHog account (free tier)
- [ ] Get API key from dashboard
- [ ] Add to `.env.local`:
  ```
  NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxx
  NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
  ```
- [ ] Create `lib/analytics/posthog.ts`
- [ ] Add PostHog script to `app/layout.tsx`
- [ ] Uncomment tracking in `EmailCaptureForm.tsx:74-76`
- [ ] Add custom events:
  - `email_submitted` (with source)
  - `scroll_depth` (25%, 50%, 75%, 100%)
  - `cta_clicked` (which CTA)
  - `section_viewed` (which section)
- [ ] Test events fire correctly
- [ ] Set up dashboards in PostHog

**6.2 SEO Optimization** (2-3 hours)
- [ ] Create `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://yourdomain.com/sitemap.xml
  ```
- [ ] Create `public/sitemap.xml`:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://yourdomain.com</loc>
      <lastmod>2025-11-11</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```
- [ ] Create Open Graph image (1200x630px)
  - Save as `public/images/og-image.jpg`
  - Should show Clearwater branding
  - Include tagline: "Making Water Delivery Work for Everyone"
- [ ] Update metadata in `app/layout.tsx`:
  ```typescript
  export const metadata: Metadata = {
    metadataBase: new URL('https://yourdomain.com'),
    openGraph: {
      images: '/images/og-image.jpg',
    },
  };
  ```
- [ ] Test with:
  - Facebook Debugger: https://developers.facebook.com/tools/debug/
  - Twitter Card Validator: https://cards-dev.twitter.com/validator
  - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- [ ] Add JSON-LD structured data for organization

**Success Criteria:**
- [ ] PostHog events tracking correctly
- [ ] SEO tools show proper previews
- [ ] Site appears in Google Search Console
- [ ] Analytics dashboard shows data

**Blockers:** None

---

#### Phase 7: Testing & QA (5-8 hours)

**Priority:** MEDIUM - Catch issues before users do
**Estimated Time:** 5-8 hours

**Tasks:**

**7.1 Cross-Browser Testing** (2-3 hours)
- [ ] **Desktop Testing:**
  - [ ] Chrome (latest) - Windows & Mac
  - [ ] Firefox (latest) - Windows & Mac
  - [ ] Safari (latest) - Mac only
  - [ ] Edge (latest) - Windows
- [ ] **Mobile Testing:**
  - [ ] Safari iOS (iPhone SE, iPhone 14 Pro)
  - [ ] Chrome Android (Samsung, Pixel)
  - [ ] Test landscape and portrait modes
- [ ] **Check for:**
  - [ ] Layout issues
  - [ ] Video playback
  - [ ] Form submissions
  - [ ] Scroll animations
  - [ ] Button clicks
  - [ ] Navigation

**7.2 Performance Optimization** (2-3 hours)
- [ ] Run Lighthouse audit (Chrome DevTools)
  - Target: 85+ performance, 90+ accessibility
- [ ] Optimize images if needed:
  - [ ] Convert to WebP format
  - [ ] Add lazy loading
  - [ ] Use Next.js Image component
- [ ] Check bundle size:
  - [ ] Run `pnpm build`
  - [ ] Check output size
  - [ ] Optimize if > 200KB first load
- [ ] Test on slow 3G connection
- [ ] Optimize fonts if needed
- [ ] Check Core Web Vitals:
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

**7.3 User Acceptance Testing** (1-2 hours)
- [ ] Recruit 3-5 test users
- [ ] Create testing script:
  1. What's your first impression?
  2. Can you find the email signup?
  3. Try to submit your email
  4. What's the purpose of this site?
  5. Any confusing parts?
- [ ] Observe and take notes
- [ ] Fix critical issues found
- [ ] Document feedback for future iterations

**Success Criteria:**
- [ ] No critical bugs found
- [ ] Works on all major browsers
- [ ] Lighthouse scores meet targets
- [ ] Users can complete core tasks

**Blockers:** None

---

### **NICE TO HAVE - Can Skip**

#### Additional Enhancements (Optional)

**Low Priority - Can Add Later:**

1. **Founder Photo** (15 min)
   - [ ] Get photo (300x300px, professional)
   - [ ] Save to `public/images/founder-photo.jpg`
   - [ ] Uncomment code in `AboutSection.tsx:19-27`

2. **Hero Video Poster** (15 min)
   - [ ] Create poster image from video frame
   - [ ] Save as `public/videos/hero-mobile.jpg`
   - [ ] Already referenced in HeroSection

3. **Social Media Setup** (30 min)
   - [ ] Create LinkedIn company page
   - [ ] Create Twitter account
   - [ ] Update links in `Footer.tsx:45-60`
   - [ ] Post launch announcement

4. **Email Welcome Sequence** (2-3 hours)
   - [ ] Set up SendGrid or Postmark
   - [ ] Create welcome email template
   - [ ] Add to API route after submission
   - [ ] Test delivery

5. **Google Analytics** (30 min)
   - [ ] Create GA4 property
   - [ ] Add tracking script
   - [ ] Set up conversion goals

**Success Criteria:** Nice improvements but not required

---

## 🚀 Recommended Launch Path

### **Option A: Fast Launch (TODAY)**
**Time:** 2-3 hours
1. ✅ Skip Analytics & SEO
2. ✅ Skip Testing (you've already tested basics)
3. ➡️ **Go straight to Phase 8: Deploy**
4. ➡️ Launch and iterate

**Pros:**
- Get feedback fast
- Start collecting emails immediately
- Iterate based on real usage

**Cons:**
- No analytics initially
- May miss some bugs
- No SEO optimization

---

### **Option B: Polished Launch (RECOMMENDED)**
**Time:** 1-2 weeks
1. ➡️ **Phase 6: Analytics & SEO** (3-5 hours)
2. ➡️ **Phase 7: Testing & QA** (5-8 hours)
3. ➡️ **Phase 8: Deploy** (2-3 hours)

**Pros:**
- Track user behavior from day one
- Catch bugs before users
- Better Google ranking

**Cons:**
- Takes longer to launch
- More upfront work

---

### **Option C: Hybrid Approach**
**Time:** 3-5 hours
1. ➡️ **Deploy now** (Phase 8)
2. ➡️ **Add analytics after launch** (Phase 6)
3. ➡️ **Test and fix issues** as they come up

**Pros:**
- Launch quickly
- Add features incrementally
- Learn from real users

**Cons:**
- Miss early analytics data
- Fix bugs in production

---

## 📊 Time Breakdown

| Phase | Priority | Time | Status |
|-------|----------|------|--------|
| **Phase 1: Foundation** | Critical | 5-7 hrs | ✅ DONE |
| **Phase 2: Sections** | Critical | 20-26 hrs | ✅ DONE |
| **Phase 3: Animations** | Nice | 4-6 hrs | ✅ DONE |
| **Phase 4: Accessibility** | Critical | 7-10 hrs | ✅ DONE |
| **Phase 5: Backend** | Critical | 5-8 hrs | ✅ DONE |
| **Phase 6: Analytics** | Optional | 3-5 hrs | ⏳ TODO |
| **Phase 7: Testing** | Recommended | 5-8 hrs | ⏳ TODO |
| **Phase 8: Deployment** | **CRITICAL** | 2-3 hrs | ⏳ **TODO** |

**Total Completed:** 41-57 hours ✅
**Total Remaining (Critical):** 2-3 hours ⏳
**Total Remaining (Optional):** 8-13 hours ⏳

---

## ✅ Pre-Deployment Checklist

Before deploying, verify:

**Content:**
- [ ] All copy is final and approved
- [ ] Video is final version
- [ ] Email addresses are correct (ryan@clearwaterafrica.com)
- [ ] Social links are correct (or placeholders removed)
- [ ] Founder info is accurate

**Technical:**
- [ ] `.env.local` has correct Supabase credentials
- [ ] Email submission tested locally
- [ ] No console errors in browser
- [ ] Site runs without errors: `pnpm dev`
- [ ] Build succeeds: `pnpm build`
- [ ] TypeScript compiles: `pnpm tsc --noEmit`

**Legal (Consider Adding):**
- [ ] Privacy policy (for email collection)
- [ ] Terms of service
- [ ] Cookie consent (if in EU/GDPR applies)

---

## 🆘 If You Get Stuck

**Deployment Issues:**
- Check Vercel docs: https://vercel.com/docs
- Ensure environment variables are set
- Check build logs for errors

**Database Issues:**
- Verify Supabase project is active
- Check Row Level Security policies
- Test with Supabase SQL Editor

**Domain Issues:**
- DNS can take 24-48 hours
- Use `dig` or `nslookup` to check
- Start with Vercel subdomain first

**General Issues:**
- Check STATUS.md for current state
- Review TECHNICAL_SPECS.md for details
- Look at BUILD_PLAN.md for original plan

---

## 🎯 Next Steps

**Ready to deploy?** Start with Phase 8 → [See Deployment Section](#phase-8-deployment-2-3-hours)

**Want analytics first?** Start with Phase 6 → [See Analytics Section](#phase-6-analytics--seo-3-5-hours)

**Want to test thoroughly?** Start with Phase 7 → [See Testing Section](#phase-7-testing--qa-5-8-hours)

**Questions?** Check other docs in `/docs` folder or review code comments.

---

**The hardest work is done. You're 90% there. Time to ship! 🚀**
