import { Metadata } from "next";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";

export const metadata: Metadata = {
  title: "About - Vedic Priest Mumbai",
  description: "Learn about our traditional Vedic priest, training, lineage, and values.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              About the Priest
            </h1>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-temple-stone-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-temple-stone-700 text-sm">Portrait Image</p>
                  <p className="text-temple-stone-700 text-xs mt-2">Add image at /public/images/placeholder-portrait.jpg</p>
                </div>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                  Traditional Vedic Lineage
                </h2>
                <p className="text-text-muted mb-4">
                  With over 15 years of dedicated service, I bring authentic
                  Vedic traditions to Mumbai. Trained in traditional gurukul
                  settings under respected gurus, I perform pujas, homams, and
                  samskara ceremonies with precision and devotion.
                </p>
                <p className="text-text-muted mb-4">
                  My training encompasses the study of Vedic texts, mantras,
                  and ritual procedures, ensuring that each ceremony is
                  performed according to traditional standards.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-6">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-temple-stone-200/30 rounded-lg">
                  <h3 className="font-semibold text-deep-indigo-900 mb-2">
                    Cleanliness
                  </h3>
                  <p className="text-text-muted text-sm">
                    All rituals are performed with utmost cleanliness and
                    hygiene standards.
                  </p>
                </div>
                <div className="p-6 bg-temple-stone-200/30 rounded-lg">
                  <h3 className="font-semibold text-deep-indigo-900 mb-2">
                    Punctuality
                  </h3>
                  <p className="text-text-muted text-sm">
                    Respecting auspicious timings and your schedule with
                    perfect punctuality.
                  </p>
                </div>
                <div className="p-6 bg-temple-stone-200/30 rounded-lg">
                  <h3 className="font-semibold text-deep-indigo-900 mb-2">
                    Authenticity
                  </h3>
                  <p className="text-text-muted text-sm">
                    Preserving traditional methods and mantras passed down
                    through generations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-6">
                Temple Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-lg overflow-hidden bg-temple-stone-200 flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <p className="text-temple-stone-700 text-xs text-center px-2">Temple Image {i}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

