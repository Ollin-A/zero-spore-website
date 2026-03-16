import type { Metadata } from "next";
import { PAGE_SEO } from "@/data/seo";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import EmergencySection from "@/components/home/EmergencySection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import SocialProof from "@/components/home/SocialProof";
import ServiceAreasCTA from "@/components/home/ServiceAreasCTA";

export const metadata: Metadata = {
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  alternates: { canonical: PAGE_SEO.home.canonical },
  openGraph: {
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    url: PAGE_SEO.home.canonical,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <EmergencySection />
      <ProcessTimeline />
      <SocialProof />
      <ServiceAreasCTA />
    </>
  );
}
