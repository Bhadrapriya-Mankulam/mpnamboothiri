import Link from "next/link";
import { Phone } from "lucide-react";
import { getSiteData } from "@/lib/content";
import StoneDivider from "./StoneDivider";

export default function Hero() {
  const siteData = getSiteData();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center stone-texture pt-20 overflow-hidden">
      {/* Background temple image overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/images/temple-background.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-deep-indigo-900 mb-6">
          Vedic Priest in Mumbai
        </h1>
        <p className="text-xl md:text-2xl text-temple-stone-700 mb-8 max-w-3xl mx-auto">
          {siteData.shortTagline}
        </p>
        <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
          For Puja, Homam, Samskara & Temple Rituals
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/booking"
            className="px-8 py-4 bg-saffron-600 text-white rounded-md hover:bg-saffron-600/90 transition-colors font-semibold text-lg"
          >
            Book a Puja
          </Link>
          <a
            href={`tel:${siteData.phone}`}
            className="px-8 py-4 bg-white text-deep-indigo-900 border-2 border-deep-indigo-900 rounded-md hover:bg-deep-indigo-900 hover:text-white transition-colors font-semibold text-lg flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-temple-stone-200 rounded-full text-sm text-temple-stone-700">
            Languages: {siteData.languages.join(", ")}
          </span>
          <span className="px-4 py-2 bg-temple-stone-200 rounded-full text-sm text-temple-stone-700">
            15+ Years Experience
          </span>
          <span className="px-4 py-2 bg-temple-stone-200 rounded-full text-sm text-temple-stone-700">
            On-site & Remote Pujas
          </span>
        </div>

        <StoneDivider className="max-w-md mx-auto" />
      </div>
    </section>
  );
}
