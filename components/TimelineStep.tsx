/**
 * Timeline Step Component
 *
 * Individual step in the "How It Works" timeline
 * Shows process flow from depots to customers
 */

'use client';

import { LucideIcon, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export interface TimelineStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  showArrow?: boolean;
  className?: string;
  delay?: number;
}

export function TimelineStep({
  number,
  icon: Icon,
  title,
  description,
  showArrow = false,
  className,
  delay = 0,
}: TimelineStepProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        'relative transition-all duration-700',
        'opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className="text-center">
        {/* Step Number */}
        <div className="text-sm font-semibold text-[#00D4FF] mb-2">
          Step {number}
        </div>

        {/* Icon Circle */}
        <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#00D4FF]/20">
          <Icon className="w-10 h-10 text-[#0A4C6E]" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold font-heading text-[#0A4C6E] mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow (desktop only) */}
      {showArrow && (
        <div className="hidden lg:block absolute top-10 -right-4 xl:-right-6 text-[#00D4FF]">
          <ArrowRight className="w-8 h-8" strokeWidth={2} />
        </div>
      )}
    </div>
  );
}
