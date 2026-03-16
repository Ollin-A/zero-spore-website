// ---------------------------------------------------------------------------
// Area page content — 7 service area cities across Oregon
// ---------------------------------------------------------------------------

import type { FAQItem } from "@/data/services";

export interface AreaService {
  slug: string;
  title: string;
  description: string;
  accentColor: string;
}

export interface AreaData {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  headline: string;
  subline: string;
  metaTitle: string;
  metaDescription: string;
  heroContent: string[];
  responseTime: string;
  services: AreaService[];
  whyHeading: string;
  whyContent: string[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const AREAS: Record<string, AreaData> = {
  sheridan: {
    slug: "sheridan",
    name: "Sheridan",
    state: "Oregon",
    stateAbbr: "OR",
    headline: "Water damage and mold restoration in Sheridan, Oregon",
    subline:
      "Our home base. When water threatens yours, we respond in minutes — not hours.",
    metaTitle:
      "Water Damage & Mold Restoration Sheridan OR | Zero Spore Restoration",
    metaDescription:
      "Sheridan, Oregon's local restoration company. 24/7 emergency water damage and mold remediation. Family-owned, CCB #244908. Call (503) 302-0557.",
    heroContent: [
      "Sheridan is where Zero Spore Restoration began, and it is still the place we call home. Our equipment stays staged and ready at our local shop, which means we can be at your door faster than any competitor driving in from Portland or Salem. For a town built along the South Yamhill River corridor, that speed matters — especially during the heavy rains that arrive every October and do not let up until May.",
      "Many Sheridan homes date back decades, with wood-frame construction, older crawlspaces, and original plumbing that has seen better days. When a supply line fails at two in the morning or Willamina Creek pushes water toward Bridge Street, the damage accelerates by the minute. Standing water wicks into subfloors and drywall within the first hour, and mold colonization can begin in as little as twenty-four hours if moisture is not extracted properly. We have restored homes on every street in town — from the neighborhoods near Faulconer-Chapman School to the properties along Rock Creek Road — and we understand the construction methods local builders have used for generations.",
      "Our team carries commercial-grade extractors, dehumidifiers, and air movers on every call. We document moisture readings with thermal imaging, set containment where needed, and communicate directly with your insurance adjuster so you are never left guessing about next steps. Because we live here, follow-up inspections are a short drive, not a scheduling headache.",
      "Sheridan homeowners also face a persistent mold challenge. The Yamhill County climate keeps relative humidity high for roughly eight months of the year, and older crawlspaces without vapor barriers create ideal conditions for mold growth beneath the living space. We perform full mold assessments, establish negative-air containment, and remediate to IICRC S520 standards — then address the moisture source so the problem does not return.",
    ],
    responseTime: "Under 30 minutes",
    services: [
      {
        slug: "water-damage",
        title: "Water Damage Restoration",
        description:
          "Burst pipes, river flooding, and crawlspace water intrusion are common in Sheridan's older homes. We extract, dry, and restore — fast.",
        accentColor: "text-ocean",
      },
      {
        slug: "mold-remediation",
        title: "Mold Remediation",
        description:
          "Yamhill County humidity and aging crawlspaces create persistent mold risks. We contain, remove, and prevent regrowth at the source.",
        accentColor: "text-forest",
      },
      {
        slug: "emergency",
        title: "Emergency Restoration",
        description:
          "As Sheridan's local restoration team, we reach your property in minutes. Day or night, our equipment is staged and ready to go.",
        accentColor: "text-alert",
      },
    ],
    whyHeading: "Why Sheridan trusts Zero Spore",
    whyContent: [
      "We are not a franchise dispatching technicians from across the valley. We are your neighbors. Our kids attend Sheridan schools, we shop at the same stores, and we understand the specific challenges that homes in this community face — from the clay-heavy soils that hold moisture against foundations to the wind-driven rain that finds every gap in aging siding.",
      "When you call Zero Spore, you speak directly to the people who will be in your home. There is no call center and no middleman. We answer our phone around the clock because we know that water damage does not wait for business hours, and neither should your restoration company.",
    ],
    faqs: [
      {
        question: "How quickly can Zero Spore reach my Sheridan home?",
        answer:
          "Because Sheridan is our home base, we can typically arrive within thirty minutes of your call. Our equipment stays loaded and ready to deploy at all times.",
      },
      {
        question: "Do you work with insurance companies for Sheridan claims?",
        answer:
          "Yes. We document every step with photos, moisture readings, and detailed reports that insurance adjusters require. We communicate directly with your adjuster to keep the process moving.",
      },
      {
        question: "My crawlspace smells musty. Could it be mold?",
        answer:
          "A persistent musty odor in your crawlspace almost always indicates mold growth. Sheridan's high humidity and older vapor barrier systems make this especially common. We offer free visual inspections to assess the situation and recommend next steps.",
      },
      {
        question:
          "What should I do if my home floods from the South Yamhill River?",
        answer:
          "Call us immediately. While you wait, turn off electricity to affected areas if safe to do so, and move valuables to higher ground. Do not walk through standing water near electrical outlets. We will arrive with extraction equipment and begin removing water right away.",
      },
    ],
    relatedSlugs: ["mcminnville", "yamhill-county", "salem"],
  },

  portland: {
    slug: "portland",
    name: "Portland",
    state: "Oregon",
    stateAbbr: "OR",
    headline: "Water damage and mold restoration in Portland, Oregon",
    subline:
      "Professional restoration for Portland homes and businesses — from basement flooding to hidden mold behind walls.",
    metaTitle:
      "Water Damage & Mold Restoration Portland OR | Zero Spore Restoration",
    metaDescription:
      "Water damage and mold remediation in Portland, Oregon. 24/7 emergency response, basement flooding specialists. Family-owned, CCB #244908. Call (503) 302-0557.",
    heroContent: [
      "Portland's dense urban landscape presents restoration challenges that are fundamentally different from rural Oregon. Older neighborhoods on the east side — many built before 1950 — sit on homes with full basements, cast-iron drain lines nearing the end of their lifespan, and foundation walls that were never designed for modern waterproofing. When Portland's relentless rain saturates the ground from November through April, hydrostatic pressure pushes groundwater through every crack and joint in those aging foundations.",
      "Basement flooding is the most common call we receive from Portland homeowners. A failed sump pump, a backed-up storm drain, or simply the cumulative effect of months of rain against an old foundation wall can leave inches of water across a finished basement in hours. The damage compounds quickly: carpet padding absorbs water like a sponge, drywall wicks moisture upward through capillary action, and mold can establish itself behind baseboards within forty-eight hours if the space is not dried properly.",
      "Multi-unit buildings and condominiums add another layer of complexity. A single plumbing failure on an upper floor can affect every unit below it, requiring coordination between property managers, individual owners, and insurance carriers. Our team has restored units in buildings across Portland — from older apartment conversions near Hawthorne to newer construction along the waterfront — and we understand how to manage multi-party claims while keeping the restoration on schedule.",
      "Portland's proximity to the Willamette and Columbia rivers also elevates flood risk in certain neighborhoods. Properties in the Sellwood-Moreland area, parts of St. Johns, and low-lying sections near Johnson Creek have experienced repeated flooding events. We help Portland homeowners not only recover from water damage but also identify vulnerabilities that make their homes susceptible to future incidents.",
    ],
    responseTime: "Within 90 minutes",
    services: [
      {
        slug: "water-damage",
        title: "Water Damage Restoration",
        description:
          "Basement flooding, burst pipes in older homes, and storm-driven water intrusion are constant threats in Portland. We bring commercial drying power to every call.",
        accentColor: "text-ocean",
      },
      {
        slug: "mold-remediation",
        title: "Mold Remediation",
        description:
          "Portland's damp climate and older construction make hidden mold a widespread problem. We locate it, contain it, and remove it completely.",
        accentColor: "text-forest",
      },
      {
        slug: "emergency",
        title: "Emergency Restoration",
        description:
          "Water emergencies in Portland cannot wait. We respond within ninety minutes with full extraction and drying equipment, day or night.",
        accentColor: "text-alert",
      },
    ],
    whyHeading: "Why Portland homeowners choose Zero Spore",
    whyContent: [
      "Portland has no shortage of restoration companies, but most are large franchises that rotate technicians through jobs with little continuity. When you call Zero Spore, you work with the same family-owned team from the initial assessment through final restoration. We know your project because we are personally invested in it — not because we read a handoff note from the previous shift.",
      "Our Sheridan base puts us within ninety minutes of any Portland address, and we frequently stage closer for active storm seasons. We carry our own commercial-grade equipment — no waiting for a rental company to deliver dehumidifiers. For Portland's older homes, that speed and self-sufficiency make the difference between drying a basement and gutting one.",
    ],
    faqs: [
      {
        question:
          "Can you reach Portland from Sheridan quickly enough for emergencies?",
        answer:
          "Yes. Portland is approximately seventy-five minutes from our Sheridan base. During active storm seasons, we stage equipment closer to the metro area to reduce response times. We are on the road within minutes of your call.",
      },
      {
        question: "My Portland basement floods every winter. Can you help?",
        answer:
          "Absolutely. We address both the immediate water damage and the underlying cause. After extraction and drying, we can identify where water is entering — whether through foundation cracks, a failed sump pump, or hydrostatic pressure — and recommend permanent solutions.",
      },
      {
        question:
          "Do you handle mold in Portland apartment buildings and condos?",
        answer:
          "Yes. We have experience with multi-unit restoration in Portland, including coordinating with property managers and multiple insurance carriers. We establish containment to prevent cross-contamination between units during remediation.",
      },
      {
        question:
          "How do I know if the water damage in my Portland home has caused mold?",
        answer:
          "If water sat for more than forty-eight hours, or if you detect a musty odor after a flooding event, mold growth is likely. We perform thorough moisture mapping and visual inspections to identify hidden mold behind walls, under floors, and in ceiling cavities.",
      },
      {
        question: "Will you work with my Portland homeowner's insurance?",
        answer:
          "Yes. We document everything — moisture readings, thermal images, photos at every stage, and detailed scope-of-work reports. We communicate directly with your insurance adjuster and provide the documentation they need to process your claim.",
      },
    ],
    relatedSlugs: ["salem", "newberg", "mcminnville"],
  },

  salem: {
    slug: "salem",
    name: "Salem",
    state: "Oregon",
    stateAbbr: "OR",
    headline: "Water damage and mold restoration in Salem, Oregon",
    subline:
      "Fast, professional restoration for Oregon's capital — residential and commercial properties alike.",
    metaTitle:
      "Water Damage & Mold Restoration Salem OR | Zero Spore Restoration",
    metaDescription:
      "Water damage restoration and mold remediation in Salem, Oregon. 24/7 response, under 60 minutes. Family-owned, CCB #244908. Call (503) 302-0557.",
    heroContent: [
      "Salem sits in the heart of the Willamette Valley, where moisture is a way of life. Oregon's capital city receives over forty inches of rain annually, most of it concentrated between October and May. That sustained wet season creates persistent challenges for Salem homeowners — from saturated soil pressing against foundation walls to condensation accumulating in crawlspaces and attics that never fully dry out.",
      "The city's housing stock spans a wide range: historic homes near Bush's Pasture Park and the Court-Chemeketa district, mid-century neighborhoods in South Salem, and newer subdivisions expanding toward Turner and Aumsville. Each era of construction brings its own vulnerabilities. Older homes often have insufficient drainage around foundations, original galvanized plumbing prone to corrosion, and minimal crawlspace ventilation. Newer homes can suffer from construction defects — improperly flashed windows, inadequate grading, or rushed plumbing connections that fail within the first decade.",
      "Salem's location along Mill Creek, Pringle Creek, and the Willamette River itself means that certain neighborhoods face elevated flood risk during atmospheric river events. The Mill Creek flooding that has affected neighborhoods near 12th Street and the areas around Riverside Park underscores how quickly water can enter homes when creeks overtop their banks. Even properties outside designated flood zones experience water intrusion from overwhelmed storm drains and saturated ground during prolonged rain events.",
      "Our team responds to Salem calls within forty-five minutes from our Sheridan base — often faster. We bring the same commercial-grade extraction, drying, and containment equipment to every Salem job that we use for our Yamhill County neighbors. Whether your home has six inches of standing water in the basement or a slow leak that has allowed mold to spread behind bathroom walls, we have the training and the tools to restore it properly.",
    ],
    responseTime: "Under 45 minutes",
    services: [
      {
        slug: "water-damage",
        title: "Water Damage Restoration",
        description:
          "Valley moisture, aging plumbing, and creek flooding put Salem homes at constant risk. We extract water and dry structures to prevent lasting damage.",
        accentColor: "text-ocean",
      },
      {
        slug: "mold-remediation",
        title: "Mold Remediation",
        description:
          "Salem's sustained wet season and older crawlspaces create ideal mold conditions. We remediate to IICRC standards and address the moisture source.",
        accentColor: "text-forest",
      },
      {
        slug: "emergency",
        title: "Emergency Restoration",
        description:
          "Under forty-five minutes from our base to your Salem property. We respond around the clock with full commercial equipment ready to deploy.",
        accentColor: "text-alert",
      },
    ],
    whyHeading: "Why Salem residents call Zero Spore",
    whyContent: [
      "Salem deserves a restoration company that treats every home with the same care we give our own. We are not a franchise — we are a family that has spent over a decade restoring properties across the Willamette Valley. When you call us, you speak with the people who will actually be in your home doing the work. That accountability matters, especially when you are dealing with the stress of water damage or mold.",
      "Our proximity to Salem — just forty-five minutes on Highway 22 — means we can respond quickly without the overhead costs that Portland-based companies pass along. We carry our own equipment, set our own standards, and stake our family name on every job we complete in Salem.",
    ],
    faqs: [
      {
        question: "How fast can you get to my Salem home in an emergency?",
        answer:
          "We typically reach Salem addresses within forty-five minutes. Highway 22 gives us a direct route from Sheridan, and we keep our equipment loaded and ready to deploy at all times.",
      },
      {
        question:
          "Is mold common in Salem homes even without visible water damage?",
        answer:
          "Yes. Salem's sustained humidity and the valley's limited air circulation mean that mold can develop in crawlspaces, behind walls, and in attics even without a specific water event. Condensation and poor ventilation are often enough to sustain mold growth over time.",
      },
      {
        question: "Do you handle commercial restoration in Salem?",
        answer:
          "Yes. We have restored commercial properties in Salem including office spaces, retail buildings, and multi-unit residential properties. We understand that commercial water damage requires fast action to minimize business interruption, and we staff accordingly.",
      },
      {
        question: "My Salem home is near Mill Creek. Should I be concerned?",
        answer:
          "Properties near Mill Creek and Pringle Creek do carry elevated flood risk during heavy rain events. If you have experienced water intrusion before, we recommend a free assessment to identify vulnerabilities and discuss preventive measures alongside your restoration options.",
      },
    ],
    relatedSlugs: ["sheridan", "mcminnville", "portland"],
  },

  "lincoln-city": {
    slug: "lincoln-city",
    name: "Lincoln City",
    state: "Oregon",
    stateAbbr: "OR",
    headline: "Water damage and mold restoration in Lincoln City, Oregon",
    subline:
      "Coastal storm damage and vacation rental restoration — protecting your property against the Oregon coast.",
    metaTitle:
      "Water Damage & Mold Restoration Lincoln City OR | Zero Spore Restoration",
    metaDescription:
      "Water damage and mold remediation in Lincoln City, Oregon. Coastal storm specialists, vacation rental restoration. CCB #244908. Call (503) 302-0557.",
    heroContent: [
      "Lincoln City takes the full force of the Pacific. Winter storms drive horizontal rain against siding and windows, salt air corrodes plumbing fittings and metal components year-round, and the coastal humidity rarely drops below levels that discourage mold growth. Homes along the Highway 101 corridor — from Roads End in the north to Siletz Bay in the south — face weather conditions that inland properties simply never encounter.",
      "Vacation rentals and seasonal homes present a unique restoration challenge on the coast. Many of these properties sit unoccupied for weeks at a time, especially during the off-season. A slow plumbing leak or a roof breach during a November storm can go undetected for days, allowing water to saturate subfloors, wick into wall cavities, and create conditions for rapid mold colonization. By the time the property owner or manager discovers the damage, what started as a minor leak has become a major restoration project.",
      "The salt air environment compounds every water damage event in Lincoln City. Metal plumbing connections corrode faster than inland, accelerating the failure of supply lines and fittings. Exterior fasteners rust, allowing wind-driven rain to penetrate siding and flashing. Even the constant coastal humidity — hovering between seventy and ninety percent for much of the year — means that building materials never fully dry between rain events, creating a baseline moisture level that is already close to the threshold for mold growth.",
      "We serve Lincoln City from our Sheridan base, crossing the Coast Range on Highway 18 — a drive we make regularly. Our team understands that coastal restoration requires more than just drying a structure. We account for salt air exposure, elevated baseline humidity, and the unique construction methods used in coastal Oregon homes. We also work directly with property managers and vacation rental companies to coordinate restoration around booking schedules and minimize lost rental income.",
    ],
    responseTime: "Within 90 minutes",
    services: [
      {
        slug: "water-damage",
        title: "Water Damage Restoration",
        description:
          "Coastal storms, salt-corroded plumbing, and undetected leaks in vacation rentals demand fast, thorough water extraction and drying on the Oregon coast.",
        accentColor: "text-ocean",
      },
      {
        slug: "mold-remediation",
        title: "Mold Remediation",
        description:
          "Persistent coastal humidity makes Lincoln City homes especially vulnerable to mold. We remediate and address the elevated moisture conditions that drive regrowth.",
        accentColor: "text-forest",
      },
      {
        slug: "emergency",
        title: "Emergency Restoration",
        description:
          "Storm damage on the coast cannot wait. We cross the Coast Range within ninety minutes and arrive with full extraction and containment equipment.",
        accentColor: "text-alert",
      },
    ],
    whyHeading: "Why Lincoln City property owners trust Zero Spore",
    whyContent: [
      "Coastal restoration is not the same as inland restoration, and we treat it accordingly. The combination of salt air, persistent humidity, and wind-driven rain exposure means that every decision — from drying protocols to material selection for repairs — must account for the coastal environment. We have restored properties from Roads End to Gleneden Beach and understand the specific challenges that the Lincoln City coastline presents.",
      "For vacation rental owners and property managers, we coordinate directly with your team to minimize disruption. We understand that every day a rental is offline represents lost income, and we structure our work to get your property back to guest-ready condition as quickly as thorough restoration allows. We also provide documentation for insurance claims and can communicate directly with your carrier.",
    ],
    faqs: [
      {
        question:
          "How quickly can you reach Lincoln City from Sheridan?",
        answer:
          "Lincoln City is approximately ninety minutes from our Sheridan base via Highway 18 over the Coast Range. We make this drive regularly and keep our equipment loaded for immediate departure. During major storm events, we may pre-position closer to the coast.",
      },
      {
        question:
          "My vacation rental in Lincoln City had a leak while it was unoccupied. What should I do?",
        answer:
          "Call us immediately. Undetected leaks in vacation rentals often cause more damage than the initial event because moisture has time to spread. We will perform a full moisture assessment, begin extraction and drying, and document everything for your insurance claim. We also coordinate with property managers to work around booking schedules.",
      },
      {
        question:
          "Does salt air make mold worse in Lincoln City homes?",
        answer:
          "Salt air itself does not cause mold, but the coastal environment creates conditions that favor it. The persistent high humidity, combined with salt-accelerated corrosion of plumbing and building components, means that moisture intrusion events are more common and building materials stay damp longer. This significantly increases mold risk compared to inland properties.",
      },
      {
        question:
          "Can you restore a Lincoln City home after major storm damage?",
        answer:
          "Yes. We handle storm-related water damage including wind-driven rain intrusion, roof breaches, and flooding. We begin with water extraction and structural drying, then assess the full scope of damage. For significant storm events, we can scale our team and equipment to match the scope of the project.",
      },
      {
        question:
          "Do you work with Lincoln City vacation rental management companies?",
        answer:
          "Yes. We work with several property management companies on the Oregon coast. We understand the urgency of getting rental properties back to guest-ready condition and can coordinate scheduling, documentation, and communication with your management team.",
      },
    ],
    relatedSlugs: ["sheridan", "mcminnville", "yamhill-county"],
  },

  mcminnville: {
    slug: "mcminnville",
    name: "McMinnville",
    state: "Oregon",
    stateAbbr: "OR",
    headline: "Water damage and mold restoration in McMinnville, Oregon",
    subline:
      "Fifteen minutes from our door to yours. Fast restoration for Oregon's wine country capital.",
    metaTitle:
      "Water Damage & Mold Restoration McMinnville OR | Zero Spore Restoration",
    metaDescription:
      "Water damage and mold remediation in McMinnville, Oregon. Fastest local response — 15 minutes from Sheridan. CCB #244908. Call (503) 302-0557.",
    heroContent: [
      "McMinnville is one of the closest communities to our Sheridan base, and that proximity shows in our response times. When a pipe bursts in a historic Third Street building or a newer subdivision home on the south side develops a slab leak, we can be on-site within fifteen minutes with commercial extraction and drying equipment ready to deploy. In water damage restoration, those minutes matter — the difference between drying a structure and tearing one apart often comes down to how quickly extraction begins.",
      "As Yamhill County's largest city, McMinnville has a diverse housing stock. The historic downtown along Third Street includes buildings dating to the late 1800s, with stone foundations, original plumbing, and construction methods that predate modern water management. These structures require careful restoration techniques — aggressive drying can damage plaster walls and old-growth woodwork, while insufficient drying invites mold. Moving outward, mid-century neighborhoods feature the standard construction of their era: basements, crawlspaces, and galvanized plumbing that corrodes from the inside out. The newer subdivisions expanding south and west toward the Evergreen Aviation Museum sit on properties with modern building codes but are not immune to Oregon's relentless moisture.",
      "McMinnville's position in the northern Willamette Valley means it receives ample rainfall and experiences the sustained humidity that characterizes the region from fall through late spring. The wine industry has drawn international attention to this climate's benefits for pinot noir, but that same moisture profile creates persistent challenges for homes and commercial buildings. Crawlspace humidity levels routinely exceed seventy percent during winter months, and without proper vapor barriers and ventilation, mold growth becomes almost inevitable.",
      "Our team has restored properties throughout McMinnville — residential homes, commercial spaces along Third Street, and agricultural outbuildings on surrounding properties. We understand the mix of construction types and the specific moisture challenges that each one presents. Whether you are managing a tasting room with a water line failure or a family home with mold in the crawlspace, we bring the same level of care and commercial-grade equipment to every job.",
    ],
    responseTime: "Under 15 minutes",
    services: [
      {
        slug: "water-damage",
        title: "Water Damage Restoration",
        description:
          "From historic Third Street buildings to newer subdivisions, McMinnville properties face diverse water damage risks. We respond in fifteen minutes with full equipment.",
        accentColor: "text-ocean",
      },
      {
        slug: "mold-remediation",
        title: "Mold Remediation",
        description:
          "Wine country humidity and McMinnville's older crawlspaces create persistent mold conditions. We remediate thoroughly and address the underlying moisture source.",
        accentColor: "text-forest",
      },
      {
        slug: "emergency",
        title: "Emergency Restoration",
        description:
          "Fifteen minutes from Sheridan to McMinnville. Day or night, we arrive with commercial-grade extraction and drying equipment ready to work.",
        accentColor: "text-alert",
      },
    ],
    whyHeading: "Why McMinnville calls Zero Spore first",
    whyContent: [
      "No restoration company can reach McMinnville faster than we can. Our Sheridan base is just fifteen minutes away on Highway 18, which means your call-to-arrival window is shorter than almost anywhere else we serve. That speed translates directly into less damage, lower restoration costs, and a faster return to normal for your home or business.",
      "We also know McMinnville's building stock personally. We have worked in the historic structures downtown, the mid-century homes along the hill, and the newer developments spreading south. Each type of construction responds differently to water and requires a different drying approach. That local knowledge is not something you get from a franchise sending technicians who have never set foot in Yamhill County before.",
    ],
    faqs: [
      {
        question:
          "How fast can Zero Spore respond to a McMinnville water emergency?",
        answer:
          "McMinnville is approximately fifteen minutes from our Sheridan base via Highway 18. We keep our equipment staged and ready, so we can be at your door within minutes of your call — often before larger companies have even dispatched a team.",
      },
      {
        question:
          "Can you restore historic buildings in downtown McMinnville?",
        answer:
          "Yes. Historic structures require specialized drying techniques to avoid damaging plaster walls, old-growth trim, and original architectural details. We adjust our equipment placement and drying intensity to protect these materials while still achieving thorough moisture removal.",
      },
      {
        question:
          "Is mold common in McMinnville homes with crawlspaces?",
        answer:
          "Very common. The Willamette Valley's sustained humidity means that crawlspaces without adequate vapor barriers and ventilation almost inevitably develop mold over time. We recommend regular crawlspace inspections and offer free visual assessments to identify early mold growth before it spreads to the living space above.",
      },
      {
        question:
          "Do you work with McMinnville businesses and commercial properties?",
        answer:
          "Yes. We have restored commercial spaces throughout McMinnville, including retail, office, and hospitality properties. We understand that commercial water damage requires rapid response to minimize business interruption and coordinate our work to get you back in operation quickly.",
      },
    ],
    relatedSlugs: ["sheridan", "newberg", "yamhill-county"],
  },

  newberg: {
    slug: "newberg",
    name: "Newberg",
    state: "Oregon",
    stateAbbr: "OR",
    headline: "Water damage and mold restoration in Newberg, Oregon",
    subline:
      "Protecting Newberg homes from the Chehalem Valley moisture that never quite lets up.",
    metaTitle:
      "Water Damage & Mold Restoration Newberg OR | Zero Spore Restoration",
    metaDescription:
      "Water damage restoration and mold remediation in Newberg, Oregon. Fast Yamhill County response, family-owned. CCB #244908. Call (503) 302-0557.",
    heroContent: [
      "Newberg sits in the Chehalem Valley at the eastern edge of Yamhill County, where the foothills channel moisture-laden air from the coast into a natural basin. The result is a microclimate that keeps Newberg damp for much of the year — and keeps restoration companies busy. From the established neighborhoods near George Fox University to the newer developments climbing the slopes toward Chehalem Mountains, every home in Newberg contends with Oregon's persistent moisture in one form or another.",
      "The city has grown significantly over the past two decades, and that growth brings its own restoration challenges. Newer subdivisions built during rapid expansion sometimes carry construction defects that take years to manifest: improperly sealed window flanges that allow wind-driven rain behind siding, rushed plumbing connections that develop slow leaks, or insufficient grading that directs surface water toward foundations rather than away from them. These issues often go unnoticed until a homeowner discovers water stains on a ceiling or a musty odor in a closet that shares a wall with a bathroom.",
      "Older Newberg homes — particularly those in the downtown core and the neighborhoods surrounding the university — face the challenges typical of mid-century Oregon construction: crawlspaces with insufficient ventilation, original cast-iron drain lines approaching failure, and foundations that predate modern waterproofing. Student rental properties near George Fox see heavy use and sometimes deferred maintenance, which can accelerate plumbing failures and delay the detection of slow leaks.",
      "The Chehalem Valley geography also creates concentrated runoff patterns during heavy rain. Properties at the base of slopes, near Springbrook Creek, or in low-lying areas of the Springbrook district experience surface water intrusion that surprises homeowners who did not realize their lot sits in a natural drainage path. We have restored homes throughout Newberg and understand where water goes when the valley fills up — and how to dry the structures it reaches.",
    ],
    responseTime: "Under 45 minutes",
    services: [
      {
        slug: "water-damage",
        title: "Water Damage Restoration",
        description:
          "Chehalem Valley moisture, aging plumbing near downtown, and construction defects in newer homes create diverse water damage risks across Newberg.",
        accentColor: "text-ocean",
      },
      {
        slug: "mold-remediation",
        title: "Mold Remediation",
        description:
          "The valley's channeled humidity and Newberg's mix of older crawlspaces and newer construction defects make professional mold remediation essential.",
        accentColor: "text-forest",
      },
      {
        slug: "emergency",
        title: "Emergency Restoration",
        description:
          "Under forty-five minutes from our Sheridan base to any Newberg address. We respond day and night with commercial extraction and drying equipment.",
        accentColor: "text-alert",
      },
    ],
    whyHeading: "Why Newberg homeowners choose Zero Spore",
    whyContent: [
      "Newberg sits at a crossroads — Portland-based companies consider it a far drive, and most Yamhill County competitors lack the equipment and staffing to handle serious water damage. Zero Spore fills that gap. We reach Newberg in under forty-five minutes from Sheridan, we carry commercial-grade equipment on every call, and we do not subcontract the work to whoever is available.",
      "For Newberg's rental property owners and property managers — particularly those managing student housing near George Fox — we offer responsive, well-documented restoration that satisfies both insurance requirements and landlord-tenant obligations. We understand the urgency of getting rental units back online and structure our work accordingly.",
    ],
    faqs: [
      {
        question:
          "How quickly can Zero Spore respond to a Newberg water emergency?",
        answer:
          "We typically reach Newberg addresses within forty-five minutes from our Sheridan base. We travel via Highway 99W and keep our equipment loaded for immediate departure.",
      },
      {
        question:
          "My newer Newberg home has water behind the siding. Is this common?",
        answer:
          "Unfortunately, yes. Rapid construction during Newberg's growth period means some homes have window flashing or siding installation issues that allow moisture intrusion. We can assess the extent of damage, dry the wall cavity, and coordinate with your builder or insurance carrier on repairs.",
      },
      {
        question:
          "Do you handle mold remediation in Newberg rental properties?",
        answer:
          "Yes. We work with property owners and managers throughout Newberg, including student rental properties near George Fox University. We provide the documentation that landlords need for insurance claims and tenant communication, and we work efficiently to minimize vacancy time.",
      },
      {
        question:
          "Is the Chehalem Valley really more humid than other parts of Yamhill County?",
        answer:
          "The valley geography does channel and trap moist air, particularly during fall and winter. Properties at lower elevations and near Springbrook Creek tend to experience higher ambient humidity than hilltop locations. This makes proper crawlspace ventilation and vapor barriers especially important for Newberg homes.",
      },
      {
        question:
          "Can surface water runoff cause damage to my Newberg home?",
        answer:
          "Yes. Properties at the base of slopes or in natural drainage paths can experience surface water intrusion during heavy rain, even without a plumbing failure. We address both the immediate water damage and can recommend drainage improvements to reduce future risk.",
      },
    ],
    relatedSlugs: ["mcminnville", "portland", "yamhill-county"],
  },

  "yamhill-county": {
    slug: "yamhill-county",
    name: "Yamhill County",
    state: "Oregon",
    stateAbbr: "OR",
    headline: "Water damage and mold restoration across Yamhill County, Oregon",
    subline:
      "County-wide coverage from the team that lives and works right here in Yamhill County.",
    metaTitle:
      "Water Damage & Mold Restoration Yamhill County OR | Zero Spore Restoration",
    metaDescription:
      "Yamhill County water damage and mold restoration. Serving Carlton, Amity, Dayton, Lafayette, Dundee, Willamina, and all rural properties. CCB #244908. Call (503) 302-0557.",
    heroContent: [
      "Yamhill County stretches from the Chehalem Mountains in the east to the Coast Range in the west, encompassing some of Oregon's most beautiful — and most moisture-challenged — landscapes. From the vineyard-covered hills around Dundee to the timber country near Willamina, properties across the county face water damage and mold risks that are driven by the same Willamette Valley climate but shaped by dramatically different terrain, construction types, and land use patterns.",
      "Rural properties present restoration challenges that urban homes do not. Long driveways, limited road access during storms, and distance from municipal water and sewer systems all affect how we plan and execute restoration work. Agricultural buildings — barns, equipment sheds, processing facilities, and outbuildings — have different structural characteristics than residential homes and require adapted drying and remediation approaches. We have restored properties on back roads throughout the county, and our equipment is built to reach them.",
      "The small towns and communities that make up Yamhill County each have their own character and their own water damage patterns. Carlton's compact downtown sits near the North Yamhill River and faces periodic flooding risk. Amity's older homes, many built during the town's founding era, have aging plumbing and minimal modern water management. Dayton and Lafayette, nestled along the Yamhill River, experience the same river-proximity risks that affect communities across the valley. Dundee's hillside vineyards and homes deal with slope-driven runoff that concentrates during heavy rain. Willamina, closer to the coast, gets more precipitation than the valley floor and faces both river flooding and rain-driven water intrusion.",
      "As a Yamhill County-based company, we do not treat rural calls as an inconvenience. They are a core part of what we do. We understand that when water is in your home and you live twenty minutes from the nearest town, waiting three hours for a Portland-based company to find your property is not acceptable. We live here. We know the roads, we know the properties, and we respond accordingly.",
    ],
    responseTime: "Under 60 minutes county-wide",
    services: [
      {
        slug: "water-damage",
        title: "Water Damage Restoration",
        description:
          "From riverside properties in Dayton to rural farmhouses near Willamina, water damage takes many forms across Yamhill County. We respond with the right equipment for every situation.",
        accentColor: "text-ocean",
      },
      {
        slug: "mold-remediation",
        title: "Mold Remediation",
        description:
          "Yamhill County's sustained humidity, agricultural buildings, and older rural homes create widespread mold conditions. We remediate to professional standards across the county.",
        accentColor: "text-forest",
      },
      {
        slug: "emergency",
        title: "Emergency Restoration",
        description:
          "Under sixty minutes to any address in Yamhill County. We know the back roads, we carry full equipment, and we respond around the clock.",
        accentColor: "text-alert",
      },
    ],
    whyHeading: "Why Yamhill County relies on Zero Spore",
    whyContent: [
      "Most restoration companies that serve Yamhill County are based somewhere else — Portland, Salem, or Eugene. They treat rural calls as long drives with uncertain addresses and difficult access. We are based in Sheridan, in the heart of the county. We know Highway 47, we know the back roads through the wine country, and we know that when a well pump failure floods a farmhouse basement at midnight, the homeowner needs someone local who can respond immediately — not a dispatcher in another city looking up directions.",
      "Our family has served this county for over a decade. We have restored homes in every community from Carlton to Willamina, and our reputation is built on the same values that define rural Oregon: show up when you say you will, do honest work, and stand behind it. For Yamhill County properties, that local commitment is not a marketing message — it is the reason we started this company.",
    ],
    faqs: [
      {
        question:
          "Do you really serve all of Yamhill County, including remote rural properties?",
        answer:
          "Yes. We are based in Sheridan and serve every part of Yamhill County — from Carlton and Dundee in the east to Willamina in the west, and everywhere in between. We have restored properties on back roads throughout the county and our equipment is built for rural access.",
      },
      {
        question:
          "Can you restore agricultural buildings like barns and equipment sheds?",
        answer:
          "Yes. Agricultural buildings have different structural characteristics than residential homes, and we adapt our drying and remediation approach accordingly. We have experience with barns, processing facilities, equipment storage buildings, and other agricultural structures across Yamhill County.",
      },
      {
        question:
          "How fast can you reach properties in Carlton, Amity, or Dayton?",
        answer:
          "Carlton, Amity, and Dayton are all within thirty to forty-five minutes of our Sheridan base. We keep our equipment loaded and ready, so we are on the road within minutes of your call. Our familiarity with county roads means we take the fastest route to your door.",
      },
      {
        question:
          "Is mold a bigger problem in Yamhill County than in urban areas?",
        answer:
          "Rural properties often face elevated mold risk because of older construction, limited crawlspace ventilation, and proximity to natural water sources. Agricultural buildings with earth floors and minimal climate control are also susceptible. The county's sustained humidity compounds these factors, making regular inspections and proactive moisture management important.",
      },
      {
        question:
          "Do you work with insurance companies for Yamhill County rural properties?",
        answer:
          "Yes. We document every restoration project thoroughly — moisture readings, thermal images, photos, and detailed scope-of-work reports. We work with all major insurance carriers and communicate directly with your adjuster throughout the process.",
      },
    ],
    relatedSlugs: ["sheridan", "mcminnville", "newberg"],
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getArea(slug: string): AreaData {
  const area = AREAS[slug];
  if (!area) throw new Error(`Area not found: ${slug}`);
  return area;
}

export function getAllAreaSlugs(): string[] {
  return Object.keys(AREAS);
}
