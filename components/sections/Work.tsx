'use client'
import Image from 'next/image'
import ScrollReveal from '../ui/ScrollReveal'
import { motion, Variants, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Work() {
  const containerRef = useRef(null)
  
  const left1Ref = useRef(null)
  const right2Ref = useRef(null)
  const left3Ref = useRef(null)
  const right4Ref = useRef(null)

  const left1InView = useInView(left1Ref, { amount: 0.5, once: false })
  const right2InView = useInView(right2Ref, { amount: 0.5, once: false })
  const left3InView = useInView(left3Ref, { amount: 0.5, once: false })
  const right4InView = useInView(right4Ref, { amount: 0.5, once: false })

  const leftCardVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  }

  const rightCardVariants: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  }

  const textMaskVariant: Variants = {
    hidden: { y: "150%" },
    visible: { y: "0%", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  }

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 overflow-hidden" id="work">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase">Selected Work</span>
            <motion.h2
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED] mt-4"
            >
              {"Brands We've Helped Build".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.01 } }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
          </div>
          <p className="max-w-xs text-on-surface-variant dark:text-[#A0A0A0]">We don&apos;t do generic. Every brand is custom-tailored to tell a unique story.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-10">
        
        {/* Case Study 1 (Samosa King) */}
        <motion.a
          href="https://samosakingbelfast.com/samosa-king"
          target="_blank"
          rel="noopener noreferrer"
          variants={leftCardVariants}
          initial="hidden"
          animate={left1InView ? "visible" : "hidden"}
          ref={left1Ref}
          className="group block cursor-pointer w-full"
        >
          <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-[#0A0A0A] dark:bg-white/[0.08] dark:backdrop-blur-2xl mb-8 border border-transparent dark:border-white/10 group-hover:border-white/20 dark:group-hover:border-white/30 transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,rgba(0,0,0,0)_50%)] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_50%)] transition-all duration-700 blur-2xl"></div>
            
            <Image
              src="/worklogo/samosaking.jpeg"
              alt="Samosa King"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-12 md:p-16 transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl z-10 relative"
            />
          </div>
          <div className="flex justify-between items-end px-4">
            <div>
              <div className="overflow-hidden pb-1">
                <motion.h3 variants={textMaskVariant} className="text-3xl font-serif font-medium dark:text-white group-hover:text-blue-400 transition-colors duration-500">Samosa King</motion.h3>
              </div>
              <motion.p variants={fadeUpVariant} className="text-on-surface-variant dark:text-[#888888] mt-2 font-medium">Restaurant Branding & Web Experience</motion.p>
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 relative overflow-hidden backdrop-blur-md">
              <span className="material-symbols-outlined text-white absolute -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">arrow_forward</span>
              <span className="material-symbols-outlined text-white/50 absolute group-hover:translate-x-10 group-hover:opacity-0 transition-all duration-500 ease-in">north_east</span>
            </div>
          </div>
        </motion.a>

        {/* Case Study 2 (Mantraksha) - Staggered Down */}
        <motion.a
          href="https://mantraksha.com/"
          target="_blank"
          rel="noopener noreferrer"
          variants={rightCardVariants}
          initial="hidden"
          animate={right2InView ? "visible" : "hidden"}
          ref={right2Ref}
          className="group block cursor-pointer w-full md:mt-24"
        >
          <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-[#0A0A0A] dark:bg-white/[0.08] dark:backdrop-blur-2xl mb-8 border border-transparent dark:border-white/10 group-hover:border-white/20 dark:group-hover:border-white/30 transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,rgba(0,0,0,0)_50%)] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_50%)] transition-all duration-700 blur-2xl"></div>
            
            <Image
              src="/worklogo/Mantarakhsa.PNG"
              alt="Mantraksha"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-12 md:p-16 transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl z-10 relative"
            />
          </div>
          <div className="flex justify-between items-end px-4">
            <div>
              <div className="overflow-hidden pb-1">
                <motion.h3 variants={textMaskVariant} className="text-3xl font-serif font-medium dark:text-white group-hover:text-blue-400 transition-colors duration-500">Mantraksha</motion.h3>
              </div>
              <motion.p variants={fadeUpVariant} className="text-on-surface-variant dark:text-[#888888] mt-2 font-medium">Digital Platform & E-Commerce</motion.p>
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 relative overflow-hidden backdrop-blur-md">
              <span className="material-symbols-outlined text-white absolute -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">arrow_forward</span>
              <span className="material-symbols-outlined text-white/50 absolute group-hover:translate-x-10 group-hover:opacity-0 transition-all duration-500 ease-in">north_east</span>
            </div>
          </div>
        </motion.a>

        {/* Case Study 3 (Propvestors) */}
        <motion.a
          href="https://www.propvestors.in/"
          target="_blank"
          rel="noopener noreferrer"
          variants={leftCardVariants}
          initial="hidden"
          animate={left3InView ? "visible" : "hidden"}
          ref={left3Ref}
          className="group block cursor-pointer w-full"
        >
          <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-[#0A0A0A] dark:bg-white/[0.08] dark:backdrop-blur-2xl mb-8 border border-transparent dark:border-white/10 group-hover:border-white/20 dark:group-hover:border-white/30 transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,rgba(0,0,0,0)_50%)] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_50%)] transition-all duration-700 blur-2xl"></div>
            
            <Image
              src="/worklogo/PV Logo v2-05.png"
              alt="Propvestors"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-12 md:p-16 transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl z-10 relative"
            />
          </div>
          <div className="flex justify-between items-end px-4">
            <div>
              <div className="overflow-hidden pb-1">
                <motion.h3 variants={textMaskVariant} className="text-3xl font-serif font-medium dark:text-white group-hover:text-blue-400 transition-colors duration-500">Propvestors</motion.h3>
              </div>
              <motion.p variants={fadeUpVariant} className="text-on-surface-variant dark:text-[#888888] mt-2 font-medium">Real Estate Tech & SEO Strategy</motion.p>
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 relative overflow-hidden backdrop-blur-md">
              <span className="material-symbols-outlined text-white absolute -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">arrow_forward</span>
              <span className="material-symbols-outlined text-white/50 absolute group-hover:translate-x-10 group-hover:opacity-0 transition-all duration-500 ease-in">north_east</span>
            </div>
          </div>
        </motion.a>

        {/* Case Study 4 (Trustopay) - Staggered Down */}
        <motion.a
          href="https://trustopay.com/"
          target="_blank"
          rel="noopener noreferrer"
          variants={rightCardVariants}
          initial="hidden"
          animate={right4InView ? "visible" : "hidden"}
          ref={right4Ref}
          className="group block cursor-pointer w-full md:mt-24"
        >
          <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-[#0A0A0A] dark:bg-white/[0.08] dark:backdrop-blur-2xl mb-8 border border-transparent dark:border-white/10 group-hover:border-white/20 dark:group-hover:border-white/30 transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,rgba(0,0,0,0)_50%)] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_50%)] transition-all duration-700 blur-2xl"></div>
            
            <Image
              src="/worklogo/Trustopay.WEBP"
              alt="Trustopay"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-12 md:p-16 transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl z-10 relative"
            />
          </div>
          <div className="flex justify-between items-end px-4">
            <div>
              <div className="overflow-hidden pb-1">
                <motion.h3 variants={textMaskVariant} className="text-3xl font-serif font-medium dark:text-white group-hover:text-blue-400 transition-colors duration-500">Trustopay</motion.h3>
              </div>
              <motion.p variants={fadeUpVariant} className="text-on-surface-variant dark:text-[#888888] mt-2 font-medium">Fintech Platform & Trust Infrastructure</motion.p>
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 relative overflow-hidden backdrop-blur-md">
              <span className="material-symbols-outlined text-white absolute -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">arrow_forward</span>
              <span className="material-symbols-outlined text-white/50 absolute group-hover:translate-x-10 group-hover:opacity-0 transition-all duration-500 ease-in">north_east</span>
            </div>
          </div>
        </motion.a>

      </div>
    </section>
  )
}
