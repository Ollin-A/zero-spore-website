import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageContent from "@/components/services/ServicePageContent";
import { getAlternates } from "@/lib/i18n";

const service = getService("emergency");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  ...getAlternates(
    "/services/emergency",
    "/es/servicios/emergencias",
    "en",
  ),
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `/services/${service.slug}`,
  },
};

export default function EmergencyPage() {
  return <ServicePageContent service={service} />;
}
