import Link from "next/link";
import { Sparkles, Flame, Star } from "lucide-react";
import { Service } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "block bg-gradient-to-br from-white to-temple-stone-50 rounded-lg shadow-md hover:shadow-xl transition-all border border-temple-stone-200 hover:border-gilded-gold-500/50 group overflow-hidden",
        className
      )}
    >
      <div className="relative bg-gradient-to-r from-saffron-600 to-temple-gold-600 p-6">
        <div className="flex items-center justify-between">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
            <Flame className="w-8 h-8 text-white" />
          </div>
          <Star className="w-6 h-6 text-white/40 group-hover:text-white/80 transition-colors" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-deep-indigo-900 mb-2 group-hover:text-saffron-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-text-muted text-sm mb-4 line-clamp-2">{service.short}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.onSite && (
            <span className="px-3 py-1 bg-peacock-teal-700/10 text-peacock-teal-700 rounded-full text-xs font-medium">
              On-site
            </span>
          )}
          {service.online && (
            <span className="px-3 py-1 bg-peacock-teal-700/10 text-peacock-teal-700 rounded-full text-xs font-medium">
              Online
            </span>
          )}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-temple-stone-200">
          <span className="text-sm text-text-muted flex items-center gap-1">
            <Sparkles className="w-4 h-4" />
            {service.duration}
          </span>
          <span className="text-sm font-semibold text-deep-indigo-900 group-hover:text-saffron-600 transition-colors flex items-center gap-1">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

