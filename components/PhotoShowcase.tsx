import Section from "./Section";
import StoneDivider from "./StoneDivider";
import Image from "next/image";

export default function PhotoShowcase() {
  const showcaseImages = [
    { 
      src: "/images/PHOTO-2025-12-05-20-11-53(3).jpg", 
      alt: "Performing sacred rituals",
      caption: "Sacred Rituals"
    },
    { 
      src: "/images/PHOTO-2025-12-05-20-11-53(4).jpg", 
      alt: "Temple ceremonies",
      caption: "Temple Ceremonies"
    },
    { 
      src: "/images/PHOTO-2025-12-05-20-11-53(5).jpg", 
      alt: "Vedic homam",
      caption: "Vedic Homams"
    },
    { 
      src: "/images/PHOTO-2025-12-05-20-11-53(6).jpg", 
      alt: "Spiritual guidance",
      caption: "Spiritual Guidance"
    },
  ];

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
            Spiritual Journey in Pictures
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A glimpse into the sacred rituals and ceremonies performed with devotion and precision
          </p>
          <StoneDivider className="max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {showcaseImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-square"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-indigo-900/80 via-deep-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm text-center">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional larger images */}
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/PHOTO-2025-12-05-20-11-53(7).jpg"
              alt="Traditional Kerala rituals"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/PHOTO-2025-12-05-20-11-53(8).jpg"
              alt="Vedic ceremonies"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/PHOTO-2025-12-05-20-11-53.jpg"
              alt="Sacred homam ceremony"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
