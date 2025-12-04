import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl font-bold",
          dark ? "text-white" : "text-brand-green-dark",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            align === "center" && "mx-auto",
            dark ? "text-gray-200" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
