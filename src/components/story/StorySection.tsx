"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MinangCorner, BaliCorner, BaliGateSilhouette } from "@/components/ui/MinangOrnaments";
import { cn } from "@/lib/utils";

export function StorySection() {
  const stories = weddingData.stories;
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Parallax for decorative ornaments
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  // Scroll progress for the timeline beam
  const { scrollYProgress: timelineProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section id="story" className="py-20 sm:py-28 bg-minang-maroon-dark bg-songket-dark relative text-minang-cream">
      {/* Bali Gate Silhouette Background — subtle decorative element with parallax */}
      <motion.div
        className="absolute top-1/2 right-0 w-[280px] sm:w-[380px] -translate-y-1/2 text-bali-terracotta/[0.03] pointer-events-none z-0 opacity-40"
        style={{ y: parallaxY }}
      >
        <BaliGateSilhouette strokeColor="currentColor" />
      </motion.div>

      {/* Minang Songket Pattern overlay with parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ y: parallaxY }}
      />
      <Container size="md">
        <SectionHeader
          subtitle="Kisah Kami"
          title="Perjalanan Menuju Hari Bahagia"
          description="Kisah dua jalan yang dipertemukan, belajar saling mengerti, dan melangkah bersama menuju mahligai rumah tangga."
          culturalTheme="bali"
        />

        <div ref={containerRef} className="relative ml-5 sm:ml-28 md:ml-36 space-y-10 sm:space-y-14">
          {/* Static background rail */}
          <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-minang-gold/20" />
          {/* Animated active beam */}
          <motion.div
            style={{ scaleY: timelineProgress }}
            className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-minang-gold via-minang-gold-light to-bali-terracotta origin-top shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          />

          {stories.map((story, index) => {
            const isBaliSection = index === 2; // Third story (engagement) gets Bali treatment
            const cardClass = isBaliSection
              ? "glass-panel-bali border border-bali-terracotta/50 hover:border-bali-terracotta"
              : "glass-panel-maroon border border-minang-gold/45 hover:border-minang-gold/70";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-7 sm:pl-10 group"
              >
                {/* Timeline Dot — with pulse-ring glow */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.18 + 0.2 }}
                  className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-minang-gold border-4 border-minang-maroon-deep shadow-lg group-hover:scale-125 transition-transform duration-300 pulse-ring"
                />

                {/* Year Label */}
                <div className="sm:absolute sm:-left-28 md:-left-36 sm:top-0 sm:text-right mb-3 sm:mb-0 pr-0 sm:pr-4">
                  <span className="font-display text-lg sm:text-2xl md:text-3xl font-light text-minang-gold-light tracking-tight">
                    {story.year}
                  </span>
                </div>

                {/* Story Content Card — with smooth hover lift */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative p-5 sm:p-7 rounded-3xl ${cardClass} shadow-2xl transition-all duration-500 overflow-hidden`}
                >
                  {/* Top glow accent — theme-aware */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent",
                      isBaliSection ? "via-bali-terracotta/40" : "via-minang-gold/40"
                    )}
                  />
                  {/* Cultural corners: Minang top-right, Bali bottom-left */}
                  <MinangCorner position="top-right" color="#E8CE75" className="absolute top-4 right-4" />
                  <BaliCorner position="bottom-left" color="#E07A5F" className={`absolute bottom-4 left-4 ${isBaliSection ? "opacity-90" : "opacity-70"}`} />

                  <div className="flex items-center gap-2 text-minang-gold-light mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-minang-gold-light shrink-0" />
                    <h4 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-medium leading-snug">
                      {story.title}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-base text-minang-cream/80 font-light leading-relaxed mb-4">
                    {story.description}
                  </p>

                  {story.photo && (
                    <div className="relative w-full h-44 sm:h-60 rounded-2xl overflow-hidden shadow-inner mt-4 bg-minang-maroon-deep border border-minang-gold/30">
                      <Image
                        src={story.photo}
                        alt={story.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
