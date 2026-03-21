import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  slideFrom?: "left" | "up" | "none";
  "data-ocid"?: string;
}

export function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
  slideFrom = "up",
  "data-ocid": ocid,
}: CardProps) {
  const initial =
    slideFrom === "left"
      ? { opacity: 0, x: -20 }
      : slideFrom === "up"
        ? { opacity: 0, y: 20 }
        : { opacity: 0 };

  const animate = slideFrom === "left" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      data-ocid={ocid}
      className={`rounded-2xl p-5 ${hover ? "portfolio-card" : "portfolio-card-static"} ${className}`}
    >
      {children}
    </motion.div>
  );
}
