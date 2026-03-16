import { Droplets, Shield, Siren } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import { BUSINESS } from "@/data/constants";
import { SERVICES } from "@/data/services";

const PRIMARY_ICONS: Record<string, LucideIcon> = {
  "water-damage": Droplets,
  "mold-remediation": Shield,
  emergency: Siren,
};

interface RelatedServicesProps {
  relatedSlugs: string[];
}

export default function RelatedServices({ relatedSlugs }: RelatedServicesProps) {
  return (
    <MoodSection mood="about">
      {/* CTA block */}
      <FadeUp>
        <div className="text-center">
          <h2
            className="font-heading"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            Ready to restore your home?
          </h2>
          <p className="mx-auto mt-4 max-w-(--text-max) text-muted">
            Whether it&rsquo;s an emergency or a planned inspection, we&rsquo;re
            here to help. Reach out and we&rsquo;ll respond within hours.
          </p>
          <div className="mt-8">
            <Button href="/contact">Schedule your free inspection</Button>
          </div>
          <a
            href={BUSINESS.phoneTel}
            className="mt-4 inline-block font-medium text-forest transition-colors hover:text-[#156835]"
          >
            Or call {BUSINESS.phone}
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
          Related services
        </h3>
      </FadeUp>

      <div className="mx-auto mt-8 grid max-w-3xl gap-(--grid-gap) md:grid-cols-2">
        {relatedSlugs.map((slug, i) => {
          const related = SERVICES[slug];
          if (!related) return null;
          const Icon = PRIMARY_ICONS[slug];
          return (
            <FadeUp key={slug} delay={0.2 + i * 0.1}>
              <ServiceCard
                icon={Icon}
                title={related.title}
                description={related.subline}
                href={`/services/${slug}`}
                accentColor={related.accentColor}
              />
            </FadeUp>
          );
        })}
      </div>
    </MoodSection>
  );
}
