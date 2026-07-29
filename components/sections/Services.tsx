'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeSubTab, setActiveSubTab] = useState(0)
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(0)

  const services = [
    {
      title: "Social Media",
      isDropdownMenu: true,
      subItems: [
        {
          name: "Social Media Management",
          description: "End-to-end management of your social profiles, maintaining consistent brand voice and daily engagement.",
          icon: "manage_accounts"
        },
        {
          name: "Social Media Marketing",
          description: "Data-driven campaigns across platforms designed to maximize reach, engagement, and conversion.",
          icon: "campaign"
        },
        {
          name: "Content Strategy & Planning",
          description: "Comprehensive content calendars and strategic planning aligned with your long-term brand objectives.",
          icon: "calendar_month"
        },
        {
          name: "Content Creation",
          description: "High-quality production of reels, posts, and carousels that capture attention and stop the scroll.",
          icon: "video_camera_front"
        },
        {
          name: "UGC Content Production",
          description: "Authentic user-generated content strategies that build trust and social proof with your audience.",
          icon: "group"
        },
        {
          name: "Instagram Management",
          description: "Specialized growth, aesthetic curation, and community building specifically tailored for Instagram.",
          icon: "photo_camera"
        },
        {
          name: "LinkedIn Management",
          description: "Professional network optimization, B2B lead generation, and executive thought leadership on LinkedIn.",
          icon: "work"
        },
        {
          name: "Personal Branding",
          description: "Elevating founders and executives into industry authorities through strategic online positioning.",
          icon: "person_star"
        },
        {
          name: "Community Management",
          description: "Active monitoring, responding, and nurturing of your online community to foster deep brand loyalty.",
          icon: "forum"
        },
        {
          name: "Influencer Marketing",
          description: "Strategic partnerships with creators and influencers to amplify your brand message to targeted audiences.",
          icon: "handshake"
        },
        {
          name: "Account Growth",
          description: "Organic and algorithmic strategies designed to rapidly scale your followers and account visibility.",
          icon: "trending_up"
        },
        {
          name: "Analytics & Reporting",
          description: "In-depth performance tracking, ROI analysis, and actionable insights to continuously optimize strategy.",
          icon: "analytics"
        }
      ]
    },
    {
      title: "Content Media Production",
      isDropdownMenu: false,
      items: ["High-End Video Production", "Commercial Photography", "Podcast Production", "Short-Form Reels & TikToks", "Creative Copywriting"]
    },
    {
      title: "Personal Branding",
      isDropdownMenu: false,
      items: ["Founder Profiling", "Thought Leadership", "PR Strategy", "Speaking Engagements", "LinkedIn Executive Growth"]
    },
    {
      title: "Performance Marketing",
      isDropdownMenu: false,
      items: ["Meta & Google Ads", "Conversion Rate Optimization", "Lead Generation", "Retargeting Campaigns", "A/B Testing & Scaling"]
    },
    {
      title: "Brand Identity",
      isDropdownMenu: false,
      items: ["Logo & Visual Systems", "Brand Guidelines", "Naming & Taglines", "Brand Voice & Tone", "Packaging Design"]
    },
    {
      title: "Marketing, Branding & R&D",
      isDropdownMenu: false,
      items: ["Market Research", "Consumer Psychology", "Trend Forecasting", "Competitor Analysis", "Go-To-Market Strategy"]
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
                  onClick={() => {
                    if (service.isDropdownMenu) {
                      setOpenMenuIndex(openMenuIndex === index ? null : index)
                      setActiveTab(index)
                      if (activeTab !== index) setActiveSubTab(0)
                    } else {
                      setActiveTab(index)
                      setOpenMenuIndex(null)
                    }
                  }}
                  className={`w-full text-left py-4 px-6 rounded-xl transition-all duration-300 flex justify-between items-center ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border-0 shadow-lg shadow-primary/20 scale-[1.02]' 
                      : 'hover:bg-surface-container hover:dark:bg-[#1A1A1A] text-on-surface-variant dark:text-[#A0A0A0]'
                  }`}
                >
                  <span className={`text-lg font-serif font-medium ${activeTab === index ? 'text-white' : 'dark:text-[#EDEDED]'}`}>
                    {service.title}
                  </span>
                  {service.isDropdownMenu && (
                    <span className={`material-symbols-outlined transition-transform duration-300 ${openMenuIndex === index ? 'rotate-0 text-white/90' : '-rotate-90 text-on-surface-variant/50'}`}>
                      expand_more
                    </span>
                  )}
                </button>
                
                {/* Left Side Nested Dropdown Content */}
                <AnimatePresence>
                  {service.isDropdownMenu && openMenuIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="py-4 px-4 flex flex-col gap-1 ml-4 border-l border-outline-variant/20 dark:border-white/10">
                        {service.subItems?.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setActiveSubTab(idx)
                              setActiveTab(index)
                            }}
                            className={`text-left py-2 px-4 rounded-lg text-sm md:text-base transition-colors ${
                              activeSubTab === idx && activeTab === index
                                ? 'bg-primary/10 text-primary dark:text-blue-400 font-medium'
                                : 'text-on-surface-variant dark:text-[#A0A0A0] hover:bg-surface-container hover:dark:bg-[#1A1A1A] hover:text-on-surface dark:hover:text-[#EDEDED]'
                            }`}
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Legacy Mobile Accordion (for non-dropdown items) */}
                <AnimatePresence>
                  {!service.isDropdownMenu && activeTab === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden lg:hidden"
                    >
                      <div className="py-6 px-6 space-y-4">
                        {service.items?.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-on-surface-variant dark:text-[#A0A0A0]">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Content Area */}
          <div className="hidden lg:block w-full lg:w-2/3 bg-surface dark:bg-[#0F0F0F] rounded-[2rem] p-12 border border-outline-variant/10 dark:border-white/5 relative overflow-hidden h-fit shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={services[activeTab].isDropdownMenu ? `${activeTab}-${activeSubTab}` : activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {services[activeTab].isDropdownMenu ? (
                  <div className="flex flex-col h-full min-h-[300px] justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 dark:from-blue-500/20 dark:to-blue-900/40 flex items-center justify-center mb-8 border border-blue-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                      <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400">
                        {services[activeTab].subItems?.[activeSubTab].icon}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-on-surface dark:text-[#EDEDED] mb-6 leading-tight">
                      {services[activeTab].subItems?.[activeSubTab].name}
                    </h3>
                    <p className="text-lg text-on-surface-variant dark:text-[#A0A0A0] leading-relaxed max-w-xl">
                      {services[activeTab].subItems?.[activeSubTab].description}
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-serif text-on-surface dark:text-[#EDEDED] mb-8">{services[activeTab].title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                      {services[activeTab].items?.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-default">
                          <div className="w-10 h-10 shrink-0 rounded-full bg-surface-container dark:bg-[#1A1A1A] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-sm">done</span>
                          </div>
                          <span className="text-lg text-on-surface-variant dark:text-[#A0A0A0] group-hover:text-on-surface dark:group-hover:text-[#EDEDED] transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
