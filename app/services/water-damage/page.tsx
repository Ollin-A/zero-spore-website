import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageContent from "@/components/services/ServicePageContent";

const service = getService("water-damage");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/services/${service.slug}` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `/services/${service.slug}`,
  },
};

export default function WaterDamagePage() {
  return <ServicePageContent key={service.slug} service={service} />;
}
