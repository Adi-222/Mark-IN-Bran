'use client'
import Image from 'next/image'
import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote: <>Mark <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">In</span> Bran completely transformed our digital presence. For a legacy brand like ours, maintaining trust while modernizing is tough, but they nailed it. Our premium lead generation has skyrocketed.</>,
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80",
      name: "Rajeev Mehta",
      role: "VP Marketing, Shapoorji Pallonji"
    },
    {
      quote: "They didn't just build a website; they captured the exact vibe of our cafes. Since the redesign, our online orders and franchise inquiries have doubled. Absolutely brilliant work.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
      name: "Ananya Sharma",
      role: "Founder, Chumuk Tea & More"
    },
    {
      quote: "In the finance sector, your website is your credibility. The sleek, high-end aesthetic they delivered gave us an instant authority boost. It's an absolute conversion machine.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
      name: "Vikram Desai",
      role: "Director, Provestor"
    },
    {
      quote: "The interactive project showcases they built for our residential properties are mind-blowing. Buyers spend 3x more time on our site now, leading to significantly faster sell-outs.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
      name: "Priya Kapoor",
      role: "Head of Sales, Joyville"
    },
    {
      quote: "Sports fans demand speed and excitement. The dynamic layouts and insanely fast load times they achieved have completely revolutionized how our supporters interact with the team online.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      name: "Arjun Singh",
      role: "Digital Head, KHL"
    },
    {
      quote: "Translating a fine-dining experience into a website is incredibly difficult, but they made it look effortless. Our table reservations booked out completely within the first week of launch.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
      name: "Riya Sen",
      role: "Owner, DOT Restaurant"
    }
  ]

  return (
    <section className="bg-surface-container-low dark:bg-[#141414] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED]">Clients love working with us.</h2>
        </ScrollReveal>
      </div>
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group pb-12 pt-8">
        <div className="flex shrink-0 animate-scroll items-stretch gap-8 pr-8 group-hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
          {[...testimonials, ...testimonials].map((testi, index) => (
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              key={index} 
              className="w-[320px] md:w-[480px] shrink-0 bg-surface-container-lowest dark:bg-[#1E1E1E] p-10 rounded-xl border border-outline-variant/5 dark:border-white/8 shadow-xl shadow-surface-dim/0 hover:shadow-primary/5 space-y-8 h-full flex flex-col justify-between transition-all cursor-default"
            >
              <div>
                <div className="text-primary flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif leading-relaxed italic dark:text-[#EDEDED]">&quot;{testi.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim relative shrink-0">
                  <Image src={testi.img} alt={testi.name} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold dark:text-[#EDEDED]">{testi.name}</p>
                  <p className="text-sm text-on-surface-variant dark:text-[#A0A0A0]">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Duplicate Track */}
        <div className="flex shrink-0 animate-scroll items-stretch gap-8 pr-8 group-hover:[animation-play-state:paused]" aria-hidden="true" style={{ animationDuration: '60s' }}>
          {[...testimonials, ...testimonials].map((testi, index) => (
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              key={`dup-${index}`} 
              className="w-[320px] md:w-[480px] shrink-0 bg-surface-container-lowest dark:bg-[#1E1E1E] p-10 rounded-xl border border-outline-variant/5 dark:border-white/8 shadow-xl shadow-surface-dim/0 hover:shadow-primary/5 space-y-8 h-full flex flex-col justify-between transition-all cursor-default"
            >
              <div>
                <div className="text-primary flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif leading-relaxed italic dark:text-[#EDEDED]">&quot;{testi.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim relative shrink-0">
                  <Image src={testi.img} alt={testi.name} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold dark:text-[#EDEDED]">{testi.name}</p>
                  <p className="text-sm text-on-surface-variant dark:text-[#A0A0A0]">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
