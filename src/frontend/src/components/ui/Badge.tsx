import type { ReactNode } from "react";

type BadgeVariant = "blue" | "muted" | "success" | "ghost";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue: "badge-blue",
  muted: "badge-muted",
  success: "badge-success",
  ghost: "badge-ghost",
};

export function Badge({ children, variant = "blue", className = "" }: BadgeProps) {
  return (
    <span className={`badge ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
