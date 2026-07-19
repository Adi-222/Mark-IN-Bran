'use client'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'

export default function WhyDifferent() {
  const differences = [
    {
      title: "AI First Thinking",
      desc: "Every strategy starts with AI-powered research, customer insights and market intelligence.",
      icon: "smart_toy"
    },
    {
      title: "Story Before Strategy",
      desc: "People don't buy products. They buy stories. We build stories that sell.",
      icon: "menu_book"
    },
    {
      title: "Content That Converts",
      desc: "Every reel, website and campaign has one purpose. Growth.",
      icon: "trending_up"
    },
    {
      title: "Technology + Creativity",
      desc: "Designers. Marketers. Developers. Creators. One team. One vision.",
      icon: "group_work"
    },
    {
      title: "Long-Term Partnership",
      desc: "We don't disappear after project delivery. We grow with your business.",
      icon: "handshake"
    }
  ]

  return (
    <section className="bg-surface dark:bg-[#0F0F0F] py-24 md:py-32" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase">What Makes Us Different</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED]">Why Brands Choose Mark In Bran</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differences.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/40 dark:bg-[#1A1A1A]/40 backdrop-blur-2xl p-8 rounded-3xl border border-white/60 dark:border-white/10 shadow-[8px_8px_24px_rgba(0,0,0,0.04),-8px_-8px_24px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_24px_rgba(0,0,0,0.5),-8px_-8px_24px_rgba(255,255,255,0.02)] hover:shadow-[12px_12px_32px_rgba(0,0,0,0.08),-12px_-12px_32px_rgba(255,255,255,1)] dark:hover:shadow-[12px_12px_32px_rgba(0,0,0,0.7),-12px_-12px_32px_rgba(255,255,255,0.03)] h-full group cursor-pointer flex flex-col transition-all duration-500 relative"
              >
                {/* Neumorphic Inner Glow Layer */}
                <div className="absolute inset-0 rounded-3xl shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] dark:shadow-[inset_2px_2px_4px_rgba(255,255,255,0.05),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] pointer-events-none z-10"></div>
                
                <div className="relative z-20 flex flex-col h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-4 dark:text-[#EDEDED] font-serif leading-tight">{item.title}</h3>
                  <p className="text-on-surface-variant dark:text-[#A0A0A0] text-sm md:text-base leading-relaxed mt-auto">{item.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
