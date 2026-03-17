export const BUSINESS = {
  name: "Zero Spore Restoration LLC",
  shortName: "Zero Spore",
  phone: "(503) 302-0557",
  phoneTel: "tel:+15033020557",
  email: "zerospore.resto@gmail.com",
  ccb: "244908",
  address: {
    city: "Sheridan",
    state: "Oregon",
    stateAbbr: "OR",
  },
  domain: "zerosporerestoration.com",
  url: "https://zerosporerestoration.com",
} as const;

export const LEAD_GATEWAY = {
  url: process.env.NEXT_PUBLIC_LEAD_GATEWAY_URL || "https://api.ollin.agency",
  endpoint: "/api/clients/leads",
  tenantId: "zero-spore",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/p/Zero-Spore-Restoration-LLC-61577018135633/",
} as const;

export const OLLIN = {
  url: "https://ollin.agency/",
  name: "OLLIN",
} as const;

export const HERO_VIDEO_SRC = ""; // TODO: replace with actual video URL
export const HERO_POSTER_SRC =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"; // TODO: REPLACE — Unsplash placeholder
