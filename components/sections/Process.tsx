'use client'
import ScrollReveal from '../ui/ScrollReveal'
import { motion, Variants, useInView } from 'framer-motion'
import { useRef } from 'react'

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

type ProcessStepType = {
  num: string;
  title: string;
  desc: string;
  icon: string;
}

function ProcessStep({ step }: { step: ProcessStepType }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.5, once: false })
  
  return (
    <motion.div
      ref={ref}
      variants={stepVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative bg-surface dark:bg-[#0F0F0F] pt-8 min-w-[280px] shrink-0 md:min-w-0 md:shrink"
    >
      <span className="text-8xl font-serif font-bold text-outline-variant/10 dark:text-white/5 absolute -top-8 -left-4 pointer-events-none">{step.num}</span>
      <div className="relative z-10 space-y-4">
        <div className="w-16 h-16 bg-surface-container dark:bg-[#1A1A1A] rounded-full flex items-center justify-center border-4 border-surface dark:border-[#0F0F0F]">
          <span className="material-symbols-outlined bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{step.icon}</span>
        </div>
        <h3 className="text-xl font-semibold dark:text-[#EDEDED]">{step.title}</h3>
        <p className="text-on-surface-variant dark:text-[#A0A0A0]">{step.desc}</p>
      </div>
    </motion.div>
  )
}

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

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden" id="process">
      <ScrollReveal>
        <div className="mb-20">
          <span className="text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase">How it works</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED] mt-4">From Idea To Brand.</h2>
        </div>
      </ScrollReveal>

      {/* Mobile Horizontal Scroll / Desktop Grid */}
      <div className="relative">
        {/* Decorative Connector (Desktop) */}
        <motion.div
          className="hidden md:block absolute top-10 left-0 h-px bg-outline-variant/20 dark:bg-white/10 -z-10"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: false, amount: 0.1, margin: "-100px 0px -100px 0px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="flex md:grid md:grid-cols-4 gap-8 md:gap-y-16 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {steps.map((step, index) => (
            <div key={index} className="snap-start">
              <ProcessStep step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
