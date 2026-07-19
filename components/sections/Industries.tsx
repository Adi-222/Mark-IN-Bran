'use client'
import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

export default function Industries() {
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
        staggerChildren: 0.05
      }
    }
  }

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } }
  }

  return (
    <section className="bg-surface dark:bg-[#0F0F0F] py-24 md:py-32 overflow-hidden border-t border-outline-variant/10 dark:border-white/5" id="industries">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED]">We Build Brands Across</h2>
          </div>
        </ScrollReveal>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              variants={pillVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 rounded-full border border-outline-variant/30 dark:border-white/10 bg-white/50 dark:bg-[#1A1A1A]/50 backdrop-blur-md shadow-sm hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors cursor-default text-on-surface-variant dark:text-[#A0A0A0] font-medium"
            >
              {ind}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
