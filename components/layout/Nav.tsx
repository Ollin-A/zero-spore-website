"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { useMood } from "@/components/scroll/ScrollMoodProvider";
import { NAV_LINKS } from "@/data/navigation";
import { BUSINESS } from "@/data/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Nav() {
  const { isDark } = useMood();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Scroll detection — solid nav after 80px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus management for mobile menu
  useEffect(() => {
    if (mobileOpen) {
      closeRef.current?.focus();
    } else {
      hamburgerRef.current?.focus();
    }
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isHomepage = pathname === "/";

  // Nav colors based on mood + scroll state
  // On homepage hero (dark bg, not scrolled): transparent + ivory text
  // On inner pages (light bg, not scrolled): transparent + carbon text
  // Once scrolled: solid bg matching mood + appropriate text
  const navBg = scrolled
    ? isDark
      ? "rgba(11, 29, 46, 0.95)"
      : "rgba(253, 251, 247, 0.95)"
    : "transparent";

  const useLight = isDark || (!scrolled && isHomepage);
  const navText = useLight ? "var(--ivory)" : "var(--carbon)";
  const backdrop = scrolled ? "blur(12px)" : "none";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
        style={{
          backgroundColor: navBg,
          color: navText,
          backdropFilter: backdrop,
          WebkitBackdropFilter: backdrop,
        }}
      >
        <div className="mx-auto flex h-16 max-w-(--max-width) items-center justify-between px-5 lg:h-[72px] lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2">
            <Image
              src={useLight ? "/logo/isotipo-white.svg" : "/logo/isotipo-color.svg"}
              alt="Zero Spore"
              width={36}
              height={36}
              className="h-8 w-8 lg:h-9 lg:w-9"
            />
            <span className="font-sans text-base font-medium">
              {BUSINESS.shortName}
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 font-sans font-medium transition-colors duration-200 text-(length:--font-nav-size) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2",
                      isActive(item.href) && "text-forest",
                    )}
                    style={{ color: isActive(item.href) ? undefined : "inherit" }}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    aria-controls="services-dropdown"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={cn(
                        "transition-transform duration-200",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={cn(
                      "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200",
                      servicesOpen
                        ? "pointer-events-auto opacity-100 translate-y-0"
                        : "pointer-events-none opacity-0 -translate-y-1",
                    )}
                  >
                    <ul id="services-dropdown" className="min-w-[200px] rounded-(--radius-card) border border-stone bg-cream p-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block rounded-(--radius-button) px-4 py-2.5 font-sans text-sm font-medium text-carbon transition-colors hover:bg-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2",
                              isActive(child.href) && "text-forest bg-warm",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-sans font-medium transition-colors duration-200 text-(length:--font-nav-size) rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2",
                      isActive(item.href)
                        ? "text-forest"
                        : "hover:opacity-75",
                    )}
                    style={{ color: isActive(item.href) ? undefined : "inherit" }}
                  >
                    {item.label}
                  </Link>
                  {isActive(item.href) && (
                    <div className="mx-auto mt-0.5 h-0.5 w-full rounded-full bg-forest" />
                  )}
                </li>
              ),
            )}
          </ul>

          {/* Desktop phone */}
          <a
            href={BUSINESS.phoneTel}
            className="hidden items-center gap-2 font-sans text-(length:--font-nav-size) font-medium transition-opacity hover:opacity-75 lg:flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
          >
            <Phone size={16} strokeWidth={1.5} />
            {BUSINESS.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="flex h-12 w-12 items-center justify-center rounded-sm lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-60 bg-cream transition-transform duration-300 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5" onClick={closeMobile}>
            <Image
              src="/logo/isotipo-color.svg"
              alt="Zero Spore"
              width={36}
              height={36}
              className="h-8 w-8"
            />
            <span className="font-sans text-base font-medium text-carbon">
              {BUSINESS.shortName}
            </span>
          </Link>
          <button
            ref={closeRef}
            onClick={closeMobile}
            aria-label="Close menu"
            className="flex h-12 w-12 items-center justify-center rounded-sm text-carbon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-col gap-5 px-8 pt-8">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="flex w-full items-center justify-between font-sans text-2xl font-medium text-carbon"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {item.label}
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className={cn(
                      "transition-transform duration-200",
                      mobileServicesOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    mobileServicesOpen
                      ? "grid-rows-[1fr] mt-3 opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="font-sans text-lg font-medium text-muted transition-colors hover:text-carbon"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-2xl font-medium text-carbon"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ),
          )}

          <div className="mt-8">
            <Button href={BUSINESS.phoneTel} className="w-full">
              Call {BUSINESS.phone}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
