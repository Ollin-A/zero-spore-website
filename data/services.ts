// ---------------------------------------------------------------------------
// Service page content — water-damage, mold-remediation, emergency
// ---------------------------------------------------------------------------

export interface ServiceFeature {
  icon: string; // Icon key mapped in FeatureGrid ICON_MAP
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

export interface ContrastPoint {
  them: string;
  us: string;
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
    points: ContrastPoint[];
    trustMarkers?: string[];
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
    heroImage: "/images/services/water_restoration_1.webp",
    features: [
      {
        icon: "Extractor",
        title: "Residential Water Extraction",
        description:
          "Quick removal of standing water from leaks, floods, appliance malfunctions, and plumbing failures.",
      },
      {
        icon: "Flood",
        title: "Flood Damage Cleanup",
        description:
          "Immediate response to storm or flash flood events.",
      },
      {
        icon: "Drying",
        title: "Ceiling, Wall and Floor Drying",
        description:
          "Preventing warping, swelling and secondary damage with industrial dehumidifiers and air movers.",
      },
      {
        icon: "MoldPrevent",
        title: "Mold Prevention and Moisture Control",
        description:
          "Minimizing the risk of mold growth after water intrusion with antimicrobial treatment and moisture monitoring.",
      },
      {
        icon: "Sewage",
        title: "Sewage Backup Mitigation",
        description:
          "Safe cleanup and disinfection for contaminated water events using EPA-approved, hospital-grade solutions.",
      },
      {
        icon: "InsuranceDoc",
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
        "Homeowners across Oregon choose Zero Spore Restoration for water damage mitigation because of:",
      points: [
        { them: "Call centers", us: "Direct line to our family" },
        {
          them: "Hidden fees and surprise charges",
          us: "Transparent estimates, always",
        },
        { them: "Cookie-cutter solutions", us: "Plans built for your home" },
        {
          them: "Next-day response, maybe",
          us: "We\u2019re there within the hour",
        },
        {
          them: "Subcontractors you\u2019ve never met",
          us: "Our certified team, every time",
        },
      ],
      trustMarkers: [
        "CCB #244908",
        "IICRC Certified",
        "AHERA Certified",
        "Lead-Based Paint/RRP",
        "Free estimates",
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
    heroImage: "/images/services/mold-remediation-hero.webp",
    features: [
      {
        icon: "MoldTarget",
        title: "Residential Mold Remediation",
        description:
          "Comprehensive mold treatment for homes, from initial inspection through complete remediation and verification.",
      },
      {
        icon: "ShieldCheck",
        title: "Hidden Mold Detection Behind Walls and Ceilings",
        description:
          "Using moisture meters, infrared cameras and surface testing to pinpoint affected areas that may not be immediately visible.",
      },
      {
        icon: "Drying",
        title: "Crawl Space and Attic Mold Treatment",
        description:
          "Specialized treatment for hard-to-reach areas where moisture buildup commonly leads to hidden mold growth.",
      },
      {
        icon: "MoldPrevent",
        title: "Air Quality Restoration and Mold Prevention",
        description:
          "HEPA air scrubbers and dehumidification to restore indoor air quality and prevent future mold recurrence.",
      },
      {
        icon: "Extractor",
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
        "Choosing the right mold remediation company matters. Our clients trust us because:",
      points: [
        { them: "Generic cleaning crews", us: "Certified mold specialists" },
        {
          them: "Guesswork and shortcuts",
          us: "EPA-approved containment protocols",
        },
        {
          them: "Vague timelines and surprises",
          us: "Clear plan before we start",
        },
        {
          them: "Hidden costs after the fact",
          us: "Transparent pricing upfront",
        },
        {
          them: "One-size-fits-all approach",
          us: "Custom remediation for your home",
        },
      ],
      trustMarkers: [
        "CCB #244908",
        "IICRC Certified",
        "AHERA Certified",
        "EPA-approved products",
        "Independent testing",
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
    heroImage: "/images/services/emergency-service.webp",
    features: [
      {
        icon: "Extractor",
        title: "Water Extraction and Water Damage Mitigation",
        description:
          "Fast removal of standing water and comprehensive drying to prevent structural damage and mold growth.",
      },
      {
        icon: "Storm",
        title: "Storm and Flood Damage Repair",
        description:
          "Immediate response to storm or flood events, including water removal, structural drying, and damage assessment.",
      },
      {
        icon: "MoldTarget",
        title: "Mold Remediation After Water Intrusion",
        description:
          "Professional mold containment and removal following water exposure to protect your family\u2019s health.",
      },
      {
        icon: "Drying",
        title: "Structural Drying and Dehumidification",
        description:
          "Industrial-grade drying equipment to eliminate moisture from walls, floors, and structural elements.",
      },
      {
        icon: "Debris",
        title: "Debris Removal and Post-Emergency Cleaning",
        description:
          "Safe removal of damaged materials and thorough cleaning to prepare your property for restoration.",
      },
      {
        icon: "BoardUp",
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
        "When disaster strikes, you need a team you can count on. Oregon homeowners choose us because:",
      points: [
        {
          them: "Call centers and hold music",
          us: "Direct line to our family",
        },
        { them: "Next-day scheduling", us: "We dispatch within minutes" },
        {
          them: "Unqualified temp workers",
          us: "IICRC, AHERA, and RRP certified",
        },
        {
          them: "You figure out the paperwork",
          us: "We guide you through insurance",
        },
        {
          them: "Just another job ticket",
          us: "Your emergency is personal to us",
        },
      ],
      trustMarkers: [
        "CCB #244908",
        "IICRC Certified",
        "AHERA Certified",
        "Lead-Based Paint/RRP",
        "Free estimates",
      ],
    },
    closingCta:
      "Call us anytime at 503-302-0557 for fast, professional emergency restoration services. Our certified experts are ready to help you safely and efficiently recover and restore your property.",
  },
};

// ---------------------------------------------------------------------------
// Spanish service content
// ---------------------------------------------------------------------------

export const SERVICES_ES: Record<string, ServiceData> = {
  "danos-por-agua": {
    slug: "danos-por-agua",
    title: "Daños por Agua",
    headline: "Mitigación profesional de daños por agua",
    subline: "Extracción rápida. Secado completo. Prevención a largo plazo.",
    body: "Cuando el agua invade tu hogar, el riesgo de daño estructural y crecimiento de moho es inmediato. Zero Spore Restoration es tu fuente confiable para mitigación rápida y profesional — 24/7.",
    bodyParagraphs: [
      "Cuando el agua invade tu hogar, el riesgo de daño estructural y crecimiento de moho es inmediato. Zero Spore Restoration es tu fuente confiable para mitigación rápida y profesional — 24/7.",
      "Desde fugas menores hasta inundaciones mayores, combinamos servicio experto con equipo especializado para evaluar, contener y mitigar daños por agua de cualquier escala. Llama al (503) 302-0557.",
    ],
    metaTitle:
      "Mitigación de Daños por Agua | Oregon | Zero Spore Restoration",
    metaDescription:
      "Servicio profesional de mitigación de daños por agua en Oregon. Extracción, secado estructural y respuesta 24/7. Empresa familiar. Hablamos español. CCB #244908.",
    heroImage: "/images/services/water_restoration_1.webp",
    features: [
      {
        icon: "Extractor",
        title: "Extracción residencial de agua",
        description:
          "Remoción rápida de agua estancada por fugas, inundaciones y fallas de plomería.",
      },
      {
        icon: "Flood",
        title: "Limpieza por inundación",
        description:
          "Respuesta inmediata a eventos de tormenta o inundación repentina.",
      },
      {
        icon: "Drying",
        title: "Secado de techos, paredes y pisos",
        description:
          "Prevención de deformaciones, hinchazón y daño secundario con deshumidificadores industriales.",
      },
      {
        icon: "MoldPrevent",
        title: "Prevención de moho",
        description:
          "Minimizar el riesgo de crecimiento de moho después de intrusión de agua con tratamiento antimicrobiano.",
      },
      {
        icon: "Sewage",
        title: "Mitigación de aguas residuales",
        description:
          "Limpieza y desinfección segura para eventos de agua contaminada con soluciones aprobadas por la EPA.",
      },
      {
        icon: "InsuranceDoc",
        title: "Documentación para seguros",
        description:
          "Reportes detallados para facilitar tu proceso de reclamación, incluyendo lecturas de humedad y evidencia fotográfica.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Evaluación de emergencia",
        description:
          "Realizamos una evaluación visual completa para identificar la fuente del agua y mapear la extensión del daño con herramientas avanzadas.",
      },
      {
        number: 2,
        title: "Extracción y secado",
        description:
          "Usamos extractores comerciales para remover el agua y acelerar el secado, previniendo daño secundario en materiales porosos.",
      },
      {
        number: 3,
        title: "Limpieza y desinfección",
        description:
          "Limpiamos y desinfectamos áreas afectadas con soluciones hospitalarias aprobadas por la EPA para eliminar contaminantes.",
      },
      {
        number: 4,
        title: "Contención de daños",
        description:
          "Estabilizamos estructuras y removemos materiales comprometidos, preparando tu hogar para la restauración completa.",
      },
      {
        number: 5,
        title: "Inspección final",
        description:
          "Verificamos que tu hogar esté seco, seguro y listo para restauración. Ofrecemos asesoría para prevención futura.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tan rápido pueden responder?",
        answer:
          "Generalmente 1-2 horas en el área de Sheridan, el mismo día para áreas más lejanas.",
      },
      {
        question: "¿Los daños por agua siempre causan moho?",
        answer:
          "El moho puede comenzar a crecer en 24-48 horas. La mitigación rápida es crítica para prevenirlo.",
      },
      {
        question: "¿Trabajan con seguros?",
        answer:
          "Proporcionamos documentación completa y apoyo para tu proceso de reclamación.",
      },
      {
        question: "¿Qué equipo utilizan?",
        answer:
          "Extractores comerciales, deshumidificadores industriales, ventiladores de aire y cámaras infrarrojas.",
      },
      {
        question: "¿Cuánto tarda el secado?",
        answer:
          "Típicamente 3-5 días, con monitoreo diario de niveles de humedad.",
      },
    ],
    relatedSlugs: ["remediacion-de-moho", "emergencias"],
    accentColor: "text-ocean",
    accentBg: "bg-sky",
    whyChooseUs: {
      intro:
        "Los propietarios en Oregon eligen Zero Spore Restoration para mitigación de daños por agua porque ofrecemos:",
      points: [
        {
          them: "Centros de llamadas",
          us: "Línea directa con nuestra familia",
        },
        {
          them: "Cargos ocultos y sorpresas",
          us: "Presupuestos transparentes, siempre",
        },
        {
          them: "Soluciones genéricas",
          us: "Planes hechos para su hogar",
        },
        {
          them: "Respuesta al día siguiente, tal vez",
          us: "Llegamos en menos de una hora",
        },
        {
          them: "Subcontratistas que nunca conoció",
          us: "Nuestro equipo certificado, cada vez",
        },
      ],
      trustMarkers: [
        "CCB #244908",
        "Certificación IICRC",
        "Certificación AHERA",
        "Lead-Based Paint/RRP",
        "Presupuestos gratuitos",
      ],
    },
    closingCta:
      "No esperes a que los daños por agua escalen. Llama al (503) 302-0557 para restauración rápida y profesional.",
  },

  "remediacion-de-moho": {
    slug: "remediacion-de-moho",
    title: "Remediación de Moho",
    headline: "Remediación de moho en la que puedes confiar",
    subline: "Identificar. Contener. Eliminar. Verificar.",
    body: "En Zero Spore Restoration nos especializamos en el tratamiento y eliminación segura del moho. Entendemos que el moho puede desarrollarse silenciosamente, representando riesgos estructurales y de salud antes de que aparezcan señales visibles.",
    bodyParagraphs: [
      "En Zero Spore Restoration nos especializamos en el tratamiento y eliminación segura del moho. Entendemos que el moho puede desarrollarse silenciosamente, representando riesgos estructurales y de salud antes de que aparezcan señales visibles.",
      "Cada situación de moho presenta un desafío único. Nuestro proceso combina inspección detallada, tecnología avanzada y un plan de remediación personalizado para tu hogar.",
    ],
    metaTitle:
      "Remediación de Moho Profesional | Oregon | Zero Spore Restoration",
    metaDescription:
      "Servicio experto de remediación de moho en Oregon. Contención, tratamiento y eliminación segura. Respuesta rápida. Hablamos español. CCB #244908.",
    heroImage: "/images/services/mold-remediation-hero.webp",
    features: [
      {
        icon: "ShieldCheck",
        title: "Inspección y evaluación",
        description:
          "Evaluación detallada con medidores de humedad y cámaras infrarrojas para localizar áreas afectadas.",
      },
      {
        icon: "MoldTarget",
        title: "Contención profesional",
        description:
          "Barreras de presión negativa y filtración HEPA para evitar propagación de esporas.",
      },
      {
        icon: "Extractor",
        title: "Remoción segura de moho",
        description:
          "Remoción cuidadosa de materiales afectados con soluciones aprobadas por la EPA.",
      },
      {
        icon: "MoldPrevent",
        title: "Tratamiento y desinfección",
        description:
          "Limpieza de superficies con antimicrobianos profesionales para reducir esporas a niveles seguros.",
      },
      {
        icon: "Drying",
        title: "Restauración del aire",
        description:
          "Filtración HEPA y depuración del aire para restaurar la calidad del ambiente interior.",
      },
      {
        icon: "InsuranceDoc",
        title: "Inspección post-remediación",
        description:
          "Verificación final para confirmar que el moho se redujo a niveles seguros.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Inspección y evaluación",
        description:
          "Comenzamos con una inspección detallada usando medidores de humedad y cámaras infrarrojas para localizar áreas afectadas que pueden no ser visibles.",
      },
      {
        number: 2,
        title: "Contención",
        description:
          "Establecemos zonas de contención con presión negativa y filtración HEPA para evitar la propagación de esporas a otras áreas.",
      },
      {
        number: 3,
        title: "Remoción y limpieza",
        description:
          "Removemos materiales afectados y desinfectamos todas las superficies con soluciones profesionales aprobadas por la EPA.",
      },
      {
        number: 4,
        title: "Secado y deshumidificación",
        description:
          "Usamos equipo industrial de secado para reducir los niveles de humedad, crucial para prevenir la reaparición del moho.",
      },
      {
        number: 5,
        title: "Inspección final",
        description:
          "Realizamos una inspección final para confirmar que el moho se ha reducido a niveles seguros.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo sé si tengo moho?",
        answer:
          "Olor a humedad, manchas oscuras en paredes, síntomas de alergia o daños recientes por agua son señales comunes.",
      },
      {
        question: "¿El moho es peligroso?",
        answer:
          "Ciertos tipos pueden causar problemas respiratorios e irritaciones. La remediación profesional protege tu salud.",
      },
      {
        question: "¿Puedo remover el moho yo mismo?",
        answer:
          "Áreas pequeñas (menos de 1 metro cuadrado) pueden ser limpiadas. Áreas más grandes requieren contención profesional.",
      },
      {
        question: "¿Cuánto tarda la remediación?",
        answer:
          "Típicamente de 1 a 5 días, dependiendo de la extensión del daño.",
      },
      {
        question: "¿El moho regresa?",
        answer: "No si la fuente de humedad se elimina correctamente.",
      },
    ],
    relatedSlugs: ["danos-por-agua", "emergencias"],
    accentColor: "text-forest",
    accentBg: "bg-moss",
    disclaimer:
      "Algunos casos severos de moho requieren pruebas pre y post-remediación, las cuales deben ser realizadas por un Inspector Ambiental de Moho independiente con licencia. El inspector recolecta muestras para análisis de laboratorio y crea un informe completo con recomendaciones específicas. En Zero Spore Restoration cumplimos con todos los requisitos de seguridad del estado de Oregon.",
    whyChooseUs: {
      intro:
        "Elegir la empresa correcta para remediación de moho importa. Nuestros clientes confían en nosotros porque ofrecemos:",
      points: [
        {
          them: "Equipos de limpieza genéricos",
          us: "Especialistas certificados en moho",
        },
        {
          them: "Suposiciones y atajos",
          us: "Protocolos de contención aprobados por la EPA",
        },
        {
          them: "Tiempos vagos y sorpresas",
          us: "Plan claro antes de comenzar",
        },
        {
          them: "Costos ocultos al final",
          us: "Precios transparentes desde el inicio",
        },
        {
          them: "Enfoque genérico",
          us: "Remediación personalizada para su hogar",
        },
      ],
      trustMarkers: [
        "CCB #244908",
        "Certificación IICRC",
        "Certificación AHERA",
        "Productos aprobados por la EPA",
        "Pruebas independientes",
      ],
    },
  },

  emergencias: {
    slug: "emergencias",
    title: "Servicios de Emergencia",
    headline: "Respuesta de emergencia cuando cada minuto cuenta",
    subline: "Disponibilidad 24/7. Despacho rápido. Protección inmediata.",
    body: "Cuando un desastre trae daños inesperados por agua, moho o tormenta, la acción inmediata es esencial. Zero Spore Restoration ofrece servicios rápidos y confiables de restauración de emergencia — disponibles 24/7.",
    bodyParagraphs: [
      "Cuando un desastre trae daños inesperados por agua, moho o tormenta, la acción inmediata es esencial. Zero Spore Restoration ofrece servicios rápidos y confiables de restauración de emergencia — disponibles 24/7.",
      "¿Tubería rota, sótano inundado o daño por tormenta? Nuestros expertos manejan cada emergencia con precisión, equipo avanzado y un trato personal y compasivo.",
    ],
    metaTitle:
      "Servicios de Restauración de Emergencia 24/7 | Oregon | Zero Spore Restoration",
    metaDescription:
      "Restauración de emergencia 24/7 en Oregon. Daños por agua, inundaciones y tormentas. Respuesta rápida. Hablamos español. CCB #244908.",
    heroImage: "/images/services/emergency-service.webp",
    features: [
      {
        icon: "Extractor",
        title: "Extracción de agua y mitigación",
        description:
          "Remoción rápida de agua estancada y secado completo para prevenir daño estructural y crecimiento de moho.",
      },
      {
        icon: "Storm",
        title: "Reparación por tormenta e inundación",
        description:
          "Respuesta inmediata a eventos de tormenta o inundación, incluyendo remoción de agua y evaluación de daños.",
      },
      {
        icon: "MoldTarget",
        title: "Remediación de moho post-agua",
        description:
          "Contención y remoción profesional de moho después de exposición al agua para proteger la salud de tu familia.",
      },
      {
        icon: "Drying",
        title: "Secado estructural y deshumidificación",
        description:
          "Equipo industrial de secado para eliminar humedad de paredes, pisos y elementos estructurales.",
      },
      {
        icon: "Debris",
        title: "Remoción de escombros y limpieza",
        description:
          "Remoción segura de materiales dañados y limpieza completa para preparar tu propiedad para restauración.",
      },
      {
        icon: "BoardUp",
        title: "Servicios de protección y aseguramiento",
        description:
          "Protección de emergencia con lonas y tablas para asegurar tu propiedad contra mayor exposición y daño.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Respuesta inmediata",
        description:
          "Nuestro equipo responde inmediatamente para evaluar el daño, inspeccionar áreas afectadas y desarrollar un plan de acción integral.",
      },
      {
        number: 2,
        title: "Contención de daños",
        description:
          "Extraemos agua, secamos estructuras y prevenimos crecimiento de moho para limitar el daño a tu propiedad.",
      },
      {
        number: 3,
        title: "Restauración y limpieza",
        description:
          "Nuestros servicios incluyen extracción de agua, secado estructural, remediación de moho, restauración por tormenta y limpieza post-emergencia.",
      },
      {
        number: 4,
        title: "Inspección final",
        description:
          "Realizamos una inspección profesional detallada incluyendo verificación de humedad y calidad del aire para confirmar que el trabajo está completo.",
      },
    ],
    faqs: [
      {
        question: "¿Qué califica como emergencia?",
        answer:
          "Tuberías rotas, inundaciones, tormentas, fugas activas, o cualquier situación que requiera acción inmediata para proteger tu propiedad.",
      },
      {
        question: "¿Qué tan rápido pueden llegar?",
        answer: "Típicamente 1-2 horas en el área de Sheridan.",
      },
      {
        question: "¿Qué debo hacer antes de que lleguen?",
        answer:
          "Si es seguro, cierra la válvula de agua, no entres a áreas inundadas y documenta con fotos.",
      },
      {
        question: "¿Manejan reclamaciones de seguro?",
        answer:
          "Proporcionamos documentación completa y apoyo para facilitar tu reclamación.",
      },
      {
        question: "¿En qué áreas dan servicio?",
        answer:
          "Sheridan, Portland, Salem, Lincoln City, todo el condado de Yamhill y muchas comunidades más en Oregon.",
      },
    ],
    relatedSlugs: ["danos-por-agua", "remediacion-de-moho"],
    accentColor: "text-alert",
    accentBg: "bg-alert-bg",
    whyChooseUs: {
      intro:
        "Cuando ocurre un desastre, necesita un equipo en el que pueda confiar. Los propietarios en Oregon nos eligen porque ofrecemos:",
      points: [
        {
          them: "Centros de llamadas y música de espera",
          us: "Línea directa con nuestra familia",
        },
        {
          them: "Citas para el día siguiente",
          us: "Despachamos en minutos",
        },
        {
          them: "Trabajadores temporales sin certificación",
          us: "Certificados IICRC, AHERA y RRP",
        },
        {
          them: "Usted resuelve el papeleo solo",
          us: "Le guiamos con su seguro",
        },
        {
          them: "Solo un ticket más",
          us: "Su emergencia es personal para nosotros",
        },
      ],
      trustMarkers: [
        "CCB #244908",
        "Certificación IICRC",
        "Certificación AHERA",
        "Lead-Based Paint/RRP",
        "Presupuestos gratuitos",
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getService(slug: string): ServiceData {
  const service = SERVICES[slug];
  if (!service) throw new Error(`Service not found: ${slug}`);
  return service;
}

export function getServiceES(slug: string): ServiceData {
  const service = SERVICES_ES[slug];
  if (!service) throw new Error(`Spanish service not found: ${slug}`);
  return service;
}
