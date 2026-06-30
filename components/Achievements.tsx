"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const AWARDS = [
  { type: "winner", year: "2024" },
  { type: "verified", year: "" },
  { type: "winner", year: "2023" },
  { type: "winner", year: "2022" },
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
    <section className="relative py-28 md:py-36 overflow-hidden w-full max-w-[1600px] mx-auto z-10">
      
      {/* Blurred background image of landscaped garden */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/whatsapp/w2.jpeg" 
          alt="Achievements Background" 
          fill 
          className="object-cover object-center filter blur-md brightness-[0.3] scale-105"
        />
        <div className="absolute inset-0 bg-[#050505]/45" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16">
        
        {/* Header - Centered achievements title */}
        <div className="w-full text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 80, damping: 22 }}
            className="font-[family-name:var(--font-display)] font-bold text-white tracking-tight text-4xl md:text-5xl"
          >
            Achievements
          </motion.h2>
        </div>

        {/* Grid of Award Cards */}
        <motion.div
          variants={container} 
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {AWARDS.map((award, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.04, y: -6, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
              className="bg-white rounded-3xl p-8 flex flex-col justify-center items-center h-[260px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] cursor-default relative overflow-hidden"
            >
              {/* Tiny Blue Trophy Top-Left */}
              <div className="absolute top-5 left-5 text-[#00a2e8]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>

              {/* Faint Trophy Watermark Center-Right */}
              <div className="absolute -top-4 -right-4 text-[#00a2e8]/5 pointer-events-none select-none">
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6v5Zm12 0h1.5a2.5 2.5 0 0 0 0-5H18v5Zm0-7H6v7a6 6 0 0 0 12 0V2Zm-8 12.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22h10c0-1.76-.85-3.25-2.03-3.79-.5-.23-.97-.66-.97-1.21v-2.34c1.17-.67 2-1.92 2-3.32V2H6v7c0 1.4.83 2.65 2 3.32Z"></path>
                </svg>
              </div>

              {award.type === "winner" ? (
                <div className="flex flex-col items-center select-none relative z-10">
                  {/* Speech Bubble with Crown */}
                  <div className="relative mb-3">
                    {/* Gold Crown */}
                    <div className="absolute -top-3.5 -left-1.5 -rotate-[18deg] text-[#F3A123]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/>
                      </svg>
                    </div>
                    {/* Speech Bubble */}
                    <div className="bg-[#00a2e8] text-white px-3.5 py-1 rounded-full text-[9px] font-black tracking-wider flex items-center justify-center relative">
                      HomeStars
                      {/* Bubble Tail */}
                      <div className="absolute bottom-[-3px] right-[25%] w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[4px] border-t-[#00a2e8]"></div>
                    </div>
                  </div>

                  {/* BEST of the BEST */}
                  <div className="text-center font-sans tracking-tighter leading-none mb-1.5">
                    <span className="text-[#101014] font-black text-[22px] block">
                      BEST <span className="text-[#ff5e00] font-serif italic text-lg font-normal lowercase tracking-normal mx-0.5">of the</span> BEST
                    </span>
                  </div>

                  {/* WINNER YYYY */}
                  <span className="text-[#888890] text-[9px] uppercase tracking-[0.08em] font-bold">
                    WINNER · {award.year}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center select-none relative z-10">
                  <div className="relative w-[85px] h-[95px] flex flex-col items-center">
                    {/* Blue Shield Background SVG */}
                    <svg width="85" height="95" viewBox="0 0 100 110" className="absolute inset-0 text-[#00a2e8]" fill="currentColor">
                      <path d="M50 0 L90 12 V50 C90 80 50 110 50 110 C50 110 10 80 10 50 V12 Z"/>
                    </svg>
                    {/* Content inside Shield */}
                    <div className="relative z-10 flex flex-col items-center w-full pt-3 h-full">
                      {/* Top: HomeStars Text */}
                      <span className="text-white text-[9px] font-black tracking-wide">HomeStars</span>
                      
                      {/* Middle: VERIFIED Banner */}
                      <div className="w-[105%] bg-[#5c646c] text-white text-[8px] font-bold py-0.5 my-2.5 text-center uppercase shadow-md">
                        VERIFIED
                      </div>

                      {/* Bottom: Checkmark */}
                      <div className="mt-1 text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
