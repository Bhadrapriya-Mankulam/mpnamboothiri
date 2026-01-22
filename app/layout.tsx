import type { Metadata } from "next";
import { Cinzel, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetalLayer from "@/components/PetalLayer";
// import TempleAudio from "@/components/TempleAudio";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const notoSerif = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mankulam Purushothaman Namboothiri - Expert Vedic Priest & Astrologer",
  description: "Expert Astrologer & Namboothiri Priest specializing in Kerala-style Homams and Poojas. Over 50 years of spiritual service for devotees across India and worldwide. Book a consultation.",
  keywords: ["vedic priest", "namboothiri priest", "mumbai astrologer", "kerala homam", "vedic astrology", "keraleeya thantric rituals", "chembur priest", "puja services", "homam services"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mankulam Purushothaman Namboothiri",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${notoSerif.variable}`}>
      <body>
        <PetalLayer />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* <TempleAudio /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Vedic Priest Mumbai",
              description: "Traditional Vedic rituals and ceremonies",
              url: "https://gadheyan-dev.github.io/hindu-priest",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "Mumbai",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
