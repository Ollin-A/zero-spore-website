// Dictionary type shared between EN and ES.
// Keep both `en.ts` and `es.ts` exporting an object that satisfies this shape.

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavSection {
  servicesLabel: string;
  servicesHref: string;
  serviceItems: NavLinkItem[];
  process: NavLinkItem;
  about: NavLinkItem;
  contact: NavLinkItem;
  callCta: string;
}

export interface FooterSection {
  servicesHeading: string;
  companyHeading: string;
  services: NavLinkItem[];
  company: NavLinkItem[];
  mobileNav: NavLinkItem[];
  copyrightSuffix: string; // "All rights reserved."
  terms: string;
  privacy: string;
}

export interface HeroBadge {
  value: string | number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface HeroSection {
  headlineLine1: string;
  headlineLine2: string;
  subline: string;
  cta1: string;
  cta2: string;
  badges: HeroBadge[];
}

export interface AboutPreviewSection {
  headline: string;
  body1: string;
  body2: string;
  link: string;
}

export interface ServicesGridSection {
  heading: string;
  subheading: string;
  learnMore: string;
  cards: { title: string; description: string; href: string }[];
}

export interface EmergencySection {
  headlinePrefix: string;
  headlineHighlight: string;
  body: string;
  callCta: string;
  callbackLabel: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  submit: string;
  submitting: string;
  sent: string;
  error: string;
}

export interface ProcessStepText {
  number: string;
  title: string;
  description: string;
}

export interface ProcessSection {
  heading: string;
  steps: ProcessStepText[];
}

export interface SocialProofSection {
  heading: string;
  beforeAfterCaption: string;
  reviewsLine: string;
  reviewsLink: string;
  badges: { label: string; sublabel: string }[];
}

export interface ServiceAreasSection {
  heading: string;
  body: string;
  cta: string;
  secondary: string;
}

export interface FAQSection {
  heading: string;
  subheadingPrefix: string; // "Common questions about our " — service name appended
  subheadingSuffix: string; // " services."
}

export interface ContactSection {
  heading: string;
  body: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailOptional: string;
  emailPlaceholder: string;
  serviceLabel: string;
  serviceOptions: { value: string; label: string }[];
  emergencyLegend: string;
  emergencyYes: string;
  emergencyNo: string;
  emergencyAlertPrefix: string; // before the phone link
  emergencyAlertSuffix: string; // after the phone link
  messageLabel: string;
  messagePlaceholder: string;
  photosLabel: string;
  photosHint: string;
  photosTapToAdd: string;
  photosFormats: string;
  photosUploading: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBodyPrefix: string;
  errorBodyPrefix: string;
  errorBodySuffix: string;
  areaServed: string;
  ccbLine: string;
}

export interface AboutPageSection {
  heroHeadline: string;
  heroSubline: string;
  storyBlocks: { heading: string; copy1: string; copy2: string }[];
  valuesHeading: string;
  values: { title: string; description: string }[];
  teamHeading: string;
  teamRole: string;
  teamFounder: string;
  teamBio: string;
  ctaHeading: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondaryPrefix: string; // "Call " — phone appended
}

export interface RelatedSection {
  heading: string;
  body: string;
  primary: string;
  secondaryPrefix: string; // "Or call " — phone appended
  relatedHeading: string;
}

export interface ServicePageStrings {
  whatsIncluded: string;
  ourProcess: string;
  whyChooseUs: string;
  importantNote: string;
  ctaPrimary: string;
  ctaEmergency: string;
}

export interface Dict {
  locale: "en" | "es";
  htmlLang: string;
  nav: NavSection;
  footer: FooterSection;
  mobileCTA: string;
  emergencyBadge: { label: string };
  hero: HeroSection;
  about: AboutPreviewSection;
  services: ServicesGridSection;
  emergency: EmergencySection;
  process: ProcessSection;
  social: SocialProofSection;
  serviceAreas: ServiceAreasSection;
  faq: FAQSection;
  contact: ContactSection;
  aboutPage: AboutPageSection;
  related: RelatedSection;
  servicePage: ServicePageStrings;
}
