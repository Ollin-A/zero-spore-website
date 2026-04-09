import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WaterDamageIcon, MoldRemediationIcon, EmergencyIcon, MapPinIcon, PhoneIcon, type IconComponent } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { BUSINESS } from "@/data/constants";
import { getArea, getAllAreaSlugs, AREAS } from "@/data/areas";

const SERVICE_ICONS: Record<string, IconComponent> = {
  "water-damage": WaterDamageIcon,
  "mold-remediation": MoldRemediationIcon,
  emergency: EmergencyIcon,
};

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const area = AREAS[city];
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { city } = await params;
  const area = AREAS[city];
  if (!area) notFound();

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <MoodSection mood="about">
        <FadeUp>
          <h1
            className="font-serif text-center"
            style={{
              fontSize: "var(--font-h1-size)",
              lineHeight: "var(--font-h1-lh)",
              letterSpacing: "-0.02em",
            }}
          >
            Water damage and mold restoration in{" "}
            <span className="text-forest">{area.name}</span>, Oregon
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mx-auto mt-4 max-w-(--text-max) text-center text-muted">
            {area.subline}
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2 text-sm font-medium text-forest">
            <MapPinIcon className="h-4 w-4" />
            <span>Response time: {area.responseTime}</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">
              Schedule your free inspection
            </Button>
            <Button variant="secondary" href={BUSINESS.phoneTel}>
              <PhoneIcon className="mr-2 h-4 w-4" />
              {BUSINESS.phone}
            </Button>
          </div>
        </FadeUp>
      </MoodSection>

      {/* ── Content paragraphs ──────────────────────────────────────── */}
      <MoodSection mood="services">
        <div className="mx-auto max-w-(--text-max)">
          {area.heroContent.map((paragraph, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <p className="mt-6 first:mt-0 leading-relaxed text-muted">
                {paragraph}
              </p>
            </FadeUp>
          ))}
        </div>
      </MoodSection>

      {/* ── Services grid ───────────────────────────────────────────── */}
      <MoodSection mood="about">
        <FadeUp>
          <h2
            className="font-serif text-center"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            Restoration services in {area.name}
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-(--grid-gap) sm:grid-cols-2 lg:grid-cols-3">
          {area.services.map((service, i) => (
            <FadeUp key={service.slug} delay={i * 0.1}>
              <ServiceCard
                icon={SERVICE_ICONS[service.slug] ?? WaterDamageIcon}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                accentColor={service.accentColor}
              />
            </FadeUp>
          ))}
        </div>
      </MoodSection>

      {/* ── Why Zero Spore ──────────────────────────────────────────── */}
      <MoodSection mood="services">
        <FadeUp>
          <h2
            className="font-serif text-center"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            {area.whyHeading}
          </h2>
        </FadeUp>

        <div className="mx-auto mt-8 max-w-(--text-max)">
          {area.whyContent.map((paragraph, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <p className="mt-6 first:mt-0 leading-relaxed text-muted">
                {paragraph}
              </p>
            </FadeUp>
          ))}
        </div>
      </MoodSection>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <MoodSection mood="about">
        <FAQAccordion items={area.faqs} serviceName={area.name} />
      </MoodSection>

      {/* ── CTA + Related Areas ─────────────────────────────────────── */}
      <MoodSection mood="services">
        <FadeUp>
          <div className="text-center">
            <h2
              className="font-serif"
              style={{
                fontSize: "var(--font-h2-size)",
                lineHeight: "var(--font-h2-lh)",
              }}
            >
              Ready to restore your home?
            </h2>
            <p className="mx-auto mt-4 max-w-(--text-max) text-muted">
              Schedule your free inspection in {area.name} or call us directly.
              We respond around the clock.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Schedule inspection</Button>
              <Button variant="secondary" href={BUSINESS.phoneTel}>
                <PhoneIcon className="mr-2 h-4 w-4" />
                {BUSINESS.phone}
              </Button>
            </div>
          </div>
        </FadeUp>

        {/* Related areas */}
        {area.relatedSlugs.length > 0 && (
          <FadeUp delay={0.1}>
            <div className="mt-16 text-center">
              <h3
                className="font-sans font-medium"
                style={{
                  fontSize: "var(--font-h3-size)",
                  lineHeight: "var(--font-h3-lh)",
                }}
              >
                We also serve
              </h3>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {area.relatedSlugs.map((slug) => {
                  const related = AREAS[slug];
                  if (!related) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/areas/${slug}`}
                      className="rounded-(--radius-badge) border border-stone px-4 py-2 text-sm font-medium transition-colors hover:bg-warm"
                    >
                      {related.name}, OR
                    </Link>
                  );
                })}
              </div>
            </div>
          </FadeUp>
        )}
      </MoodSection>
    </>
  );
}
