import { Metadata } from "next";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services - Vedic Priest Mumbai",
  description: "Complete list of Vedic puja, homam, and ritual services available in Mumbai.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <Section className="pt-20 bg-gradient-to-b from-white to-temple-stone-200/30 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
            My Services
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Traditional Vedic ceremonies performed with authenticity and devotion
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </Section>
  );
}

