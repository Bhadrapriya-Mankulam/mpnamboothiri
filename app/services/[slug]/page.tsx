import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getService, getServices, getSiteData } from "@/lib/content";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";
import { Check } from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} - Vedic Priest Mumbai`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const siteData = getSiteData();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.short,
    provider: {
      "@type": "ProfessionalService",
      name: siteData.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Mumbai",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              {service.name}
            </h1>
            <p className="text-xl text-text-muted">{service.short}</p>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                Overview
              </h2>
              <p className="text-text-muted mb-8">
                {service.short} This traditional Vedic ceremony is performed
                with authentic mantras and rituals passed down through
                generations.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                Procedure
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-text-muted mb-8">
                <li>Initial Sankalp and invocation</li>
                <li>Deity worship with mantras</li>
                <li>Offering of prasad and aarti</li>
                <li>Final blessings and distribution of prasad</li>
              </ol>

              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                Duration
              </h2>
              <p className="text-text-muted mb-8">{service.duration}</p>

              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                What You Need to Provide
              </h2>
              <ul className="space-y-2 mb-8">
                {service.itemsClient.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-muted">
                    <Check className="w-5 h-5 text-saffron-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                What the Priest Brings
              </h2>
              <ul className="space-y-2 mb-8">
                {service.itemsPriest.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-muted">
                    <Check className="w-5 h-5 text-saffron-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                Auspicious Timings
              </h2>
              <p className="text-text-muted mb-8">
                Timings are determined based on muhurat calculations. Please
                contact us to schedule according to auspicious dates and times
                for this ceremony.
              </p>

              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-deep-indigo-900 mb-2">
                    Can this ceremony be performed online?
                  </h3>
                  <p className="text-text-muted">
                    {service.online
                      ? "Yes, this service is available both on-site and online."
                      : "This ceremony is best performed on-site for full benefits."}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-indigo-900 mb-2">
                    How far in advance should I book?
                  </h3>
                  <p className="text-text-muted">
                    We recommend booking at least 2 weeks in advance to ensure
                    availability and proper muhurat calculations.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-saffron-600/10 rounded-lg border border-saffron-600/20">
                <h3 className="font-heading text-xl font-semibold text-deep-indigo-900 mb-4">
                  Ready to Book?
                </h3>
                <p className="text-text-muted mb-6">
                  Contact us to schedule this ceremony and receive guidance on
                  auspicious timings and preparation.
                </p>
                <Link
                  href="/booking"
                  className="inline-block px-6 py-3 bg-saffron-600 text-white rounded-md hover:bg-saffron-600/90 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

