import type { Metadata } from "next";
import Image from "next/image";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import ParallaxImage from "@/components/scroll/ParallaxImage";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/data/constants";
import { PAGE_SEO } from "@/data/seo";
import { HonestyIcon, SpeedIcon, CareIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  alternates: { canonical: PAGE_SEO.about.canonical },
  openGraph: {
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    url: PAGE_SEO.about.canonical,
  },
};

const STORY_BLOCKS = [
  {
    heading: "How it started",
    copy1: "We didn\u2019t set out to start a restoration company. It started with our own home \u2014 a water leak we caught too late, and a remediation crew that cut corners and overcharged. We saw the damage that careless work leaves behind, and we knew Oregon families deserved better. So we got trained, got certified, and got to work.",
    copy2: "That was over a decade ago. Since then, we\u2019ve restored hundreds of homes across the Willamette Valley, from flooded basements in Sheridan to mold-damaged crawlspaces in McMinnville. Every job still feels personal, because it is.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    imageAlt: "Restoration team working on a home project",
    reverse: false,
  },
  {
    heading: "What drives us",
    copy1: "We\u2019ve seen what happens when water sits too long or mold goes untreated. We\u2019ve seen families displaced, belongings ruined, and insurance claims denied because the previous company didn\u2019t document properly. That\u2019s not how we operate.",
    copy2: "Every home we walk into gets the same treatment: honest assessment, clear communication, thorough work, and documentation your insurance company can actually use. We answer our own phone, we show up when we say we will, and we don\u2019t leave until the job is done right.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    imageAlt: "Beautiful Oregon home exterior",
    reverse: true,
  },
  {
    heading: "Rooted in Oregon",
    copy1: "Sheridan is home. We know the climate here \u2014 the relentless rain, the coastal storms that sweep through the Valley, the damp crawlspaces that come with older Pacific Northwest homes. We understand the specific challenges Oregon homeowners face because we face them too.",
    copy2: "From our base in Sheridan, we serve communities across the state \u2014 Portland, Salem, McMinnville, Lincoln City, Newberg, and everywhere in between. No matter where you are in Oregon, we\u2019ll get to you.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
    imageAlt: "Oregon Pacific Northwest forest landscape",
    reverse: false,
  },
];

const VALUES = [
  {
    icon: HonestyIcon,
    title: "Honesty",
    description:
      "We tell you exactly what we find, what it will take to fix, and what it will cost. No upselling, no surprise charges, no pressure. If something doesn\u2019t need to be replaced, we\u2019ll say so.",
  },
  {
    icon: SpeedIcon,
    title: "Speed",
    description:
      "Water and mold don\u2019t wait, and neither do we. We respond within the hour across Sheridan and surrounding areas, 24 hours a day, 7 days a week. Every minute we save is damage we prevent.",
  },
  {
    icon: CareIcon,
    title: "Care",
    description:
      "Your home holds your life. We understand that, and we treat every job with the respect it deserves. We protect your belongings, communicate at every step, and leave your home better than we found it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <MoodSection mood="about">
        <FadeUp>
          <h1
            className="font-serif"
            style={{
              fontSize: "var(--font-h1-size)",
              lineHeight: "var(--font-h1-lh)",
              letterSpacing: "var(--font-h1-ls)",
            }}
          >
            More than a restoration company
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-4 text-lg text-muted">
            We&apos;re a family protecting families
          </p>
        </FadeUp>
        <FadeUp delay={0.25}>
          {/* TODO: REPLACE — Unsplash placeholder */}
          <div className="relative mt-10 aspect-21/9 overflow-hidden rounded-(--radius-image)">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
              alt="Oregon home in the Willamette Valley"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </FadeUp>
      </MoodSection>

      {/* Our Story */}
      <MoodSection mood="services">
        {STORY_BLOCKS.map((block, i) => (
          <div
            key={block.heading}
            className={i > 0 ? "mt-20 lg:mt-28" : ""}
          >
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Text */}
              <div className={block.reverse ? "lg:order-2" : ""}>
                <FadeUp>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: "var(--font-h2-size)",
                      lineHeight: "var(--font-h2-lh)",
                    }}
                  >
                    {block.heading}
                  </h2>
                </FadeUp>
                <FadeUp delay={0.15}>
                  <p className="mt-6 max-w-(--text-max) leading-relaxed text-muted">
                    {block.copy1}
                  </p>
                </FadeUp>
                <FadeUp delay={0.25}>
                  <p className="mt-4 max-w-(--text-max) leading-relaxed text-muted">
                    {block.copy2}
                  </p>
                </FadeUp>
              </div>

              {/* Photo */}
              <div className={block.reverse ? "lg:order-1" : ""}>
                <FadeUp delay={0.2}>
                  {/* TODO: REPLACE — Unsplash placeholder */}
                  <ParallaxImage
                    src={block.image}
                    alt={block.imageAlt}
                    width={800}
                    height={600}
                    rate={i === 1 ? 0.15 : 0.1}
                    className="aspect-4/3 w-full rounded-(--radius-image)"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </FadeUp>
              </div>
            </div>
          </div>
        ))}
      </MoodSection>

      {/* Values */}
      <MoodSection mood="about">
        <FadeUp>
          <h2
            className="text-center font-serif"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            What we stand for
          </h2>
        </FadeUp>
        <div className="mt-12 grid gap-(--grid-gap) md:grid-cols-3">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <FadeUp key={value.title} delay={i * 0.1}>
                <div className="rounded-(--radius-card) border border-stone bg-white p-(--card-padding) text-center">
                  <Icon
                    className="mx-auto h-10 w-10 text-forest"
                  />
                  <h3
                    className="mt-4 font-sans font-medium"
                    style={{
                      fontSize: "var(--font-h3-size)",
                      lineHeight: "var(--font-h3-lh)",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </MoodSection>

      {/* Team */}
      <MoodSection mood="services">
        <FadeUp>
          <h2
            className="text-center font-serif"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            The team behind Zero Spore
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="mx-auto mt-12 max-w-md text-center">
            {/* TODO: REPLACE — Unsplash placeholder */}
            <div className="mx-auto aspect-square w-48 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Owner of Zero Spore Restoration"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <h3
              className="mt-6 font-sans font-medium"
              style={{
                fontSize: "var(--font-h3-size)",
                lineHeight: "var(--font-h3-lh)",
              }}
            >
              {/* TODO: REPLACE — real owner name */}
              Owner &amp; Lead Technician
            </h3>
            <p className="mt-1 text-sm text-forest">
              Founder, Zero Spore Restoration
            </p>
            <p className="mx-auto mt-4 max-w-(--text-max) leading-relaxed text-muted">
              With over a decade of hands-on experience in water damage
              mitigation and mold remediation, our founder built Zero Spore on a
              simple principle: treat every home like your own. Based in
              Sheridan, Oregon, and serving communities across the state.
            </p>
          </div>
        </FadeUp>
      </MoodSection>

      {/* CTA */}
      <MoodSection mood="about">
        <div className="text-center">
          <FadeUp>
            <h2
              className="font-serif"
              style={{
                fontSize: "var(--font-h2-size)",
                lineHeight: "var(--font-h2-lh)",
              }}
            >
              Ready to work with a team that truly cares?
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mx-auto mt-4 max-w-(--text-max) text-lg text-muted">
              Whether you&apos;re facing an emergency or planning ahead,
              we&apos;re here to help. Reach out and let&apos;s talk about your
              home.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact">Schedule your free inspection</Button>
              <Button variant="secondary" href={BUSINESS.phoneTel}>
                Call {BUSINESS.phone}
              </Button>
            </div>
          </FadeUp>
        </div>
      </MoodSection>
    </>
  );
}
