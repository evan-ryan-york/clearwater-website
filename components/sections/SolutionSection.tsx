/**
 * Solution Section Component
 *
 * Three solution cards showing platform benefits for each stakeholder
 * - Drivers: Find water faster
 * - Customers: Reliable delivery
 * - Depots & GWL: Complete visibility
 */

'use client';

import { SolutionCard } from '@/components/SolutionCard';
import { Section, SectionHeader } from '@/components/ui';

const solutions = [
  {
    imageSrc: '/images/trucker.png',
    audience: 'FOR DRIVERS',
    title: 'Find Water Faster',
    features: [
      'Real-time depot availability',
      'Optimized route planning',
      'Digital payment processing',
      'Customer management tools',
    ],
    tagline: 'Save fuel. Earn more. Work smarter.',
  },
  {
    imageSrc: '/images/purchaser.png',
    audience: 'FOR CUSTOMERS',
    title: 'Reliable Delivery',
    features: [
      'Transparent pricing',
      'Scheduled deliveries',
      'Verified water quality',
      'Digital payment options',
    ],
    tagline: 'Get water when you need it, from sources you trust.',
  },
  {
    imageSrc: '/images/gwcl.png',
    audience: 'FOR DEPOTS',
    title: 'Complete Visibility',
    features: [
      'Real-time transaction monitoring',
      'Automated record-keeping',
      'Demand forecasting',
      'Inventory management',
    ],
    tagline: 'Turn operational data into better decisions.',
  },
];

export function SolutionSection() {
  return (
    <Section background="white" id="solution">
      <SectionHeader title="One Platform. Three Solutions." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.audience} {...solution} delay={index * 150} />
        ))}
      </div>
    </Section>
  );
}
