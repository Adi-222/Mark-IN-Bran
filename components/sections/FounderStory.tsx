'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function FounderStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.2, once: false })

  const timeline = [
    { year: "", role: "Engineering" },
    { year: "", role: "Creator Economy" },
    { year: "", role: "Marketing" },
    { year: "", role: "Building Brands" },
    { year: "Now", role: "Mark In Bran", highlight: true }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  }

  return (
    <section className="bg-surface dark:bg-[#0F0F0F] py-16 md:py-32" id="founder">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl bg-surface-dim dark:bg-[#1E1E1E]">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Founder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">Founder & CEO</p>
                <p className="text-white/80 text-sm">Mark In Bran</p>
              </div>
            </div>
            {/* Timeline Overlay */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1A1A1A] p-6 rounded-2xl shadow-xl border border-outline-variant/10 dark:border-white/5 hidden md:block">
              <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-[7px] before:w-0.5 before:bg-outline-variant/20 dark:before:bg-white/10">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full border-4 border-white dark:border-[#1A1A1A] z-10 ${item.highlight ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border-0' : 'bg-outline-variant dark:bg-white/30'}`}></div>
                    <div>
                      {item.year && <p className="text-[10px] uppercase font-bold tracking-widest bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-0.5">{item.year}</p>}
                      <p className={`text-sm ${item.highlight ? 'font-bold text-on-surface dark:text-[#EDEDED]' : 'text-on-surface-variant dark:text-[#A0A0A0]'}`}>{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:col-span-7 lg:pl-12">
            <span className="text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase block mb-6">Meet The Founder</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED] mb-8 leading-tight">
              Learning Branding Beyond Boardrooms.
            </h2>
            
            <motion.div 
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6 text-lg text-on-surface-variant dark:text-[#A0A0A0]"
            >
              <motion.p variants={itemVariants}>
                I didn&apos;t want to learn marketing only from books. I wanted to learn it from markets.
              </motion.p>
              <motion.p variants={itemVariants}>
                By meeting founders, creators, local businesses, entrepreneurs and consumers across India, I realized something powerful:
              </motion.p>
              <motion.p variants={itemVariants} className="font-serif italic text-2xl text-on-surface dark:text-[#EDEDED] border-l-2 border-primary pl-6 py-2 my-8">
                The best brands aren&apos;t built by the biggest budgets. They&apos;re built by understanding people.
              </motion.p>
              <motion.p variants={itemVariants}>
                Every city teaches a different lesson. Every entrepreneur tells a different story. Those experiences now shape every strategy we build at Mark In Bran.
              </motion.p>
            </motion.div>
            
            {/* Mobile Timeline */}
            <div className="md:hidden mt-12 bg-surface-container-low dark:bg-[#1A1A1A]/50 p-6 rounded-2xl border border-outline-variant/10 dark:border-white/5">
              <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-[7px] before:w-0.5 before:bg-outline-variant/20 dark:before:bg-white/10">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full border-4 border-surface-container-low dark:border-[#1A1A1A] z-10 ${item.highlight ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border-0' : 'bg-outline-variant dark:bg-white/30'}`}></div>
                    <div>
                      {item.year && <p className="text-[10px] uppercase font-bold tracking-widest bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-0.5">{item.year}</p>}
                      <p className={`text-sm ${item.highlight ? 'font-bold text-on-surface dark:text-[#EDEDED]' : 'text-on-surface-variant dark:text-[#A0A0A0]'}`}>{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
