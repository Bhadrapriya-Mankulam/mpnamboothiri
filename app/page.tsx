import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";

export const metadata: Metadata = {
  title: "Home - Vedic Priest in Mumbai",
  description: "Vedic Priest in Mumbai for Puja, Homam, Samskara & Temple Rituals. 15+ years experience. On-site and remote pujas available.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <Testimonials />
      <ServiceAreas />
    </>
  );
}

