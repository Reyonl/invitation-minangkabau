"use client";

import React, { useEffect, useState } from "react";
import { Home, Heart, Calendar, BookOpen, Image as ImageIcon, MessageSquare, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", icon: <Home className="w-4 h-4" /> },
  { id: "couple", label: "Mempelai", icon: <Heart className="w-4 h-4" /> },
  { id: "details", label: "Acara", icon: <Calendar className="w-4 h-4" /> },
  { id: "story", label: "Kisah", icon: <BookOpen className="w-4 h-4" /> },
  { id: "gallery", label: "Galeri", icon: <ImageIcon className="w-4 h-4" /> },
  { id: "rsvp", label: "RSVP", icon: <MessageSquare className="w-4 h-4" /> },
  { id: "gift", label: "Kado", icon: <Gift className="w-4 h-4" /> },
];

export function FloatingNav({ isVisible }: { isVisible: boolean }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 60, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 60, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          aria-label="Bottom Navigation Dock"
          className="fixed bottom-4 sm:bottom-6 left-1/2 z-40 max-w-[96vw] sm:max-w-fit"
        >
          <div className="flex items-center gap-0.5 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full glass-panel-maroon shadow-2xl border border-minang-gold/50 backdrop-blur-xl">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.label}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className={cn(
                    "relative flex items-center justify-center min-w-[38px] min-h-[38px] sm:min-w-0 sm:min-h-0 p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors duration-200",
                    isActive
                      ? "text-minang-charcoal font-semibold"
                      : "text-minang-cream/80 hover:text-minang-gold-light"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gold-gradient shadow-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 shrink-0">
                    {item.icon}
                  </span>
                  <span
                    className={cn(
                      "relative z-10 hidden md:inline-block ml-1.5 text-[11px] uppercase tracking-wider",
                      isActive ? "font-semibold" : "font-normal"
                    )}
                  >
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
