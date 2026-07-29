'use client'
import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "He understands how to approach digital marketing with both creativity and business thinking. From content strategy to branding ideas, he was always willing to take ownership and deliver quality work.",
      img: "/reviews/ankit.jpeg",
      name: "Ankit Sharma",
      role: "Co-Founder & CEO, Shoal AI"
    },
    {
      quote: "He showed a strong understanding of content creation and digital marketing fundamentals. He was proactive, communicated well, and consistently demonstrated a positive attitude toward learning and improving.",
      img: "/reviews/pankaj.jpeg",
      name: "Founder & CEO",
      role: "Team Of Keys"
    },
    {
      quote: "He understands the importance of a strong digital presence and approaches every project with professionalism. His expertise in digital strategy helped us move in the right direction.",
      img: "/reviews/sandeepgiri.jpeg",
      name: "Sandip Giri",
      role: "Co-Founder, Prop Vestors Pvt. Ltd."
    },
    {
      quote: "He consistently brought fresh ideas to the table and was committed to delivering quality work. He was proactive in translating our business goals into practical marketing solutions.",
      img: "/reviews/rajiv.jpeg",
      name: "Rajiv Prasad",
      role: "VP Cloud OpenShift DevOps, Citi"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-surface-container-low dark:bg-[#141414] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED]">Clients love working with us.</h2>
        </ScrollReveal>
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden px-6">
        <div className="relative overflow-hidden w-full">
          <motion.div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testi, index) => (
              <div key={index} className="w-full shrink-0">
                <div className="bg-surface-container-lowest dark:bg-[#1E1E1E] p-8 rounded-xl border border-outline-variant/5 dark:border-white/8 shadow-xl shadow-surface-dim/0 space-y-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <p className="text-xl font-serif leading-relaxed italic dark:text-[#EDEDED]">&quot;{testi.quote}&quot;</p>
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
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 px-2">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/20 dark:border-white/10 hover:bg-surface-container dark:hover:bg-white/5 transition-colors text-on-surface dark:text-[#EDEDED]"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-outline-variant/20 dark:bg-white/20'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/20 dark:border-white/10 hover:bg-surface-container dark:hover:bg-white/5 transition-colors text-on-surface dark:text-[#EDEDED]"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Desktop Marquee */}
      <div className="hidden md:flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group pb-12 pt-8">
        <div className="flex shrink-0 animate-scroll items-stretch gap-8 pr-8 group-hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
          {[...testimonials, ...testimonials].map((testi, index) => (
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              key={index}
              className="w-[320px] md:w-[480px] shrink-0 bg-surface-container-lowest dark:bg-[#1E1E1E] p-10 rounded-xl border border-outline-variant/5 dark:border-white/8 shadow-xl shadow-surface-dim/0 hover:shadow-primary/5 space-y-8 h-full flex flex-col justify-between transition-all cursor-default"
            >
              <div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent flex gap-1 mb-6">
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
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent flex gap-1 mb-6">
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
