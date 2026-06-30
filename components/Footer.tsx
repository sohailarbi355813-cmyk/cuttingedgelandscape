"use client";
import { motion, Variants } from "framer-motion";

const CONTACT_INFO = [
  { 
    id: "email",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ), 
    text: "kyle_cuttingedge@hotmail.com", 
    href: "mailto:kyle_cuttingedge@hotmail.com" 
  },
  { 
    id: "phone",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ), 
    text: "416 805 7642", 
    href: "tel:+14168057642" 
  },
  { 
    id: "address",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ), 
    text: "66 Genthorn Ave, Etobicoke, ON M9W 2S9", 
    href: "https://www.google.com/maps/search/?api=1&query=66+Genthorn+Ave,+Etobicoke,+ON+M9W+2S9" 
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Footer() {
  return (
    <>
      {/* ── CTA SECTION ── obsidian + gold, no flat bg ── */}
      <section className="relative bg-[#C9A84C] overflow-hidden">
        {/* Noise texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.045]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        {/* Radial depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(5,5,5,0.18),transparent_55%)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 py-28 md:py-36">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#050505]/50 mb-5 font-semibold">— Free Estimate</p>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-[#050505] leading-none tracking-tighter"
                  style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}>
                Contact Us<br/>for a Free<br/>Estimate
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", stiffness: 70, damping: 22, delay: 0.15 }}
              className="max-w-xs md:text-right"
            >
              <p className="text-[#050505]/60 text-sm leading-relaxed mb-8 font-medium">
                By requesting a free quote, you gain valuable insight into the scope of the project,
                the timeline, and the associated costs. We look forward to hearing from you.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(5,5,5,0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#050505] text-[#C9A84C] font-bold text-xs tracking-[0.1em] uppercase hover:bg-[#0D2418] transition-colors duration-300 rounded-full"
              >
                Request Estimate
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-[#0a0a0c] relative overflow-hidden pt-28 pb-16">

        {/* Removed grid lines, kept clean background */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-20 lg:gap-16 mb-28">

            {/* Brand */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
              className="pr-0 lg:pr-16"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <span className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold text-5xl md:text-6xl tracking-tight leading-none block mb-4">
                  Cutting <span className="text-[#C9A84C] italic font-light">Edge</span>
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-bold">
                  Landscaping &amp; Snowplowing
                </p>
              </motion.div>
              <motion.p variants={itemVariants} className="text-[#888890] text-base md:text-lg leading-relaxed max-w-[340px] font-light">
                Creating and maintaining premium outdoor spaces across the greater Toronto area since 2004. Quality craftsmanship and dedicated service.
              </motion.p>
            </motion.div>

            {/* Navigation */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
            >
              <ul className="space-y-6">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Our Services", href: "#services" },
                  { label: "Our Process", href: "#process" }
                ].map((l) => (
                  <motion.li key={l.label} variants={itemVariants}>
                    <a href={l.href} className="group flex items-center text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-all duration-300 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
                      <span className="w-0 h-px bg-[#C9A84C] mr-0 group-hover:w-8 group-hover:mr-4 transition-all duration-500 ease-out"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-500 ease-out">{l.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
            >
              <ul className="space-y-8">
                {CONTACT_INFO.map((c) => (
                  <motion.li key={c.id} variants={itemVariants}>
                    <a href={c.href} 
                       target={c.id === 'address' ? "_blank" : undefined}
                       rel={c.id === 'address' ? "noopener noreferrer" : undefined}
                       className="group flex items-start gap-5 hover:bg-transparent">
                      <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#0a0a0c] transition-colors duration-500">
                        {c.icon}
                      </div>
                      <span className="text-[#F5F0E8]/80 group-hover:text-[#F5F0E8] text-lg leading-snug transition-colors duration-300 mt-2.5 font-light">
                        {c.text}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-[#888890]/60 border-t border-[#F5F0E8]/5 pt-8"
          >
            <p>Copyright © 2004 Cutting Edge Landscaping &amp; Snowplowing. All rights reserved.</p>
            <p className="font-bold text-[#888890]">Toronto · Etobicoke · Greater Toronto Area</p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
