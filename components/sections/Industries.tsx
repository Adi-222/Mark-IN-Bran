'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Industries() {
  const containerRef = useRef<HTMLElement>(null)
  
  useGSAP(() => {
    // Watermark Parallax
    gsap.to(".watermark-industries", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Elegant Typewriter Reveal for Title
    const typeWriterTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      scrollTrigger: {
        trigger: ".industry-title",
        start: "top 85%",
      }
    });

    typeWriterTl.from(".industry-char", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
    
  }, { scope: containerRef });

  const industries = [
    "Healthcare", "Real Estate", "Restaurants", "Fashion",
    "Creators", "Education", "Sports", "Technology",
    "Beauty", "Hospitality", "Startups", "Personal Brands"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const pillVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 12 } }
  }

  const renderText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="industry-char inline-block" style={{ willChange: "filter, opacity, transform" }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative bg-surface dark:bg-[#0F0F0F] pt-32 pb-40 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto overflow-hidden border-t border-outline-variant/10 dark:border-white/5" id="industries">
      
      {/* Ghost Watermark */}
      <div 
        className="watermark-industries absolute top-40 left-1/2 select-none z-0 font-serif text-[180px] md:text-[240px] font-bold tracking-tighter whitespace-nowrap pointer-events-none opacity-[0.03] dark:opacity-10 text-on-surface dark:text-[#EDEDED]"
        style={{ transform: "translateX(-50%)" }}
      >
        MARK <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">IN</span> BRAN
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-24 md:mb-32">
          <h2 className="industry-title font-serif text-5xl sm:text-6xl md:text-[120px] lg:text-[140px] leading-none tracking-[0.1em] mb-6 uppercase text-on-surface dark:text-[#EDEDED] flex justify-center flex-wrap">
            {renderText("INDUSTRIES")}
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-xl md:text-3xl text-on-surface-variant dark:text-[#A0A0A0] max-w-3xl mx-auto italic"
          >
            We build legacy brands across every major sector.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              variants={pillVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="px-6 py-4 md:px-10 md:py-5 rounded-full border border-outline-variant/30 dark:border-white/10 bg-white/50 dark:bg-[#1A1A1A]/80 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all cursor-default text-on-surface-variant dark:text-[#A0A0A0] font-medium text-lg md:text-2xl tracking-wide"
            >
              {ind}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
