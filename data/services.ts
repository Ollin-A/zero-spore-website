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

export interface ServiceData {
  slug: string;
  title: string;
  headline: string;
  subline: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  accentColor: string; // Tailwind class, e.g. "text-ocean"
  accentBg: string; // Tailwind class for tinted bg, e.g. "bg-sky"
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const SERVICES: Record<string, ServiceData> = {
  "water-damage": {
    slug: "water-damage",
    title: "Water Damage Restoration",
    headline: "Water damage restoration that protects your home",
    subline:
      "Fast extraction, professional drying, and full restoration — from the moment we arrive until the job is done.",
    body: "Oregon's heavy rains and coastal storms put homes at constant risk. When a pipe bursts at midnight or floodwater reaches your living room, we respond within the hour. Our family has spent over a decade restoring homes across Sheridan and the Willamette Valley, and we treat every property like our own. We bring commercial-grade extraction and drying equipment so moisture never gets the chance to cause lasting damage.",
    metaTitle:
      "Water Damage Restoration Sheridan OR | Zero Spore Restoration",
    metaDescription:
      "Professional water damage mitigation in Sheridan, Oregon. 24/7 emergency response, commercial-grade drying, and full restoration. CCB #244908.",
    heroImage:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80", // TODO: REPLACE — Unsplash placeholder
    features: [
      {
        icon: "Droplets",
        title: "Water extraction",
        description:
          "Commercial-grade pumps remove standing water fast — from flooded basements to soaked carpets — minimizing further damage to your home.",
      },
      {
        icon: "ThermometerSun",
        title: "Structural drying",
        description:
          "Industrial dehumidifiers and air movers target moisture trapped in walls, subfloors, and framing to prevent warping and mold growth.",
      },
      {
        icon: "Fan",
        title: "Air circulation & monitoring",
        description:
          "We monitor moisture levels daily with professional meters, adjusting airflow until every reading confirms your home is dry.",
      },
      {
        icon: "ShieldCheck",
        title: "Antimicrobial treatment",
        description:
          "Affected surfaces are treated with EPA-registered antimicrobials to stop mold and bacteria before they take hold.",
      },
      {
        icon: "FileCheck",
        title: "Insurance documentation",
        description:
          "Detailed moisture readings, photo evidence, and progress reports — everything your adjuster needs, organized and ready.",
      },
      {
        icon: "Clock",
        title: "24/7 emergency response",
        description:
          "Water doesn't wait, and neither do we. Call any time — day, night, weekends, or holidays — and we're on our way.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Inspection & assessment",
        description:
          "We arrive, identify the water source, map the affected areas with moisture meters, and walk you through exactly what needs to happen next.",
      },
      {
        number: 2,
        title: "Water extraction",
        description:
          "Standing water is removed immediately using truck-mounted and portable extraction units. The faster we extract, the less damage your home sustains.",
      },
      {
        number: 3,
        title: "Drying & dehumidification",
        description:
          "Industrial air movers and dehumidifiers are placed strategically throughout the affected area. We monitor readings daily and adjust equipment as needed.",
      },
      {
        number: 4,
        title: "Cleaning & treatment",
        description:
          "Surfaces are cleaned, sanitized, and treated with antimicrobials. Salvageable contents are cleaned on-site; unsalvageable items are documented for your claim.",
      },
      {
        number: 5,
        title: "Restoration & follow-up",
        description:
          "Once everything is dry and clean, we handle repairs — drywall, flooring, paint — and schedule a follow-up to make sure your home stays healthy.",
      },
    ],
    faqs: [
      {
        question: "How quickly can you respond to a water emergency?",
        answer:
          "We respond within the hour across Sheridan and surrounding areas, 24 hours a day, 7 days a week. For locations further out in the Willamette Valley or along the coast, we're typically on-site within two hours.",
      },
      {
        question: "Do you work with insurance companies?",
        answer:
          "Yes. We document everything — moisture readings, photos, equipment logs, and drying progress — and communicate directly with your adjuster. Most homeowner policies cover sudden water damage, and we make the claims process as straightforward as possible.",
      },
      {
        question: "How long does the drying process take?",
        answer:
          "Most residential water damage takes three to five days to dry completely, depending on the extent of saturation and the materials affected. We monitor moisture levels daily and won't pull equipment until readings confirm your home is dry.",
      },
      {
        question:
          "Can water damage lead to mold if it's not treated quickly?",
        answer:
          "Absolutely. Mold can begin growing within 24 to 48 hours of water exposure. That's why rapid extraction and professional drying are critical. If we discover existing mold during the process, we'll walk you through remediation options immediately.",
      },
      {
        question: "What should I do while waiting for your team to arrive?",
        answer:
          "If it's safe, turn off the water source and move valuables away from the affected area. Don't use household vacuums on standing water. Avoid walking through flooded areas if electrical outlets are submerged. We'll guide you through everything else when we arrive.",
      },
    ],
    relatedSlugs: ["mold-remediation", "emergency"],
    accentColor: "text-ocean",
    accentBg: "bg-sky",
  },

  "mold-remediation": {
    slug: "mold-remediation",
    title: "Mold Remediation",
    headline: "Mold remediation you can trust",
    subline:
      "Thorough assessment, safe containment, and verified removal — so your family breathes easy again.",
    body: "Oregon's damp climate and long rainy seasons make mold a reality for thousands of homeowners. Whether it's a musty crawlspace in Sheridan or visible growth in a Portland bathroom, we find the source, contain the problem, and remove every trace. We're a family that's been doing this for over a decade — no shortcuts, no cover-ups, just honest work and air-quality results you can see.",
    metaTitle: "Mold Remediation Sheridan OR | Zero Spore Restoration",
    metaDescription:
      "Certified mold remediation in Sheridan, Oregon. Assessment, containment, HEPA filtration, and verified removal. Family-owned, CCB #244908.",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", // TODO: REPLACE — Unsplash placeholder
    features: [
      {
        icon: "Shield",
        title: "Containment protocols",
        description:
          "Negative air pressure chambers and physical barriers prevent spores from spreading to clean areas of your home during the removal process.",
      },
      {
        icon: "Microscope",
        title: "Professional assessment",
        description:
          "We identify the mold species, locate moisture sources, and map the full extent of growth — so we treat the problem, not just the symptoms.",
      },
      {
        icon: "Wind",
        title: "HEPA air filtration",
        description:
          "Commercial HEPA air scrubbers capture airborne spores down to 0.3 microns, cleaning the air in affected areas throughout the entire process.",
      },
      {
        icon: "Leaf",
        title: "Safe removal & disposal",
        description:
          "Contaminated materials are carefully removed, bagged, and disposed of following EPA guidelines. We protect your family and ours.",
      },
      {
        icon: "ClipboardCheck",
        title: "Post-remediation verification",
        description:
          "After removal, we verify results with moisture readings and visual inspection. You'll know the mold is gone — not just hidden.",
      },
      {
        icon: "HeartPulse",
        title: "Health-first approach",
        description:
          "Mold affects breathing, allergies, and overall health. We prioritize your family's wellbeing at every stage, from containment to final clearance.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Assessment & testing",
        description:
          "We inspect the affected area, identify the mold species and moisture source, and develop a remediation plan tailored to your home's specific situation.",
      },
      {
        number: 2,
        title: "Containment",
        description:
          "Physical barriers and negative air pressure isolate the work area. This prevents spores from migrating to clean spaces while we work.",
      },
      {
        number: 3,
        title: "HEPA air filtration",
        description:
          "Air scrubbers run continuously throughout the process, capturing airborne spores and particles to protect air quality in the rest of your home.",
      },
      {
        number: 4,
        title: "Removal & treatment",
        description:
          "Contaminated materials are removed safely. Remaining surfaces are treated with antimicrobial solutions and HEPA-vacuumed to remove residual spores.",
      },
      {
        number: 5,
        title: "Verification & prevention",
        description:
          "We take final moisture readings, document results, and walk you through steps to prevent future growth — including ventilation and moisture control recommendations.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I have a mold problem?",
        answer:
          "Common signs include a persistent musty smell, visible discoloration on walls or ceilings, unexplained allergy symptoms, and past water damage that wasn't fully dried. If you suspect mold, we offer free inspections to assess the situation.",
      },
      {
        question: "Is mold remediation covered by homeowner's insurance?",
        answer:
          "It depends on the cause. Mold resulting from a sudden, covered event — like a burst pipe — is typically covered. Mold from long-term neglect or maintenance issues usually isn't. We document everything thoroughly to support your claim either way.",
      },
      {
        question: "How long does mold remediation take?",
        answer:
          "Most residential projects take two to five days, depending on the extent of the contamination and the areas affected. Large-scale remediation or crawlspace work may take longer. We'll give you a clear timeline before we start.",
      },
      {
        question: "Can I stay in my home during remediation?",
        answer:
          "In most cases, yes. Our containment protocols isolate the work area from the rest of your home. For larger projects or if you have respiratory sensitivities, we may recommend staying elsewhere for a day or two.",
      },
      {
        question:
          "What's the difference between mold removal and mold remediation?",
        answer:
          "Mold removal implies eliminating every spore, which isn't realistic — mold spores are naturally present everywhere. Remediation means returning mold levels to safe, normal concentrations by removing active growth, treating surfaces, and addressing the moisture source that caused it.",
      },
    ],
    relatedSlugs: ["water-damage", "emergency"],
    accentColor: "text-forest",
    accentBg: "bg-moss",
  },

  emergency: {
    slug: "emergency",
    title: "Emergency Restoration",
    headline: "Emergency response when every minute counts",
    subline:
      "24/7 dispatch, rapid on-site arrival, and immediate mitigation — because emergencies don't wait for business hours.",
    body: "When a pipe bursts at 2 a.m. or storm damage floods your home on a Sunday, you need someone who answers the phone and shows up fast. We're a family that lives and works in Sheridan — when you call, you reach us directly. We dispatch within minutes, arrive prepared with commercial-grade equipment, and start protecting your home before the damage spreads. Every minute matters, and we treat it that way.",
    metaTitle:
      "24/7 Emergency Restoration Oregon | Zero Spore Restoration",
    metaDescription:
      "24/7 emergency restoration services across Oregon. Immediate response for water damage, flooding, and storm damage. Family-owned, CCB #244908.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", // TODO: REPLACE — Unsplash placeholder
    features: [
      {
        icon: "Siren",
        title: "Immediate dispatch",
        description:
          "One call and we're mobilizing. Our team dispatches within minutes — day, night, weekends, and holidays — from right here in Sheridan.",
      },
      {
        icon: "Clock",
        title: "Rapid response time",
        description:
          "We arrive within the hour across Sheridan and nearby communities. For the wider Willamette Valley and coast, we're typically on-site within two hours.",
      },
      {
        icon: "Phone",
        title: "Direct line to our team",
        description:
          "No call centers, no hold music. When you dial our number, you reach our family directly. We walk you through immediate steps while we're on the way.",
      },
      {
        icon: "Wrench",
        title: "On-site mitigation",
        description:
          "We arrive with truck-mounted extraction, commercial dehumidifiers, and containment materials — ready to start protecting your home immediately.",
      },
      {
        icon: "ShieldAlert",
        title: "Damage prevention",
        description:
          "Fast action means less damage. We secure the affected area, stop the source, extract water, and begin drying — all in the first visit.",
      },
      {
        icon: "Truck",
        title: "Fully equipped crews",
        description:
          "Our trucks carry everything needed for water extraction, structural drying, and emergency board-up. No waiting for equipment to arrive separately.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Call us — any time",
        description:
          "Reach us directly at (503) 302-0557. We answer 24/7 and will walk you through immediate safety steps while we dispatch our crew.",
      },
      {
        number: 2,
        title: "Rapid dispatch",
        description:
          "Our crew mobilizes within minutes from Sheridan with a fully loaded truck. We'll give you an arrival time so you know exactly when to expect us.",
      },
      {
        number: 3,
        title: "On-site assessment",
        description:
          "We identify the source, assess the damage, and explain the plan — clearly and honestly — so you know exactly what we're doing and why.",
      },
      {
        number: 4,
        title: "Immediate mitigation",
        description:
          "Water extraction, source control, containment, and structural drying begin immediately. Our goal is to stop the damage from spreading — right now.",
      },
      {
        number: 5,
        title: "Restoration planning",
        description:
          "Once the emergency is stabilized, we develop a full restoration plan, document everything for insurance, and schedule follow-up work.",
      },
    ],
    faqs: [
      {
        question: "What qualifies as an emergency?",
        answer:
          "Any situation where water is actively entering your home, you've discovered significant flooding, a pipe has burst, or storm damage has compromised your roof or walls. If you're unsure, call us — we'd rather check and find a small problem than have you wait and face a big one.",
      },
      {
        question: "How fast can you get to my home?",
        answer:
          "Within the hour for Sheridan and surrounding communities like McMinnville, Dallas, and Willamina. For locations across the Willamette Valley, Salem, or the coast, we're typically on-site within two hours.",
      },
      {
        question: "What should I do before your team arrives?",
        answer:
          "If it's safe, turn off the water source and electricity in the affected area. Move valuables to dry ground. Don't walk through standing water near electrical outlets. We'll stay on the phone with you and guide you through it.",
      },
      {
        question: "Do you handle insurance claims for emergency work?",
        answer:
          "Yes. We document the damage from the moment we arrive — photos, moisture readings, equipment logs — and communicate directly with your insurance adjuster. Emergency water damage is typically covered under homeowner policies.",
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
