import Section from "./Section";
import ServiceCard from "./ServiceCard";
import { getServices } from "@/lib/content";

export default function ServicesOverview() {
  const services = getServices().slice(0, 6); // Show first 6 on home page

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
            Services at a Glance
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Traditional Vedic ceremonies and rituals performed with authenticity
            and devotion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} imageIndex={(index % 8) + 1} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block px-6 py-3 bg-deep-indigo-900 text-white rounded-md hover:bg-deep-indigo-900/90 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </Section>
  );
}

