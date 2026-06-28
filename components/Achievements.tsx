"use client";
import { motion, Variants } from "framer-motion";

const AWARDS = [
  { 
    year: "2024", 
    label: "Best of the Best\nWinner", 
    source: "HomeStars", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    )
  },
  { 
    year: "VERIFIED", 
    label: "Certified\nProfessional", 
    source: "HomeStars", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    )  
  },
  { 
    year: "2023", 
    label: "Best of the Best\nWinner", 
    source: "HomeStars", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ) 
  },
  { 
    year: "2022", 
    label: "Best of the Best\nWinner", 
    source: "HomeStars", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ) 
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden:  { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Achievements() {
  return (
    <section className="relative py-32 overflow-hidden w-full max-w-[1600px] mx-auto z-10">

      {/* HUGE BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center opacity-[0.03] z-0">
        <span className="font-[family-name:var(--font-display)] font-bold leading-none tracking-tight text-white whitespace-nowrap"
              style={{ fontSize: "clamp(8rem, 22vw, 24rem)" }}>
          AWARDS
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          >
            <p className="text-[#888890] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C9A84C]"></span>
              RECOGNITION
            </p>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[#F5F0E8] leading-none tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)" }}>
              Achieve<br/>ments
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 70, damping: 22, delay: 0.2 }}
            className="text-[#888890] text-sm leading-relaxed max-w-[280px] md:text-right"
          >
            Recognized consistently as Toronto&apos;s best — year after year. Our dedication to excellence speaks for itself.
          </motion.p>
        </div>

        {/* Staggered Grid of Award Cards */}
        <motion.div
          variants={container} 
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8"
        >
          {AWARDS.map((award, i) => {
            // Create a staggered vertical look for the cards
            const yOffset = i % 2 === 0 ? "lg:-mt-12" : "lg:mt-12";
            
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 24 }}
                className={`glow-border bg-[#101014]/90 backdrop-blur-xl p-8 flex flex-col justify-between h-[320px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-default ${yOffset}`}
              >
                {/* Top: Icon and Source */}
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#0a0a0c] border border-[#C9A84C]/30 flex items-center justify-center mb-6 shadow-inner">
                    {award.icon}
                  </div>
                  <p className="text-[#888890] text-[9px] uppercase tracking-[0.2em] font-semibold mb-2">
                    {award.source}
                  </p>
                  <h4 className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold text-xl leading-tight whitespace-pre-line">
                    {award.label}
                  </h4>
                </div>

                {/* Bottom: Huge Year Text */}
                <div className="mt-auto">
                  <span className="font-[family-name:var(--font-display)] font-bold text-[#C9A84C] opacity-80"
                        style={{ fontSize: award.year === "VERIFIED" ? "2rem" : "3.5rem" }}>
                    {award.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
