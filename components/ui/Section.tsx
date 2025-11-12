import { cn } from '@/lib/utils';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue';
  id?: string;
}

const backgroundColors = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  blue: 'bg-blue-50',
} as const;

export function Section({
  children,
  className,
  background = 'white',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        backgroundColors[background],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {children}
      </div>
    </section>
  );
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-12 md:mb-16', className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0A4C6E] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
