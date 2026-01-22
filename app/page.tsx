import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Mankulam Purushothaman Namboothiri - Expert Vedic Priest & Astrologer",
  description: "Expert Astrologer & Priest specializing in Kerala-style Homams and Poojas. Over 50 years of spiritual service for devotees across India and worldwide. Book a consultation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <Testimonials />
    </>
  );
}

