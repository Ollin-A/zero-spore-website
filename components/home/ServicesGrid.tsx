"use client";

import { WaterDamageIcon, MoldRemediationIcon, EmergencyIcon } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import ServiceCard from "@/components/ui/ServiceCard";
import { useDict } from "@/lib/use-dict";

const ICONS = [WaterDamageIcon, MoldRemediationIcon, EmergencyIcon];
const ACCENTS = ["text-ocean", "text-forest", "text-alert"];

export default function ServicesGrid() {
  const dict = useDict();
  return (
    <MoodSection mood="services">
      <div className="text-center">
        <FadeUp>
          <h2
            className="font-serif"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            {dict.services.heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mx-auto mt-4 max-w-(--text-max) text-muted">
            {dict.services.subheading}
          </p>
        </FadeUp>
      </div>

      <div className="mt-12 grid gap-(--grid-gap) md:grid-cols-3">
        {dict.services.cards.map((service, i) => (
          <FadeUp key={service.title} delay={0.1 + i * 0.1}>
            <ServiceCard
              icon={ICONS[i]}
              title={service.title}
              description={service.description}
              href={service.href}
              accentColor={ACCENTS[i]}
              learnMoreLabel={dict.services.learnMore}
            />
          </FadeUp>
        ))}
      </div>
    </MoodSection>
  );
}
