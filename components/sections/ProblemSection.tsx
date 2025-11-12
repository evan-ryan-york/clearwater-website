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
      'Drivers waste hours searching for depots with available water, burning fuel and losing income.',
  },
  {
    icon: Clock,
    title: 'FOR CUSTOMERS',
    headline: 'Unreliable Delivery',
    description:
      'Homes and businesses struggle with unpredictable delivery times and uncertain water quality.',
  },
  {
    icon: Droplets,
    title: 'FOR THE SYSTEM',
    headline: 'No Visibility',
    description:
      'Without digital tracking, Ghana Water and depot owners lack the data needed to serve demand efficiently.',
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
