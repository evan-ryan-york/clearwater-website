/**
 * Solution Card Component
 *
 * Displays platform solution for a stakeholder group
 * Includes icon, audience, title, features list, and tagline
 */

'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export interface SolutionCardProps {
  icon: LucideIcon;
  audience: string;
  title: string;
  features: string[];
  tagline: string;
  className?: string;
  delay?: number;
}

export function SolutionCard({
  icon: Icon,
  audience,
  title,
  features,
  tagline,
  className,
  delay = 0,
}: SolutionCardProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        'bg-white rounded-lg p-6 md:p-8 h-full',
        'border-2 border-gray-200',
        'transition-all duration-700',
        'hover:border-[#00D4FF] hover:shadow-lg hover:-translate-y-1',
        // Animation classes
        'opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {/* Icon */}
      <div className="w-16 h-16 mb-4 bg-[#0A4C6E]/10 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#0A4C6E]" strokeWidth={2} />
      </div>

      {/* Audience */}
      <p className="text-sm font-semibold text-[#0A4C6E] uppercase tracking-wide mb-2">
        {audience}
      </p>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold font-heading text-[#0A4C6E] mb-4">
        {title}
      </h3>

      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-[#00D4FF] mr-2 mt-1 flex-shrink-0">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Tagline */}
      <p className="text-[#0A4C6E] font-semibold italic border-t border-gray-200 pt-4 mt-auto">
        {tagline}
      </p>
    </div>
  );
}
