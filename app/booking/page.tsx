import { Metadata } from "next";
import Section from "@/components/Section";
import BookingForm from "@/components/BookingForm";
import StoneDivider from "@/components/StoneDivider";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Puja - Vedic Priest Mumbai",
  description: "Schedule your Vedic ceremony. Fill out the booking form and we&apos;ll contact you to confirm.",
};

export default function BookingPage() {
  const services = getServices();

  return (
    <>
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              Book a Puja
            </h1>
            <p className="text-xl text-text-muted">
              Fill out the form below and we&apos;ll contact you to confirm the
              ceremony details and auspicious timings.
            </p>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <BookingForm services={services} />
          </div>
        </div>
      </Section>
    </>
  );
}

