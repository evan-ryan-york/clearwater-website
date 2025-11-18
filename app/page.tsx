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

      {/* Logo - Upper left */}
      <a
        href="/"
        className="absolute top-4 md:top-6 left-4 md:left-6 z-50"
        aria-label="Clearwater Africa Home"
      >
        <img
          src="/images/logo.png"
          alt="Clearwater Africa"
          className="w-[200px] h-auto"
        />
      </a>

      {/* Blog Button - Upper right */}
      <a
        href="https://clearwaterafrica.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 md:top-6 right-4 md:right-6 z-50 px-6 py-3 bg-[#00D4FF] hover:bg-[#00A8CC] text-white font-semibold rounded-md transition-colors shadow-lg"
      >
        Blog
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
