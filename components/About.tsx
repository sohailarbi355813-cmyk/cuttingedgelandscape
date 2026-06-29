"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden w-full max-w-[1600px] mx-auto z-10 min-h-[900px] flex items-center">
      
      {/* HUGE BACKGROUND TEXT */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center opacity-5 z-0">
        <span className="font-[family-name:var(--font-display)] font-bold leading-none tracking-tight text-white whitespace-nowrap"
              style={{ fontSize: "clamp(8rem, 20vw, 24rem)" }}>
          ABOUT US
        </span>
      </div>

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
              <Image src="/images/hero.png" alt="Premium landscaping project" fill className="object-cover brightness-75" />
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
              <Image src="/images/hardscaping.png" alt="Expert hardscaping" fill className="object-cover brightness-90" />
              
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

          {/* SECONDARY TEXT & TAGS (Moved here for balance) */}
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
    </section>
  );
}
