// ---------------------------------------------------------------------------
// Service page content — water-damage, mold-remediation, emergency
// ---------------------------------------------------------------------------

export interface ServiceFeature {
  icon: string; // Lucide icon component name
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  headline: string;
  subline: string;
  body: string;
  bodyParagraphs?: string[];
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  accentColor: string; // Tailwind class, e.g. "text-ocean"
  accentBg: string; // Tailwind class for tinted bg, e.g. "bg-sky"
  whyChooseUs?: {
    intro: string;
    items: WhyChooseUsItem[];
    closing?: string;
  };
  closingCta?: string;
  disclaimer?: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const SERVICES: Record<string, ServiceData> = {
  "water-damage": {
    slug: "water-damage",
    title: "Water Damage Mitigation",
    headline: "Professional Water Damage Mitigation",
    subline:
      "Fast extraction, professional drying, and full mitigation \u2014 from the moment we arrive until the job is done.",
    body: "When water damage strikes, the risk of structural compromise and mold growth is immediate. Zero Spore Restoration LLC is your trusted source for fast, professional water damage mitigation \u2014 24/7.",
    bodyParagraphs: [
      "When water damage strikes, the risk of structural compromise and mold growth is immediate. Zero Spore Restoration LLC is your trusted source for fast, professional water damage mitigation \u2014 24/7.",
      "From minor leaks to major flooding, we combine expert service with specialized equipment to quickly assess, contain, and fully mitigate water damage of any size. Call (503) 302-0557.",
    ],
    metaTitle:
      "Professional Water Damage Mitigation Oregon | Zero Spore Restoration",
    metaDescription:
      "Professional water damage mitigation across the Willamette Valley and Portland Metro area. 24/7 emergency response, commercial-grade drying, and full restoration. CCB #244908.",
    heroImage:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80", // TODO: REPLACE — Unsplash placeholder
    features: [
      {
        icon: "Droplets",
        title: "Residential Water Extraction",
        description:
          "Quick removal of standing water from leaks, floods, appliance malfunctions, and plumbing failures.",
      },
      {
        icon: "CloudRain",
        title: "Flood Damage Cleanup",
        description:
          "Immediate response to storm or flash flood events.",
      },
      {
        icon: "ThermometerSun",
        title: "Ceiling, Wall and Floor Drying",
        description:
          "Preventing warping, swelling and secondary damage with industrial dehumidifiers and air movers.",
      },
      {
        icon: "ShieldCheck",
        title: "Mold Prevention and Moisture Control",
        description:
          "Minimizing the risk of mold growth after water intrusion with antimicrobial treatment and moisture monitoring.",
      },
      {
        icon: "AlertTriangle",
        title: "Sewage Backup Mitigation",
        description:
          "Safe cleanup and disinfection for contaminated water events using EPA-approved, hospital-grade solutions.",
      },
      {
        icon: "FileCheck",
        title: "Insurance Documentation Support",
        description:
          "Detailed reports to streamline your insurance claim process, including moisture readings, photo evidence, and progress logs.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Assessment",
        description:
          "We evaluate affected areas, identify the water source, and use advanced tools to map moisture levels. This allows us to develop a detailed, transparent mitigation plan.",
      },
      {
        number: 2,
        title: "Water Extraction and Drying",
        description:
          "Commercial-grade extractors remove standing water while industrial drying equipment prevents secondary damage like swelling, warping and mold growth. We continuously monitor moisture levels until the structure is completely dry.",
      },
      {
        number: 3,
        title: "Cleaning and Sanitization",
        description:
          "We clean and disinfect affected areas using EPA-approved, hospital-grade solutions to eliminate bacteria, viruses and allergens. This protects your family\u2019s health and prevents lingering odors.",
      },
      {
        number: 4,
        title: "Damage Containment",
        description:
          "We remove compromised materials \u2014 drywall, insulation, flooring \u2014 and set up containment areas to control dust and debris. Our goal is to stabilize the structure while minimizing disruption to your daily life.",
      },
      {
        number: 5,
        title: "Final Inspection",
        description:
          "After mitigation, our team performs a final inspection to confirm your home is dry, safe and ready for restoration. We then offer advice on future water damage prevention and provide referrals for any necessary additional repairs.",
      },
    ],
    faqs: [
      {
        question: "How quickly can you respond to a water emergency?",
        answer:
          "We respond within the hour across Sheridan and surrounding areas, 24 hours a day, 7 days a week. For locations further out in the Willamette Valley or along the coast, we\u2019re typically on-site within two hours.",
      },
      {
        question: "Do you work with insurance companies?",
        answer:
          "Yes. We document everything \u2014 moisture readings, photos, equipment logs, and drying progress \u2014 and communicate directly with your adjuster. Most homeowner policies cover sudden water damage, and we make the claims process as straightforward as possible.",
      },
      {
        question: "How long does the drying process take?",
        answer:
          "Most residential water damage takes three to five days to dry completely, depending on the extent of saturation and the materials affected. We monitor moisture levels daily and won\u2019t pull equipment until readings confirm your home is dry.",
      },
      {
        question:
          "Can water damage lead to mold if it\u2019s not treated quickly?",
        answer:
          "Absolutely. Mold can begin growing within 24 to 48 hours of water exposure. That\u2019s why rapid extraction and professional drying are critical. If we discover existing mold during the process, we\u2019ll walk you through remediation options immediately.",
      },
      {
        question: "What should I do while waiting for your team to arrive?",
        answer:
          "If it\u2019s safe, turn off the water source and move valuables away from the affected area. Don\u2019t use household vacuums on standing water. Avoid walking through flooded areas if electrical outlets are submerged. We\u2019ll guide you through everything else when we arrive.",
      },
    ],
    relatedSlugs: ["mold-remediation", "emergency"],
    accentColor: "text-ocean",
    accentBg: "bg-sky",
    whyChooseUs: {
      intro:
        "Homeowners in Oregon choose Zero Spore Restoration LLC because of:",
      items: [
        {
          title: "24/7 Emergency Availability",
          description:
            "Water damage doesn\u2019t follow a schedule. Neither do we. We are ready to respond to your call!",
        },
        {
          title: "Certified Experts",
          description:
            "Our team is trained and equipped to handle water damage emergencies quickly and effectively.",
        },
        {
          title: "Transparent Pricing",
          description:
            "We provide clear, upfront estimates before any work begins. No hidden fees, no surprise charges.",
        },
        {
          title: "Personalized Service",
          description:
            "Every home and situation is different. We tailor our approach to your specific needs and keep you informed at every step.",
        },
        {
          title: "Local Knowledge",
          description:
            "Based in Sheridan and serving the Willamette Valley, Portland Metro area and many communities in between, we understand Oregon\u2019s unique climate challenges.",
        },
      ],
    },
    closingCta:
      "Don\u2019t wait for water damage to escalate. Call (503) 302-0557 for fast, professional restoration.",
  },

  "mold-remediation": {
    slug: "mold-remediation",
    title: "Mold Remediation",
    headline: "Mold remediation you can trust",
    subline:
      "Thorough inspection, safe containment, and professional remediation \u2014 so your family breathes easy again.",
    body: "Mold can develop silently, posing structural and health risks before visible signs appear. Our team specializes in identifying, containing, and treating mold so you can breathe easier.",
    bodyParagraphs: [
      "Mold can develop silently, posing structural and health risks before visible signs appear. Our team specializes in identifying, containing, and treating mold so you can breathe easier.",
      "Every situation is unique \u2014 from hidden growth behind walls to extensive water-related damage. We combine detailed inspection with advanced technology and a personalized plan for your home.",
    ],
    metaTitle: "Mold Remediation Oregon | Zero Spore Restoration",
    metaDescription:
      "Certified mold remediation across the Willamette Valley and Portland Metro area. Inspection, containment, HEPA filtration, and verified removal. Family-owned, CCB #244908.",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", // TODO: REPLACE — Unsplash placeholder
    features: [
      {
        icon: "Shield",
        title: "Residential Mold Remediation",
        description:
          "Comprehensive mold treatment for homes, from initial inspection through complete remediation and verification.",
      },
      {
        icon: "Microscope",
        title: "Hidden Mold Detection Behind Walls and Ceilings",
        description:
          "Using moisture meters, infrared cameras and surface testing to pinpoint affected areas that may not be immediately visible.",
      },
      {
        icon: "Wind",
        title: "Crawl Space and Attic Mold Treatment",
        description:
          "Specialized treatment for hard-to-reach areas where moisture buildup commonly leads to hidden mold growth.",
      },
      {
        icon: "Leaf",
        title: "Air Quality Restoration and Mold Prevention",
        description:
          "HEPA air scrubbers and dehumidification to restore indoor air quality and prevent future mold recurrence.",
      },
      {
        icon: "ClipboardCheck",
        title: "Post-Remediation Cleaning and Restoration",
        description:
          "Thorough cleaning of all treated areas and referrals for necessary repairs to return your home to a safe, livable condition.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Inspection",
        description:
          "We use moisture meters, infrared cameras and surface testing to determine the extent of mold growth, including areas not immediately visible. This helps us create an effective remediation strategy.",
      },
      {
        number: 2,
        title: "Containment",
        description:
          "We establish containment zones with negative air pressure, protective barriers and HEPA filtration to prevent spores from spreading. The rest of your home stays safe and clean during the entire process.",
      },
      {
        number: 3,
        title: "Removal and Cleaning",
        description:
          "We carefully remove or treat affected materials, then clean and disinfect all surfaces using EPA-approved solutions. Our goal is to reduce mold spore count to safe levels while preserving your property.",
      },
      {
        number: 4,
        title: "Drying",
        description:
          "Moisture is essential for mold growth. Following removal, we use industrial-grade drying and dehumidification equipment to reduce humidity levels, which is crucial for preventing future mold recurrence.",
      },
      {
        number: 5,
        title: "Final Inspection",
        description:
          "We perform a final inspection to confirm mold has been reduced to safe levels. We can also provide references for necessary repairs to return your home to a safe, livable condition.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I have a mold problem?",
        answer:
          "Common signs include a persistent musty smell, visible discoloration on walls or ceilings, unexplained allergy symptoms, and past water damage that wasn\u2019t fully dried. If you suspect mold, we offer free inspections to assess the situation.",
      },
      {
        question: "Is mold remediation covered by homeowner\u2019s insurance?",
        answer:
          "It depends on the cause. Mold resulting from a sudden, covered event \u2014 like a burst pipe \u2014 is typically covered. Mold from long-term neglect or maintenance issues usually isn\u2019t. We document everything thoroughly to support your claim either way.",
      },
      {
        question: "How long does mold remediation take?",
        answer:
          "Most residential projects take two to five days, depending on the extent of the contamination and the areas affected. Large-scale remediation or crawlspace work may take longer. We\u2019ll give you a clear timeline before we start.",
      },
      {
        question: "Can I stay in my home during remediation?",
        answer:
          "In most cases, yes. Our containment protocols isolate the work area from the rest of your home. For larger projects or if you have respiratory sensitivities, we may recommend staying elsewhere for a day or two.",
      },
      {
        question:
          "What\u2019s the difference between mold removal and mold remediation?",
        answer:
          "Mold removal implies eliminating every spore, which isn\u2019t realistic \u2014 mold spores are naturally present everywhere. Remediation means returning mold levels to safe, normal concentrations by removing active growth, treating surfaces, and addressing the moisture source that caused it.",
      },
    ],
    relatedSlugs: ["water-damage", "emergency"],
    accentColor: "text-forest",
    accentBg: "bg-moss",
    disclaimer:
      "Some severe mold cases require pre and post-remediation testing by an independent Environmental Mold Inspector, who collects samples for lab analysis and develops a protocol with specific remediation recommendations. When remediation is complete, the inspector retests to verify treatment was successful and provide clearance.",
    whyChooseUs: {
      intro:
        "Homeowners across Oregon trust Zero Spore Restoration for mold remediation because of:",
      items: [
        {
          title: "Experienced and Certified Specialists",
          description:
            "Our team brings years of hands-on experience and holds IICRC, AHERA, and Lead-Based Paint/RRP certifications.",
        },
        {
          title: "Rapid Response",
          description:
            "We respond quickly to prevent further property damage and health risks from mold exposure.",
        },
        {
          title: "EPA-Approved Products and Containment",
          description:
            "We use only EPA-approved products and follow strict containment procedures to protect your home during remediation.",
        },
        {
          title: "Transparent Pricing",
          description:
            "Detailed service explanations and clear pricing so you know exactly what to expect before work begins.",
        },
        {
          title: "Commitment to Residential Properties",
          description:
            "We focus on restoring homes and protecting families, treating every property with the care it deserves.",
        },
      ],
    },
    closingCta:
      "Don\u2019t let mold compromise the safety of your home. Call us today at 503-302-0557 to schedule an inspection or emergency service.",
  },

  emergency: {
    slug: "emergency",
    title: "Emergency Restoration",
    headline: "Emergency response when every minute counts",
    subline:
      "24/7 dispatch, rapid on-site arrival, and immediate mitigation \u2014 because emergencies don\u2019t wait for business hours.",
    body: "When disaster brings unexpected water, mold, or storm damage, prompt action is essential. Zero Spore Restoration LLC offers fast, reliable emergency services \u2014 available 24/7.",
    bodyParagraphs: [
      "When disaster brings unexpected water, mold, or storm damage, prompt action is essential. Zero Spore Restoration LLC offers fast, reliable emergency services \u2014 available 24/7.",
      "Facing a sudden pipe burst, a flooded basement, or storm damage? Our trained experts handle every emergency with precision, advanced equipment, and a personal, compassionate approach.",
    ],
    metaTitle:
      "24/7 Emergency Restoration Oregon | Zero Spore Restoration",
    metaDescription:
      "24/7 emergency restoration services across Oregon. Immediate response for water damage, flooding, and storm damage. Family-owned, CCB #244908.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", // TODO: REPLACE — Unsplash placeholder
    features: [
      {
        icon: "Droplets",
        title: "Water Extraction and Water Damage Mitigation",
        description:
          "Fast removal of standing water and comprehensive drying to prevent structural damage and mold growth.",
      },
      {
        icon: "CloudRain",
        title: "Storm and Flood Damage Repair",
        description:
          "Immediate response to storm or flood events, including water removal, structural drying, and damage assessment.",
      },
      {
        icon: "Shield",
        title: "Mold Remediation After Water Intrusion",
        description:
          "Professional mold containment and removal following water exposure to protect your family\u2019s health.",
      },
      {
        icon: "Fan",
        title: "Structural Drying and Dehumidification",
        description:
          "Industrial-grade drying equipment to eliminate moisture from walls, floors, and structural elements.",
      },
      {
        icon: "Trash2",
        title: "Debris Removal and Post-Emergency Cleaning",
        description:
          "Safe removal of damaged materials and thorough cleaning to prepare your property for restoration.",
      },
      {
        icon: "Wrench",
        title: "Board-Up and Securing Services",
        description:
          "Emergency tarping, board-up, and securing to protect your property from further exposure and damage.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Immediate Response",
        description:
          "Our team responds immediately to assess the damage, inspect affected areas, and develop a plan of action. This crucial initial assessment allows us to address urgent concerns and prevent further damage.",
      },
      {
        number: 2,
        title: "Damage Containment",
        description:
          "Containment is a critical step in minimizing long-term damage and costs, protecting your property from further harm. During this stage, we extract standing water, dry structures, and prevent mold growth to limit the damage.",
      },
      {
        number: 3,
        title: "Restoration and Cleaning",
        description:
          "Our services include water extraction and structural drying, mold remediation following water exposure, storm damage restoration, and post-emergency cleaning and sanitization. We customize every project to address the specific needs of your property and unique situation.",
      },
      {
        number: 4,
        title: "Final Inspection",
        description:
          "Following restoration, we conduct a detailed inspection to confirm all work is complete \u2014 including moisture checks and air quality testing when necessary. Our goal is to return your property fully mitigated and remediated.",
      },
    ],
    faqs: [
      {
        question: "What qualifies as an emergency?",
        answer:
          "Any situation where water is actively entering your home, you\u2019ve discovered significant flooding, a pipe has burst, or storm damage has compromised your roof or walls. If you\u2019re unsure, call us \u2014 we\u2019d rather check and find a small problem than have you wait and face a big one.",
      },
      {
        question: "How fast can you get to my home?",
        answer:
          "Within the hour for Sheridan and surrounding communities like McMinnville, Dallas, and Willamina. For locations across the Willamette Valley, Salem, or the coast, we\u2019re typically on-site within two hours.",
      },
      {
        question: "What should I do before your team arrives?",
        answer:
          "If it\u2019s safe, turn off the water source and electricity in the affected area. Move valuables to dry ground. Don\u2019t walk through standing water near electrical outlets. We\u2019ll stay on the phone with you and guide you through it.",
      },
      {
        question: "Do you handle insurance claims for emergency work?",
        answer:
          "Yes. We document the damage from the moment we arrive \u2014 photos, moisture readings, equipment logs \u2014 and communicate directly with your insurance adjuster. Emergency water damage is typically covered under homeowner policies.",
      },
      {
        question: "What areas do you serve for emergency calls?",
        answer:
          "We serve all of Oregon from our base in Sheridan. Our fastest response times are in Yamhill County, Polk County, and the northern Willamette Valley. We also respond to emergencies in Portland, Salem, Lincoln City, and communities along the coast.",
      },
    ],
    relatedSlugs: ["water-damage", "mold-remediation"],
    accentColor: "text-alert",
    accentBg: "bg-alert-bg",
    whyChooseUs: {
      intro:
        "When disaster strikes, you need a team you can count on. Homeowners across Oregon choose Zero Spore Restoration for emergency services because of:",
      items: [
        {
          title: "24/7 Availability",
          description:
            "Emergencies don\u2019t follow a schedule. Our team is ready to respond any time \u2014 day, night, weekends, and holidays.",
        },
        {
          title: "Rapid Response Time",
          description:
            "We dispatch within minutes from Sheridan and arrive prepared with commercial-grade equipment to start work immediately.",
        },
        {
          title: "Certified and Trained Experts",
          description:
            "Our team holds IICRC, AHERA, and RRP certifications and is equipped to handle any water, mold, or storm emergency.",
        },
        {
          title: "Direct Communication",
          description:
            "No call centers. When you call, you reach our family directly. We guide you through immediate steps while on the way.",
        },
        {
          title: "Compassionate, Personal Service",
          description:
            "We understand how stressful emergencies are. We provide a clear, tailored plan and support you through every step of recovery.",
        },
      ],
      closing:
        "For fast, responsive and compassionate emergency care, call 503-302-0557.",
    },
    closingCta:
      "Call us anytime at 503-302-0557 for fast, professional emergency restoration services. Our certified experts are ready to help you safely and efficiently recover and restore your property.",
  },
};

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

export function getService(slug: string): ServiceData {
  const service = SERVICES[slug];
  if (!service) throw new Error(`Service not found: ${slug}`);
  return service;
}
