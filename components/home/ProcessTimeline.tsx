"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { AssessmentIcon, MitigationIcon, RestorationIcon, FollowUpIcon, type IconComponent } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: IconComponent;
  image: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Assessment",
    description:
      "We inspect every affected area, document the damage, and provide a detailed estimate \u2014 so you know exactly what to expect.",
    icon: AssessmentIcon,
    /* TODO: REPLACE — Unsplash placeholder */
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  },
  {
    number: "02",
    title: "Mitigation",
    description:
      "Extract standing water, stabilize the structure, and set up industrial drying equipment to prevent further damage.",
    icon: MitigationIcon,
    /* TODO: REPLACE — Unsplash placeholder */
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    number: "03",
    title: "Restoration",
    description:
      "Remove damaged materials, clean and sanitize every surface, and restore your home to pre-damage condition.",
    icon: RestorationIcon,
    /* TODO: REPLACE — Unsplash placeholder */
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
  },
  {
    number: "04",
    title: "Follow-up",
    description:
      "Final moisture testing, quality verification, and follow-up support \u2014 because the job isn\u2019t done until you\u2019re confident.",
    icon: FollowUpIcon,
    /* TODO: REPLACE — Unsplash placeholder */
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current) return;

      const isDesktop = window.innerWidth >= 768;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!isDesktop || prefersReduced) return;

      const track = trackRef.current;
      const cards = track.querySelectorAll<HTMLElement>(".process-card");
      if (cards.length === 0) return;

      // Calculate scroll distance from actual card positions
      const firstCard = cards[0];
      const lastCard = cards[cards.length - 1];
      const trackPadLeft = parseFloat(getComputedStyle(track).paddingLeft);
      const scrollDistance = lastCard.offsetLeft - trackPadLeft;

      // Single unified timeline — track, progress bar, and card opacity all in sync
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Highlight active step label based on scroll progress
            const step = Math.min(
              Math.floor(self.progress * STEPS.length),
              STEPS.length - 1,
            );
            setActiveStep(step);
          },
        },
      });

      // Slide the track left — on the main timeline at position 0
      tl.to(track, { x: -scrollDistance, ease: "none", duration: 1 }, 0);

      // Progress bar — on the same timeline, perfectly synced
      if (progressRef.current) {
        tl.to(
          progressRef.current,
          { scaleX: 1, ease: "none", duration: 1 },
          0,
        );
      }

      // Stagger card entrances — on the same timeline at calculated positions
      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          { opacity: 0.4 },
          { opacity: 1, duration: 0.25, ease: "power2.out" },
          i / cards.length,
        );
      });

      return () => {
        tl.kill();
      };
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <MoodSection mood="process" id="process" noPadding className="scroll-mt-20">
      {/* Desktop: horizontal pin scroll */}
      <div ref={sectionRef} className="hidden md:block">
        {/* Progress bar */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-(--max-width) px-5 pt-(--section-py) pb-8 lg:px-8">
            <FadeUp>
              <h2
                className="font-serif"
                style={{
                  fontSize: "var(--font-h2-size)",
                  lineHeight: "var(--font-h2-lh)",
                }}
              >
                How we restore your home
              </h2>
            </FadeUp>
            {/* Progress indicator */}
            <div className="mt-6 h-0.5 w-full overflow-hidden rounded-full bg-stone">
              <div
                ref={progressRef}
                className="h-full origin-left scale-x-0 bg-forest"
              />
            </div>
            {/* Step labels */}
            <div className="mt-3 flex justify-between">
              {STEPS.map((step, i) => (
                <span
                  key={step.number}
                  className={`text-xs font-medium transition-colors duration-300 ${
                    i <= activeStep
                      ? "text-forest"
                      : "text-muted"
                  }`}
                >
                  {step.number} {step.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 pb-(--section-py) pl-[calc((100vw-var(--max-width))/2+20px)] pr-[max(200px,30vw)]"
          >
            {STEPS.map((step) => (
              <ProcessCard key={step.number} step={step} layout="horizontal" />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical stepper */}
      <div className="py-(--section-py-m) md:hidden">
        <div className="mx-auto max-w-(--max-width) px-5">
          <FadeUp>
            <h2
              className="text-center font-serif"
              style={{
                fontSize: "var(--font-h2-size)",
                lineHeight: "var(--font-h2-lh)",
              }}
            >
              How we restore your home
            </h2>
          </FadeUp>

          <div className="relative mt-10">
            {/* Forest green connecting line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-forest/20" />

            <div className="flex flex-col gap-10">
              {STEPS.map((step, i) => (
                <FadeUp key={step.number} delay={i * 0.1}>
                  <div className="relative flex gap-5">
                    {/* Step number circle */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-medium text-white">
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="overflow-hidden rounded-(--radius-image)">
                        {/* TODO: REPLACE — Unsplash placeholder */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={step.image}
                          alt={`${step.title} — restoration process step ${step.number}`}
                          className="aspect-video w-full object-cover"
                        />
                      </div>
                      <h3
                        className="mt-4 font-sans font-medium"
                        style={{
                          fontSize: "var(--font-h3-size)",
                          lineHeight: "var(--font-h3-lh)",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MoodSection>
  );
}

function ProcessCard({
  step,
  layout,
}: {
  step: Step;
  layout: "horizontal" | "vertical";
}) {
  const Icon = step.icon;

  if (layout === "vertical") return null;

  return (
    <div className="process-card w-[clamp(350px,32vw,480px)] shrink-0">
      <div className="overflow-hidden rounded-(--radius-card) border border-stone bg-white">
        {/* TODO: REPLACE — Unsplash placeholder */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={step.image}
          alt={`${step.title} — restoration process step ${step.number}`}
          className="aspect-video w-full object-cover"
        />
        <div className="p-(--card-padding)">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10">
              <Icon className="h-5 w-5 text-forest" />
            </div>
            <span className="text-xs font-medium tracking-wider text-muted uppercase">
              Step {step.number}
            </span>
          </div>
          <h3
            className="mt-4 font-sans font-medium"
            style={{
              fontSize: "var(--font-h3-size)",
              lineHeight: "var(--font-h3-lh)",
            }}
          >
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
