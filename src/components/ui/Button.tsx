import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "red" | "green" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles - 48px touch target
          "inline-flex items-center justify-center rounded-lg font-semibold",
          "min-h-touch transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Variants
          {
            "bg-brand-gold text-brand-green-dark hover:bg-yellow-400 focus:ring-brand-gold":
              variant === "gold",
            "bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red":
              variant === "red",
            "bg-brand-green-primary text-white hover:bg-green-800 focus:ring-brand-green-primary":
              variant === "green",
            "border-2 border-brand-green-primary text-brand-green-primary hover:bg-green-50 focus:ring-brand-green-primary":
              variant === "outline",
          },
          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
