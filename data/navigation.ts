export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_LINKS: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Water Damage", href: "/services/water-damage" },
      { label: "Mold Remediation", href: "/services/mold-remediation" },
      { label: "Emergency", href: "/services/emergency" },
    ],
  },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Water Damage", href: "/services/water-damage" },
  { label: "Mold Remediation", href: "/services/mold-remediation" },
  { label: "Emergency", href: "/services/emergency" },
];

export const FOOTER_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];
