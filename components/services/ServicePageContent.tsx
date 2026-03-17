"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/gsap";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureGrid from "@/components/services/FeatureGrid";
import ProcessVertical from "@/components/services/ProcessVertical";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedServices from "@/components/services/RelatedServices";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import MoodSection from "@/components/scroll/MoodSection";
import type { ServiceData } from "@/data/services";

// useLayoutEffect on client, useEffect on server (SSR safety)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface ServicePageContentProps {
  service: ServiceData;
}

export default function ServicePageContent({
  service,
}: ServicePageContentProps) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  // When pathname changes: unmount children, scroll to top, then remount.
  // useLayoutEffect fires synchronously before the browser paints,
  // ensuring scroll is at 0 before any ScrollTrigger instances are created.
  useIsomorphicLayoutEffect(() => {
    setIsReady(false);
    window.scrollTo(0, 0);

    const raf = requestAnimationFrame(() => {
      setIsReady(true);

      // After children mount and create ScrollTriggers, refresh positions
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
        });
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  if (!isReady) {
    return null;
  }

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
