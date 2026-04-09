import type { Metadata } from "next";
import { getServiceES } from "@/data/services";
import ServicePageContent from "@/components/services/ServicePageContent";
import { getAlternates } from "@/lib/i18n";

const service = getServiceES("remediacion-de-moho");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  ...getAlternates(
    "/services/mold-remediation",
    "/es/servicios/remediacion-de-moho",
    "es",
  ),
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    locale: "es_US",
    url: "/es/servicios/remediacion-de-moho",
  },
};

export default function RemediacionDeMohoPage() {
  return <ServicePageContent service={service} />;
}
