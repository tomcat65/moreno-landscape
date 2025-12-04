import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "gold" | "green" | "red" | "outline";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "gold",
  size = "md",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full",
        // Variants
        {
          "bg-brand-gold text-brand-green-dark": variant === "gold",
          "bg-brand-green-primary text-white": variant === "green",
          "bg-brand-red text-white": variant === "red",
          "border-2 border-brand-green-primary text-brand-green-primary bg-transparent":
            variant === "outline",
        },
        // Sizes
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}

// Pre-built badge components for common use cases
export function FreeEstimateBadge({ className }: { className?: string }) {
  return (
    <Badge variant="gold" className={className}>
      FREE Estimates
    </Badge>
  );
}

export function SeHablaEspanolBadge({ className }: { className?: string }) {
  return (
    <Badge variant="green" className={className}>
      Se Habla Espanol
    </Badge>
  );
}

export function SeasonalBadge({ className }: { className?: string }) {
  return (
    <Badge variant="gold" size="sm" className={className}>
      Seasonal
    </Badge>
  );
}
