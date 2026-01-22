import { Metadata } from "next";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";
import { MessageCircle } from "lucide-react";
import { getSiteData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact - Mankulam Purushothaman Namboothiri",
  description: "Seek spiritual guidance from Purushothaman Namboothiri. Available for in-person and virtual consultations for devotees worldwide.",
};

export default function ContactPage() {
  const siteData = getSiteData();

  return (
    <>
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              Seek Spiritual Guidance
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Whether you are looking for astrological clarity or wish to perform a sacred ritual 
              in the authentic Hindu tradition, Purushothaman Namboothiri is available for 
              consultations both in-person and virtually for global devotees.
            </p>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-semibold text-deep-indigo-900 mb-4">
                Get in Touch via WhatsApp
              </h2>
              <p className="text-text-muted">
                Connect with us directly on WhatsApp for quick responses and easy booking
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <a
                href={`https://wa.me/919821529379`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:from-green-100 hover:to-green-200 transition-all border-2 border-green-300 shadow-lg hover:shadow-xl w-full max-w-md"
              >
                <div className="bg-green-600 p-6 rounded-full">
                  <MessageCircle className="w-16 h-16 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-deep-indigo-900 mb-2">
                    WhatsApp Now
                  </p>
                  <p className="text-3xl font-semibold text-green-700 mb-3">
                    +91 98215 29379
                  </p>
                  <p className="text-sm text-text-muted max-w-xs mx-auto">
                    Available for consultations, bookings, and spiritual guidance
                  </p>
                </div>
                <div className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
                  Click to Chat
                </div>
              </a>
            </div>

            <div className="bg-temple-gold-50 p-6 rounded-lg border-l-4 border-temple-gold-600 mb-8">
              <h3 className="font-semibold text-deep-indigo-900 mb-3">Service Coverage</h3>
              <p className="text-text-muted mb-2">
                <strong className="text-deep-indigo-900">Location:</strong> {siteData.address}
              </p>
              <p className="text-text-muted">
                <strong className="text-deep-indigo-900">Global Service:</strong> Serving devotees across India, USA, Europe, Middle East & beyond
              </p>
            </div>

            <div className="text-center p-6 bg-saffron-600/10 rounded-lg border border-saffron-600/20">
              <p className="text-text-muted mb-4">
                <strong className="text-deep-indigo-900">Availability:</strong> Services
                are subject to muhurat calculations and prior bookings. We
                recommend booking at least 2 weeks in advance.
              </p>
              <a
                href="https://wa.me/919821529379"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

