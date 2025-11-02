"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Service } from "@/lib/content";

interface BookingFormProps {
  services: Service[];
}

export default function BookingForm({ services }: BookingFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (data: {
    name: string;
    phone: string;
    email: string;
    service: string;
    date: string;
    location: string;
  }) => {
    const newErrors: Record<string, string> = {};

    if (!data.name || data.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!data.phone || data.phone.length < 10) {
      newErrors.phone = "Phone number must be valid";
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!data.service) {
      newErrors.service = "Please select a service";
    }
    if (!data.date) {
      newErrors.date = "Please select a date";
    }
    if (!data.location || data.location.length < 3) {
      newErrors.location = "Location must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      date: formData.get("date") as string,
      location: formData.get("location") as string,
      notes: formData.get("notes") as string,
      honeypot: formData.get("website"), // Honeypot field
    };

    // Honeypot check
    if (data.honeypot) {
      setIsSubmitting(false);
      return;
    }

    // Client-side validation
    if (!validateForm(data)) {
      setIsSubmitting(false);
      return;
    }

    // For static sites, we'll use mailto or redirect to success page
    // You can integrate with Formspree, EmailJS, or similar services here
    try {
      // Option 1: Use mailto link (works everywhere)
      const subject = encodeURIComponent(`Booking Request: ${data.service}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nDate: ${data.date}\nLocation: ${data.location}\nNotes: ${data.notes || "None"}`
      );
      
      // Redirect to mailto (will open email client)
      // Or you can use a service like Formspree
      window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
      
      // Also redirect to success page after a delay
      setTimeout(() => {
        router.push("/booking/success");
      }, 1000);
    } catch (error) {
      setErrors({ form: "Something went wrong. Please try again." });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.form && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
          {errors.form}
        </div>
      )}

      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-deep-indigo-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-temple-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-600"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-deep-indigo-900 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-temple-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-600"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-deep-indigo-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-temple-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-600"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-deep-indigo-900 mb-2">
          Service *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2 border border-temple-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-600"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-deep-indigo-900 mb-2">
          Preferred Date *
        </label>
        <input
          type="date"
          id="date"
          name="date"
          required
          min={new Date().toISOString().split("T")[0]}
          className="w-full px-4 py-2 border border-temple-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-600"
        />
        {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-deep-indigo-900 mb-2">
          Location (Address or Area) *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          placeholder="e.g., Andheri West, Mumbai"
          className="w-full px-4 py-2 border border-temple-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-600"
        />
        {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-deep-indigo-900 mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full px-4 py-2 border border-temple-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-600"
          placeholder="Any special requirements or questions..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-saffron-600 text-white rounded-md hover:bg-saffron-600/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
      >
        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
      </button>

      <p className="text-sm text-text-muted text-center">
        We&apos;ll contact you within 24 hours to confirm the ceremony and discuss
        auspicious timings.
      </p>
    </form>
  );
}
