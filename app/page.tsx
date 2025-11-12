/**
 * Clearwater Africa - Landing Page
 *
 * Single-page marketing website for Clearwater Africa
 * Launching in Accra, Ghana - 2026
 */

import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { LaunchTimelineSection } from '@/components/sections/LaunchTimelineSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { GetInvolvedSection } from '@/components/sections/GetInvolvedSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00D4FF] focus:text-white focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <LaunchTimelineSection />
        <AboutSection />
        <GetInvolvedSection />
        <Footer />
      </main>
    </>
  );
}
