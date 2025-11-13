/**
 * Footer Component
 *
 * Site footer with contact info and social links
 * Simple, professional design
 */

import { Mail, MapPin, Linkedin, Facebook, BookOpen } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A4C6E] text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">
            Clearwater Africa
          </h3>
          <p className="text-blue-200 text-lg">
            Making water delivery work for everyone.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a
            href="mailto:ryan@clearwaterafrica.com"
            className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>ryan@clearwaterafrica.com</span>
          </a>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>Launching in Accra, Ghana - 2026</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8" role="navigation" aria-label="Social media links">
          <a
            href="https://www.linkedin.com/in/ryan-york-148356a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D4FF] transition-colors"
            aria-label="Visit Ryan York on LinkedIn (opens in new tab)"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href="https://ryan584888.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D4FF] transition-colors"
            aria-label="Read Clearwater Africa Blog on Substack (opens in new tab)"
          >
            <BookOpen className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61583881946200"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D4FF] transition-colors"
            aria-label="Follow Clearwater Africa on Facebook (opens in new tab)"
          >
            <Facebook className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-blue-200 text-sm">
          © {currentYear} Clearwater Africa
        </div>
      </div>
    </footer>
  );
}
