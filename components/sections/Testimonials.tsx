'use client'
import Image from 'next/image'
import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with Raunak was a positive experience. He understands how to approach digital marketing with both creativity and business thinking. From content strategy and social media management to branding ideas, he was always willing to take ownership and deliver quality work. His communication skills, professionalism, and eagerness to learn make him someone I would gladly recommend.",
      img: "/reviews/ankit.jpeg",
      name: "Ankit Sharma",
      role: "Co-Founder & CEO, Shoal AI"
    },
    {
      quote: "I had the opportunity to work with Raunak during his time at Team Of Keys, where he contributed as a Social Media Marketing Intern. He showed a good understanding of content creation, social media management, and digital marketing fundamentals. He was proactive, communicated well, and consistently demonstrated a positive attitude toward learning and improving.",
      img: "/reviews/pankaj.jpeg",
      name: "Founder & CEO",
      role: "Team Of Keys"
    },
    {
      quote: "Working with Raunak has been a great experience. He understands the importance of building a strong digital presence and approaches every project with commitment and professionalism. His expertise in social media marketing, branding, content planning, and digital strategy helped us move in the right direction. He was responsive, creative, and always focused on delivering work that aligned with our business objectives.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
      name: "Sandip Giri",
      role: "Co-Founder, Prop Vestors Pvt. Ltd."
    },

    {
      quote: "I had the pleasure of working with Raunak on our digital marketing initiatives for Namaste Belfast. He consistently brought fresh ideas to the table, communicated effectively, and was committed to delivering quality work. He was proactive in understanding our business goals and translating them into practical marketing solutions.",
      img: "/reviews/rajiv.jpeg",
      name: "Rajiv Prasad",
      role: "VP Cloud OpenShift DevOps, Citi"
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
