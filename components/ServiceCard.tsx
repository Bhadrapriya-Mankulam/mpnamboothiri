import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Service } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
  imageIndex?: number;
}

export default function ServiceCard({ service, className, imageIndex = 1 }: ServiceCardProps) {
  const imageSrc = `/images/PHOTO-2025-12-05-20-11-53(${imageIndex}).jpg`;
  
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "block bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-temple-stone-200 hover:border-gilded-gold-500/30 group overflow-hidden",
        className
      )}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-heading text-xl font-semibold text-white mb-1">
            {service.name}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-text-muted text-sm mb-4">{service.short}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.onSite && (
            <span className="px-2 py-1 bg-peacock-teal-700/10 text-peacock-teal-700 rounded text-xs">
              On-site
            </span>
          )}
          {service.online && (
            <span className="px-2 py-1 bg-peacock-teal-700/10 text-peacock-teal-700 rounded text-xs">
              Online
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">Duration: {service.duration}</span>
          <span className="text-sm font-semibold text-deep-indigo-900 group-hover:text-saffron-600 transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

