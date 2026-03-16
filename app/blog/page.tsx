import type { Metadata } from "next";
import { PAGE_SEO } from "@/data/seo";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: PAGE_SEO.blog.title,
  description: PAGE_SEO.blog.description,
  alternates: { canonical: PAGE_SEO.blog.canonical },
  openGraph: {
    title: PAGE_SEO.blog.title,
    description: PAGE_SEO.blog.description,
    url: PAGE_SEO.blog.canonical,
  },
};

export default function BlogPage() {
  return (
    <MoodSection mood="about">
      <div className="mx-auto max-w-(--text-max) text-center">
        <FadeUp>
          <h1
            className="font-heading"
            style={{
              fontSize: "var(--font-h1-size)",
              lineHeight: "var(--font-h1-lh)",
              letterSpacing: "-0.02em",
            }}
          >
            Restoration insights
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mx-auto mt-6 w-16 border-b border-stone" />
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-muted" style={{ fontSize: "var(--font-h3-size)", lineHeight: "var(--font-h3-lh)" }}>
            Tips and guides for Oregon homeowners. Coming soon.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mt-4 leading-relaxed text-muted">
            We are preparing expert guides on water damage prevention, mold
            awareness, and home restoration for Oregon&apos;s climate. Check
            back soon — or reach out if you have a question now.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-8">
            <Button href="/contact">Get in touch</Button>
          </div>
        </FadeUp>
      </div>
    </MoodSection>
  );
}
