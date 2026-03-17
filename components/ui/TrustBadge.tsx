import type { IconComponent } from "@/components/icons";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon: IconComponent;
  label: string;
  sublabel?: string;
  className?: string;
}

export default function TrustBadge({
  icon: Icon,
  label,
  sublabel,
  className,
}: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 rounded-(--radius-card) border border-stone bg-white px-6 py-5 text-center",
        className,
      )}
    >
      <Icon className="h-7 w-7 text-forest" />
      <span className="text-sm font-medium text-carbon">{label}</span>
      {sublabel && (
        <span className="text-xs text-muted">{sublabel}</span>
      )}
    </div>
  );
}
