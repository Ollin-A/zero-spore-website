import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureGrid from "@/components/services/FeatureGrid";
import ProcessVertical from "@/components/services/ProcessVertical";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedServices from "@/components/services/RelatedServices";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import MoodSection from "@/components/scroll/MoodSection";

const service = getService("emergency");

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

export default function EmergencyPage() {
  return (
    <>
      <SchemaMarkup
        type="service"
        serviceData={{ name: service.title, description: service.metaDescription, slug: service.slug }}
      />
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} accentColor={service.accentColor} />
      <ProcessVertical steps={service.process} />
      <MoodSection mood="services">
        <FAQAccordion items={service.faqs} serviceName={service.title} />
      </MoodSection>
      <RelatedServices relatedSlugs={service.relatedSlugs} />
    </>
  );
}
