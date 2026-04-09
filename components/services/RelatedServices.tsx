"use client";

import { WaterDamageIcon, MoldRemediationIcon, EmergencyIcon, type IconComponent } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import { BUSINESS } from "@/data/constants";
import { SERVICES, SERVICES_ES } from "@/data/services";
import { useDict } from "@/lib/use-dict";

const PRIMARY_ICONS: Record<string, IconComponent> = {
  "water-damage": WaterDamageIcon,
  "mold-remediation": MoldRemediationIcon,
  emergency: EmergencyIcon,
  "danos-por-agua": WaterDamageIcon,
  "remediacion-de-moho": MoldRemediationIcon,
  emergencias: EmergencyIcon,
};

interface RelatedServicesProps {
  relatedSlugs: string[];
}

export default function RelatedServices({ relatedSlugs }: RelatedServicesProps) {
  const dict = useDict();
  const isSpanish = dict.locale === "es";
  const servicesMap = isSpanish ? SERVICES_ES : SERVICES;
  const basePath = isSpanish ? "/es/servicios" : "/services";

  return (
    <MoodSection mood="about">
      {/* CTA block */}
      <FadeUp>
        <div className="text-center">
          <h2
            className="font-serif"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            {dict.related.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-(--text-max) text-muted">
            {dict.related.body}
          </p>
          <div className="mt-8">
            <Button href={dict.nav.contact.href}>{dict.related.primary}</Button>
          </div>
          <a
            href={BUSINESS.phoneTel}
            className="mt-4 inline-block font-medium text-forest transition-colors hover:text-[#156835]"
          >
            {dict.related.secondaryPrefix}{BUSINESS.phone}
          </a>
        </div>
      </FadeUp>

      {/* Related services */}
      <FadeUp delay={0.15}>
        <h3
          className="mt-16 text-center font-sans font-medium"
          style={{
            fontSize: "var(--font-h3-size)",
            lineHeight: "var(--font-h3-lh)",
          }}
        >
          {dict.related.relatedHeading}
        </h3>
      </FadeUp>

      <div className="mx-auto mt-8 grid max-w-3xl gap-(--grid-gap) md:grid-cols-2">
        {relatedSlugs.map((slug, i) => {
          const related = servicesMap[slug];
          if (!related) return null;
          const Icon = PRIMARY_ICONS[slug];
          return (
            <FadeUp key={slug} delay={0.2 + i * 0.1}>
              <ServiceCard
                icon={Icon}
                title={related.title}
                description={related.subline}
                href={`${basePath}/${slug}`}
                accentColor={related.accentColor}
                learnMoreLabel={dict.services.learnMore}
              />
            </FadeUp>
          );
        })}
      </div>
    </MoodSection>
  );
}
