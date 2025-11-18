/**
 * Hero Section Component
 *
 * Full-screen hero with video background and email capture
 * - Video autoplay with mobile fallback
 * - Dark overlay for text readability
 * - Centered content with CTA
 */

import { EmailCaptureForm } from '@/components/EmailCaptureForm';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        {/* Video for desktop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Background video showing water delivery operations in Ghana"
        >
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback gradient if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4C6E] via-[#0E5F87] to-[#00A8CC] -z-10" />
      </div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading !text-white leading-tight">
            Water Delivery You Can Count On
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-relaxed px-4">
            Clearwater brings transparency and reliability to water delivery in Ghana.
          </p>

          {/* Email Capture Form */}
          <div className="pt-4 md:pt-6">
            <EmailCaptureForm
              source="hero"
              placeholder="Enter your email"
              buttonText="Subscribe for Updates"
              variant="dark"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
