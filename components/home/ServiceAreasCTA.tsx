import Link from "next/link";
import { MapPin } from "lucide-react";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";

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
            Ready to restore your home?
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mx-auto mt-4 max-w-(--text-max) text-muted">
            Serving communities across Oregon with fast, reliable emergency
            restoration services.
          </p>
        </FadeUp>

        {/* Area pills — horizontal scroll on mobile */}
        <FadeUp delay={0.25} className="w-full">
          {/* Overflow gate — clips horizontal bleed via negative margins */}
          <div className="mt-10 overflow-hidden -mx-5 lg:-mx-8">
            {/* Scroll container — this element actually scrolls */}
            <div
              className="overflow-x-auto no-scrollbar px-5 lg:px-8"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Content row — single line on mobile, wrap on desktop */}
              <div className="flex gap-3 w-max py-2 mx-auto lg:w-auto lg:flex-wrap lg:justify-center">
                {AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-(--radius-badge) border border-stone bg-white px-4 py-2 text-sm font-medium text-carbon transition-colors hover:border-forest hover:text-forest"
                  >
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
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
            <Button href="/contact">Schedule your free inspection</Button>
            <Link
              href="/contact"
              className="text-sm font-medium text-forest transition-colors hover:text-[#156835]"
            >
              Or contact us online →
            </Link>
          </div>
        </FadeUp>
      </div>
    </MoodSection>
  );
}
