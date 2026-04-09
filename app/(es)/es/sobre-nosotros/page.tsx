import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import { getAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Zero Spore Restoration | Oregon",
  description:
    "Conoce a Zero Spore Restoration — empresa familiar de restauración en Sheridan, Oregon. Más de 10 años de experiencia. Hablamos español. CCB #244908.",
  ...getAlternates("/about", "/es/sobre-nosotros", "es"),
  openGraph: {
    title: "Sobre Nosotros | Zero Spore Restoration | Oregon",
    description:
      "Empresa familiar de restauración en Sheridan, Oregon. Hablamos español.",
    locale: "es_US",
    url: "/es/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return <AboutContent />;
}
