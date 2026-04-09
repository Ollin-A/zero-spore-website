"use client";

import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import ContactForm from "@/components/ui/ContactForm";
import { BUSINESS } from "@/data/constants";
import { PhoneIcon, MailIcon, MapPinIcon, CCBLicenseIcon } from "@/components/icons";
import { useDict } from "@/lib/use-dict";

export default function ContactContent() {
  const dict = useDict();
  const t = dict.contact;

  const items = [
    {
      icon: PhoneIcon,
      label: BUSINESS.phone,
      href: BUSINESS.phoneTel,
      className: "text-xl font-medium text-forest",
    },
    {
      icon: MailIcon,
      label: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
      className: "text-muted hover:text-carbon transition-colors",
    },
    {
      icon: MapPinIcon,
      label: t.areaServed,
    },
    {
      icon: CCBLicenseIcon,
      label: t.ccbLine,
    },
  ];

  return (
    <MoodSection mood="about">
      <FadeUp>
        <h1
          className="font-serif"
          style={{
            fontSize: "var(--font-h1-size)",
            lineHeight: "var(--font-h1-lh)",
            letterSpacing: "var(--font-h1-ls)",
          }}
        >
          {t.heading}
        </h1>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-4 max-w-(--text-max) text-lg text-muted">{t.body}</p>
      </FadeUp>

      <div className="mt-12 grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
        {/* Contact info — first on mobile, right on desktop */}
        <div className="order-1 lg:order-2">
          <FadeUp delay={0.15}>
            <div className="space-y-6">
              {items.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="flex items-center gap-4">
                    <Icon className="h-5 w-5 shrink-0" />
                    {item.label}
                  </span>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={item.className}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="text-muted">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Google Maps */}
            <div className="mt-8 overflow-hidden rounded-(--radius-card) border border-stone">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9210!2d-123.4114563!3d45.0959674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2b29b894bf4172f%3A0x826abf49a50a1517!2sZero%20Spore%20Restoration!5e1!3m2!1sen!2sus!4v1"
                width="100%"
                height="250"
                className="h-[250px] lg:h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zero Spore Restoration location on Google Maps"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>

        {/* Form — second on mobile, left on desktop */}
        <div className="order-2 lg:order-1">
          <FadeUp delay={0.2}>
            <ContactForm />
          </FadeUp>
        </div>
      </div>
    </MoodSection>
  );
}
