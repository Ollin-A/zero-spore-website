"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/data/constants";
import { cn } from "@/lib/utils";

export default function EmergencyBadge() {
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Hidden on homepage and mobile
  if (pathname === "/") return null;

  return (
    <a
      href={BUSINESS.phoneTel}
      className={cn(
        "fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-(--radius-card) bg-forest px-4 py-3 font-sans text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl lg:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest",
        footerVisible && "pointer-events-none opacity-0",
      )}
    >
      <Phone size={16} strokeWidth={1.5} />
      <span>24/7 Emergency</span>
      <span className="text-cyan">{BUSINESS.phone}</span>
    </a>
  );
}
