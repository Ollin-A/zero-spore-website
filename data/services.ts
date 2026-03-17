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
    body: "When water damage strikes your home, the risk of structural compromise, mold growth and expensive repairs is immediate. Zero Spore Restoration LLC is your trusted source for fast and professional Water Damage Mitigation Services.",
    bodyParagraphs: [
      "When water damage strikes your home, the risk of structural compromise, mold growth and expensive repairs is immediate. Zero Spore Restoration LLC is your trusted source for fast and professional Water Damage Mitigation Services.",
      "We work 24/7, combining expert, hands-on service with specialized, industry-leading equipment to quickly assess, contain and fully mitigate water damage of any size.",
      "Don\u2019t wait! \u2014 protect your property and peace of mind. Call us today at 503-302-0557 for emergency response.",
      "We handle every job \u2014 from minor leaks to major flooding \u2014 with urgency and precision. Zero Spore Restoration is dedicated to not only containing the immediate damage, but also preventing long-term issues like structural weakening, mold and health hazards. When you choose us, you are selecting a partner that prioritizes the quality of every service and genuinely cares about your home and your family.",
      "Water damage can extend far beyond what the eye can see. Water can quickly and silently seep into floors, walls, ceilings and any nearby porous materials creating hidden moisture pockets that eventually compromise structural integrity.",
      "If left unmanaged, water damage can lead to substantial long-term property damage such as mold and mildew growth, rotting wood and weakened structures, electrical hazards, reduced indoor air quality and potentially serious health issues, and long-term repair costs.",
      "At Zero Spore Restoration we understand that, during water damage, time is of the essence! Fast intervention can significantly reduce the damage, lower restoration and reconstruction costs and protect your health. Using professional, industry-established mitigation procedures, we thoroughly extract water, dry and clean all affected areas to protect your home and prevent future complications.",
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
          "We conduct a thorough visual evaluation of the affected areas to identify the source of the water and stop it, when necessary. We use advanced tools to accurately measure moisture levels and map out the extent of the damage. This allows us to develop a detailed and transparent mitigation plan.",
      },
      {
        number: 2,
        title: "Water Extraction and Drying",
        description:
          "We use commercial-grade extractors to remove standing water and accelerate the drying process. These swift actions minimize secondary damage like swelling and warping and prevent mold growth in porous materials such as ceilings, walls, flooring, cabinetry, etc. During this process, our team continuously monitors moisture levels to ensure the structure is completely dry.",
      },
      {
        number: 3,
        title: "Cleaning and Sanitization",
        description:
          "Water intrusion, particularly from floods or sewage leaks, often brings harmful contaminants. We clean and disinfect affected areas, using safe, EPA-approved, hospital-grade solutions to eliminate bacteria, viruses, and allergens. This critical step protects your family\u2019s health and prevents lingering odors.",
      },
      {
        number: 4,
        title: "Damage Containment",
        description:
          "This mitigation phase focuses on structural stabilization to prevent further damage. It involves the necessary removal of damaged and compromised materials, such as drywall, insulation, flooring and cabinetry \u2014 a process commonly referred to as demolition. Containment areas are meticulously set up to contain dust and debris, preparing your home for full restoration. Our goal is to minimize disruption to your life as much as possible.",
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
        "Restoration is not just about drying your home \u2014 it\u2019s about trust, quality and reliability. Homeowners in Oregon choose Zero Spore Restoration LLC because of:",
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
      "Don\u2019t wait for water damage to escalate. Zero Spore Restoration LLC offers professional, prompt and reliable water damage mitigation services across the Willamette Valley, Portland Metro area and many other communities in between. Our certified team is ready to protect your home from further damage and support you through every stage of the mitigation process.",
  },

  "mold-remediation": {
    slug: "mold-remediation",
    title: "Mold Remediation",
    headline: "Mold remediation you can trust",
    subline:
      "Thorough inspection, safe containment, and professional remediation \u2014 so your family breathes easy again.",
    body: "At Zero Spore Restoration we specialize in the safe and effective treatment and removal of mold. We understand that mold can develop silently in your property posing significant structural and health risks, often before visible signs appear. Our expert team is dedicated to identifying, containing and treating mold so you can breathe easier in your own home.",
    bodyParagraphs: [
      "At Zero Spore Restoration we specialize in the safe and effective treatment and removal of mold. We understand that mold can develop silently in your property posing significant structural and health risks, often before visible signs appear. Our expert team is dedicated to identifying, containing and treating mold so you can breathe easier in your own home.",
      "Every mold situation presents a unique challenge, ranging from visible growth in a bathroom ceiling to hidden mold within walls and extensive damage caused by water. Our remediation process combines a detailed, professional inspection, the use of advanced technology and a personalized remediation plan to fit your needs. Our training and extensive experience ensure professional service and invaluable peace of mind.",
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
          "We begin with a detailed inspection to determine the existence and extent of the mold growth. We use specialized tools such as moisture meters, infrared cameras and surface testing to accurately pinpoint affected areas that may not be immediately visible. This helps us create an effective remediation strategy.",
      },
      {
        number: 2,
        title: "Containment",
        description:
          "Before any demolition, we establish containment zones to prevent mold spores from spreading to other areas. We use negative air pressure machines, protective barriers, and HEPA filtration systems to ensure the rest of your home stays safe and clean during the entire process.",
      },
      {
        number: 3,
        title: "Removal and Cleaning",
        description:
          "We carefully remove or treat all affected materials \u2014 such as drywall, insulation and flooring. Then, we clean and disinfect all surfaces using professional-grade, EPA-approved solutions. Our goal is to reduce mold spore count to safe levels while preserving your property as much as possible.",
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
          "Once the process is complete, we perform a final inspection to confirm mold has been reduced to safe levels. We can also provide references for necessary repairs or reconstruction of damaged areas, ensuring your home returns to a safe, livable condition.",
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
      "Some severe mold cases require pre and post-remediation testing, which must be conducted by an independent Environmental Mold Inspector. The inspector collects mold samples for lab analysis and identification. From the lab results, the inspector creates a comprehensive report and develops a protocol with specific recommendations for professional mold remediation. When remediation is complete, the inspector will often retest to verify treatment was successful and provide a clearance report or make further recommendations to make the environment safe.",
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
      closing:
        "We treat every customer with care and compassion, creating a customized mold remediation plan for each property based on the extent of the damage and minimizing disruption to your daily life as much as possible. Our comprehensive approach not only protects your health but also preserves your property\u2019s value.",
    },
    closingCta:
      "Don\u2019t let mold compromise the safety of your home. Early detection and professional remediation are critical to prevent costly damage and potential health problems. Zero Spore Restoration LLC offers reliable and comprehensive mold remediation services. Our experts are ready to respond quickly when you need us. Protect your family and home. Call us today at 503-302-0557 to schedule an inspection or emergency service.",
  },

  emergency: {
    slug: "emergency",
    title: "Emergency Restoration",
    headline: "Emergency response when every minute counts",
    subline:
      "24/7 dispatch, rapid on-site arrival, and immediate mitigation \u2014 because emergencies don\u2019t wait for business hours.",
    body: "When disaster strikes, bringing unexpected water, mold, or storm damage, prompt action is essential for homeowners and businesses. Zero Spore Restoration LLC offers fast, reliable emergency restoration services. We are committed to helping property owners recover safely and efficiently, knowing that in these critical moments, every minute is vital.",
    bodyParagraphs: [
      "When disaster strikes, bringing unexpected water, mold, or storm damage, prompt action is essential for homeowners and businesses. Zero Spore Restoration LLC offers fast, reliable emergency restoration services. We are committed to helping property owners recover safely and efficiently, knowing that in these critical moments, every minute is vital.",
      "Facing a sudden pipe burst, a flooded basement, or storm damage? Our trained experts are ready to handle any emergency with precision. We use advanced equipment and proven restoration methods coupled with a personal, compassionate approach, to ensure your property is restored quickly and effectively.",
      "Emergencies are stressful, but you are not alone! Zero Spore Restoration, LLC is here to guide you every step of the way. From the initial assessment to completion, we work diligently to minimize damage and prevent long-term issues so you can breathe easy again.",
      "In an emergency, time is critical. Within hours, water can seep into your walls, floors, and ceilings, creating immediate mold risks. Storm damage exposes your property to additional dangers like wind and water intrusion. Fast action is essential \u2014 it prevents further damage, significantly reduces restoration costs, and minimizes downtime.",
      "Zero Spore Restoration LLC prioritizes this immediate action. Our rapid response team in Sheridan, OR is available 24/7, ready to assess, contain, and restore your property the moment disaster strikes.",
      "When emergencies strike, it\u2019s natural to feel overwhelmed. That\u2019s why the Zero Spore Restoration team is committed to guiding you through the entire recovery process. We ensure you are informed, supported, and confident throughout the entire process. We do this by communicating clearly, explaining every step, and providing solutions tailored to your specific needs.",
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
          "Once you contact us, our team immediately responds to assess the damage. We thoroughly inspect affected areas, determine the extent of the damage and develop a comprehensive plan of action. This crucial initial assessment allows us to quickly address urgent concerns and prevent further damage.",
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
          "Our commitment to your safety and satisfaction is paramount. Following restoration, we conduct a detailed, professional inspection to confirm the work is complete. This includes critical steps like verifying all repairs were performed correctly, conducting comprehensive moisture checks, and performing air quality testing, whenever necessary. Our ultimate goal is to return your property to you fully mitigated and remediated.",
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
        "For fast, responsive and compassionate care, call 503-302-0557. Our highly trained team genuinely cares about your safety and comfort, providing a clear, tailored plan for your unique emergency.",
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
