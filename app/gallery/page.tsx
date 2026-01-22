import { Metadata } from "next";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";

export const metadata: Metadata = {
  title: "Gallery - Vedic Priest Mumbai",
  description: "Gallery of sacred ceremonies, rituals, and temple imagery.",
};

const galleryImages = [
  { id: 1, src: "/images/PHOTO-2025-12-05-20-11-53(1).jpg", alt: "Ceremony 1" },
  { id: 2, src: "/images/PHOTO-2025-12-05-20-11-53(2).jpg", alt: "Ceremony 2" },
  { id: 3, src: "/images/PHOTO-2025-12-05-20-11-53(3).jpg", alt: "Ceremony 3" },
  { id: 4, src: "/images/PHOTO-2025-12-05-20-11-53(4).jpg", alt: "Ceremony 4" },
  { id: 5, src: "/images/PHOTO-2025-12-05-20-11-53(5).jpg", alt: "Ceremony 5" },
  { id: 6, src: "/images/PHOTO-2025-12-05-20-11-53(6).jpg", alt: "Ceremony 6" },
  { id: 7, src: "/images/PHOTO-2025-12-05-20-11-53(7).jpg", alt: "Ceremony 7" },
  { id: 8, src: "/images/PHOTO-2025-12-05-20-11-53(8).jpg", alt: "Ceremony 8" },
  { id: 9, src: "/images/PHOTO-2025-12-05-20-11-53.jpg", alt: "Ceremony 9" },
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
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer bg-temple-stone-200 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-center p-4">
                  <p className="text-temple-stone-700 text-sm">{image.alt}</p>
                  <p className="text-temple-stone-700 text-xs mt-1">Add image at {image.src}</p>
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

