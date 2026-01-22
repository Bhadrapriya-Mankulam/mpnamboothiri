import Section from "./Section";
import StoneDivider from "./StoneDivider";
import Link from "next/link";

export default function AboutSection() {
  return (
    <Section className="bg-gradient-to-b from-white to-temple-stone-200/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
              Professional Profile
            </h2>
            <p className="text-xl text-temple-gold-700 font-semibold">50+ Years of Spiritual Service</p>
            <StoneDivider className="max-w-xs mx-auto mb-8 mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-temple-stone-200 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-temple-stone-700 text-sm">Portrait Image</p>
                <p className="text-temple-stone-700 text-xs mt-2">Add image at /public/images/placeholder-portrait.jpg</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-4">
                A Distinguished Namboothiri Priest & Astrologer
              </h3>
              <p className="text-text-muted mb-4">
                With a profound spiritual journey spanning over 50 years, Purushothaman Namboothiri 
                is a distinguished Namboothiri priest and astrologer rooted in the rich traditions of Kerala. 
                His expertise is built upon a lifetime of devotion and the meticulous practice of 
                Keraleeya Thantric rituals.
              </p>
              <p className="text-text-muted mb-4">
                For the past 32 years, he has been a pillar of the spiritual community in Chembur, Mumbai, 
                serving devotees across India and worldwide with authenticity and precision.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-saffron-600 font-bold">✓</span>
                  <span className="text-text-muted">Authentic Kerala-style rituals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-saffron-600 font-bold">✓</span>
                  <span className="text-text-muted">50 years of expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-saffron-600 font-bold">✓</span>
                  <span className="text-text-muted">Former Chief Priest at Ayyappa Temple</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-saffron-600 font-bold">✓</span>
                  <span className="text-text-muted">Global clientele: India, USA, Europe, Middle East</span>
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
  );
}

