"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Creators() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto overflow-hidden" id="creators">
      {/* Ghost Watermark */}
      <motion.div 
        style={{ y: watermarkY, x: "-50%" }}
        className="absolute top-40 left-1/2 select-none z-0 font-serif text-[180px] md:text-[240px] font-bold tracking-tighter whitespace-nowrap pointer-events-none opacity-[0.03] dark:opacity-10 text-on-surface dark:text-[#EDEDED]"
      >
        MARK IN BRAN
      </motion.div>

      {/* Title Section */}
      <div className="text-center mb-24 md:mb-32 relative z-10">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={variants}
          className="font-serif text-5xl md:text-[80px] leading-tight tracking-[0.2em] mb-6 uppercase text-on-surface dark:text-[#EDEDED]"
        >
          Creators
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={variants}
          className="font-serif text-xl md:text-2xl text-on-surface-variant dark:text-[#A0A0A0] max-w-2xl mx-auto italic"
        >
          A curated collective of visionaries shaping the modern aesthetic.
        </motion.p>
      </div>

      {/* Desktop Flex Grid */}
      <div className="relative z-10 hidden md:flex gap-4 lg:gap-8 mx-auto w-full items-start justify-center">
        
        {/* Col 1 */}
        <div className="w-[18%] flex flex-col gap-32 pt-56">
          <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border border-outline-variant rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden mb-3 shadow-md bg-surface-container dark:bg-[#1E1E1E]">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" alt="Sarah L." />
            </div>
            <p className="text-[10px] lg:text-xs font-semibold tracking-widest text-on-surface dark:text-[#EDEDED]">Sarah L.</p>
          </motion.div>
          
          <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
            <div className="aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Studio NORD" />
            </div>
            <div className="text-center">
              <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Studio NORD</p>
              <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Collective</p>
            </div>
          </motion.div>
        </div>

        {/* Col 2 & 3 Wrapper */}
        <div className="w-[42%] flex flex-col gap-12 pt-8">
          <div className="flex gap-4 lg:gap-8">
            {/* Col 2 */}
            <div className="w-1/2 flex flex-col gap-16">
              <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
                <div className="aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" alt="Julian Moss" />
                </div>
                <div className="text-center">
                  <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Julian Moss</p>
                  <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Space</p>
                </div>
              </motion.div>
              
              <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
                <div className="aspect-[3/5] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Anya Volkov" />
                </div>
                <div className="text-center">
                  <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Anya Volkov</p>
                  <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Identity</p>
                </div>
              </motion.div>
            </div>
            
            {/* Col 3 */}
            <div className="w-1/2 flex flex-col gap-16 pt-12">
              <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
                <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" alt="Sophia Chen" />
                </div>
                <div className="text-center">
                  <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Sophia Chen</p>
                  <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Direction</p>
                </div>
              </motion.div>
              
              <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
                <div className="aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="David K." />
                </div>
                <div className="text-center">
                  <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">David K.</p>
                  <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Textile</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Isabella Frost */}
          <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex flex-col mt-4">
            <div className="absolute -bottom-8 -left-8 w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-surface dark:border-[#1A1A1A] shadow-xl overflow-hidden z-20 bg-surface-container dark:bg-[#1E1E1E]">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1bf329?auto=format&fit=crop&w=200&q=80" alt="Isabella Avatar" />
            </div>
            <div className="aspect-[16/9] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-5">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Isabella Frost" />
            </div>
            <div className="text-center">
              <p className="font-serif text-xl lg:text-2xl text-on-surface dark:text-[#EDEDED]">Isabella Frost</p>
              <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Experience</p>
            </div>
          </motion.div>
        </div>

        {/* Col 4 */}
        <div className="w-[32%] flex flex-col gap-12 relative">
          <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
            <div className="aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Marcus Thorne" />
            </div>
            <div className="text-center">
              <p className="font-serif text-lg lg:text-xl text-on-surface dark:text-[#EDEDED]">Marcus Thorne</p>
              <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Curation</p>
            </div>
          </motion.div>
          
          <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
            <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4 relative z-10">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80" alt="Clara Mendes" />
            </div>
            <div className="text-center">
              <p className="font-serif text-xl lg:text-2xl text-on-surface dark:text-[#EDEDED]">Clara Mendes</p>
              <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Photography</p>
            </div>
          </motion.div>

          <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col w-2/3 mx-auto">
            <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" alt="Erik S." />
            </div>
            <div className="text-center">
              <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Erik S.</p>
              <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Sonic</p>
            </div>
          </motion.div>

          {/* Leo H (Avatar) positioned absolute relative to Col 4 to pop out on right */}
          <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute -right-12 lg:-right-16 top-[60%] flex flex-col items-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-primary dark:border-[#1E1E1E] overflow-hidden mb-2 shadow-sm bg-surface-container dark:bg-[#1E1E1E]">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80" alt="Leo H." />
            </div>
            <p className="text-[10px] font-semibold tracking-widest text-on-surface dark:text-[#EDEDED]">Leo H.</p>
          </motion.div>
        </div>
      </div>

      {/* Mobile Stack (Visible only on small screens) */}
      <div className="md:hidden flex flex-col gap-16 relative z-10">
        {/* Same content wrapped in simple flex column for mobile */}
        {/* Julian Moss */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
          <div className="aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4 relative">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" alt="Julian Moss" />
          </div>
          <div className="text-center">
            <p className="font-serif text-xl text-on-surface dark:text-[#EDEDED]">Julian Moss</p>
            <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Space</p>
          </div>
        </motion.div>
        
        {/* Sophia Chen */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex flex-col">
          <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" alt="Sophia Chen" />
          </div>
          <div className="text-center">
            <p className="font-serif text-xl text-on-surface dark:text-[#EDEDED]">Sophia Chen</p>
            <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Direction</p>
          </div>
        </motion.div>
        
        {/* Marcus Thorne */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
          <div className="aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Marcus Thorne" />
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl text-on-surface dark:text-[#EDEDED]">Marcus Thorne</p>
            <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Curation</p>
          </div>
        </motion.div>
        
        {/* Clara Mendes */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col">
          <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80" alt="Clara Mendes" />
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl text-on-surface dark:text-[#EDEDED]">Clara Mendes</p>
            <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Photography</p>
          </div>
        </motion.div>
        
        {/* Isabella Frost */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex flex-col">
          <div className="aspect-[16/9] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Isabella Frost" />
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl text-on-surface dark:text-[#EDEDED]">Isabella Frost</p>
            <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Experience</p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
