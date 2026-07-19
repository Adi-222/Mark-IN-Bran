'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      title: "Brand Identity",
      items: ["Logo Design", "Visual Identity", "Brand Guidelines", "Naming & Taglines", "Brand Voice"]
    },
    {
      title: "AI Marketing",
      items: ["AI Strategy", "Predictive Analytics", "Automated Workflows", "Chatbot Integration", "Personalization Systems"]
    },
    {
      title: "Personal Branding",
      items: ["Founder Profiling", "Thought Leadership", "PR Strategy", "Speaking Engagements", "LinkedIn Growth"]
    },
    {
      title: "Content Production",
      items: ["Video Production", "Commercials", "Photography", "Copywriting", "Podcasts"]
    },
    {
      title: "Performance Marketing",
      items: ["Meta Ads", "Google Ads", "Conversion Rate Optimization", "Lead Generation", "Retargeting"]
    },
    {
      title: "Influencer Marketing",
      items: ["Creator Strategy", "Campaign Management", "Talent Sourcing", "UGC Production", "Ambassador Programs"]
    },
    {
      title: "Social Media",
      items: ["Platform Strategy", "Community Management", "Grid Aesthetics", "Viral Content", "Social Commerce"]
    },
    {
      title: "Website Development",
      items: ["UI/UX Design", "E-Commerce", "Web Applications", "Landing Pages", "SEO Architecture"]
    },
    {
      title: "Mobile Apps",
      items: ["iOS & Android", "App Design", "User Testing", "App Store Optimization", "Maintenance"]
    },
    {
      title: "Creative Design",
      items: ["Packaging", "OOH Advertising", "Print Media", "Merchandise", "Event Collateral"]
    }
  ]

  return (
    <section className="bg-surface-container-low dark:bg-[#141414] py-16 md:py-32" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED] leading-tight">
              Everything Your Brand Needs.<br/>
              One Growth Partner.
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Mobile Accordion / Desktop Tabs List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {services.map((service, index) => (
              <div key={index}>
                {/* Mobile/Desktop Trigger */}
                <button
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left py-4 px-6 rounded-xl transition-all duration-300 flex justify-between items-center ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border-0 text-white shadow-lg shadow-primary/20 scale-[1.02]' 
                      : 'hover:bg-surface-container hover:dark:bg-[#1A1A1A] text-on-surface-variant dark:text-[#A0A0A0]'
                  }`}
                >
                  <span className={`text-lg font-serif font-medium ${activeTab === index ? 'text-white' : 'dark:text-[#EDEDED]'}`}>
                    {service.title}
                  </span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeTab === index ? 'rotate-180 text-white/70' : 'text-on-surface-variant/50 lg:hidden'}`}>
                    expand_more
                  </span>
                </button>
                
                {/* Mobile Content Accordion */}
                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden lg:hidden"
                    >
                      <ul className="py-6 px-6 space-y-4">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-on-surface-variant dark:text-[#A0A0A0]">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Content Area */}
          <div className="hidden lg:block w-full lg:w-2/3 bg-surface dark:bg-[#0F0F0F] rounded-[2rem] p-12 border border-outline-variant/10 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <h3 className="text-3xl font-serif text-on-surface dark:text-[#EDEDED] mb-8">{services[activeTab].title}</h3>
                <ul className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {services[activeTab].items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-[#1A1A1A] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-sm">done</span>
                      </div>
                      <span className="text-lg text-on-surface-variant dark:text-[#A0A0A0] group-hover:text-on-surface dark:group-hover:text-[#EDEDED] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
