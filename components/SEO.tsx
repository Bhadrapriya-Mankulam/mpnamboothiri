import { getSiteData } from "@/lib/content";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
}

export default function SEO({ title, description, path = "", type = "website" }: SEOProps) {
  const siteData = getSiteData();
  const url = `https://example.com${path}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteData.name,
    description: siteData.shortTagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    telephone: siteData.phone,
    areaServed: {
      "@type": "City",
      name: "Mumbai",
    },
    priceRange: "$$",
    sameAs: [
      `https://wa.me/${siteData.whatsapp.replace(/[^0-9]/g, "")}`,
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://example.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {path !== "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}

