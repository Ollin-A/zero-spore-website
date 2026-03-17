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

/** Water droplet with ripple arcs underneath */
export function WaterDamageIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 4c0 0-8 9.5-8 15a8 8 0 0 0 16 0c0-5.5-8-15-8-15z" fill="currentColor" opacity="0.12" />
      <path d="M16 4c0 0-8 9.5-8 15a8 8 0 0 0 16 0c0-5.5-8-15-8-15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 26c1.5 1.5 3.5 2 6 2s4.5-.5 6-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Target/crosshair with organic spore center */
export function MoldRemediationIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="10" fill="currentColor" opacity="0.12" />
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 2v6M16 24v6M2 16h6M24 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Angular lightning bolt */
export function EmergencyIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M18 3L8 18h7l-1 11 10-15h-7l1-11z" fill="currentColor" opacity="0.12" />
      <path d="M18 3L8 18h7l-1 11 10-15h-7l1-11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

/** Rounded square with checkmark */
export function CCBLicenseIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" opacity="0.12" />
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12.5l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Medal with ribbon tails */
export function IICRCCertifiedIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="9" r="6" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 14l-1.5 7 5-2.5L17 21l-1.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Clock showing ~10 o'clock */
export function ExperienceIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l-3.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** House silhouette with door */
export function FamilyOwnedIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 10l8-7 8 7v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" fill="currentColor" opacity="0.12" />
      <path d="M4 10l8-7 8 7v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="14" width="4" height="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT PAGE VALUE ICONS — 32×32 viewBox, duotone
   ═══════════════════════════════════════════════════════════════════════════ */

/** Eye — honesty/transparency */
export function HonestyIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M2 16s5-10 14-10 14 10 14 10-5 10-14 10S2 16 2 16z" fill="currentColor" opacity="0.12" />
      <path d="M2 16s5-10 14-10 14 10 14 10-5 10-14 10S2 16 2 16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Lightning/zap — speed */
export function SpeedIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M18 3L8 18h7l-1 11 10-15h-7l1-11z" fill="currentColor" opacity="0.12" />
      <path d="M18 3L8 18h7l-1 11 10-15h-7l1-11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Heart — care */
export function CareIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 28s-11-6.5-11-14a6.5 6.5 0 0 1 11-4.7A6.5 6.5 0 0 1 27 14c0 7.5-11 14-11 14z" fill="currentColor" opacity="0.12" />
      <path d="M16 28s-11-6.5-11-14a6.5 6.5 0 0 1 11-4.7A6.5 6.5 0 0 1 27 14c0 7.5-11 14-11 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

/** Thermometer with sun rays */
export function ThermometerIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="12" y="4" width="6" height="18" rx="3" fill="currentColor" opacity="0.12" />
      <rect x="12" y="4" width="6" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="24" r="4" fill="currentColor" opacity="0.12" />
      <circle cx="15" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 18v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 8l2-2M24 14h3M24 20l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Fan / ventilation blades */
export function FanIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.12" />
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 13c0-5 2-9 0-9s-4 4-4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 16c5 0 9 2 9 0s-4-4-9-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 19c0 5-2 9 0 9s4-4 4-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 16c-5 0-9-2-9 0s4 4 9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Shield with checkmark */
export function ShieldCheckIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" fill="currentColor" opacity="0.12" />
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 16l3.5 3.5L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Document with checkmark */
export function FileCheckIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M7 4h12l6 6v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4z" fill="currentColor" opacity="0.12" />
      <path d="M7 4h12l6 6v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 4v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Simple shield outline */
export function ShieldIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" fill="currentColor" opacity="0.12" />
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Microscope */
export function MicroscopeIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="10" r="4" fill="currentColor" opacity="0.12" />
      <path d="M14 6l4 8M12 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 28h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 28v-4a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Wind / air flow lines */
export function WindIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M4 10h16a3 3 0 1 0-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16h20a3 3 0 1 1-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 22h12a3 3 0 1 0-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Leaf / organic */
export function LeafIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M6 28C6 28 8 8 26 4c0 0 0 18-14 22" fill="currentColor" opacity="0.12" />
      <path d="M6 28C6 28 8 8 26 4c0 0 0 18-14 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22c4-4 10-8 16-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Clipboard with checkmark */
export function ClipboardCheckIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="7" y="4" width="18" height="24" rx="2" fill="currentColor" opacity="0.12" />
      <rect x="7" y="4" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 4V3a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18l3.5 3.5L22 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Heart with pulse line */
export function HeartPulseIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 28s-11-6.5-11-14a6.5 6.5 0 0 1 11-4.7A6.5 6.5 0 0 1 27 14c0 7.5-11 14-11 14z" fill="currentColor" opacity="0.12" />
      <path d="M16 28s-11-6.5-11-14a6.5 6.5 0 0 1 11-4.7A6.5 6.5 0 0 1 27 14c0 7.5-11 14-11 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16h4l2-3 3 6 2-3h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Siren / alarm light */
export function SirenIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M10 20h12a2 2 0 0 1 2 2v2H8v-2a2 2 0 0 1 2-2z" fill="currentColor" opacity="0.12" />
      <path d="M10 20a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="8" y="20" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8v-4M6 14l-3-2M26 14l3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 28h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Wrench tool */
export function WrenchIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M20 6a6 6 0 0 0-5.7 7.9L6 22.2a2.8 2.8 0 1 0 3.8 3.8l8.3-8.3A6 6 0 0 0 20 6z" fill="currentColor" opacity="0.12" />
      <path d="M20 6a6 6 0 0 0-5.7 7.9L6 22.2a2.8 2.8 0 1 0 3.8 3.8l8.3-8.3A6 6 0 0 0 20 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Shield with alert/exclamation */
export function ShieldAlertIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" fill="currentColor" opacity="0.12" />
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 12v5M16 21h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Delivery truck */
export function TruckIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="2" y="8" width="18" height="14" rx="1" fill="currentColor" opacity="0.12" />
      <rect x="2" y="8" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 14h5l4 4v4h-9v-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="24" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="25" cy="24" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
