"use client";

import { useState } from "react";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

export default function AboutPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  
  return (
    <>
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              Professional Profile
            </h1>
            <p className="text-xl text-temple-gold-700 font-semibold">
              50+ Years of Spiritual Service
            </p>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              <div 
                className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl cursor-pointer group"
                onClick={() => setLightboxImage({ src: "/images/PHOTO-2025-12-05-20-11-53(2).jpg", alt: "Purushothaman Namboothiri - Vedic Priest and Astrologer" })}
              >
                <Image
                  src="/images/PHOTO-2025-12-05-20-11-53(2).jpg"
                  alt="Purushothaman Namboothiri - Vedic Priest and Astrologer"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                  A Distinguished Namboothiri Priest & Astrologer
                </h2>
                <p className="text-text-muted mb-4">
                  With a profound spiritual journey spanning over 50 years, Purushothaman Namboothiri 
                  is a distinguished Namboothiri priest and astrologer rooted in the rich traditions of Kerala. 
                  His expertise is built upon a lifetime of devotion and the meticulous practice of 
                  Keraleeya Thantric rituals.
                </p>
                <p className="text-text-muted mb-4">
                  For the past 32 years, he has been a pillar of the spiritual community in Chembur, Mumbai. 
                  His distinguished career includes serving as the <strong>Melshanthi (Chief Priest)</strong> at 
                  the Chembur Shell Colony Ayyappa Temple from June 1993 to September 2000.
                </p>
                <p className="text-text-muted mb-4">
                  Since 2000, he has dedicated his practice to providing personalized Astrological consultations, 
                  Poojas, and Homams, bringing the authentic spiritual essence of Sanatan Dharma to devotees 
                  in Mumbai and beyond.
                </p>
              </div>
            </div>

            <div className="mb-12 bg-temple-gold-50 p-8 rounded-lg border-l-4 border-temple-gold-600">
              <h3 className="font-heading text-xl font-semibold text-deep-indigo-900 mb-3">
                Global Spiritual Service
              </h3>
              <p className="text-text-muted">
                Beyond his deep roots in Mumbai and Kerala, Purushothaman Namboothiri has earned a formidable 
                reputation that extends across India and across the globe. He is highly respected for his 
                spiritual integrity and precision, serving a diverse and prestigious clientele that includes 
                devotees from across <strong>India, the United States, Europe, the Middle East, and beyond</strong>. 
                Whether providing guidance to the local community or performing remote rituals for the global 
                diaspora, he is sought after for his ability to bridge ancient Vedic traditions with the needs 
                of the modern world.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-6">
                Why Choose His Services?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-temple-stone-200/30 rounded-lg">
                  <h3 className="font-semibold text-deep-indigo-900 mb-2">
                    Authenticity
                  </h3>
                  <p className="text-text-muted text-sm">
                    All rituals are performed in the authentic and traditional Kerala style, 
                    following strict Vedic scriptures.
                  </p>
                </div>
                <div className="p-6 bg-temple-stone-200/30 rounded-lg">
                  <h3 className="font-semibold text-deep-indigo-900 mb-2">
                    Experience
                  </h3>
                  <p className="text-text-muted text-sm">
                    50 years of ritualistic expertise and 32 years of dedicated service 
                    to the Mumbai community.
                  </p>
                </div>
                <div className="p-6 bg-temple-stone-200/30 rounded-lg">
                  <h3 className="font-semibold text-deep-indigo-900 mb-2">
                    Precision
                  </h3>
                  <p className="text-text-muted text-sm">
                    Deep knowledge of Vedic Astrology combined with Thantric precision 
                    ensures the best spiritual outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-6">
                Areas of Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white border-2 border-temple-gold-200 rounded-lg">
                  <h3 className="font-semibold text-temple-gold-700 mb-3">Sacred Homams (Fire Rituals)</h3>
                  <ul className="text-text-muted text-sm space-y-2">
                    <li>• Ganapathi & Bala Ganapathi Homam</li>
                    <li>• Sudarsana & Aghora Homam</li>
                    <li>• Prathyangira Homam</li>
                    <li>• Thila Homam (Pithru Karma)</li>
                    <li>• Swayamvara Homam</li>
                    <li>• Santhana Gopala Homam</li>
                    <li>• Baneshi Homam</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border-2 border-temple-gold-200 rounded-lg">
                  <h3 className="font-semibold text-temple-gold-700 mb-3">Sacred Poojas & Remedial Rituals</h3>
                  <ul className="text-text-muted text-sm space-y-2">
                    <li>• Bhagavathi Seva & Ishwara Seva</li>
                    <li>• Dwadashanama Pooja</li>
                    <li>• Sayujya Pooja</li>
                    <li>• Chakra Pooja</li>
                    <li>• Sathyanarayana Pooja</li>
                    <li>• Parihara Karmas (Astrological Remedies)</li>
                    <li>• Vedic Astrology Consultations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-6">
                Temple Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                    onClick={() => setLightboxImage({ 
                      src: `/images/PHOTO-2025-12-05-20-11-53(${i}).jpg`, 
                      alt: `Sacred ceremony ${i}` 
                    })}
                  >
                    <Image
                      src={`/images/PHOTO-2025-12-05-20-11-53(${i}).jpg`}
                      alt={`Sacred ceremony ${i}`}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}

