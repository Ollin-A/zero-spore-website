// Server-side i18n helpers (no React hooks). Use these from RSC and metadata exports.
// Client-side, prefer `useDict()` from `lib/use-dict.ts`.

import { en } from "@/data/i18n/en";
import { es } from "@/data/i18n/es";
import type { Locale } from "@/data/i18n/routes";
import type { Dict } from "@/data/i18n/types";

const BASE_URL = "https://zerosporerestoration.com";

const dicts: Record<Locale, Dict> = { en, es };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

/**
 * Builds a `metadata.alternates` object with canonical + hreflang links.
 * Pass the EN path and the equivalent ES path; this returns alternates for both.
 */
export function getAlternates(enPath: string, esPath: string, locale: Locale = "en") {
  const canonical = locale === "es" ? `${BASE_URL}${esPath}` : `${BASE_URL}${enPath}`;
  return {
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}${enPath}`,
        es: `${BASE_URL}${esPath}`,
        "x-default": `${BASE_URL}${enPath}`,
      },
    },
  };
}
