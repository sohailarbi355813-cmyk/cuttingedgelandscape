"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    author: "Home Stars Customer",
    source: "Home Stars Reviews",
    text: "We had our 1960s houses front steps & porch re-done in granite, walkway pavers replaced & redesigned, & a new front garden retaining wall with new plants planted. Kyle met with us 3 times at Islington Nurseries to consult us on which products to use & helped us choose which plants to use. The quality of the work done & the service was excellent. Kyle & his team were great to work with. I will recommend them to anybody needing landscape work done.",
  },
  {
    author: "Kevin",
    source: "Home Stars Reviews",
    text: "Kyle and team were absolutely great and would highly recommend. Pricing was fair/competitive and he even threw in some extras at no extra charge. I was really just expecting sod and quite happy with the additional mulching and planting to make everything come together nicely. The whole project completed in 2 days and the crew was very professional. Love the final product and great customer experience.",
  },
  {
    author: "Home Stars Customer",
    source: "Home Stars Reviews",
    text: "Kyle was super easy to work with from the word GO. The project was well priced and his team is very careful. I am very happy with my landscaping work. He keeps his word and delivers what he promised.",
  },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    Array.from(track.children).forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  }, []);

  return (
    <section className="relative bg-[#050505] overflow-hidden">
      <div className="border-t border-[0.5px] border-[#E6E6FA]/8" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 pt-28 md:pt-36 pb-12">
        {/* Header — Scale Shock, left-right split */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-5"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] mb-5 font-semibold">— Client Testimonials</p>
            <motion.h2 
              className="font-[family-name:var(--font-display)] font-bold text-[#F5F0E8] leading-none tracking-tighter"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 }
                }
              }}
            >
              {"Reviews".split("").map((char, i) => (
                <motion.span key={`r-${i}`} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>{char}</motion.span>
              ))}
            </motion.h2>
          </div>
          <p className="text-[#F5F0E8]/35 text-sm leading-relaxed max-w-[220px] md:text-right mb-2">
            Every project finished with 5-star reviews from our clients across Toronto.
          </p>
        </motion.div>
      </div>

      {/* ── Infinite carousel — full bleed ── */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36
                        bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36
                        bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="reviews-track pb-4 pt-2" style={{ paddingLeft: "2rem" }}>
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, boxShadow: "0 30px 80px rgba(0,0,0,0.7)" }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
              className="group flex-shrink-0 w-[min(88vw,500px)]
                         bg-[#050505]/85 backdrop-blur-xl
                         border border-[0.5px] border-[#E6E6FA]/10
                         p-7 md:p-9 relative overflow-hidden cursor-default
                         hover:border-[#C9A84C]/25 transition-colors duration-500"
            >
              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px
                              bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative quote glyph */}
              <span aria-hidden
                 className="absolute -top-3 left-5 font-[family-name:var(--font-display)] font-bold
                            text-[7rem] leading-none text-[#C9A84C] opacity-5 select-none pointer-events-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="13" height="13" viewBox="0 0 13 13" fill="#C9A84C">
                    <path d="M6.5 1l1.5 3 3.3.5-2.4 2.3.6 3.3-3-1.6-3 1.6.6-3.3L2.2 4.5l3.3-.5z"/>
                  </svg>
                ))}
              </div>

              <p className="font-[family-name:var(--font-display)] italic text-[#F5F0E8]/75
                            leading-relaxed mb-6 font-semibold relative z-10"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)" }}>
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-[#E6E6FA]/8 pt-5 flex-wrap gap-3">
                <div>
                  <p className="text-[#F5F0E8] font-semibold text-sm">{r.author}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold mt-0.5">{r.source}</p>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#F5F0E8]/25
                                 border border-[#E6E6FA]/10 px-3 py-1.5">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-12 mb-28 md:mb-36">
        {REVIEWS.map((_, i) => (
          <div key={i}
            className={`rounded-full transition-all duration-500 ${
              i === 0 ? "w-7 h-[3px] bg-[#C9A84C]" : "w-[3px] h-[3px] bg-[#F5F0E8]/20"
            }`} />
        ))}
      </div>

      <div className="border-t border-[0.5px] border-[#E6E6FA]/8" />
    </section>
  );
}
