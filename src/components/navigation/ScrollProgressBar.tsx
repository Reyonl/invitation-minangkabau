"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar({ isVisible }: { isVisible: boolean }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3px]">
      <motion.div
        className="h-full bg-gradient-to-r from-minang-gold via-minang-gold-light to-bali-terracotta shadow-[0_0_12px_rgba(212,175,55,0.8)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
