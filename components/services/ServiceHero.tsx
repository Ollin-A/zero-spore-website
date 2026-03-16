import Image from "next/image";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/data/constants";
import type { ServiceData } from "@/data/services";

interface ServiceHeroProps {
  service: ServiceData;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const isEmergency = service.slug === "emergency";

  return (
    <MoodSection mood="about" id={`${service.slug}-hero`}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text column */}
        <div>
          <FadeUp>
            <h1
              className="font-heading"
              style={{
                fontSize: "var(--font-h1-size)",
                lineHeight: "var(--font-h1-lh)",
                letterSpacing: "var(--font-h1-ls)",
              }}
            >
              {service.headline}
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-4 text-lg text-muted">{service.subline}</p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="mt-6 max-w-(--text-max) leading-relaxed text-muted">
              {service.body}
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                variant={isEmergency ? "emergency" : "primary"}
                href="/contact"
              >
                Schedule your free inspection
              </Button>
              <Button variant="secondary" href={BUSINESS.phoneTel}>
                Emergency? Call now
              </Button>
            </div>
          </FadeUp>
        </div>

        {/* Image column */}
        <FadeUp delay={0.2}>
          <div className="relative aspect-4/3 overflow-hidden rounded-(--radius-image)">
            {/* TODO: REPLACE — Unsplash placeholder */}
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </FadeUp>
      </div>
    </MoodSection>
  );
}
