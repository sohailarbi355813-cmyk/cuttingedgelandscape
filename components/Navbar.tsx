"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 22, delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[0.5px] border-[#E6E6FA]/8 py-3"
          : "bg-gradient-to-b from-[#050505]/80 via-[#050505]/30 to-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none group">
          <span className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold text-xl tracking-tight leading-none">
            Cutting <span className="text-[#C9A84C]">Edge</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#F5F0E8]/30 mt-0.5 font-medium">
            Landscaping &amp; Snowplowing · Est. 2004
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {[["Home","#home"],["About","#about"],["Services","#services"],["Process","#process"]].map(([l,h]) => (
            <li key={h}>
              <a href={h} className="text-[#F5F0E8]/45 hover:text-[#F5F0E8] text-xs tracking-[0.08em]
                                     uppercase font-medium transition-colors duration-200 relative group">
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C]
                                 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <a href="#contact"
              className="text-[10px] uppercase tracking-[0.15em] font-semibold
                         px-5 py-2.5 border border-[0.5px] border-[#C9A84C]/40 text-[#C9A84C]
                         hover:bg-[#C9A84C] hover:text-[#050505] transition-all duration-250">
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
