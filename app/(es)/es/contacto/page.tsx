import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import { getAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contacto | Zero Spore Restoration | Oregon",
  description:
    "Contacta a Zero Spore Restoration para servicios de restauración en Oregon. Inspecciones gratuitas. Hablamos español. Llama 24/7: (503) 302-0557.",
  ...getAlternates("/contact", "/es/contacto", "es"),
  openGraph: {
    title: "Contacto | Zero Spore Restoration | Oregon",
    description:
      "Contacta a Zero Spore Restoration. Hablamos español. (503) 302-0557.",
    locale: "es_US",
    url: "/es/contacto",
  },
};

export default function ContactoPage() {
  return <ContactContent />;
}
