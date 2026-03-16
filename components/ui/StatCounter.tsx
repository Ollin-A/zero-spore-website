"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number | string;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
}: StatCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (typeof value !== "number" || !numberRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
        numberRef.current.textContent = `${prefix}${value}${suffix}`;
        return;
      }

      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
          }
        },
      });
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <div ref={containerRef} className={cn("text-center", className)}>
      <span
        ref={numberRef}
        className="block font-sans text-3xl font-medium md:text-4xl"
      >
        {typeof value === "string"
          ? `${prefix}${value}${suffix}`
          : `${prefix}0${suffix}`}
      </span>
      <span className="mt-1 block text-sm text-ivory-dim">{label}</span>
    </div>
  );
}
