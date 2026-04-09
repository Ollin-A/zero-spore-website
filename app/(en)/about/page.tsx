import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import { PAGE_SEO } from "@/data/seo";
import { getAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  ...getAlternates("/about", "/es/sobre-nosotros", "en"),
  openGraph: {
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
