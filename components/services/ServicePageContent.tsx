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
import FadeUp from "@/components/scroll/FadeUp";
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

      {/* Disclaimer callout (mold page) */}
      {service.disclaimer && (
        <MoodSection mood="about">
          <FadeUp>
            <div className="mx-auto max-w-(--text-max) rounded-(--radius-card) border border-stone bg-warm p-6 text-sm leading-relaxed text-muted">
              <p className="mb-2 font-medium text-carbon">Important note</p>
              <p>{service.disclaimer}</p>
            </div>
          </FadeUp>
        </MoodSection>
      )}

      {/* Why Choose Us section */}
      {service.whyChooseUs && (
        <MoodSection mood="services">
          <FadeUp>
            <h2
              className="font-serif"
              style={{
                fontSize: "var(--font-h2-size)",
                lineHeight: "var(--font-h2-lh)",
              }}
            >
              Why choose us
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-4 max-w-(--text-max) leading-relaxed text-muted">
              {service.whyChooseUs.intro}
            </p>
          </FadeUp>
          <div className="mt-10 grid gap-(--grid-gap) sm:grid-cols-2 lg:grid-cols-3">
            {service.whyChooseUs.items.map((item, i) => (
              <FadeUp key={item.title} delay={0.1 + i * 0.05} className="h-full">
                <div className="flex h-full flex-col rounded-(--radius-card) border border-stone bg-white p-(--card-padding)">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          {service.whyChooseUs.closing && (
            <FadeUp delay={0.3}>
              <p className="mt-8 max-w-(--text-max) leading-relaxed text-muted">
                {service.whyChooseUs.closing}
              </p>
            </FadeUp>
          )}
        </MoodSection>
      )}

      <MoodSection mood="services">
        <FAQAccordion items={service.faqs} serviceName={service.title} />
      </MoodSection>

      <RelatedServices relatedSlugs={service.relatedSlugs} />
    </>
  );
}
