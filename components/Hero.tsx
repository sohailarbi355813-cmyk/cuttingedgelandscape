"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  /* Raw parallax values */
  const rawBgY   = useTransform(scrollYProgress, [0, 1], ["0%",  "45%"]);
  const rawTextY = useTransform(scrollYProgress, [0, 1], ["0%",  "18%"]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /* Smooth with spring */
  const bgY      = useSpring(rawBgY,   { stiffness: 60, damping: 22 });
  const textY    = useSpring(rawTextY, { stiffness: 80, damping: 28 });
  const opacity  = useSpring(rawOpacity, { stiffness: 80, damping: 28 });

  return (
    <section ref={ref} className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#050505]">

      {/* ── Parallax BG layer ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 will-change-transform">
        <Image src="/images/hero.png" alt="" fill priority
          className="object-cover object-center brightness-[0.45] saturate-[0.85]"
          sizes="100vw" />
      </motion.div>

      {/* ── Layered cinematic overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />

      {/* ── CONTENT — foreground scrolls faster than BG ── */}
      <motion.div style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pb-20 md:pb-32">

        {/* Micro label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 22, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-semibold">
            Toronto, Ontario · Est. 2004
          </span>
        </motion.div>

        {/* Scale Shock headline — left-flush, massive */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0,  opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.3 }}
            className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold
                       leading-none tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 9.5vw, 9rem)" }}
          >
            Where{" "}
            <em className="text-[#C9A84C] not-italic">Service</em>
            <br />Is Always
            <br />In Season
          </motion.h1>
        </div>

        {/* Description — pushed right, deliberately offset */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 22, delay: 0.52 }}
          className="text-[#F5F0E8]/55 font-light max-w-sm leading-relaxed mt-8 ml-auto
                     text-right text-[0.95rem]"
        >
          Landscape construction and maintenance across the greater Toronto area
          since 2004. Flagstone, Retaining Walls, Snow Removal, and beyond.
        </motion.p>

        {/* CTAs — asymmetric horizontal align */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 22, delay: 0.68 }}
          className="flex items-center gap-5 mt-10"
        >
          <a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] text-[#050505]
                       rounded-full font-bold text-xs tracking-[0.08em] uppercase
                       hover:bg-[#E2C877] transition-colors duration-300
                       hover:shadow-[0_8px_40px_rgba(201,168,76,0.4)]
                       hover:-translate-y-0.5 transition-all">
            Get In Touch
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
          <a href="#process"
            className="text-[#F5F0E8]/50 text-xs tracking-[0.12em] uppercase font-medium
                       hover:text-[#F5F0E8] transition-colors duration-300 border-b border-white/20
                       hover:border-white/60 pb-px">
            How It Works
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-[#C9A84C] to-transparent origin-top"
        />
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#8A9E93]">Scroll</span>
      </motion.div>

      {/* ── Wave transition ── */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-12 md:h-16" fill="#050505">
          <path d="M0,70 C320,20 1100,60 1440,10 L1440,70 Z" />
        </svg>
      </div>
    </section>
  );
}
