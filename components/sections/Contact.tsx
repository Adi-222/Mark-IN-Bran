'use client'
import { motion } from 'framer-motion'
import { openContactModal } from '../ui/ContactModal'

export default function Contact() {
  return (
    <section className="py-16 md:py-32 bg-surface dark:bg-[#0A0A0A]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-surface-container-lowest dark:bg-[#111111] rounded-[2rem] md:rounded-[4rem] border border-outline-variant/10 dark:border-white/5 overflow-hidden shadow-2xl py-16 md:py-32 px-4 md:px-6 flex flex-col items-center justify-center text-center"
        >
          {/* Immersive Background Ambient Glow Inside the Box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-2xl md:blur-[140px] pointer-events-none"></div>
          
          {/* Subtle grid pattern overlay for texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyNHYyNEgwem0xIDF2MjJoMjJWMXptMCAwaDIydjIySDF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-30 dark:opacity-20 mix-blend-overlay pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10 space-y-8 md:space-y-12">
            <div className="overflow-hidden pb-2">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block text-sm font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase bg-surface-container dark:bg-[#1A1A1A] px-6 py-2 rounded-full border border-blue-500/20 shadow-sm"
              >
                Start Your Journey
              </motion.span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] font-serif font-medium leading-[1.05] tracking-tight text-on-surface dark:text-[#EDEDED]">
              Let&apos;s build a brand<br/>
              <span className="italic font-light opacity-80 text-on-surface-variant dark:text-[#A0A0A0]">worth remembering.</span>
            </h2>
            
            <div className="pt-8 md:pt-12">
              <motion.button 
                onClick={openContactModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-6 py-4 md:px-12 md:py-6 rounded-full bg-on-surface text-surface dark:bg-[#EDEDED] dark:text-[#0A0A0A] font-medium text-lg md:text-xl overflow-hidden transition-all shadow-xl hover:shadow-blue-500/25 border border-transparent dark:hover:border-blue-500/30 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                  Book A Free Strategy Call
                  <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform duration-500">arrow_forward</span>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
