'use client'
import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null)
  
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

  const renderText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="industry-char inline-block" style={{ willChange: "filter, opacity, transform" }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="py-16 md:py-32 bg-surface dark:bg-[#0A0A0A] overflow-hidden" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={containerRef}>
        
        {/* Glowing back blue gradient shadow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[80%] bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-surface-container-lowest dark:bg-[#111111] rounded-[2rem] md:rounded-[4rem] border border-outline-variant/10 dark:border-white/5 overflow-hidden shadow-2xl py-16 md:py-32 px-4 md:px-6 flex flex-col items-center justify-center text-center"
        >
          {/* Subtle grid pattern overlay for texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyNHYyNEgwem0xIDF2MjJoMjJWMXptMCAwaDIydjIySDF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-30 dark:opacity-20 mix-blend-overlay pointer-events-none"></div>

          {/* Ghost Watermark */}
          <div 
            className="watermark-industries absolute top-10 md:top-20 left-1/2 select-none z-0 font-serif text-[70px] sm:text-[120px] md:text-[200px] font-bold tracking-tighter whitespace-nowrap pointer-events-none opacity-[0.03] dark:opacity-10 text-on-surface dark:text-[#EDEDED]"
            style={{ transform: "translateX(-50%)" }}
          >
            MARK <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">IN</span> BRAN
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-16 md:mb-24">
              <h2 className="industry-title font-serif text-4xl sm:text-5xl md:text-[80px] lg:text-[100px] leading-none tracking-[0.1em] mb-6 uppercase text-on-surface dark:text-[#EDEDED] flex justify-center flex-wrap">
                {renderText("INDUSTRIES")}
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-lg md:text-2xl text-on-surface-variant dark:text-[#A0A0A0] max-w-2xl mx-auto italic px-2"
              >
                We build legacy brands across every major sector.
              </motion.p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              {industries.map((ind, index) => (
                <IndustryPill key={index} text={ind} index={index} />
              ))}
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

function IndustryPill({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Mouse tracking logic for Scatter Effect
  const dodgeX = useMotionValue(0)
  const dodgeY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 }
  const smoothX = useSpring(dodgeX, springConfig)
  const smoothY = useSpring(dodgeY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distX = centerX - e.clientX
      const distY = centerY - e.clientY
      const distance = Math.sqrt(distX * distX + distY * distY)
      
      const interactionRadius = window.innerWidth < 768 ? 100 : 250 // Smaller scatter radius on mobile
      
      if (distance < interactionRadius && distance > 0) {
        // Calculate repulsion strength (closer = stronger push)
        const strength = Math.pow((interactionRadius - distance) / interactionRadius, 1.5)
        // Push outwards
        dodgeX.set((distX / distance) * strength * 100)
        dodgeY.set((distY / distance) * strength * 100)
      } else {
        // Return to center
        dodgeX.set(0)
        dodgeY.set(0)
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [dodgeX, dodgeY])

  // Continuous 360 Float Animation Values
  const floatX = (index % 2 === 0 ? 1 : -1) * (15 + (index % 3) * 5)
  const floatY = (index % 3 === 0 ? 1 : -1) * (15 + (index % 4) * 5)
  const duration = 5 + (index % 4)
  
  const entranceVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 12, delay: index * 0.05 } }
  }

  return (
    <motion.div 
      variants={entranceVariants} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative z-10 p-2"
    >
      {/* Mouse Scatter Layer */}
      <motion.div style={{ x: smoothX, y: smoothY }}>
        {/* Continuous 360 Float Layer */}
        <motion.div
          animate={{
            x: [0, floatX, -floatX * 0.5, floatX * 0.5, 0],
            y: [0, floatY, floatY * 0.5, -floatY * 0.5, 0],
            rotate: [0, floatX * 0.3, -floatX * 0.3, 0]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        >
          {/* Hover Interaction Layer */}
            <motion.div
              ref={ref}
              whileHover={{ scale: 1.15 }}
              className="px-4 py-2 md:px-8 md:py-4 rounded-full border border-outline-variant/30 dark:border-white/10 bg-white/50 dark:bg-[#1A1A1A]/80 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer text-on-surface-variant dark:text-[#A0A0A0] font-medium text-sm md:text-xl tracking-wide select-none whitespace-nowrap"
            >
            {text}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
