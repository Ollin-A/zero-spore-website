"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  rate?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  rate = 0.1,
  className,
  sizes = "100vw",
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!innerRef.current || !containerRef.current) return;

      const isDesktop = window.innerWidth >= 768;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!isDesktop || prefersReduced) return;

      const distance = rate * 100;

      gsap.fromTo(
        innerRef.current,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-(--radius-image)", className)}
    >
      <div ref={innerRef} className="relative h-full w-full scale-[1.2]">
        {width && height ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
