"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  whileHover,
  whileTap,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-minang-gold/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wider text-xs sm:text-sm uppercase";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs sm:text-sm",
    lg: "px-8 py-3.5 text-sm sm:text-base",
  };

  const variantStyles = {
    primary:
      "bg-minang-maroon text-white hover:bg-minang-maroon-dark shadow-md hover:shadow-xl border border-minang-gold/30",
    gold:
      "btn-shimmer bg-gold-gradient text-minang-charcoal font-semibold shadow-lg hover:shadow-2xl hover:shadow-minang-gold/20 border border-minang-gold-light",
    secondary:
      "bg-minang-cream-soft text-minang-charcoal hover:bg-minang-cream-dark shadow-sm border border-minang-gold/25",
    outline:
      "border border-minang-gold text-minang-gold-light hover:bg-minang-gold hover:text-minang-charcoal hover:shadow-lg hover:shadow-minang-gold/20",
    ghost:
      "text-minang-charcoal hover:bg-minang-cream-soft",
    dark:
      "bg-minang-charcoal text-minang-cream hover:bg-minang-maroon shadow-md",
  };

  return (
    <motion.button
      whileHover={whileHover ?? { scale: 1.03, y: -2 }}
      whileTap={whileTap ?? { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}
