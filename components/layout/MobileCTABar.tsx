"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/data/constants";
import { cn } from "@/lib/utils";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(true);
  const [inEmergency, setInEmergency] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 100);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always visible when emergency section is in view
  useEffect(() => {
    const el = document.getElementById("emergency-section");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInEmergency(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const show = visible || inEmergency;

  return (
    <a
      href={BUSINESS.phoneTel}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 flex h-14 items-center justify-center gap-2 bg-forest font-sans text-sm font-medium text-white transition-transform duration-300 ease-out lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest",
        show ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 8px)" }}
    >
      <Phone size={18} strokeWidth={1.5} />
      Call Now &mdash; {BUSINESS.phone}
    </a>
  );
}
