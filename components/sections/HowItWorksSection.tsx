/**
 * How It Works Section Component
 *
 * Four-step timeline showing the platform workflow
 * Visual flow from depot registration to successful delivery
 */

'use client';

import { TimelineStep } from '@/components/TimelineStep';
import { Section, SectionHeader } from '@/components/ui';
import { Handshake, Truck, House, CircleCheckBig } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Handshake,
    title: 'Depots Join Network',
    description:
      'Depot owners register and share real-time water availability',
  },
  {
    number: 2,
    icon: Truck,
    title: 'Drivers Connect',
    description:
      'Tanker operators find available depots and optimize their routes',
  },
  {
    number: 3,
    icon: House,
    title: 'Customers Order',
    description:
      'Homes and businesses request delivery with transparent pricing',
  },
  {
    number: 4,
    icon: CircleCheckBig,
    title: 'Everyone Wins',
    description:
      'Efficient delivery. Verified quality. Complete transparency.',
  },
];

export function HowItWorksSection() {
  return (
    <Section background="blue" id="how-it-works">
      <SectionHeader
        title="How It Works"
        subtitle="Simple. Digital. Transparent."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.number}
            {...step}
            showArrow={index < steps.length - 1}
            delay={index * 150}
          />
        ))}
      </div>
    </Section>
  );
}
