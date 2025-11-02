import { Metadata } from "next";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { getSiteData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact - Vedic Priest Mumbai",
  description: "Get in touch to book a puja or ceremony. We serve Mumbai Metropolitan Region.",
};

export default function ContactPage() {
  const siteData = getSiteData();

  return (
    <>
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-text-muted">
              Get in touch to schedule your ceremony or ask any questions
            </p>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <a
                      href={`tel:${siteData.phone}`}
                      className="flex items-center gap-4 p-4 bg-temple-stone-200/30 rounded-lg hover:bg-temple-stone-200/50 transition-colors"
                    >
                      <Phone className="w-6 h-6 text-saffron-600" />
                      <div>
                        <p className="font-semibold text-deep-indigo-900">Phone</p>
                        <p className="text-text-muted">{siteData.phone}</p>
                      </div>
                    </a>
                    <a
                      href={`https://wa.me/${siteData.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-temple-stone-200/30 rounded-lg hover:bg-temple-stone-200/50 transition-colors"
                    >
                      <MessageCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-deep-indigo-900">WhatsApp</p>
                        <p className="text-text-muted">{siteData.whatsapp}</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${siteData.email}`}
                      className="flex items-center gap-4 p-4 bg-temple-stone-200/30 rounded-lg hover:bg-temple-stone-200/50 transition-colors"
                    >
                      <Mail className="w-6 h-6 text-saffron-600" />
                      <div>
                        <p className="font-semibold text-deep-indigo-900">Email</p>
                        <p className="text-text-muted">{siteData.email}</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4 p-4 bg-temple-stone-200/30 rounded-lg">
                      <MapPin className="w-6 h-6 text-saffron-600 mt-1" />
                      <div>
                        <p className="font-semibold text-deep-indigo-900">Service Area</p>
                        <p className="text-text-muted">{siteData.address}</p>
                        <p className="text-sm text-text-muted mt-1">
                          Mumbai Metropolitan Region
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-6">
                  Map
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden border border-temple-stone-200">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=72.82641601562501%2C19.0026%2C72.97265625%2C19.1512&layer=mapnik"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mumbai Map"
                  />
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-saffron-600/10 rounded-lg border border-saffron-600/20">
              <p className="text-text-muted mb-4">
                <strong className="text-deep-indigo-900">Availability:</strong> Services
                are subject to muhurat calculations and prior bookings. We
                recommend booking at least 2 weeks in advance.
              </p>
              <a
                href="/booking"
                className="inline-block px-6 py-3 bg-saffron-600 text-white rounded-md hover:bg-saffron-600/90 transition-colors"
              >
                Book a Puja
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

