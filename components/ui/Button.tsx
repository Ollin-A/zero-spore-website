import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "emergency";
  dark?: boolean;
  pulse?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center font-sans font-medium rounded-(--radius-button) transition-all duration-200 ease-out cursor-pointer text-(length:--font-cta-size) leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest";

const variantStyles = {
  primary: {
    light: "bg-forest text-white hover:bg-[#156835] active:scale-[0.98]",
    dark: "bg-cyan text-midnight hover:bg-[#5dd9d0] active:scale-[0.98]",
  },
  secondary:
    "bg-transparent border border-stone text-carbon hover:bg-warm active:scale-[0.98]",
  emergency:
    "bg-alert text-white hover:bg-[#c0401f] active:scale-[0.98]",
};

export default function Button({
  variant = "primary",
  dark = false,
  pulse = false,
  href,
  onClick,
  type = "button",
  children,
  className,
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? dark
        ? variantStyles.primary.dark
        : variantStyles.primary.light
      : variant === "secondary"
        ? variantStyles.secondary
        : variantStyles.emergency;

  const padding = variant === "emergency" ? "px-8 py-4" : "px-7 py-3.5";

  const classes = cn(
    base,
    variantClass,
    padding,
    pulse && "animate-pulse-emergency",
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
