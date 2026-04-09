"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getAlternateUrl,
  getLocaleFromPath,
} from "@/data/i18n/routes";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  /** Optional override styles for the active/inactive state, e.g. dark/light nav. */
  activeClassName?: string;
  inactiveClassName?: string;
}

export default function LanguageSwitcher({
  className,
  activeClassName = "font-medium",
  inactiveClassName = "opacity-50 hover:opacity-80",
}: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const isSpanish = locale === "es";
  const alternate = getAlternateUrl(pathname);

  return (
    <div
      className={cn(
        "flex items-center gap-1 font-sans text-xs",
        className,
      )}
    >
      <Link
        href={isSpanish ? alternate : pathname}
        className={cn(
          "transition-opacity",
          !isSpanish ? activeClassName : inactiveClassName,
        )}
        aria-current={!isSpanish ? "page" : undefined}
      >
        EN
      </Link>
      <span className="opacity-50">|</span>
      <Link
        href={isSpanish ? pathname : alternate}
        className={cn(
          "transition-opacity",
          isSpanish ? activeClassName : inactiveClassName,
        )}
        aria-current={isSpanish ? "page" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
