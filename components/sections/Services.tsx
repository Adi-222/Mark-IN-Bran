'use client'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  const services = [
    { 
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      title: 'Web & Digital Presence', 
      tags: 'Design • Development • SEO',
      desc: 'We build high-converting, lightning-fast websites that turn your casual visitors into loyal customers.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      title: 'Brand Growth Planning', 
      tags: 'Strategy • Positioning • Roadmaps',
      desc: 'Strategic blueprints designed to scale your business sustainably and dominate your local market.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      title: 'Performance Marketing', 
      tags: 'Meta Ads • Google Ads • Leads',
      desc: 'Data-driven ad campaigns that maximize your ROI and aggressively capture new market share.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
      title: 'Identity & Branding', 
      tags: 'Logos • Visuals • Messaging',
      desc: 'Memorable, premium visual identities that ensure your business stands out instantly.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      title: 'Social Media Content', 
      tags: 'Reels • Production • Storytelling',
      desc: 'Cinematic, scroll-stopping visuals that tell your story and build massive audience trust.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      title: 'Influencer Collabs', 
      tags: 'Creators • PR • Engagement',
      desc: 'Connecting you with the perfect local creators to authentically reach entirely new audiences.' 
    },
  ]

  return (
    <section className="bg-surface-container-low dark:bg-[#141414] py-24 md:py-32" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED]">Everything your business needs online.</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/40 dark:bg-[#1A1A1A]/40 backdrop-blur-2xl p-4 rounded-3xl border border-white/60 dark:border-white/10 shadow-[8px_8px_24px_rgba(0,0,0,0.04),-8px_-8px_24px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_24px_rgba(0,0,0,0.5),-8px_-8px_24px_rgba(255,255,255,0.02)] hover:shadow-[12px_12px_32px_rgba(0,0,0,0.08),-12px_-12px_32px_rgba(255,255,255,1)] dark:hover:shadow-[12px_12px_32px_rgba(0,0,0,0.7),-12px_-12px_32px_rgba(255,255,255,0.03)] h-full group cursor-pointer flex flex-col transition-all duration-500 relative"
              >
                {/* Neumorphic Inner Glow Layer */}
                <div className="absolute inset-0 rounded-3xl shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] dark:shadow-[inset_2px_2px_4px_rgba(255,255,255,0.05),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] pointer-events-none z-10"></div>
                
                {/* Image Container */}
                <div className="w-full h-48 md:h-56 bg-surface dark:bg-black rounded-2xl mb-6 relative overflow-hidden z-20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="px-2 pb-2 flex flex-col flex-grow z-20">
                  <p className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] text-primary uppercase font-bold mb-3">{service.tags}</p>
                  <h3 className="text-xl md:text-2xl font-medium mb-3 dark:text-[#EDEDED] font-serif leading-tight">{service.title}</h3>
                  <p className="text-on-surface-variant dark:text-[#A0A0A0] text-sm md:text-base leading-relaxed mt-auto">{service.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
