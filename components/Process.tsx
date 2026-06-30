"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const STEPS = [
  { 
    num: "01", 
    title: "After Initial\nContact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <circle cx="8" cy="15" r="1" fill="#C9A84C"></circle>
        <circle cx="12" cy="15" r="1" fill="#C9A84C"></circle>
        <circle cx="16" cy="15" r="1" fill="#C9A84C"></circle>
      </svg>
    )
  },
  { 
    num: "02", 
    title: "Written\nProposal",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
      </svg>
    ) // Note: using a handshake or similar generic icon, handshake is complex so I'll use a document or checkmark. Wait, in screenshot it's a handshake. Let me use an abstract handshake/deal icon.
  },
  { 
    num: "03", 
    title: "Site Visit and\nAssessment",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  },
  { 
    num: "04", 
    title: "Let's Get\nProposal!",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
        <path d="M13.5 2.5a4.24 4.24 0 0 0-6 0L2.5 7.5a4.24 4.24 0 0 0 0 6L7 18l1.5-1.5-4.5-4.5a2.12 2.12 0 0 1 0-3l5-5a2.12 2.12 0 0 1 3 0l4.5 4.5L18 7l-4.5-4.5z"></path>
        <path d="M12 12l8 8"></path>
        <path d="M16 22l5-5"></path>
      </svg> // Rocket approximation
    )
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden:  { opacity: 0, scale: 0.95, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Process() {
  return (
    <section id="process" className="relative py-20 overflow-hidden w-full max-w-[1600px] mx-auto">

      {/* HUGE "OUR PROCESS" TEXT */}
      <div className="w-full flex justify-center mb-10 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 40, letterSpacing: "-0.05em", filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "normal", filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(4rem, 12vw, 12rem)" }}>
          OUR PROCESS
        </motion.h2>
      </div>

      {/* CONNECTED STEPS CONTAINER */}
      <div className="relative w-full px-4 md:px-16 pb-32">
        {/* SVG Squiggly connecting line */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-[150px] -translate-y-1/2 hidden lg:block pointer-events-none z-0">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100" fill="none" stroke="rgba(168,116,255,0.4)" strokeWidth="1.5">
            <path d="M 50 50 C 200 -20, 300 120, 500 50 C 700 -20, 800 120, 950 50" />
          </svg>
        </div>

        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 lg:gap-8"
        >
          {STEPS.map((step, i) => {
            let translateClass = "";
            if (i === 0) translateClass = "lg:translate-y-[20px]";
            if (i === 1) translateClass = "lg:-translate-y-[30px]";
            if (i === 2) translateClass = "lg:translate-y-[30px]";
            if (i === 3) translateClass = "lg:-translate-y-[20px]";

            return (
              <div key={step.num} className={`relative z-10 w-full max-w-[320px] ${translateClass}`}>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05, y: -10, boxShadow: "0 40px 80px rgba(0,0,0,0.9)", zIndex: 50 }}
                  className={`glow-border bg-[#101014] p-5 md:p-6 w-full flex items-center gap-4 shadow-2xl backdrop-blur-sm cursor-default`}
                >
                {/* Number */}
                <span className="font-[family-name:var(--font-display)] font-bold text-[#F5F0E8] leading-none"
                      style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)" }}>
                  {step.num}
                </span>

                <div className="flex-1">
                  <p className="text-[#888890] text-[8px] uppercase tracking-[0.2em] font-semibold mb-1">
                    WE SERVE
                  </p>
                  <h3 className="text-[#F5F0E8] font-bold text-[13px] md:text-[15px] leading-snug whitespace-pre-line font-[family-name:var(--font-display)]">
                    {step.title}
                  </h3>
                </div>

                <div className="self-start mt-1">
                  {step.icon}
                </div>
              </motion.div>
            </div>
            );
          })}
        </motion.div>
      </div>

      {/* CONTACT US BLOCK (Overlapping image) */}
      <div className="relative w-full px-4 md:px-16 mt-12 flex flex-col md:block pb-20">
        
        {/* Background Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02, y: -5, boxShadow: "0 30px 60px rgba(0,0,0,0.8)", zIndex: 10 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="relative w-full md:max-w-[1100px] h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden md:ml-auto order-2 md:order-none"
        >
          <Image 
            src="/images/whatsapp/w10.jpeg" 
            alt="Expert Landscaping" 
            fill 
            className="object-cover brightness-75"
          />
        </motion.div>

        {/* Floating Contact Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -8, boxShadow: "0 40px 80px rgba(0,0,0,0.9)", zIndex: 50 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="relative md:absolute w-full md:w-auto left-0 md:left-[15%] top-0 md:top-1/2 md:-translate-y-1/2 glow-border bg-[#0a0a0c]/90 backdrop-blur-xl px-6 md:px-20 py-10 md:py-16 shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 flex flex-col items-center cursor-default order-1 md:order-none mb-6 md:mb-0"
        >
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#F5F0E8] leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 8vw, 7rem)" }}>
            Contact Us
          </h2>
          
          <a href="#contact" className="group relative rounded-full bg-[#353232] border border-[#C9A84C]/50 px-6 py-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 text-[#C9A84C] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              REQUEST YOUR ESTIMATE
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </motion.div>

      </div>

    </section>
  );
}
