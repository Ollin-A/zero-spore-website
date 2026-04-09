import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageContent from "@/components/services/ServicePageContent";
import { getAlternates } from "@/lib/i18n";

const service = getService("water-damage");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  ...getAlternates(
    "/services/water-damage",
    "/es/servicios/danos-por-agua",
    "en",
  ),
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `/services/${service.slug}`,
  },
};

export default function WaterDamagePage() {
  return <ServicePageContent service={service} />;
}
