import type { Metadata } from "next";
import { PAGE_SEO } from "@/data/seo";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: PAGE_SEO.privacy.title,
  description: PAGE_SEO.privacy.description,
  alternates: { canonical: PAGE_SEO.privacy.canonical },
  openGraph: {
    title: PAGE_SEO.privacy.title,
    description: PAGE_SEO.privacy.description,
    url: PAGE_SEO.privacy.canonical,
  },
};

export default function PrivacyPage() {
  return (
    <MoodSection mood="about">
      <div className="mx-auto max-w-(--text-max) text-center">
        <FadeUp>
          <h1
            className="font-serif"
            style={{
              fontSize: "var(--font-h1-size)",
              lineHeight: "var(--font-h1-lh)",
              letterSpacing: "-0.02em",
            }}
          >
            Privacy policy
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mx-auto mt-6 w-16 border-b border-stone" />
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 leading-relaxed text-muted">
            This page is under construction. Please check back soon for our
            complete privacy policy.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-8">
            <Button variant="secondary" href="/">
              Back to homepage
            </Button>
          </div>
        </FadeUp>
      </div>
    </MoodSection>
  );
}
