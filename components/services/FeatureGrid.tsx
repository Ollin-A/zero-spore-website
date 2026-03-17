import {
  WaterDamageIcon,
  ThermometerIcon,
  FanIcon,
  ShieldCheckIcon,
  FileCheckIcon,
  ExperienceIcon,
  ShieldIcon,
  MicroscopeIcon,
  WindIcon,
  LeafIcon,
  ClipboardCheckIcon,
  HeartPulseIcon,
  SirenIcon,
  PhoneIcon,
  WrenchIcon,
  ShieldAlertIcon,
  TruckIcon,
  type IconComponent,
} from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import { cn } from "@/lib/utils";
import type { ServiceFeature } from "@/data/services";

const ICON_MAP: Record<string, IconComponent> = {
  Droplets: WaterDamageIcon,
  ThermometerSun: ThermometerIcon,
  Fan: FanIcon,
  ShieldCheck: ShieldCheckIcon,
  FileCheck: FileCheckIcon,
  Clock: ExperienceIcon,
  Shield: ShieldIcon,
  Microscope: MicroscopeIcon,
  Wind: WindIcon,
  Leaf: LeafIcon,
  ClipboardCheck: ClipboardCheckIcon,
  HeartPulse: HeartPulseIcon,
  Siren: SirenIcon,
  Phone: PhoneIcon,
  Wrench: WrenchIcon,
  ShieldAlert: ShieldAlertIcon,
  Truck: TruckIcon,
};

interface FeatureGridProps {
  features: ServiceFeature[];
  accentColor: string;
}

export default function FeatureGrid({ features, accentColor }: FeatureGridProps) {
  return (
    <MoodSection mood="services">
      <FadeUp>
        <h2
          className="text-center font-serif"
          style={{
            fontSize: "var(--font-h2-size)",
            lineHeight: "var(--font-h2-lh)",
          }}
        >
          What&rsquo;s included
        </h2>
      </FadeUp>

      <div className="mt-12 grid gap-(--grid-gap) md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = ICON_MAP[feature.icon];
          return (
            <FadeUp key={feature.title} delay={0.1 + i * 0.08}>
              <div className="flex h-full flex-col rounded-(--radius-card) border border-stone bg-white p-(--card-padding) transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {Icon && (
                  <Icon
                    className={cn("h-10 w-10", accentColor)}
                  />
                )}
                <h3
                  className="mt-4 font-sans font-medium"
                  style={{
                    fontSize: "var(--font-h3-size)",
                    lineHeight: "var(--font-h3-lh)",
                  }}
                >
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </MoodSection>
  );
}
