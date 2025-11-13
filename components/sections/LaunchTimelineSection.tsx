/**
 * Launch Timeline Section Component
 *
 * 2026 Accra launch announcement with detailed approach
 * Includes second email capture opportunity
 */

import { EmailCaptureForm } from '@/components/EmailCaptureForm';
import { Section } from '@/components/ui';

export function LaunchTimelineSection() {
  return (
    <Section background="white" id="launch">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0A4C6E] text-center mb-8">
          Coming to Accra — 2026
        </h2>

        {/* Body Content */}
        <div className="prose prose-lg max-w-none mb-12 space-y-6 text-gray-700">
          <p className="text-lg md:text-xl leading-relaxed">
            Clearwater is launching in Greater Accra in 2026.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Our approach is methodical: We&apos;re spending 2025 building
            relationships with depot owners, recruiting driver partners, and
            signing commercial clients to ensure the platform serves real needs
            from day one.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            This isn&apos;t about disruption—it&apos;s about coordination.
            We&apos;re organizing the existing informal market to work better for
            everyone: drivers save time and fuel, customers get reliable service,
            and depots gain the operational tools to manage their business more
            effectively.
          </p>
        </div>

        {/* Email Capture Card */}
        <div className="bg-blue-50 p-8 md:p-12 rounded-lg border-2 border-[#00D4FF]/20">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-[#0A4C6E] text-center mb-6">
            Want to learn more or get involved?
          </h3>
          <EmailCaptureForm
            source="timeline"
            placeholder="Enter your email"
            buttonText="Subscribe for Updates"
            variant="light"
          />
        </div>
      </div>
    </Section>
  );
}
