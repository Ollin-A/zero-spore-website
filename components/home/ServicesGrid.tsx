"use client";

import { WaterDamageIcon, MoldRemediationIcon, EmergencyIcon } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import ServiceCard from "@/components/ui/ServiceCard";

const SERVICES = [
  {
    icon: WaterDamageIcon,
    title: "Water Damage",
    description:
      "Fast water extraction, structural drying, and moisture monitoring to protect your home from lasting damage.",
    href: "/services/water-damage",
    accentColor: "text-ocean",
  },
  {
    icon: MoldRemediationIcon,
    title: "Mold Remediation",
    description:
      "Safe, thorough mold removal with containment protocols that protect your family\u2019s health.",
    href: "/services/mold-remediation",
    accentColor: "text-forest",
  },
  {
    icon: EmergencyIcon,
    title: "Emergency Services",
    description:
      "24/7 emergency response when every minute counts. We arrive fast and work until your home is safe.",
    href: "/services/emergency",
    accentColor: "text-alert",
  },
] as const;

export default function ServicesGrid() {
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
            What we restore
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mx-auto mt-4 max-w-(--text-max) text-muted">
            Comprehensive emergency restoration for Oregon homeowners
          </p>
        </FadeUp>
      </div>

      <div className="mt-12 grid gap-(--grid-gap) md:grid-cols-3">
        {SERVICES.map((service, i) => (
          <FadeUp key={service.title} delay={0.1 + i * 0.1}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              accentColor={service.accentColor}
            />
          </FadeUp>
        ))}
      </div>
    </MoodSection>
  );
}
