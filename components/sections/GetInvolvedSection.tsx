/**
 * Get Involved Section Component
 *
 * Three segmented CTAs for different audience types
 * - Drivers/Fleet Owners
 * - Businesses/Homeowners
 * - Partners/Investors
 */

import { CTACard } from '@/components/CTACard';
import { Section, SectionHeader } from '@/components/ui';

const ctas = [
  {
    title: "I'm a Driver or Fleet Owner",
    description:
      'Learn how Clearwater can help you save time, reduce costs, and grow your business.',
    buttonText: 'Contact Us',
    buttonLink: 'mailto:info@clearwaterafrica.com?subject=Driver%20Inquiry',
  },
  {
    title: "I'm a Business or Homeowner",
    description:
      'Get early access to reliable water delivery when we launch in Accra.',
    buttonText: 'Sign Up for Updates',
    buttonLink: '#launch',
  },
  {
    title: "I'm a Partner or Investor",
    description:
      "Interested in supporting our mission? Let's talk about how we can work together.",
    buttonText: 'Get in Touch',
    buttonLink: 'mailto:info@clearwaterafrica.com?subject=Partnership%20Inquiry',
  },
];

export function GetInvolvedSection() {
  return (
    <Section background="white" id="get-involved">
      <SectionHeader title="Join Us in Building Clearwater Africa" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {ctas.map((cta, index) => (
          <CTACard key={cta.title} {...cta} delay={index * 150} />
        ))}
      </div>
    </Section>
  );
}
