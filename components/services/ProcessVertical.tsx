import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import type { ProcessStep } from "@/data/services";

interface ProcessVerticalProps {
  steps: ProcessStep[];
}

export default function ProcessVertical({ steps }: ProcessVerticalProps) {
  return (
    <MoodSection mood="about">
      <FadeUp>
        <h2
          className="text-center font-serif"
          style={{
            fontSize: "var(--font-h2-size)",
            lineHeight: "var(--font-h2-lh)",
          }}
        >
          Our process
        </h2>
      </FadeUp>

      <div className="relative mx-auto mt-12 max-w-(--text-max)">
        {/* Vertical connecting line */}
        <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-forest lg:left-8" />

        {steps.map((step, i) => (
          <FadeUp key={step.number} delay={0.1 * i}>
            <div
              className={`relative flex gap-6 lg:gap-8 ${i < steps.length - 1 ? "mb-12" : ""}`}
            >
              {/* Number circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-lg font-medium text-white lg:h-16 lg:w-16">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3
                  className="font-sans font-medium"
                  style={{
                    fontSize: "var(--font-h3-size)",
                    lineHeight: "var(--font-h3-lh)",
                  }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </MoodSection>
  );
}
