"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  { num: "01", name: "Flagstone", image: "/images/flagstone.jpeg", desc: "Cutting Edge landscaping has provided premium landscape and maintenance services." },
  { num: "02", name: "Retaining Walls", image: "/images/retaining-walls-premium.png", desc: "Durable and aesthetically pleasing retaining walls." },
  { num: "03", name: "Hot Tubs", image: "/images/hot-tubs.jpeg", desc: "Transform your backyard into a personal oasis." },
  { num: "04", name: "Decks & Fences", image: "/images/decks-fences.jpeg", desc: "Custom-built wooden structures providing privacy and perfect outdoor living spaces." },
  { num: "05", name: "Artificial Turf", image: "/images/artificial-turf.jpeg", desc: "Low-maintenance, evergreen artificial turf installations." },
  { num: "06", name: "Property Maintenance", image: "/images/hero.png", desc: "Comprehensive maintenance packages for your landscape." },
  { num: "07", name: "Pools", image: "/images/pools.jpeg", desc: "Luxury pool design and construction tailored to your backyard environment." },
  { num: "08", name: "Snow Removal", image: "/images/snow-removal.jpeg", desc: "Reliable commercial and residential snow clearing." },
  { num: "09", name: "Interlocking Stone", image: "/images/interlocking-stone.jpeg", desc: "Premium interlocking driveways, patios, and walkways built to last." },
  { num: "10", name: "Sodding", image: "/images/sodding.jpeg", desc: "Instant, lush green lawns installed with premium quality sod." },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full max-w-[1600px] mx-auto py-32 px-4 md:px-16 overflow-hidden">

      <div className="w-full max-w-[1200px] mx-auto text-center mb-16 relative z-20">
        <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4">— Our Expertise</p>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-[#F5F0E8] leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
          What We Do
        </h2>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col pb-32">
        
        {SERVICES.map((service, i) => {
          const styleType = i % 3;
          const isFirst = i === 0;

          if (styleType === 0) {
            // STYLE 0: Left aligned, Image left, Text right
            const lastCardOverride = i === 9 ? 'mx-auto mt-16 md:mt-12' : (!isFirst ? 'mt-8 md:-mt-24' : '');
            return (
              <motion.div 
                key={service.num}
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ zIndex: 200, scale: 1.02, y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.8)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                style={{ zIndex: i * 10 }}
                className={`relative w-full md:w-[600px] mr-auto glow-border bg-[#0d0d12] flex flex-col md:flex-row h-auto md:h-[280px] shadow-2xl rounded-[1rem] ${lastCardOverride}`}
              >
                {/* Image side */}
                <div className="relative w-full md:w-[45%] h-[200px] md:h-full rounded-t-[1rem] md:rounded-tr-none md:rounded-l-[1rem] overflow-hidden">
                  <Image src={service.image} alt={service.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d12]/80"></div>
                </div>
                
                {/* Text side */}
                <div className="relative w-full md:w-[55%] h-full p-8 flex flex-col justify-center">
                  <h3 className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold text-3xl mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[#888890] text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Huge Number Overlay */}
                <div className="absolute top-[100px] md:top-1/2 -translate-y-1/2 left-8 md:left-12 pointer-events-none drop-shadow-2xl">
                  <span className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold leading-none select-none"
                        style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}>
                    {service.num}
                  </span>
                </div>
              </motion.div>
            );
          }

          if (styleType === 1) {
            // STYLE 1: Right aligned, Wide Image
            return (
              <motion.div 
                key={service.num}
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ zIndex: 200, scale: 1.02, y: -8, boxShadow: "0 40px 80px rgba(0,0,0,0.9)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                style={{ zIndex: i * 10 }}
                className="relative w-full md:w-[75%] lg:w-[800px] h-[250px] md:h-[300px] ml-auto glow-border shadow-[0_40px_80px_rgba(0,0,0,0.6)] rounded-[1rem] overflow-hidden mt-8 md:-mt-24"
              >
                <Image src={service.image} alt={service.name} fill className="object-cover brightness-75" />
                
                {/* Image Overlay Text */}
                <div className="absolute bottom-6 right-8 text-right drop-shadow-xl max-w-[60%]">
                  <h3 className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold text-2xl md:text-3xl mb-1">
                    {service.name}
                  </h3>
                  <p className="text-[#F5F0E8]/70 text-xs hidden md:block">{service.desc}</p>
                </div>

                {/* Huge Number Overlay */}
                <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 pointer-events-none drop-shadow-2xl">
                  <span className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold leading-none select-none"
                        style={{ fontSize: "clamp(4.5rem, 14vw, 14rem)" }}>
                    {service.num}
                  </span>
                </div>
              </motion.div>
            );
          }

          if (styleType === 2) {
            // STYLE 2: Left aligned indented, Inset Image left, Text right
            return (
              <motion.div 
                key={service.num}
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ zIndex: 200, scale: 1.02, y: -8, boxShadow: "0 40px 80px rgba(0,0,0,0.9)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                style={{ zIndex: i * 10 }}
                className="relative w-full md:w-[650px] ml-0 md:ml-[10%] mr-auto glow-border bg-[#0d0d12] flex flex-col md:flex-row h-auto md:h-[300px] shadow-[0_40px_80px_rgba(0,0,0,0.8)] rounded-[1rem] mt-8 md:-mt-24"
              >
                {/* Inner Image Box */}
                <div className="relative w-full md:w-[45%] h-[200px] md:h-full flex items-center justify-center p-6 md:pl-6 md:pr-0 pb-0 md:pb-6">
                  <div className="relative w-full h-full rounded-[1rem] overflow-hidden shadow-lg">
                    <Image src={service.image} alt={service.name} fill className="object-cover" />
                  </div>
                </div>
                
                {/* Text side */}
                <div className="relative w-full md:w-[55%] h-full p-8 md:pl-10 flex flex-col justify-center">
                  <p className="text-[#888890] text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
                    WE SERVE
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold text-3xl md:text-4xl mb-4">
                    {service.name}
                  </h3>
                  <p className="text-[#888890] text-sm leading-relaxed hidden md:block">
                    {service.desc}
                  </p>
                </div>

                {/* Huge Number Overlay */}
                <div className="absolute top-[80px] md:top-1/2 -translate-y-1/2 left-4 md:-left-8 pointer-events-none drop-shadow-xl">
                  <span className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-bold leading-none select-none"
                        style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}>
                    {service.num}
                  </span>
                </div>
              </motion.div>
            );
          }
        })}

      </div>
    </section>
  );
}
