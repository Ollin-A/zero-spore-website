"use client";

import Image from "next/image";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import ParallaxImage from "@/components/scroll/ParallaxImage";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/data/constants";
import { HonestyIcon, SpeedIcon, CareIcon } from "@/components/icons";
import { useDict } from "@/lib/use-dict";

const VALUE_ICONS = [HonestyIcon, SpeedIcon, CareIcon];

const STORY_IMAGES = [
  {
    src: "/images/services/mold-remediation-hero.webp",
    alt: "Zero Spore Restoration technician removing mold from a wall",
    reverse: false,
  },
  {
    src: "/images/services/mold-inspection.webp",
    alt: "Zero Spore technician inspecting a room for mold damage",
    reverse: true,
  },
  {
    src: "/images/about/portland-oregon.webp",
    alt: "Aerial view of Portland, Oregon — Broadway Bridge and downtown skyline",
    reverse: false,
  },
];

export default function AboutContent() {
  const dict = useDict();
  const t = dict.aboutPage;
  const storyBlocks = t.storyBlocks.map((block, i) => ({
    ...block,
    image: STORY_IMAGES[i].src,
    imageAlt: STORY_IMAGES[i].alt,
    reverse: STORY_IMAGES[i].reverse,
  }));

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
            {t.heroHeadline}
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-4 text-lg text-muted">{t.heroSubline}</p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <div className="relative mt-10 aspect-21/9 overflow-hidden rounded-(--radius-image)">
            <Image
              src="/images/about/portland-oregon.webp"
              alt="Aerial view of Portland, Oregon"
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
        {storyBlocks.map((block, i) => (
          <div key={block.heading} className={i > 0 ? "mt-20 lg:mt-28" : ""}>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
            {t.valuesHeading}
          </h2>
        </FadeUp>
        <div className="mt-12 grid gap-(--grid-gap) md:grid-cols-3">
          {t.values.map((value, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <FadeUp key={value.title} delay={i * 0.1}>
                <div className="rounded-(--radius-card) border border-stone bg-white p-(--card-padding) text-center">
                  <Icon className="mx-auto h-10 w-10 text-forest" />
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
            {t.teamHeading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="mx-auto mt-12 max-w-md text-center">
            <div className="mx-auto aspect-square w-48 overflow-hidden rounded-full">
              <Image
                src="/images/team/rogelio-portrait.webp"
                alt="Rogelio Caudillo, owner of Zero Spore Restoration"
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
              {t.teamRole}
            </h3>
            <p className="mt-1 text-sm text-forest">{t.teamFounder}</p>
            <p className="mx-auto mt-4 max-w-(--text-max) leading-relaxed text-muted">
              {t.teamBio}
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
              {t.ctaHeading}
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mx-auto mt-4 max-w-(--text-max) text-lg text-muted">
              {t.ctaBody}
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href={dict.nav.contact.href}>{t.ctaPrimary}</Button>
              <Button variant="secondary" href={BUSINESS.phoneTel}>
                {t.ctaSecondaryPrefix}
                {BUSINESS.phone}
              </Button>
            </div>
          </FadeUp>
        </div>
      </MoodSection>
    </>
  );
}
