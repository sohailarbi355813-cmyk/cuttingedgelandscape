"use client";
import { motion } from "framer-motion";

export default function Brands() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#050505] w-full max-w-[1600px] mx-auto z-10 border-t border-[#F5F0E8]/5">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16">
        
        {/* Header */}
        <div className="w-full text-center mb-12">
          <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4">
            — Quality Materials
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#F5F0E8] tracking-tight text-3xl md:text-4xl">
            Brands We Trust
          </h2>
        </div>

        {/* Logo Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 80, damping: 22 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {/* Card 1: Oaks */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-3xl p-8 flex items-center justify-center h-[150px] shadow-lg cursor-default transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center select-none">
              <div className="relative flex flex-col items-center justify-center py-2 px-6">
                {/* Red/Grey Oval Outline/Crescent */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="180" height="75" viewBox="0 0 180 75" fill="none" className="w-full h-full">
                    {/* Left red curve */}
                    <path d="M 45 58 C -5 58 -5 18 45 18 C 55 18 70 23 80 28" stroke="#c82333" strokeWidth="4" strokeLinecap="round" />
                    {/* Right grey curve */}
                    <path d="M 135 18 C 185 18 185 58 135 58 C 120 58 105 53 90 46" stroke="#6c757d" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* Text */}
                <div className="relative z-10 flex flex-col items-center pt-2.5">
                  <span className="font-sans font-black text-2xl tracking-[0.18em] text-[#101014] leading-none mb-0.5">OAKS</span>
                  <span className="text-[#c82333] text-[7px] uppercase tracking-[0.25em] font-black">Landscape Products</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Banas Stones */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-3xl p-8 flex items-center justify-center h-[150px] shadow-lg cursor-default transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-4 select-none">
              {/* Green Icon */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-[45px] h-[34px] bg-[#3f6a58] flex items-center justify-center relative p-1">
                  <svg viewBox="0 0 100 80" className="w-full h-full text-white" fill="currentColor">
                    <rect x="10" y="10" width="22" height="60" />
                    <polygon points="32,10 68,70 48,70 12,10" />
                    <rect x="68" y="10" width="22" height="60" />
                  </svg>
                </div>
                <div className="w-[45px] bg-[#223d32] text-white text-[4px] py-0.5 text-center font-bold tracking-wider mt-0.5 leading-none">
                  SAFETY - QUALITY
                </div>
              </div>
              
              {/* Text */}
              <span className="font-sans font-black text-[22px] text-[#3f6a58] tracking-tight leading-none whitespace-nowrap">
                Banas Stones<span className="text-[9px] font-bold align-super ml-0.5">®</span>
              </span>
            </div>
          </motion.div>

          {/* Card 3: in-lite */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-3xl p-8 flex items-center justify-center h-[150px] shadow-lg cursor-default transition-all duration-300"
          >
            <div className="flex items-center justify-center select-none">
              <span className="font-serif font-semibold text-[#1e293b] text-3xl tracking-tight leading-none lowercase">
                in-lite<span className="text-[9px] font-sans font-bold align-super ml-0.5">®</span>
              </span>
            </div>
          </motion.div>

          {/* Card 4: Surefoot */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-3xl p-8 flex items-center justify-center h-[150px] shadow-lg cursor-default transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3 select-none">
              {/* Curved Track Icon */}
              <div className="text-[#6c757d] flex-shrink-0">
                <svg width="30" height="36" viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
                  <path d="M 5 45 C 5 45 5 15 25 10 C 35 7 35 15 35 15" />
                  <circle cx="5" cy="45" r="3" fill="currentColor" />
                  <circle cx="12" cy="30" r="3" fill="currentColor" />
                  <circle cx="22" cy="18" r="3" fill="currentColor" />
                  <circle cx="35" cy="15" r="3" fill="currentColor" />
                </svg>
              </div>
              
              {/* Text */}
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-baseline">
                  <span className="text-[#333333] font-light text-xl tracking-tighter">SURE</span>
                  <span className="text-[#c82333] font-black text-2xl tracking-tighter ml-0.5">FOOT</span>
                </div>
                <span className="text-[#101014] text-[6px] uppercase tracking-[0.18em] font-black mt-1 whitespace-nowrap">
                  Hardscape Products Inc.
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
