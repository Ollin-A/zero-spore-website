import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import { PAGE_SEO } from "@/data/seo";
import { getAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  ...getAlternates("/contact", "/es/contacto", "en"),
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
