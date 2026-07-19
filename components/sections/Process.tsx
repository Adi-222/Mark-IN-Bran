'use client'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'

export default function Process() {
  const steps = [
    { num: '01', icon: 'explore', title: 'Discovery', desc: 'Understanding your vision, goals, and the legacy you want to build.' },
    { num: '02', icon: 'search', title: 'Research', desc: 'Deep dive into market dynamics, competitors, and consumer behavior.' },
    { num: '03', icon: 'lightbulb', title: 'Strategy', desc: 'Crafting the blueprint for your brand positioning and growth roadmap.' },
    { num: '04', icon: 'palette', title: 'Identity', desc: 'Designing a premium, memorable visual and verbal brand ecosystem.' },
    { num: '05', icon: 'video_camera_front', title: 'Content', desc: 'Producing high-impact assets that tell your story across all platforms.' },
    { num: '06', icon: 'rocket_launch', title: 'Launch', desc: 'Executing go-to-market campaigns that capture attention and drive action.' },
    { num: '07', icon: 'trending_up', title: 'Scale', desc: 'Optimizing performance, expanding reach, and building long-term loyalty.' },
  ]

  const typeLetterVariants = {
    hidden: { opacity: 0.25, filter: "blur(2px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } }
  }

  const getContainerVariants = (delay: number) => ({
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  })

  const renderText = (text: string, isItalic = false) => {
    return text.split(' ').map((word, wordIndex, array) => (
      <span key={wordIndex} className={`inline-block ${wordIndex !== array.length - 1 ? 'mr-3 md:mr-4' : ''}`}>
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={charIndex}
            variants={typeLetterVariants}
            className={`inline-block ${isItalic ? 'text-on-surface-variant dark:text-[#888888] italic' : ''}`}
          >
            {char}
          </motion.span>
        ))}
      </span>
    ))
  }

  return (
    <section className="bg-surface dark:bg-[#0F0F0F] py-16 md:py-32" id="process">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
          <div className="mb-20 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-outline-variant/20 dark:border-white/10 pb-16">
            <div className="space-y-6 max-w-2xl">
              <span className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase">Our Process</span>
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium text-on-surface dark:text-[#EDEDED] leading-[1.1]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div variants={getContainerVariants(0.1)}>{renderText("From Idea")}</motion.div>
                <motion.div variants={getContainerVariants(0.6)}>{renderText("To Legacy.", true)}</motion.div>
              </motion.h2>
            </div>
            <div className="max-w-md lg:pb-4">
              <p className="text-on-surface-variant dark:text-[#A0A0A0] text-lg md:text-xl font-light leading-relaxed">
                A meticulous, step-by-step methodology designed to craft brands that command attention and drive sustainable growth.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.1}>
              <motion.div 
                whileHover={{ x: 12 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group border-b border-outline-variant/20 dark:border-white/10 py-8 md:py-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 transition-colors duration-500 cursor-default hover:bg-blue-500/[0.02] dark:hover:bg-blue-500/[0.03] -mx-4 px-4 md:mx-0 md:px-4 rounded-xl md:rounded-none"
              >
                {/* Number */}
                <div className="w-16 md:w-24 shrink-0">
                  <span className="font-serif text-3xl md:text-5xl text-on-surface-variant/30 dark:text-[#555555] group-hover:text-blue-500 transition-colors duration-500 italic">
                    {step.num}
                  </span>
                </div>
                
                {/* Title */}
                <div className="w-full md:w-1/3 shrink-0">
                  <h3 className="text-3xl md:text-5xl font-serif text-on-surface dark:text-[#EDEDED] group-hover:text-blue-500 transition-colors duration-500">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-on-surface-variant dark:text-[#A0A0A0] font-light leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>

                {/* Icon */}
                <div className="shrink-0 hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-outline-variant/30 dark:border-white/10 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl text-on-surface-variant dark:text-[#A0A0A0] group-hover:text-blue-500 transition-colors duration-500">
                    {step.icon}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  )
}
