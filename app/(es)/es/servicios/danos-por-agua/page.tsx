import type { Metadata } from "next";
import { getServiceES } from "@/data/services";
import ServicePageContent from "@/components/services/ServicePageContent";
import { getAlternates } from "@/lib/i18n";

const service = getServiceES("danos-por-agua");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  ...getAlternates(
    "/services/water-damage",
    "/es/servicios/danos-por-agua",
    "es",
  ),
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    locale: "es_US",
    url: "/es/servicios/danos-por-agua",
  },
};

export default function DanosPorAguaPage() {
  return <ServicePageContent service={service} />;
}
