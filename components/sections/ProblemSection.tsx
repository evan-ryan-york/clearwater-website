/**
 * Problem Section Component
 *
 * Three-column layout showing stakeholder pain points
 * - Drivers: Wasted time and fuel
 * - Customers: Unreliable delivery
 * - System: No visibility
 */

'use client';

import { ProblemCard } from '@/components/ProblemCard';
import { Section, SectionHeader } from '@/components/ui';
import { Truck, Clock, Droplets } from 'lucide-react';

const problems = [
  {
    icon: Truck,
    title: 'FOR DRIVERS',
    headline: 'Wasted Time & Fuel',
    description:
      'Drivers waste hours searching for depots with available water, burning fuel and losing income while their families wait.',
  },
  {
    icon: Clock,
    title: 'FOR CUSTOMERS',
    headline: 'Unreliable Delivery',
    description:
      "Homes and businesses can't plan around water delivery. Uncertain arrival times, opaque pricing, and unknown water quality leave families and businesses struggling.",
  },
  {
    icon: Droplets,
    title: 'FOR THE SYSTEM',
    headline: 'A Market Running on Hope',
    description:
      'The informal water market operates on phone calls, cash, and personal relationships. No one has the data needed to coordinate supply and demand efficiently.',
  },
];

export function ProblemSection() {
  return (
    <Section background="gray" id="problem">
      <SectionHeader title="The Challenge We're Solving" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {problems.map((problem, index) => (
          <ProblemCard key={problem.title} {...problem} delay={index * 150} />
        ))}
      </div>
    </Section>
  );
}
