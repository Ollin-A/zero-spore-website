"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon, ChevronDownIcon, PhoneIcon, FacebookIcon } from "@/components/icons";
import { useMood } from "@/components/scroll/ScrollMoodProvider";
import { NAV_LINKS } from "@/data/navigation";
import { BUSINESS, SOCIAL } from "@/data/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Nav() {
  const { isDark } = useMood();
  const pathname = usePathname();
  const router = useRouter();
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
      closeRef.current?.focus({ focusVisible: false } as FocusOptions);
    } else {
      hamburgerRef.current?.focus({ focusVisible: false } as FocusOptions);
    }
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Handle anchor links (e.g. /#process) with smooth scrolling
  const handleAnchorClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const hash = href.split("#")[1];
    if (!hash) return;

    const scrollToHash = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (pathname === "/") {
      // Already on homepage — just scroll
      scrollToHash();
    } else {
      // Navigate to homepage, then scroll after hydration
      router.push("/");
      const checkAndScroll = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          requestAnimationFrame(checkAndScroll);
        }
      };
      setTimeout(checkAndScroll, 400);
    }
  }, [pathname, router]);

  const isHomepage = pathname === "/";

  // Nav colors based on mood + scroll state
  // On homepage hero (dark bg, not scrolled): transparent + ivory text
  // On inner pages (light bg, not scrolled): transparent + carbon text
  // Once scrolled: solid bg matching mood + appropriate text
  const navBg = scrolled
    ? isDark
      ? "rgba(0, 0, 0, 0.3)"
      : "rgba(253, 251, 247, 0.8)"
    : "transparent";

  const useLight = isDark || (!scrolled && isHomepage);
  const navText = useLight ? "var(--ivory)" : "var(--carbon)";
  const backdrop = scrolled ? "blur(16px)" : "none";

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
          <Link href="/" className="flex items-center gap-2.5 rounded-sm outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2">
            <Image
              src="/logo/isotipo-color.png"
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
                    <ChevronDownIcon
                      size={14}
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
                    onClick={item.href.includes("#") ? (e) => handleAnchorClick(e, item.href) : undefined}
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
            <PhoneIcon size={16} />
            {BUSINESS.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="flex h-12 w-12 items-center justify-center rounded-lg lg:hidden outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-60 flex flex-col bg-cream transition-opacity duration-250 ease-out lg:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Header bar */}
        <div className="flex h-16 items-center justify-between px-5">
          {/* Close button — custom SVG */}
          <button
            ref={closeRef}
            onClick={closeMobile}
            aria-label="Close menu"
            className="flex h-12 w-12 items-center justify-center rounded-lg text-carbon outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Brand name — centered */}
          <Link
            href="/"
            onClick={closeMobile}
            className="absolute left-1/2 -translate-x-1/2 font-serif text-lg text-carbon"
          >
            {BUSINESS.shortName}
          </Link>

          {/* Language toggle — placeholder */}
          <span className="flex items-center gap-1 font-sans text-xs">
            <span className="font-medium text-forest">EN</span>
            <span className="text-hint">|</span>
            <span className="text-hint">ES</span>
          </span>
        </div>

        {/* Decorative divider */}
        <div className="mx-auto h-px w-10 bg-stone" style={{ marginTop: 12, marginBottom: 12 }} />

        {/* Nav links — centered */}
        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col items-center justify-center gap-7">
          {NAV_LINKS.map((item, index) =>
            item.children ? (
              <div
                key={item.label}
                className="flex flex-col items-center"
                style={{
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  transitionDelay: `${index * 60}ms`,
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <button
                  className="flex items-center gap-2 font-serif text-[26px] text-carbon"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {item.label}
                  {/* Custom chevron SVG */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={cn(
                      "transition-transform duration-200",
                      mobileServicesOpen && "rotate-180",
                    )}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200 ease-out",
                    mobileServicesOpen
                      ? "grid-rows-[1fr] mt-3 opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col items-center gap-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="font-sans text-base text-muted transition-colors hover:text-carbon"
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
                className="font-serif text-[26px] text-carbon"
                onClick={(e) => {
                  if (item.href.includes("#")) {
                    handleAnchorClick(e, item.href);
                    closeMobile();
                  } else {
                    closeMobile();
                  }
                }}
                style={{
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  transitionDelay: `${index * 60}ms`,
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA button */}
        <div className="px-6">
          <a
            href={BUSINESS.phoneTel}
            className="flex w-full items-center justify-center rounded-[10px] bg-forest py-4 font-sans text-[15px] font-medium text-white transition-colors hover:bg-forest/90"
          >
            Call 24/7 — {BUSINESS.phone}
          </a>
        </div>

        {/* Footer bar */}
        <div className="mt-6 flex items-center justify-center gap-5 border-t border-stone px-6 py-4 pb-[calc(16px+env(safe-area-inset-bottom,0px))]">
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted transition-opacity hover:opacity-70"
          >
            <FacebookIcon size={18} />
          </a>
          <span className="font-sans text-[11px] text-hint">CCB #{BUSINESS.ccb}</span>
          <span className="font-sans text-[11px] text-hint">{BUSINESS.address.city}, {BUSINESS.address.state}</span>
        </div>
      </div>
    </>
  );
}
