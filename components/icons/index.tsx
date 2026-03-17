/**
 * Custom duotone SVG icon system for Zero Spore Restoration.
 *
 * Design rules:
 * - Stroke-based, 1.5px weight, round caps and joins
 * - Duotone: currentColor stroke + 10-12% opacity fill for depth
 * - UI/nav icons: stroke only, no duotone fill
 * - All use currentColor — inherit parent text color automatically
 */

export type IconComponent = React.ComponentType<{
  className?: string;
  size?: number;
}>;

interface IconProps {
  className?: string;
  size?: number;
}

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICE ICONS — 32×32 viewBox, duotone
   ═══════════════════════════════════════════════════════════════════════════ */

/** Water droplet with smile curve */
export function WaterDamageIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 4C12 10 7 15 7 20.5C7 25.5 11 29 16 29C21 29 25 25.5 25 20.5C25 15 20 10 16 4Z" fill="currentColor" opacity="0.12" />
      <path d="M16 4C12 10 7 15 7 20.5C7 25.5 11 29 16 29C21 29 25 25.5 25 20.5C25 15 20 10 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 22C11 22 13 25 16 25C19 25 21 22 21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Target/crosshair with spore center dot */
export function MoldRemediationIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="10" fill="currentColor" opacity="0.12" />
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <line x1="16" y1="3" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="24" x2="16" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="16" x2="29" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Angular lightning bolt */
export function EmergencyIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M18 3L8 18H15L14 29L24 14H17L18 3Z" fill="currentColor" opacity="0.12" />
      <path d="M18 3L8 18H15L14 29L24 14H17L18 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROCESS STEP ICONS — 32×32 viewBox, duotone
   ═══════════════════════════════════════════════════════════════════════════ */

/** Clipboard with magnifying glass */
export function AssessmentIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="6" y="4" width="16" height="24" rx="2" fill="currentColor" opacity="0.12" />
      <rect x="6" y="4" width="16" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4V3a2 2 0 0 1 4 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="22" cy="22" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M25.5 25.5L29 29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Shield with water droplet inside */
export function MitigationIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" fill="currentColor" opacity="0.12" />
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 12c0 0-3.5 4-3.5 6.5a3.5 3.5 0 0 0 7 0c0-2.5-3.5-6.5-3.5-6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Wrench / spanner tool */
export function RestorationIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M20 6a6 6 0 0 0-5.7 7.9L6 22.2a2.8 2.8 0 1 0 3.8 3.8l8.3-8.3A6 6 0 0 0 20 6z" fill="currentColor" opacity="0.12" />
      <path d="M20 6a6 6 0 0 0-5.7 7.9L6 22.2a2.8 2.8 0 1 0 3.8 3.8l8.3-8.3A6 6 0 0 0 20 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="24" r="1" fill="currentColor" />
    </svg>
  );
}

/** Circular checkmark (verified/complete) */
export function FollowUpIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="12" fill="currentColor" opacity="0.12" />
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 16.5l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   TRUST BADGE ICONS — 24×24 viewBox, duotone
   ═══════════════════════════════════════════════════════════════════════════ */

/** Shield with checkmark — CCB License */
export function CCBLicenseIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 6V12C4 17 7.6 21.1 12 22C16.4 21.1 20 17 20 12V6L12 2Z" fill="currentColor" opacity="0.12" />
      <path d="M12 2L4 6V12C4 17 7.6 21.1 12 22C16.4 21.1 20 17 20 12V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Medal with ribbon tails and inner circle */
export function IICRCCertifiedIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="9" r="6" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 14L7 22L12 19L17 22L15.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

/** Clock with bold hand — 10+ Years */
export function ExperienceIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** House with door — Family Owned */
export function FamilyOwnedIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 10L12 3L20 10V20C20 20.6 19.6 21 19 21H5C4.4 21 4 20.6 4 20V10Z" fill="currentColor" opacity="0.12" />
      <path d="M4 10L12 3L20 10V20C20 20.6 19.6 21 19 21H5C4.4 21 4 20.6 4 20V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="14" width="6" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT PAGE VALUE ICONS — 24×24 viewBox, duotone
   ═══════════════════════════════════════════════════════════════════════════ */

/** Eye — honesty/transparency */
export function HonestyIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" fill="currentColor" opacity="0.12" />
      <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Lightning — speed */
export function SpeedIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" fill="currentColor" opacity="0.12" />
      <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Heart — care */
export function CareIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 21C12 21 4 15 4 9.5C4 7 6 5 8.5 5C10.1 5 11.4 5.8 12 7C12.6 5.8 13.9 5 15.5 5C18 5 20 7 20 9.5C20 15 12 21 12 21Z" fill="currentColor" opacity="0.12" />
      <path d="M12 21C12 21 4 15 4 9.5C4 7 6 5 8.5 5C10.1 5 11.4 5.8 12 7C12.6 5.8 13.9 5 15.5 5C18 5 20 7 20 9.5C20 15 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   UI / NAVIGATION ICONS — 24×24 viewBox, stroke only
   ═══════════════════════════════════════════════════════════════════════════ */

/** Classic phone handset */
export function PhoneIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Horizontal line + chevron head */
export function ArrowRightIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** V shape pointing down */
export function ChevronDownIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Three horizontal lines (hamburger) */
export function MenuIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** X shape */
export function CloseIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Facebook "f" logo */
export function FacebookIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Location pin with circle */
export function MapPinIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Envelope */
export function MailIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FORM / ALERT ICONS — 24×24 viewBox
   ═══════════════════════════════════════════════════════════════════════════ */

/** Warning triangle with exclamation */
export function AlertTriangleIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="currentColor" opacity="0.12" />
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   REVIEW ICON — 24×24 viewBox
   ═══════════════════════════════════════════════════════════════════════════ */

interface StarIconProps extends IconProps {
  filled?: boolean;
}

/** Five-point star — supports filled prop for ratings */
export function StarIcon({ className, size = 24, filled = false }: StarIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FEATURE GRID ICONS — 32×32 viewBox, duotone
   Used in data/services.ts via string-keyed ICON_MAP in FeatureGrid
   ═══════════════════════════════════════════════════════════════════════════ */

/** Water extractor — Residential Water Extraction */
export function ExtractorIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M8 26V18L16 10L24 18V26H8Z" fill="currentColor" opacity="0.10" />
      <path d="M16 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 10L10 16V26H22V16L16 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 22V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 22V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 22V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Flood waves with droplet — Flood Damage Cleanup */
export function FloodIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M4 22C4 22 8 18 12 22C16 26 20 18 24 22C28 26 28 22 28 22" fill="currentColor" opacity="0.10" />
      <path d="M4 22C4 22 8 18 12 22C16 26 20 18 24 22C28 26 28 22 28 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 16C4 16 8 12 12 16C16 20 20 12 24 16C28 20 28 16 28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 4L14 10H18L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Drying unit — Ceiling, Wall and Floor Drying */
export function DryingIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="6" y="8" width="20" height="16" rx="2" fill="currentColor" opacity="0.10" />
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 14L16 18L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="12" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 28H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 24V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 24V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Circle with slash — Mold Prevention */
export function MoldPreventIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="10" fill="currentColor" opacity="0.10" />
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Container with drips — Sewage Backup */
export function SewageIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M8 8H24V20C24 22.2 22.2 24 20 24H12C9.8 24 8 22.2 8 20V8Z" fill="currentColor" opacity="0.10" />
      <path d="M8 8H24V20C24 22.2 22.2 24 20 24H12C9.8 24 8 22.2 8 20V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 13V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 12V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 13V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 24V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Document with lines — Insurance Documentation */
export function InsuranceDocIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M8 4H20L24 8V28H8V4Z" fill="currentColor" opacity="0.10" />
      <path d="M8 4H20L24 8V28H8V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4V8H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Cloud with rain — Storm and Flood Damage */
export function StormIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M8 14C8 10 11 6 16 6C21 6 24 10 24 14" fill="currentColor" opacity="0.10" />
      <path d="M6 14H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 14H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 14C8 10 11 6 16 6C21 6 24 10 24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 14H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18L10 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 18L15 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 18L20 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Dumpster — Debris Removal */
export function DebrisIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="6" y="14" width="20" height="12" rx="2" fill="currentColor" opacity="0.10" />
      <rect x="6" y="14" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 14L8 8H24L28 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="14" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Boarded window — Board-Up and Securing */
export function BoardUpIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="7" y="4" width="18" height="24" rx="1" fill="currentColor" opacity="0.10" />
      <rect x="7" y="4" width="18" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <line x1="7" y1="12" x2="25" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <line x1="7" y1="20" x2="25" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Shield with checkmark — 32×32 version for feature grids */
export function ShieldCheckIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" fill="currentColor" opacity="0.12" />
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 16l3.5 3.5L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
