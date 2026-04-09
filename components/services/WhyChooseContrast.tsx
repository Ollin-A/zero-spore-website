"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import FadeUp from "@/components/scroll/FadeUp";
import type { ContrastPoint } from "@/data/services";

interface WhyChooseContrastProps {
  headingText: string;
  intro: string;
  points: ContrastPoint[];
  trustMarkers: string[];
}

export default function WhyChooseContrast({
  headingText,
  intro,
  points,
  trustMarkers,
}: WhyChooseContrastProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftItemsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const rightItemsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const dividerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<HTMLDivElement>(null);

  // Reset arrays on every render so refs stay accurate after remounts.
  leftItemsRef.current = [];
  rightItemsRef.current = [];

  useGSAP(
    () => {
      const leftItems = leftItemsRef.current.filter(
        (el): el is HTMLParagraphElement => el !== null,
      );
      const rightItems = rightItemsRef.current.filter(
        (el): el is HTMLParagraphElement => el !== null,
      );

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
        leftItems.forEach((el) => {
          gsap.set(el, { opacity: 0.45, y: 0 });
          const line = el.querySelector(".strike-line");
          if (line) gsap.set(line, { scaleX: 1 });
        });
        rightItems.forEach((el) => gsap.set(el, { opacity: 1, x: 0 }));
        if (dividerRef.current) gsap.set(dividerRef.current, { scaleY: 1 });
        if (markersRef.current)
          gsap.set(markersRef.current, { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Phase 2: Left items fade in as normal text
      tl.fromTo(
        leftItems,
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.4,
      );

      // Phase 3: Strikethrough sweeps + text dims
      leftItems.forEach((el, i) => {
        const line = el.querySelector(".strike-line");
        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.35, ease: "power2.inOut" },
            1.0 + i * 0.08,
          );
        }
        tl.to(
          el,
          { opacity: 0.45, duration: 0.3, ease: "power1.out" },
          1.05 + i * 0.08,
        );
      });

      // Phase 4: Vertical divider draws
      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.5, ease: "power2.out" },
          1.2,
        );
      }

      // Phase 5: Right items enter
      tl.fromTo(
        rightItems,
        { opacity: 0, x: 12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.12,
          ease: "power2.out",
        },
        1.5,
      );

      // Phase 6: Trust markers
      if (markersRef.current) {
        tl.fromTo(
          markersRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          2.4,
        );
      }
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <div ref={sectionRef}>
      {/* Heading */}
      <FadeUp>
        <h2
          className="font-serif"
          style={{
            fontSize: "var(--font-h2-size)",
            lineHeight: "var(--font-h2-lh)",
          }}
        >
          {headingText}
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          {intro}
        </p>
      </FadeUp>

      {/* Desktop: 3-column contrast grid */}
      <div className="mt-12 hidden lg:grid lg:grid-cols-[1fr_1px_1fr] lg:items-center lg:gap-0">
        {/* Left — what they do */}
        <div className="flex flex-col gap-5 pr-12 text-right">
          {points.map((point, i) => (
            <p
              key={`them-${i}`}
              ref={(el) => {
                leftItemsRef.current[i] = el;
              }}
              className="relative text-[15px] leading-relaxed text-hint"
              style={{ opacity: 0 }}
            >
              {point.them}
              <span
                className="strike-line absolute left-0 top-1/2 h-px w-full bg-hint/60"
                style={{ transformOrigin: "left", transform: "scaleX(0)" }}
              />
            </p>
          ))}
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="h-full min-h-[200px] bg-stone"
          style={{ transformOrigin: "top", transform: "scaleY(0)" }}
        />

        {/* Right — what we do */}
        <div className="flex flex-col gap-5 pl-12">
          {points.map((point, i) => (
            <p
              key={`us-${i}`}
              ref={(el) => {
                rightItemsRef.current[i] = el;
              }}
              className="font-serif text-[17px] leading-relaxed text-carbon"
              style={{ opacity: 0 }}
            >
              {point.us}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile: interleaved pairs */}
      <div className="mt-10 flex flex-col gap-6 lg:hidden">
        {points.map((point, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div className="flex flex-col gap-1.5">
              <p className="text-sm text-hint line-through decoration-hint/50">
                {point.them}
              </p>
              <p className="font-serif text-base text-carbon">{point.us}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Trust markers */}
      {trustMarkers.length > 0 && (
        <div
          ref={markersRef}
          className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-stone pt-6"
          style={{ opacity: 0 }}
        >
          {trustMarkers.map((marker) => (
            <span key={marker} className="text-xs text-hint">
              <span className="mr-1.5 text-forest">✓</span>
              {marker}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
