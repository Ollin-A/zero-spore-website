"use client";

import Link from "next/link";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import ParallaxImage from "@/components/scroll/ParallaxImage";

export default function AboutPreview() {
  return (
    <MoodSection mood="about">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Photo — left on desktop, top on mobile */}
        <div className="lg:col-span-2">
          <FadeUp>
            {/* TODO: REPLACE — Unsplash placeholder */}
            <ParallaxImage
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Zero Spore Restoration team at work"
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
              A family restoring families&apos; homes
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-(--text-max) leading-relaxed text-muted">
              When water or mold threatens your home, you need people who
              understand what&apos;s at stake. We&apos;re a family-owned
              restoration company based in Sheridan, Oregon — and we treat every
              home like our own.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="mt-4 max-w-(--text-max) leading-relaxed text-muted">
              With over a decade of experience in emergency restoration,
              we&apos;ve built our reputation on showing up fast, communicating
              honestly, and restoring homes to their best condition. Every job
              gets our full attention — because for us, this isn&apos;t just
              work. It&apos;s personal.
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center font-medium text-forest hover:underline"
            >
              Learn our story <span className="ml-1">→</span>
            </Link>
          </FadeUp>
        </div>
      </div>
    </MoodSection>
  );
}
