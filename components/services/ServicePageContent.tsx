"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/gsap";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureGrid from "@/components/services/FeatureGrid";
import ProcessVertical from "@/components/services/ProcessVertical";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedServices from "@/components/services/RelatedServices";
import WhyChooseContrast from "@/components/services/WhyChooseContrast";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import type { ServiceData } from "@/data/services";
import { useDict } from "@/lib/use-dict";

// useLayoutEffect on client, useEffect on server (SSR safety)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface ServicePageContentProps {
  service: ServiceData;
}

export default function ServicePageContent({
  service,
}: ServicePageContentProps) {
  const dict = useDict();
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
        locale={dict.locale}
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

      {/* Disclaimer callout (mold page) */}
      {service.disclaimer && (
        <MoodSection mood="about">
          <FadeUp>
            <div className="mx-auto max-w-(--text-max) rounded-(--radius-card) border border-stone bg-warm p-6 text-sm leading-relaxed text-muted">
              <p className="mb-2 font-medium text-carbon">{dict.servicePage.importantNote}</p>
              <p>{service.disclaimer}</p>
            </div>
          </FadeUp>
        </MoodSection>
      )}

      {/* Why Choose Us section */}
      {service.whyChooseUs && (
        <MoodSection mood="services">
          <WhyChooseContrast
            headingText={dict.servicePage.whyChooseUs}
            intro={service.whyChooseUs.intro}
            points={service.whyChooseUs.points}
            trustMarkers={service.whyChooseUs.trustMarkers ?? []}
          />
        </MoodSection>
      )}

      <MoodSection mood="services">
        <FAQAccordion items={service.faqs} serviceName={service.title} />
      </MoodSection>

      <RelatedServices relatedSlugs={service.relatedSlugs} />
    </>
  );
}
