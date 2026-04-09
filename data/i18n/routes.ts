// EN ↔ ES route mapping for the language switcher and sitemap.
// Keys are English paths; values are the equivalent Spanish paths.

export type Locale = "en" | "es";

export const routeMap: Record<string, string> = {
  "/": "/es",
  "/about": "/es/sobre-nosotros",
  "/contact": "/es/contacto",
  "/services/water-damage": "/es/servicios/danos-por-agua",
  "/services/mold-remediation": "/es/servicios/remediacion-de-moho",
  "/services/emergency": "/es/servicios/emergencias",
};

export const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([en, es]) => [es, en]),
);

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "en";
}

/**
 * Returns the equivalent path in the other language.
 * Falls back to the language root if no mapping exists.
 */
export function getAlternateUrl(pathname: string): string {
  // Normalize: drop trailing slash unless it's root.
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (routeMap[normalized]) return routeMap[normalized];
  if (reverseRouteMap[normalized]) return reverseRouteMap[normalized];

  // Unknown page (e.g. /blog, /privacy, /terms, /areas/[city]) — fall back to language root.
  const isSpanish = getLocaleFromPath(normalized) === "es";
  return isSpanish ? "/" : "/es";
}
