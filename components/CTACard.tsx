/**
 * CTA Card Component
 *
 * Call-to-action card for different audience segments
 * Used in Get Involved section
 */

'use client';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  delay?: number;
}

export function CTACard({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  delay = 0,
}: CTACardProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        'bg-blue-50 rounded-lg p-6 md:p-8 flex flex-col h-full',
        'border-2 border-[#00D4FF]/20',
        'transition-all duration-700',
        'hover:shadow-lg hover:-translate-y-1 hover:border-[#00D4FF]',
        // Animation classes
        'opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold font-heading text-[#0A4C6E] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      {/* CTA Button */}
      <Button
        variant="primary"
        className="w-full"
        onClick={() => {
          if (buttonLink.startsWith('mailto:')) {
            window.location.href = buttonLink;
          } else if (buttonLink.startsWith('#')) {
            // Scroll to section
            const element = document.querySelector(buttonLink);
            element?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.open(buttonLink, '_blank');
          }
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
}
