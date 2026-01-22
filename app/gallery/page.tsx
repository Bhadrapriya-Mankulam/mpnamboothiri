import { Metadata } from "next";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery - Vedic Priest Mumbai",
  description: "Gallery of sacred ceremonies, rituals, and temple imagery.",
};

const galleryImages = [
  { id: 1, src: "/images/PHOTO-2025-12-05-20-11-53(1).jpg", alt: "Sacred Ceremony" },
  { id: 2, src: "/images/PHOTO-2025-12-05-20-11-53(2).jpg", alt: "Vedic Ritual" },
  { id: 3, src: "/images/PHOTO-2025-12-05-20-11-53(3).jpg", alt: "Temple Pooja" },
  { id: 4, src: "/images/PHOTO-2025-12-05-20-11-53(4).jpg", alt: "Homam Ceremony" },
  { id: 5, src: "/images/PHOTO-2025-12-05-20-11-53(5).jpg", alt: "Traditional Ritual" },
  { id: 6, src: "/images/PHOTO-2025-12-05-20-11-53(6).jpg", alt: "Sacred Fire Ritual" },
  { id: 7, src: "/images/PHOTO-2025-12-05-20-11-53(7).jpg", alt: "Vedic Ceremony" },
  { id: 8, src: "/images/PHOTO-2025-12-05-20-11-53(8).jpg", alt: "Ritual Performance" },
  { id: 9, src: "/images/PHOTO-2025-12-05-20-11-53.jpg", alt: "Temple Service" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              Gallery
            </h1>
            <p className="text-xl text-text-muted">
              Sacred imagery from ceremonies and temples
            </p>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-gilded-gold-500/0 group-hover:border-gilded-gold-500/50 transition-colors rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

