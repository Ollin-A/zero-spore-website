export interface PageSEOEntry {
  title: string;
  description: string;
  canonical: string;
}

export const PAGE_SEO: Record<string, PageSEOEntry> = {
  home: {
    title:
      "Zero Spore Restoration | Water Damage & Mold Remediation | Sheridan, Oregon",
    description:
      "Family-owned 24/7 emergency water damage restoration and mold remediation serving all of Oregon from Sheridan. CCB #244908. Call (503) 302-0557.",
    canonical: "/",
  },
  about: {
    title: "About Us | Zero Spore Restoration | Sheridan, Oregon",
    description:
      "Family-owned restoration company based in Sheridan, Oregon. Over a decade of experience in water damage mitigation and mold remediation. CCB #244908.",
    canonical: "/about",
  },
  contact: {
    title: "Contact Us | Zero Spore Restoration | Sheridan, Oregon",
    description:
      "Contact Zero Spore Restoration for water damage, mold remediation, or emergency restoration in Oregon. Call (503) 302-0557 or send us a message.",
    canonical: "/contact",
  },
  blog: {
    title: "Restoration Insights | Zero Spore Restoration Blog",
    description:
      "Tips, guides, and expert advice for Oregon homeowners dealing with water damage, mold, and home restoration. Coming soon.",
    canonical: "/blog",
  },
  terms: {
    title: "Terms of Use | Zero Spore Restoration",
    description:
      "Terms of use for the Zero Spore Restoration website. Sheridan, Oregon.",
    canonical: "/terms",
  },
  privacy: {
    title: "Privacy Policy | Zero Spore Restoration",
    description:
      "Privacy policy for Zero Spore Restoration. How we handle your information. Sheridan, Oregon.",
    canonical: "/privacy",
  },
};
