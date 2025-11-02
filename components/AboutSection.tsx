import Section from "./Section";
import StoneDivider from "./StoneDivider";

export default function AboutSection() {
  return (
    <Section className="bg-gradient-to-b from-white to-temple-stone-200/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
              About the Priest
            </h2>
            <StoneDivider className="max-w-xs mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-temple-stone-200 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-temple-stone-700 text-sm">Portrait Image</p>
                <p className="text-temple-stone-700 text-xs mt-2">Add image at /public/images/placeholder-portrait.jpg</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                Traditional Vedic Lineage
              </h3>
              <p className="text-text-muted mb-4">
                With over 15 years of dedicated service, I bring authentic Vedic
                traditions to Mumbai. Trained in traditional gurukul settings,
                I perform pujas, homams, and samskara ceremonies with precision
                and devotion.
              </p>
              <p className="text-text-muted mb-4">
                My services extend across Mumbai Metropolitan Region, offering
                both on-site ceremonies and remote guidance for devotees
                worldwide.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-saffron-600">✓</span>
                  <span className="text-text-muted">Punctuality & Cleanliness</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-saffron-600">✓</span>
                  <span className="text-text-muted">Authentic Ritual Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-saffron-600">✓</span>
                  <span className="text-text-muted">Multilingual Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

