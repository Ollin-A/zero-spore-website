import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import EmergencySection from "@/components/home/EmergencySection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import SocialProof from "@/components/home/SocialProof";
import ServiceAreasCTA from "@/components/home/ServiceAreasCTA";
import { getAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title:
    "Zero Spore Restoration | Daños por Agua y Remediación de Moho | Oregon",
  description:
    "Servicios de restauración de emergencia en Oregon. Daños por agua, remediación de moho, y respuesta 24/7. Empresa familiar en Sheridan. Hablamos español. CCB #244908.",
  ...getAlternates("/", "/es", "es"),
  openGraph: {
    title:
      "Zero Spore Restoration | Daños por Agua y Remediación de Moho | Oregon",
    description:
      "Servicios de restauración de emergencia en Oregon. Hablamos español. CCB #244908.",
    locale: "es_US",
    url: "/es",
  },
};

export default function HomeES() {
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
