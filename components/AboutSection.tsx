"use client";

import { useState } from "react";
import Section from "./Section";
import StoneDivider from "./StoneDivider";
import Link from "next/link";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

export default function AboutSection() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  
  return (
    <>
      <Section className="bg-gradient-to-b from-white to-temple-stone-200/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
                Professional Profile
              </h2>
              <p className="text-xl text-temple-gold-700 font-semibold">50+ Years of Spiritual Service</p>
              <StoneDivider className="max-w-xs mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
              <div className="md:col-span-1 space-y-6">
                <div 
                  className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-2 border-temple-gold-300 cursor-pointer group"
                  onClick={() => setLightboxImage({ src: "/images/PHOTO-2025-12-05-20-11-53(1).jpg", alt: "Purushothaman Namboothiri - Vedic Priest" })}
                >
                  <Image
                    src="/images/PHOTO-2025-12-05-20-11-53(1).jpg"
                    alt="Purushothaman Namboothiri - Vedic Priest"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div 
                  className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setLightboxImage({ src: "/images/PHOTO-2025-12-05-20-11-53(2).jpg", alt: "Performing sacred rituals" })}
                >
                  <Image
                    src="/images/PHOTO-2025-12-05-20-11-53(2).jpg"
                    alt="Performing sacred rituals"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                  A Distinguished Namboothiri Priest & Astrologer
                </h3>
                <p className="text-text-muted mb-4">
                  With a profound spiritual journey spanning over 50 years, Purushothaman Namboothiri 
                  is a distinguished Namboothiri priest and astrologer rooted in the rich traditions of Kerala. 
                  His expertise is built upon a lifetime of devotion and the meticulous practice of 
                  Keraleeya Thantric rituals.
                </p>
                <p className="text-text-muted mb-6">
                  For the past 32 years, he has been a pillar of the spiritual community in Chembur, Mumbai, 
                  serving devotees across India and worldwide with authenticity and precision.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-saffron-600 font-bold text-lg">✓</span>
                    <span className="text-text-muted">Authentic Kerala-style rituals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-saffron-600 font-bold text-lg">✓</span>
                    <span className="text-text-muted">50 years of expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-saffron-600 font-bold text-lg">✓</span>
                    <span className="text-text-muted">Former Chief Priest at Ayyappa Temple</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-saffron-600 font-bold text-lg">✓</span>
                    <span className="text-text-muted">Global clientele: India, USA, Europe, Middle East</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div 
                    className="relative aspect-video rounded-lg overflow-hidden shadow-md cursor-pointer group"
                    onClick={() => setLightboxImage({ src: "/images/PHOTO-2025-12-05-20-11-53(3).jpg", alt: "Conducting ceremony" })}
                  >
                    <Image
                      src="/images/PHOTO-2025-12-05-20-11-53(3).jpg"
                      alt="Conducting ceremony"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div 
                    className="relative aspect-video rounded-lg overflow-hidden shadow-md cursor-pointer group"
                    onClick={() => setLightboxImage({ src: "/images/PHOTO-2025-12-05-20-11-53(4).jpg", alt: "Temple rituals" })}
                  >
                    <Image
                      src="/images/PHOTO-2025-12-05-20-11-53(4).jpg"
                      alt="Temple rituals"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-temple-gold-50 p-6 rounded-lg border-l-4 border-temple-gold-600 mb-8">
              <h4 className="font-semibold text-deep-indigo-900 mb-2">Services & Expertise</h4>
              <p className="text-text-muted text-sm mb-3">
                Specialized in a wide array of traditional rituals performed with strict adherence to Vedic scriptures:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-text-muted">
                <div>
                  <strong className="text-temple-gold-700">Sacred Homams:</strong> Ganapathi, Sudarsana, Prathyangira, Swayamvara & more
                </div>
                <div>
                  <strong className="text-temple-gold-700">Sacred Poojas:</strong> Bhagavathi Seva, Chakra Pooja, Parihara Karmas & more
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/about" 
                className="inline-block px-6 py-3 bg-deep-indigo-900 text-white rounded-md hover:bg-deep-indigo-800 transition-colors font-semibold"
              >
                Learn More About His Journey
              </Link>
            </div>
          </div>
        </div>
      </Section>

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
