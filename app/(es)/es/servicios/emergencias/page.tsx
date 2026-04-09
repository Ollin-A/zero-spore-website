import type { Metadata } from "next";
import { getServiceES } from "@/data/services";
import ServicePageContent from "@/components/services/ServicePageContent";
import { getAlternates } from "@/lib/i18n";

const service = getServiceES("emergencias");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  ...getAlternates(
    "/services/emergency",
    "/es/servicios/emergencias",
    "es",
  ),
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    locale: "es_US",
    url: "/es/servicios/emergencias",
  },
};

export default function EmergenciasPage() {
  return <ServicePageContent service={service} />;
}
