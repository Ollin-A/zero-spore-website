import type { Metadata } from "next";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import ContactForm from "@/components/ui/ContactForm";
import { BUSINESS } from "@/data/constants";
import { PAGE_SEO } from "@/data/seo";
import { PhoneIcon, MailIcon, MapPinIcon, CCBLicenseIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  alternates: { canonical: PAGE_SEO.contact.canonical },
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: PAGE_SEO.contact.canonical,
  },
};

const CONTACT_ITEMS = [
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
    label: "Serving the Willamette Valley, Portland Metro & beyond",
  },
  {
    icon: CCBLicenseIcon,
    label: `CCB #${BUSINESS.ccb} — Licensed Contractor`,
  },
];

export default function ContactPage() {
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
          Get in touch
        </h1>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-4 max-w-(--text-max) text-lg text-muted">
          Whether it&apos;s an emergency or a question about your home,
          we&apos;re here to help. Fill out the form below, or call us
          directly — we answer 24/7.
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
        {/* Contact info — first on mobile, right on desktop */}
        <div className="order-1 lg:order-2">
          <FadeUp delay={0.15}>
            <div className="space-y-6">
              {CONTACT_ITEMS.map((item) => {
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

            {/* Google Maps — desktop only */}
            <div className="mt-8 hidden lg:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22500!2d-123.3947!3d45.0989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab9d5e7e8f8e7%3A0x4c0b0b5b0b5b0b5b!2sSheridan%2C%20OR!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="250"
                className="rounded-(--radius-card) border border-stone"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zero Spore Restoration location — Sheridan, Oregon"
                allowFullScreen={false}
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
