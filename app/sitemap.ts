import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://zerosporerestoration.com";

const bilingualPages: { en: string; es: string }[] = [
  { en: "/", es: "/es" },
  { en: "/about", es: "/es/sobre-nosotros" },
  { en: "/contact", es: "/es/contacto" },
  { en: "/services/water-damage", es: "/es/servicios/danos-por-agua" },
  { en: "/services/mold-remediation", es: "/es/servicios/remediacion-de-moho" },
  { en: "/services/emergency", es: "/es/servicios/emergencias" },
];

const englishOnly: string[] = [
  "/blog",
  "/terms",
  "/privacy",
  "/areas/sheridan",
  "/areas/portland",
  "/areas/salem",
  "/areas/lincoln-city",
  "/areas/mcminnville",
  "/areas/newberg",
  "/areas/yamhill-county",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of bilingualPages) {
    const languages = {
      en: `${BASE}${page.en}`,
      es: `${BASE}${page.es}`,
    };
    entries.push({
      url: `${BASE}${page.en}`,
      lastModified: now,
      alternates: { languages },
    });
    entries.push({
      url: `${BASE}${page.es}`,
      lastModified: now,
      alternates: { languages },
    });
  }

  for (const path of englishOnly) {
    entries.push({
      url: `${BASE}${path}`,
      lastModified: now,
    });
  }

  return entries;
}
