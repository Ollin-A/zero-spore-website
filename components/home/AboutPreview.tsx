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
              We are a family-owned and locally operated business in Sheridan,
              OR. Our approach is hands-on and personal. From the first phone
              call to the final inspection, we work closely with each client
              offering clear guidance, honest recommendations and thorough
              support every step of the way.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mt-4 max-w-(--text-max) leading-relaxed text-muted">
              We provide expert residential service to the Willamette Valley,
              Portland Metro area and many other cities and communities in
              between. Because we are locally owned and operated, we are familiar
              with the challenges of high humidity in the Pacific Northwest as
              well as the architectural diversity of our area.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
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
