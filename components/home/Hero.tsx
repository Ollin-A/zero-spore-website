"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ChevronDownIcon } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";
import StatCounter from "@/components/ui/StatCounter";
import { BUSINESS, HERO_VIDEO_SRC, HERO_POSTER_SRC } from "@/data/constants";
import { useDict } from "@/lib/use-dict";

export default function Hero() {
  const dict = useDict();
  const indicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!indicatorRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.to(indicatorRef.current, {
        y: 8,
        opacity: 0.4,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: indicatorRef, dependencies: [] },
  );

  return (
    <MoodSection mood="hero" fullHeight noPadding>
      {/* Background — video/poster */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_POSTER_SRC}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover ${HERO_VIDEO_SRC ? "md:hidden" : ""}`}
        />
        {HERO_VIDEO_SRC && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER_SRC}
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
          >
            <source src={HERO_VIDEO_SRC} />
          </video>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-midnight/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <FadeUp>
          <h1
            className="font-serif text-ivory"
            style={{
              fontSize: "var(--font-display-size)",
              lineHeight: "var(--font-display-lh)",
              letterSpacing: "var(--font-display-ls)",
            }}
          >
            {dict.hero.headlineLine1}
            <br />
            {dict.hero.headlineLine2}
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mx-auto mt-6 max-w-(--text-max) text-ivory-dim text-(length:--font-body-size)">
            {dict.hero.subline}
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button dark href={BUSINESS.phoneTel}>
              {dict.hero.cta1} &mdash; {BUSINESS.phone}
            </Button>
            <Button
              variant="secondary"
              dark
              href={dict.nav.contact.href}
            >
              {dict.hero.cta2}
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="mt-12 flex gap-8 md:gap-16">
            {dict.hero.badges.map((badge) => (
              <StatCounter
                key={badge.label}
                value={badge.value}
                prefix={badge.prefix}
                suffix={badge.suffix}
                label={badge.label}
              />
            ))}
          </div>
        </FadeUp>

        {/* Scroll indicator */}
        <div
          ref={indicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDownIcon className="h-6 w-6 text-ivory-dim" />
        </div>
      </div>
    </MoodSection>
  );
}
