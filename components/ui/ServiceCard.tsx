import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accentColor?: string;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  accentColor = "text-forest",
  className,
}: ServiceCardProps) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <div className="flex h-full flex-col rounded-(--radius-card) border border-stone bg-white p-(--card-padding) transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <Icon
          className={cn("h-10 w-10", accentColor)}
          strokeWidth={1.5}
        />
        <h3
          className="mt-4 font-sans font-medium"
          style={{
            fontSize: "var(--font-h3-size)",
            lineHeight: "var(--font-h3-lh)",
          }}
        >
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <span
          className={cn(
            "mt-auto inline-flex items-center pt-4 text-sm font-medium",
            accentColor,
          )}
        >
          Learn more{" "}
          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
