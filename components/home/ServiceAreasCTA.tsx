"use client";

import Link from "next/link";
import { MapPinIcon } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";
import { useDict } from "@/lib/use-dict";

const AREAS = [
  { name: "Sheridan", slug: "sheridan" },
  { name: "Portland", slug: "portland" },
  { name: "Salem", slug: "salem" },
  { name: "Lincoln City", slug: "lincoln-city" },
  { name: "Yamhill County", slug: "yamhill-county" },
  { name: "McMinnville", slug: "mcminnville" },
  { name: "Newberg", slug: "newberg" },
] as const;

export default function ServiceAreasCTA() {
  const dict = useDict();
  return (
    <MoodSection mood="social" id="service-areas">
      <div className="flex flex-col items-center text-center">
        <FadeUp>
          <h2
            className="font-serif"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            {dict.serviceAreas.heading}
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mx-auto mt-4 max-w-(--text-max) text-muted">
            {dict.serviceAreas.body}
          </p>
        </FadeUp>

        {/* Area pills — horizontal scroll on mobile */}
        <FadeUp delay={0.25} className="w-full">
          <div className="mt-10 overflow-hidden -mx-5 lg:-mx-8">
            <div
              className="overflow-x-auto no-scrollbar px-5 lg:px-8"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-3 w-max py-2 mx-auto lg:w-auto lg:flex-wrap lg:justify-center">
                {AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-(--radius-badge) border border-stone bg-white px-4 py-2 text-sm font-medium text-carbon transition-colors hover:border-forest hover:text-forest"
                  >
                    <MapPinIcon className="h-3.5 w-3.5" />
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.35}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button href={dict.nav.contact.href}>{dict.serviceAreas.cta}</Button>
            <Link
              href={dict.nav.contact.href}
              className="text-sm font-medium text-forest transition-colors hover:text-[#156835]"
            >
              {dict.serviceAreas.secondary}
            </Link>
          </div>
        </FadeUp>
      </div>
    </MoodSection>
  );
}
