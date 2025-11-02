import Link from "next/link";
import { Sparkles } from "lucide-react";
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
        "block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-temple-stone-200 hover:border-gilded-gold-500/30 group",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-saffron-600/10 flex items-center justify-center group-hover:bg-saffron-600/20 transition-colors">
          <Sparkles className="w-6 h-6 text-saffron-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold text-deep-indigo-900 mb-2">
            {service.name}
          </h3>
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
            <span className="text-sm font-semibold text-deep-indigo-900">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

