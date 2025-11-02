import Section from "./Section";
import TestimonialCard from "./TestimonialCard";
import { getTestimonials } from "@/lib/content";

export default function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
            Testimonials
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            What devotees say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
}

