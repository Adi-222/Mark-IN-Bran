'use client'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { openContactModal } from '../ui/ContactModal'

export default function Hero() {
  const [playCount, setPlayCount] = useState(0)

  const getContainerVariants = (delay: number): Variants => ({
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay }
    }
  })

  const typeLetterVariants: Variants = {
    hidden: { opacity: 0.25, filter: "blur(2px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } }
  }

  const renderText = (text: string, isPrimary: boolean = false) => {
    return text.split(' ').map((word, wordIndex, array) => (
      <span key={wordIndex} className={`inline-block ${wordIndex !== array.length - 1 ? 'mr-3 md:mr-4 lg:mr-5' : ''}`}>
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={charIndex}
            variants={typeLetterVariants}
            className={`inline-block ${isPrimary ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent italic p-[0.2em] -m-[0.2em]' : ''}`}
          >
            {char}
          </motion.span>
        ))}
      </span>
    ))
  }

  return (
    <section className="relative min-h-[819px] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 z-10 pt-20">
        <motion.h1
          key={playCount}
          onMouseLeave={() => setPlayCount(c => c + 1)}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-on-background dark:text-[#EDEDED] leading-[1.1] tracking-tight flex flex-col items-center gap-y-2 md:gap-y-4 cursor-default"
        >
          <motion.div variants={getContainerVariants(0.1)} initial="hidden" animate="visible">
            {renderText("We Don't Market Brands.")}
          </motion.div>
          <motion.div variants={getContainerVariants(0.9)} initial="hidden" animate="visible">
            {renderText("We Build Brands", true)}
          </motion.div>
          <motion.div variants={getContainerVariants(1.7)} initial="hidden" animate="visible" className="flex items-center justify-center">
            {renderText("People Remember.")}
          </motion.div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="text-lg md:text-xl text-on-surface-variant dark:text-[#A0A0A0] max-w-3xl mx-auto font-body"
        >
          From startups to established companies, Mark In Bran combines AI, storytelling, branding, technology and content to turn businesses into brands people trust.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <motion.button
            onClick={openContactModal}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            Start Your Brand Journey
          </motion.button>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="#work" className="inline-block w-full sm:w-auto text-on-surface dark:text-[#EDEDED] hover:underline decoration-blue-500 underline-offset-8 px-8 py-4 text-lg font-medium transition-all">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-80 h-80 bg-tertiary-fixed/10 dark:bg-tertiary/20 rounded-full blur-[80px]"></div>

      {/* Infinite Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="w-full mt-24 py-10 bg-on-surface/5 dark:bg-[#EDEDED]/5 overflow-hidden flex"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex w-full group">
          <div className="flex shrink-0 animate-scroll items-center justify-around gap-16 md:gap-24 min-w-full px-6">
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">domain</span> Shapoorji Pallonji</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">local_cafe</span> Chumuk Tea &amp; More</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">trending_up</span> Provestor</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">maps_home_work</span> Joyville</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">sports_soccer</span> KHL</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">restaurant</span> DOT</div>
          </div>
          {/* Duplicate for infinite loop */}
          <div className="flex shrink-0 animate-scroll items-center justify-around gap-16 md:gap-24 min-w-full px-6" aria-hidden="true">
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">domain</span> Shapoorji Pallonji</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">local_cafe</span> Chumuk Tea &amp; More</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">trending_up</span> Provestor</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">maps_home_work</span> Joyville</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">sports_soccer</span> KHL</div>
            <div className="flex items-center gap-3 text-on-surface/40 dark:text-[#EDEDED]/30 font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary cursor-default"><span className="material-symbols-outlined text-[18px]">restaurant</span> DOT</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
