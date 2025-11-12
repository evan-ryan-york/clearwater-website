/**
 * About Section Component
 *
 * Founder credibility and long-term mission statement
 * Optional founder photo can be added later
 */

import { Section } from '@/components/ui';
// import Image from 'next/image';

export function AboutSection() {
  return (
    <Section background="gray" id="about">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0A4C6E] text-center mb-12">
          Building for the Long Term
        </h2>

        {/* Content - Can be converted to 2-column with photo later */}
        <div className="space-y-6 text-gray-700">
          {/* Optional: Founder Photo */}
          {/* <div className="float-left mr-8 mb-4">
            <Image
              src="/images/founder-photo.jpg"
              alt="Ryan York, Founder of Clearwater Africa"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div> */}

          <p className="text-lg md:text-xl leading-relaxed">
            Clearwater Africa is founded by Ryan York, a systems builder with 20
            years of experience scaling complex operations—from education networks
            serving 10,000+ students to technology platforms used by 50,000+
            people.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            After seeing firsthand how water scarcity constrains communities
            across Africa, Ryan is dedicating the next chapter of his career to
            solving it. Clearwater Africa is the first step in a 20-year mission
            to make water access as reliable as electricity.
          </p>

          <p className="text-xl md:text-2xl font-semibold text-[#0A4C6E] leading-relaxed">
            We&apos;re building infrastructure, not just an app. We&apos;re here
            for the long haul.
          </p>
        </div>
      </div>
    </Section>
  );
}
