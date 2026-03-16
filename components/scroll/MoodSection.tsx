import { cn } from "@/lib/utils";

export interface MoodColors {
  bg: string;
  text: string;
  accent: string;
}

export const MOOD_PRESETS: Record<string, MoodColors> = {
  hero: { bg: "var(--midnight)", text: "var(--ivory)", accent: "var(--cyan)" },
  about: { bg: "var(--cream)", text: "var(--carbon)", accent: "var(--forest)" },
  services: { bg: "#FFFFFF", text: "var(--carbon)", accent: "var(--ocean)" },
  emergency: { bg: "var(--midnight)", text: "var(--ivory)", accent: "var(--alert)" },
  process: { bg: "var(--warm)", text: "var(--carbon)", accent: "var(--forest)" },
  social: { bg: "var(--cream)", text: "var(--carbon)", accent: "var(--forest)" },
  footer: { bg: "var(--carbon)", text: "var(--warm)", accent: "var(--forest)" },
};

interface MoodSectionProps {
  mood: keyof typeof MOOD_PRESETS | MoodColors;
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  noPadding?: boolean;
}

export default function MoodSection({
  mood,
  children,
  className,
  id,
  fullHeight = false,
  noPadding = false,
}: MoodSectionProps) {
  const colors = typeof mood === "string" ? MOOD_PRESETS[mood] : mood;

  return (
    <section
      id={id}
      data-mood-bg={colors.bg}
      data-mood-text={colors.text}
      data-mood-accent={colors.accent}
      className={cn(
        "relative w-full",
        !noPadding && "py-(--section-py-m) lg:py-(--section-py)",
        fullHeight && "min-h-screen",
        className,
      )}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      <div className="mx-auto max-w-(--max-width) px-5 lg:px-8">
        {children}
      </div>
    </section>
  );
}
