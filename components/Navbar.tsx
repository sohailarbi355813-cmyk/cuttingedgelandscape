"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Process", "#process"],
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 22, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "bg-[#050505]/95 backdrop-blur-xl border-b border-[0.5px] border-[#E6E6FA]/8 py-4 md:py-3"
            : "bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent py-6 md:py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex items-center justify-between">
          <a href="#home" className="flex flex-col leading-none group relative z-50">
            <span className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold text-xl md:text-2xl tracking-tight leading-none">
              Cutting <span className="text-[#C9A84C]">Edge</span>
            </span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-[#F5F0E8]/30 mt-1 font-medium">
              Landscaping &amp; Snowplowing
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="text-[#F5F0E8]/50 hover:text-[#F5F0E8] text-xs tracking-[0.08em] uppercase font-medium transition-colors duration-200 relative group">
                  {l}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <a href="#contact"
                className="text-[10px] uppercase tracking-[0.15em] font-semibold px-5 py-2.5 border border-[0.5px] border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#050505] transition-all duration-250">
                Get a Quote
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-[1.5px] bg-[#F5F0E8] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-[#F5F0E8] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-[#F5F0E8] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl pt-28 px-6 md:hidden flex flex-col h-[100svh]"
          >
            <ul className="flex flex-col gap-8 text-center mt-10">
              {navLinks.map(([l, h]) => (
                <motion.li 
                  key={h}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a href={h} onClick={() => setMobileMenuOpen(false)} className="text-[#F5F0E8] font-[family-name:var(--font-display)] text-3xl font-medium tracking-wide">
                    {l}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-16 flex justify-center">
              <a href="#contact"
                 onClick={() => setMobileMenuOpen(false)}
                 className="inline-block text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 bg-[#C9A84C] text-[#050505] hover:bg-[#E2C877] transition-all">
                Get a Quote
              </a>
            </div>
            
            <div className="mt-auto pb-12 flex justify-center gap-6">
                <a href="mailto:kyle_cuttingedge@hotmail.com" className="text-[#F5F0E8]/50 hover:text-[#C9A84C] transition-colors p-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </a>
                <a href="tel:+14168057642" className="text-[#F5F0E8]/50 hover:text-[#C9A84C] transition-colors p-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
