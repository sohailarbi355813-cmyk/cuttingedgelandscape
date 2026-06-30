"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden w-full max-w-[1600px] mx-auto z-10 min-h-[900px] flex flex-col justify-center">
      
      {/* HUGE BACKGROUND TEXT */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center opacity-5 z-0">
        <span className="font-[family-name:var(--font-display)] font-bold leading-none tracking-tight text-white whitespace-nowrap"
              style={{ fontSize: "clamp(8rem, 20vw, 24rem)" }}>
          ABOUT US
        </span>
      </div>

      {/* MAIN CONTENT BLOCK */}
      <div className="relative z-10 w-full px-4 md:px-16 flex flex-col xl:flex-row items-start gap-12 xl:gap-16">
        
        {/* LEFT COLUMN - MAIN TEXT */}
        <div className="w-full xl:w-[45%] flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="mb-8"
          >
            <p className="text-[#888890] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C9A84C]"></span>
              WHO WE ARE
            </p>
            
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[#F5F0E8] leading-none tracking-tight"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
              Creating stunning landscapes since <span className="text-[#C9A84C]">2004.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.8)", zIndex: 50 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
            className="glow-border bg-[#101014]/90 backdrop-blur-xl p-8 md:p-10 shadow-2xl relative z-20 cursor-default"
          >
            <div className="space-y-6 text-[#888890] text-sm leading-relaxed">
              <p>
                Cutting Edge Landscaping &amp; Snowplowing has been creating stunning landscapes surrounding Toronto, Ontario, since 2004. We combine our talent and expertise with our clients&apos; visions and concepts — creating beautiful outdoor living areas for many years.
              </p>
              <p>
                We are involved in numerous skillful associations to be acknowledged as an industry leader. We are proud of our dedication to controlling budgetary constraints and timelines and the transparency we communicate with our clients and consultants.
              </p>
              <p>
                Interlocking stone and flagstone natural stone are among our specializations — excellent choices for pathways, driveways, and patios, adding elegance and durability to your landscape.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - IMAGES & SECONDARY TEXT */}
        <div className="w-full xl:w-[55%] flex flex-col gap-10 mt-6 xl:mt-0">
          
          {/* IMAGE COMPOSITION */}
          <div className="relative w-full h-[350px] md:h-[550px] flex justify-end">
            
            {/* Main Large Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0 40px 80px rgba(0,0,0,0.8)", zIndex: 50 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
              className="absolute top-0 right-0 w-[85%] h-[85%] glow-border rounded-[1.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] z-10"
            >
              <Image src="/images/whatsapp/w18.jpeg" alt="Premium landscaping project" fill className="object-cover brightness-75" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 40px 80px rgba(0,0,0,0.9)", zIndex: 50 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-[55%] h-[50%] glow-border rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-20"
            >
              <Image src="/images/whatsapp/w22.jpeg" alt="Expert hardscaping" fill className="object-cover brightness-90" />
              
              {/* Image Overlay Label */}
              <div className="absolute bottom-4 left-4 bg-[#0a0a0c]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#F5F0E8]/10">
                <span className="text-[#C9A84C] text-[8px] uppercase tracking-[0.2em] font-bold block mb-0.5">Specialty</span>
                <span className="text-[#F5F0E8] text-xs font-[family-name:var(--font-display)] font-semibold tracking-wide">Hardscaping</span>
              </div>
            </motion.div>

            {/* Floating 20+ Years Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              className="absolute top-[5%] left-0 xl:-left-[5%] w-32 h-32 md:w-36 md:h-36 rounded-full glow-border bg-[#0a0a0c]/90 backdrop-blur-xl flex flex-col items-center justify-center z-30 shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            >
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-[family-name:var(--font-display)] text-[#C9A84C] text-4xl md:text-5xl font-bold leading-none mb-1">20<span className="text-2xl md:text-3xl">+</span></span>
                <span className="text-[#F5F0E8] text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-center font-semibold">Years of<br/>Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* SECONDARY TEXT & TAGS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.8)", zIndex: 50 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
            className="glow-border bg-[#101014]/90 backdrop-blur-xl p-6 md:p-8 shadow-xl w-full xl:w-[85%] self-end cursor-default"
          >
            <p className="text-[#888890] text-sm leading-relaxed mb-5">
              A constant focus on detail, dependable service, and a personalized, step-by-step process for every client has earned the reputation of Cutting Edge Landscaping. Our determination to benefit our clients has resulted in an impressive referral rate among the top in the industry.
            </p>
            <div className="pt-5 border-t border-[#F5F0E8]/10 mb-6">
              <p className="text-[#C9A84C] font-semibold text-[13px] tracking-wide">
                By focusing on teamwork and family values, Cutting Edge Landscaping &amp; Snowplowing is dedicated to helping our clients achieve their visions. We are the industry leader with the highest quality of artistry and commitment to our work.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {["Commercial", "Residential", "Industrial"].map((t) => (
                <span key={t} className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0c] border border-[#C9A84C]/20 rounded-full text-[#C9A84C] text-[9px] tracking-[0.2em] uppercase font-bold shadow-sm hover:bg-[#C9A84C]/10 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shadow-[0_0_8px_#C9A84C]"></span>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* BRANDS WE TRUST BLOCK (Integrated at the bottom of About Us) */}
      <div className="relative z-10 w-full px-4 md:px-16 mt-28 md:mt-36">
        
        {/* Brands Section Header */}
        <div className="mb-12 border-t border-[#F5F0E8]/10 pt-16">
          <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4">
            — Premium Materials
          </p>
          <h3 className="font-[family-name:var(--font-display)] font-bold text-[#F5F0E8] tracking-tight text-3xl md:text-4xl">
            Brands We Trust
          </h3>
        </div>

        {/* Cards Grid with Explanations */}
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
            className="bg-white rounded-3xl p-8 flex flex-col items-center justify-between min-h-[290px] shadow-lg cursor-default transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center select-none w-full h-[60px]">
              <div className="relative flex flex-col items-center justify-center py-2 px-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="180" height="75" viewBox="0 0 180 75" fill="none" className="w-full h-full">
                    <path d="M 45 58 C -5 58 -5 18 45 18 C 55 18 70 23 80 28" stroke="#c82333" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 135 18 C 185 18 185 58 135 58 C 120 58 105 53 90 46" stroke="#6c757d" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col items-center pt-2.5">
                  <span className="font-sans font-black text-2xl tracking-[0.18em] text-[#101014] leading-none mb-0.5">OAKS</span>
                  <span className="text-[#c82333] text-[7px] uppercase tracking-[0.25em] font-black">Landscape Products</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-6 leading-relaxed font-medium text-center">
              We trust Oaks for their high-durability, weather-resistant interlocking concrete pavers and wall products, ensuring driveways and patios stand up to tough Canadian winters.
            </p>
          </motion.div>

          {/* Card 2: Banas Stones */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-3xl p-8 flex flex-col items-center justify-between min-h-[290px] shadow-lg cursor-default transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3 select-none w-full h-[60px]">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-[42px] h-[32px] bg-[#3f6a58] flex items-center justify-center p-1">
                  <svg viewBox="0 0 100 80" className="w-full h-full text-white" fill="currentColor">
                    <rect x="10" y="10" width="22" height="60" />
                    <polygon points="32,10 68,70 48,70 12,10" />
                    <rect x="68" y="10" width="22" height="60" />
                  </svg>
                </div>
                <div className="w-[42px] bg-[#223d32] text-white text-[3.5px] py-0.5 text-center font-bold tracking-wider mt-0.5 leading-none">
                  SAFETY - QUALITY
                </div>
              </div>
              <span className="font-sans font-black text-xl text-[#3f6a58] tracking-tight leading-none">
                Banas Stones<span className="text-[8px] font-bold align-super ml-0.5">®</span>
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-6 leading-relaxed font-medium text-center">
              We trust Banas for their premium natural stone products. Their ethically sourced, high-quality flagstone and sandstone offer unmatched longevity and natural elegance for steps and porches.
            </p>
          </motion.div>

          {/* Card 3: in-lite */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-3xl p-8 flex flex-col items-center justify-between min-h-[290px] shadow-lg cursor-default transition-all duration-300"
          >
            <div className="flex items-center justify-center select-none w-full h-[60px]">
              <span className="font-serif font-semibold text-[#1e293b] text-3xl tracking-tight leading-none lowercase">
                in-lite<span className="text-[9px] font-sans font-bold align-super ml-0.5">®</span>
              </span>
            </div>
            <p className="text-gray-600 text-xs mt-6 leading-relaxed font-medium text-center">
              We trust in-lite for their premium 12V outdoor lighting systems. Their energy-efficient LED fixtures provide beautiful, safe, and long-lasting night illumination for decks, steps, and paths.
            </p>
          </motion.div>

          {/* Card 4: Surefoot */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-3xl p-8 flex flex-col items-center justify-between min-h-[290px] shadow-lg cursor-default transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2 select-none w-full h-[60px]">
              <div className="text-[#6c757d] flex-shrink-0">
                <svg width="26" height="32" viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                  <path d="M 5 45 C 5 45 5 15 25 10 C 35 7 35 15 35 15" />
                  <circle cx="5" cy="45" r="3" fill="currentColor" />
                  <circle cx="12" cy="30" r="3" fill="currentColor" />
                  <circle cx="22" cy="18" r="3" fill="currentColor" />
                  <circle cx="35" cy="15" r="3" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-baseline">
                  <span className="text-[#333333] font-light text-lg tracking-tighter">SURE</span>
                  <span className="text-[#c82333] font-black text-xl tracking-tighter ml-0.5">FOOT</span>
                </div>
                <span className="text-[#101014] text-[5.5px] uppercase tracking-[0.18em] font-black mt-1 whitespace-nowrap">
                  Hardscape Products Inc.
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-6 leading-relaxed font-medium text-center">
              We trust Surefoot for their industry-leading paver edge restraints. Their heavy-duty edging ensures that interlocking stone installations remain stable and do not shift over time.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
