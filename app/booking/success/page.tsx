import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MessageCircle } from "lucide-react";
import { getSiteData } from "@/lib/content";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Booking Confirmed - Vedic Priest Mumbai",
  description: "Your booking request has been submitted successfully.",
};

export default function BookingSuccessPage() {
  const siteData = getSiteData();

  return (
    <Section className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
            Booking Request Submitted
          </h1>
          <p className="text-lg text-text-muted mb-8">
            Thank you for your booking request. We&apos;ve received your information
            and will contact you within 24 hours to confirm the ceremony details
            and discuss auspicious timings.
          </p>

          <div className="bg-saffron-600/10 border border-saffron-600/20 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-deep-indigo-900 mb-4">
              What&apos;s Next?
            </h2>
            <ul className="text-left space-y-2 text-text-muted">
              <li>✓ We&apos;ll review your request and check availability</li>
              <li>✓ We&apos;ll calculate auspicious timings based on muhurat</li>
              <li>✓ We&apos;ll contact you via phone or WhatsApp to confirm</li>
              <li>✓ You&apos;ll receive a detailed list of items needed</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteData.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-600/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </a>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-deep-indigo-900 text-white rounded-md hover:bg-deep-indigo-900/90 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

