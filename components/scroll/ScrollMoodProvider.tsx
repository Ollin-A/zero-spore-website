"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface MoodState {
  bg: string;
  text: string;
  accent: string;
  isDark: boolean;
}

const DARK_BACKGROUNDS = [
  "var(--midnight)",
  "var(--carbon)",
  "var(--deep)",
  "var(--navy)",
  "#0b1d2e",
  "#1a1a1a",
  "#122a3f",
  "#1a3a54",
];

const DEFAULT_MOOD: MoodState = {
  bg: "var(--cream)",
  text: "var(--carbon)",
  accent: "var(--forest)",
  isDark: false,
};

const MoodContext = createContext<MoodState>(DEFAULT_MOOD);

export function useMood() {
  return useContext(MoodContext);
}

export default function ScrollMoodProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mood, setMood] = useState<MoodState>(DEFAULT_MOOD);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const updateMood = useCallback(
    (bg: string, text: string, accent: string) => {
      const isDark = DARK_BACKGROUNDS.some(
        (d) => d === bg || bg.includes(d.replace("var(--", "").replace(")", "")),
      );
      setMood({ bg, text, accent, isDark });
    },
    [],
  );

  // IntersectionObserver fallback for prefers-reduced-motion
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!prefersReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const sections =
      container.querySelectorAll<HTMLElement>("[data-mood-bg]");
    if (sections.length === 0) return;

    // Set initial mood
    const first = sections[0];
    updateMood(
      first.dataset.moodBg!,
      first.dataset.moodText!,
      first.dataset.moodAccent!,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            updateMood(
              el.dataset.moodBg!,
              el.dataset.moodText!,
              el.dataset.moodAccent!,
            );
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [updateMood, pathname]);

  // GSAP ScrollTrigger for normal motion
  // Uses useEffect (not useGSAP) to avoid hydration mismatch — useGSAP uses
  // useLayoutEffect which fires during hydration, causing mood state to update
  // before React finishes comparing server vs client HTML.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray<HTMLElement>("[data-mood-bg]");
    if (sections.length === 0) return;

    // Set initial mood from first section
    const first = sections[0];
    updateMood(
      first.dataset.moodBg!,
      first.dataset.moodText!,
      first.dataset.moodAccent!,
    );

    const triggers: ScrollTrigger[] = [];
    sections.forEach((section) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () =>
            updateMood(
              section.dataset.moodBg!,
              section.dataset.moodText!,
              section.dataset.moodAccent!,
            ),
          onEnterBack: () =>
            updateMood(
              section.dataset.moodBg!,
              section.dataset.moodText!,
              section.dataset.moodAccent!,
            ),
        }),
      );
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [pathname, updateMood]);

  return (
    <MoodContext.Provider value={mood}>
      <div ref={containerRef}>{children}</div>
    </MoodContext.Provider>
  );
}
