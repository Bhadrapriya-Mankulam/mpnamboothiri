import { Testimonial } from "@/lib/content";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-temple-stone-200">
      <Quote className="w-8 h-8 text-saffron-600/30 mb-4" />
      <p className="text-text-muted mb-6 italic">{testimonial.text}</p>
      <div className="border-t border-temple-stone-200 pt-4">
        <p className="font-semibold text-deep-indigo-900">{testimonial.name}</p>
        <p className="text-sm text-text-muted">{testimonial.location}</p>
        <p className="text-xs text-saffron-600 mt-1">{testimonial.service}</p>
      </div>
    </div>
  );
}

