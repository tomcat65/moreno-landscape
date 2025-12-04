import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
  hover?: boolean;
}

export function Card({
  className,
  variant = "default",
  hover = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-white",
        // Variants
        {
          "shadow-md": variant === "default",
          "border-2 border-gray-200": variant === "bordered",
          "shadow-lg": variant === "elevated",
        },
        // Hover effects
        hover && "transition-shadow duration-200 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pb-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}
