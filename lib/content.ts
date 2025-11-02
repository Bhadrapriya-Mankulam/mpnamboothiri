import siteContent from "@/content/site.json";
import servicesContent from "@/content/services.json";
import testimonialsContent from "@/content/testimonials.json";
import navContent from "@/content/nav.json";
import i18nContent from "@/content/i18n/en.json";

export interface SiteData {
  name: string;
  shortTagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  languages: string[];
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  duration: string;
  itemsClient: string[];
  itemsPriest: string[];
  startingDakshina: string;
  onSite: boolean;
  online: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  service: string;
}

export const getSiteData = (): SiteData => siteContent as SiteData;
export const getServices = (): Service[] => servicesContent as Service[];
export const getService = (slug: string): Service | undefined => {
  const services = getServices();
  return services.find((s) => s.slug === slug);
};
export const getTestimonials = (): Testimonial[] => testimonialsContent as Testimonial[];
export const getNavContent = () => navContent;
export const getI18nContent = () => i18nContent;

