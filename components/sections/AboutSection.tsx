/**
 * About Section Component
 *
 * Founder credibility and long-term mission statement
 * Optional founder photo can be added later
 */

import { Section } from '@/components/ui';
import Image from 'next/image';

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
          {/* Founder Photo */}
          <div className="mx-auto mb-6 md:float-left md:mr-8 md:mb-4 w-fit">
            <Image
              src="/images/ryan-headshot.png"
              alt="Ryan York, Founder of Clearwater"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          <p className="text-lg md:text-xl leading-relaxed">
            Clearwater is founded by Ryan York, a systems builder with 20 years
            of experience scaling complex operations—from education networks
            serving 10,000+ students to technology platforms used by 50,000+
            people.
          </p>

          <p className="text-lg md:text-xl leading-relaxed font-semibold text-[#0A4C6E]">
            Why water? Why now?
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            After 15 years in education, Ryan kept running into a deeper barrier
            he couldn&apos;t solve from inside a classroom: students struggling
            not because they lacked intelligence, but because they lacked
            stability. The chaos of poverty consumed the cognitive energy that
            should have been available for learning.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Right now, 2 billion people—one out of every four human beings—lack
            reliable access to clean water. Women and girls spend 200 million
            hours every day collecting water. More than 1,000 children die every
            day from water-related diseases.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            This happens on a planet that is 71% water.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            It is an engineering absurdity. A systemic failure so massive that
            Ryan couldn&apos;t look away.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Clearwater is the first step in a mission to make water access
            universal. We&apos;re building infrastructure, not just an app.
            We&apos;re here for the long haul.
          </p>
        </div>
      </div>
    </Section>
  );
}
