import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageContent from "@/components/services/ServicePageContent";
import { getAlternates } from "@/lib/i18n";

const service = getService("mold-remediation");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  ...getAlternates(
    "/services/mold-remediation",
    "/es/servicios/remediacion-de-moho",
    "en",
  ),
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `/services/${service.slug}`,
  },
};

export default function MoldRemediationPage() {
  return <ServicePageContent service={service} />;
}
