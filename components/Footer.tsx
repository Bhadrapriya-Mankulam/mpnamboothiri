import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { getSiteData } from "@/lib/content";

export default function Footer() {
  const siteData = getSiteData();

  return (
    <footer className="bg-deep-indigo-900 text-temple-stone-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-white">
              Pandit
            </h3>
            <p className="text-sm">{siteData.shortTagline}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${siteData.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteData.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteData.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {siteData.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <p className="text-sm">Mumbai Metropolitan Region</p>
            <p className="text-xs mt-2 text-temple-stone-700">
              Services are performed as per Vedic tradition. Availability
              subject to muhurat and prior bookings.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-temple-stone-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/public/attribution.md" className="hover:text-white">
              Image Attributions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

