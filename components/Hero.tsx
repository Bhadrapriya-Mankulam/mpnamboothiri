import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
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
            backgroundImage: "url('/images/PHOTO-2025-12-05-20-11-53.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-deep-indigo-900 mb-6">
          {siteData.name}
        </h1>
        <p className="text-xl md:text-2xl text-temple-gold-700 font-semibold mb-8 max-w-3xl mx-auto">
          {siteData.shortTagline}
        </p>
        <p className="text-lg text-text-muted mb-12 max-w-3xl mx-auto">
          Expert Astrologer & Namboothiri Priest specializing in Kerala-style Homams and Poojas. 
          Over 50 years of spiritual service for devotees across India and worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://wa.me/919821529379"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold text-lg inline-flex items-center justify-center gap-3 min-w-[240px]"
          >
            <svg className="w-5 h-5 flex-shrink-0 -mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="leading-none">Book via WhatsApp</span>
          </a>
          <a
            href="https://wa.me/919821529379"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-deep-indigo-900 border-2 border-deep-indigo-900 rounded-md hover:bg-deep-indigo-900 hover:text-white transition-colors font-semibold text-lg inline-flex items-center justify-center gap-3 min-w-[240px]"
          >
            <Phone className="w-5 h-5 flex-shrink-0 -mt-0.5" />
            <span className="leading-none">Call Now</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-temple-gold-100 border border-temple-gold-300 rounded-full text-sm text-temple-gold-800 font-medium">
            Languages: {siteData.languages.join(", ")}
          </span>
          <span className="px-4 py-2 bg-temple-gold-100 border border-temple-gold-300 rounded-full text-sm text-temple-gold-800 font-medium">
            50+ Years Experience
          </span>
          <span className="px-4 py-2 bg-temple-gold-100 border border-temple-gold-300 rounded-full text-sm text-temple-gold-800 font-medium">
            Keraleeya Thantric Rituals
          </span>
          <span className="px-4 py-2 bg-temple-gold-100 border border-temple-gold-300 rounded-full text-sm text-temple-gold-800 font-medium">
            Global Service
          </span>
        </div>

        <StoneDivider className="max-w-md mx-auto" />
      </div>
    </section>
  );
}
