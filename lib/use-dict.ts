"use client";

// Client-side hook: derives locale from the current pathname and returns the dict.
// Use this in client components inside the home page, contact form, nav, etc.

import { usePathname } from "next/navigation";
import { en } from "@/data/i18n/en";
import { es } from "@/data/i18n/es";
import { getLocaleFromPath, type Locale } from "@/data/i18n/routes";
import type { Dict } from "@/data/i18n/types";

const dicts: Record<Locale, Dict> = { en, es };

export function useLocale(): Locale {
  const pathname = usePathname() || "/";
  return getLocaleFromPath(pathname);
}

export function useDict(): Dict {
  return dicts[useLocale()];
}
