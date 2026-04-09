"use client";

import Link from "next/link";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import ParallaxImage from "@/components/scroll/ParallaxImage";
import { useDict } from "@/lib/use-dict";

export default function AboutPreview() {
  const dict = useDict();
  return (
    <MoodSection mood="about">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Photo — left on desktop, top on mobile */}
        <div className="lg:col-span-2">
          <FadeUp>
            <ParallaxImage
              src="/images/services/mold-remediation-hero.webp"
              alt="Zero Spore Restoration technician at work"
              width={600}
              height={800}
              rate={0.1}
              className="aspect-3/4 w-full"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </FadeUp>
        </div>

        {/* Text — right on desktop, below on mobile */}
        <div className="flex flex-col justify-center lg:col-span-3">
          <FadeUp>
            <h2
              className="font-serif"
              style={{
                fontSize: "var(--font-h2-size)",
                lineHeight: "var(--font-h2-lh)",
              }}
            >
              {dict.about.headline}
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-(--text-max) leading-relaxed text-muted">
              {dict.about.body1}
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="mt-4 max-w-(--text-max) leading-relaxed text-muted">
              {dict.about.body2}
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Link
              href={dict.nav.about.href}
              className="mt-6 inline-flex items-center font-medium text-forest hover:underline"
            >
              {dict.about.link} <span className="ml-1">→</span>
            </Link>
          </FadeUp>
        </div>
      </div>
    </MoodSection>
  );
}
