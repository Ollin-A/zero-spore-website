"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureGrid from "@/components/services/FeatureGrid";
import ProcessVertical from "@/components/services/ProcessVertical";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedServices from "@/components/services/RelatedServices";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import MoodSection from "@/components/scroll/MoodSection";
import type { ServiceData } from "@/data/services";

interface ServicePageContentProps {
  service: ServiceData;
}

export default function ServicePageContent({
  service,
}: ServicePageContentProps) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <SchemaMarkup
        type="service"
        serviceData={{
          name: service.title,
          description: service.metaDescription,
          slug: service.slug,
        }}
      />
      <ServiceHero service={service} />
      <FeatureGrid
        features={service.features}
        accentColor={service.accentColor}
      />
      <ProcessVertical steps={service.process} />
      <MoodSection mood="services">
        <FAQAccordion items={service.faqs} serviceName={service.title} />
      </MoodSection>
      <RelatedServices relatedSlugs={service.relatedSlugs} />
    </>
  );
}
