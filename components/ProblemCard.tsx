/**
 * Problem Card Component
 *
 * Displays a stakeholder pain point with icon, title, headline, and description
 * Used in the Problem Section
 */

'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  headline: string;
  description: string;
  className?: string;
  delay?: number;
}

export function ProblemCard({
  icon: Icon,
  title,
  headline,
  description,
  className,
  delay = 0,
}: ProblemCardProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        'bg-white rounded-lg p-6 md:p-8 text-center',
        'border border-gray-200 shadow-sm',
        'transition-all duration-700',
        'hover:shadow-md hover:-translate-y-1',
        // Animation classes
        'opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {/* Icon Circle */}
      <div className="w-16 h-16 mx-auto mb-4 bg-[#00D4FF]/10 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#00D4FF]" strokeWidth={2} />
      </div>

      {/* Title (Audience) */}
      <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wide mb-2">
        {title}
      </p>

      {/* Headline */}
      <h3 className="text-xl md:text-2xl font-bold font-heading text-[#0A4C6E] mb-3">
        {headline}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
