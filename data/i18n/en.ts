import type { Dict } from "./types";

export const en: Dict = {
  locale: "en",
  htmlLang: "en",

  nav: {
    servicesLabel: "Services",
    servicesHref: "/services",
    serviceItems: [
      { label: "Water Damage", href: "/services/water-damage" },
      { label: "Mold Remediation", href: "/services/mold-remediation" },
      { label: "Emergency", href: "/services/emergency" },
    ],
    process: { label: "Process", href: "/#process" },
    about: { label: "About", href: "/about" },
    contact: { label: "Contact", href: "/contact" },
    callCta: "Call 24/7",
  },

  footer: {
    servicesHeading: "Services",
    companyHeading: "Company",
    services: [
      { label: "Water Damage", href: "/services/water-damage" },
      { label: "Mold Remediation", href: "/services/mold-remediation" },
      { label: "Emergency", href: "/services/emergency" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
    mobileNav: [
      { label: "Services", href: "/services/water-damage" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
    copyrightSuffix: "All rights reserved.",
    terms: "Terms",
    privacy: "Privacy",
  },

  mobileCTA: "Call Now",
  emergencyBadge: { label: "24/7 Emergency" },

  hero: {
    headlineLine1: "Water or mold damage?",
    headlineLine2: "Call us 24/7 for fast restoration",
    subline:
      "Emergency restoration services. Family-owned. Sheridan, Oregon. 24/7.",
    cta1: "Call 24/7",
    cta2: "Schedule inspection",
    badges: [
      { value: 10, suffix: "+", label: "Years Experience" },
      { value: "24/7", label: "Response" },
      { value: "244908", prefix: "#", label: "CCB Licensed" },
    ],
  },

  about: {
    headline: "A family restoring families' homes",
    body1:
      "We're a family-owned restoration company based in Sheridan, Oregon — and we treat every home like our own. Our approach is hands-on and personal, from the first phone call to the final inspection.",
    body2:
      "We provide expert residential service across the Willamette Valley, Portland Metro, and communities in between. As locals, we understand the challenges of Pacific Northwest humidity and the architectural diversity of Oregon homes.",
    link: "Learn our story",
  },

  services: {
    heading: "What we restore",
    subheading: "Comprehensive emergency restoration for Oregon homeowners",
    learnMore: "Learn more",
    cards: [
      {
        title: "Water Damage",
        description:
          "Fast water extraction, structural drying, and moisture monitoring to protect your home from lasting damage.",
        href: "/services/water-damage",
      },
      {
        title: "Mold Remediation",
        description:
          "Safe, thorough mold removal with containment protocols that protect your family's health.",
        href: "/services/mold-remediation",
      },
      {
        title: "Emergency Services",
        description:
          "24/7 emergency response when every minute counts. We arrive fast and work until your home is safe.",
        href: "/services/emergency",
      },
    ],
  },

  emergency: {
    headlinePrefix: "Water in your home ",
    headlineHighlight: "right now?",
    body: "Don't wait. Every minute water sits, damage spreads. We respond to emergencies 24/7. Call us now.",
    callCta: "Call Now",
    callbackLabel: "Or request an immediate callback",
    namePlaceholder: "Your name",
    phonePlaceholder: "Phone number",
    submit: "Send",
    submitting: "Sending…",
    sent: "We'll call you back within minutes.",
    error: "Something went wrong. Please call us directly.",
  },

  process: {
    heading: "How we restore your home",
    steps: [
      {
        number: "01",
        title: "Assessment",
        description:
          "We inspect every affected area, document the damage, and provide a detailed estimate — so you know exactly what to expect.",
      },
      {
        number: "02",
        title: "Mitigation",
        description:
          "Extract standing water, stabilize the structure, and set up industrial drying equipment to prevent further damage.",
      },
      {
        number: "03",
        title: "Restoration",
        description:
          "Remove damaged materials, clean and sanitize every surface, and restore your home to pre-damage condition.",
      },
      {
        number: "04",
        title: "Follow-up",
        description:
          "Final moisture testing, quality verification, and follow-up support — because the job isn't done until you're confident.",
      },
    ],
  },

  social: {
    heading: "Trusted by Oregon homeowners",
    beforeAfterCaption: "Drag to compare — before & after restoration",
    reviewsLine: "Reviews from Google",
    reviewsLink: "See all reviews",
    badges: [
      { label: "CCB #244908", sublabel: "Licensed Contractor" },
      { label: "IICRC, AHERA, RRP", sublabel: "Certified Team" },
      { label: "10+ Years", sublabel: "Experience" },
      { label: "Family Owned", sublabel: "Sheridan, Oregon" },
    ],
  },

  serviceAreas: {
    heading: "Ready to restore your home?",
    body: "Serving communities across Oregon with fast, reliable emergency restoration services.",
    cta: "Schedule your free inspection",
    secondary: "Or contact us online →",
  },

  faq: {
    heading: "Frequently asked questions",
    subheadingPrefix: "Common questions about our ",
    subheadingSuffix: " services.",
  },

  contact: {
    heading: "Get in touch",
    body: "Whether it's an emergency or a question about your home, we're here to help. Fill out the form below, or call us directly — we answer 24/7.",
    fullNameLabel: "Full name",
    fullNamePlaceholder: "Your full name",
    phoneLabel: "Phone number",
    phonePlaceholder: "(503) 555-0123",
    emailLabel: "Email",
    emailOptional: "(optional)",
    emailPlaceholder: "you@example.com",
    serviceLabel: "What do you need help with?",
    serviceOptions: [
      { value: "", label: "Select a service" },
      { value: "water-damage", label: "Water damage restoration" },
      { value: "mold", label: "Mold remediation" },
      { value: "emergency", label: "Emergency response" },
      { value: "other", label: "Something else" },
    ],
    emergencyLegend: "Is this an emergency?",
    emergencyYes: "Yes",
    emergencyNo: "No",
    emergencyAlertPrefix: "For immediate emergency response, call us directly at ",
    emergencyAlertSuffix: ". We answer 24/7.",
    messageLabel: "Tell us about your situation",
    messagePlaceholder: "Describe what's happening with your home...",
    photosLabel: "Photos of the damage",
    photosHint: "(optional, up to 5)",
    photosTapToAdd: "Tap to add photos",
    photosFormats: "JPG, PNG, WebP · Max 10MB each",
    photosUploading: "Uploading photos...",
    submit: "Send request",
    submitting: "Sending...",
    successTitle: "Thank you for reaching out",
    successBodyPrefix:
      "We'll contact you within 2 hours. For immediate assistance, call us at ",
    errorBodyPrefix: "Something went wrong. Please call us directly at ",
    errorBodySuffix: ".",
    areaServed: "Serving the Willamette Valley, Portland Metro & beyond",
    ccbLine: "CCB #244908 — Licensed Contractor",
  },

  aboutPage: {
    heroHeadline: "More than a restoration company",
    heroSubline: "We're a family protecting families",
    storyBlocks: [
      {
        heading: "How it started",
        copy1:
          "We didn't set out to start a restoration company. It started with our own home — a water leak we caught too late, and a remediation crew that cut corners and overcharged. We saw the damage that careless work leaves behind, and we knew Oregon families deserved better. So we got trained, got certified, and got to work.",
        copy2:
          "That was over a decade ago. Since then, we've restored hundreds of homes across the Willamette Valley, from flooded basements in Sheridan to mold-damaged crawlspaces in McMinnville. Every job still feels personal, because it is.",
      },
      {
        heading: "What drives us",
        copy1:
          "We've seen what happens when water sits too long or mold goes untreated. We've seen families displaced, belongings ruined, and insurance claims denied because the previous company didn't document properly. That's not how we operate.",
        copy2:
          "Every home we walk into gets the same treatment: honest assessment, clear communication, thorough work, and documentation your insurance company can actually use. We answer our own phone, we show up when we say we will, and we don't leave until the job is done right.",
      },
      {
        heading: "Rooted in Oregon",
        copy1:
          "Sheridan is home. We know the climate here — the relentless rain, the coastal storms that sweep through the Valley, the damp crawlspaces that come with older Pacific Northwest homes. We understand the specific challenges Oregon homeowners face because we face them too.",
        copy2:
          "From our base in Sheridan, we serve communities across the state — Portland, Salem, McMinnville, Lincoln City, Newberg, and everywhere in between. No matter where you are in Oregon, we'll get to you.",
      },
    ],
    valuesHeading: "What we stand for",
    values: [
      {
        title: "Honesty",
        description:
          "We tell you exactly what we find, what it will take to fix, and what it will cost. No upselling, no surprise charges, no pressure. If something doesn't need to be replaced, we'll say so.",
      },
      {
        title: "Speed",
        description:
          "Water and mold don't wait, and neither do we. We respond within the hour across Sheridan and surrounding areas, 24 hours a day, 7 days a week. Every minute we save is damage we prevent.",
      },
      {
        title: "Care",
        description:
          "Your home holds your life. We understand that, and we treat every job with the respect it deserves. We protect your belongings, communicate at every step, and leave your home better than we found it.",
      },
    ],
    teamHeading: "The team behind Zero Spore",
    teamRole: "Owner & Lead Technician",
    teamFounder: "Founder, Zero Spore Restoration",
    teamBio:
      "With over a decade of hands-on experience in water damage mitigation and mold remediation, our founder built Zero Spore on a simple principle: treat every home like your own. Based in Sheridan, Oregon, and serving communities across the state.",
    ctaHeading: "Ready to work with a team that truly cares?",
    ctaBody:
      "Whether you're facing an emergency or planning ahead, we're here to help. Reach out and let's talk about your home.",
    ctaPrimary: "Schedule your free inspection",
    ctaSecondaryPrefix: "Call ",
  },

  related: {
    heading: "Ready to restore your home?",
    body: "Whether it's an emergency or a planned inspection, we're here to help. Reach out and we'll respond within hours.",
    primary: "Schedule your free inspection",
    secondaryPrefix: "Or call ",
    relatedHeading: "Related services",
  },

  servicePage: {
    whatsIncluded: "What's included",
    ourProcess: "Our process",
    whyChooseUs: "Why choose us",
    importantNote: "Important note",
    ctaPrimary: "Schedule your free inspection",
    ctaEmergency: "Emergency? Call now",
  },
};
