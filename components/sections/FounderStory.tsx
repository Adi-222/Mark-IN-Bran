'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function FounderStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.1, once: false })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  }

  return (
    <section className="bg-surface dark:bg-[#0F0F0F] py-16 md:py-32" id="founder">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Image Side - Sticky on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 lg:sticky lg:top-32 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl bg-surface-dim dark:bg-[#1E1E1E]">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Raunak Kr Shail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white pr-6">
                <p className="font-bold text-2xl mb-1">Raunak Kr Shail</p>
                <p className="text-white/90 text-sm font-medium mb-3">Founder & CEO, Mark In Bran</p>
                <p className="text-white/70 text-xs italic leading-relaxed border-l-2 border-primary pl-3">
                  "Brands built by memories, emotions, and trust."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase block mb-6">Meet The Founder</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED] mb-8 leading-tight">
              Understanding people before understanding markets.
            </h2>
            
            <motion.div 
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-10 text-lg md:text-xl text-on-surface/90 dark:text-[#C8C8C8] leading-[1.8]"
            >
              <motion.div variants={itemVariants} className="space-y-5">
                <p>
                  Most marketers study markets through reports, dashboards, and case studies. I chose a different path—I chose to understand people before understanding markets. That belief became the foundation of Mark In Bran.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <h3 className="text-2xl font-serif font-medium text-on-surface dark:text-[#EDEDED] pb-2">Building the Foundation</h3>
                <p>
                  My journey began in Kolkata, where I pursued a Bachelor of Technology in Computer Science and Business Systems (CSBS) from the Heritage Institute of Technology. The program gave me a unique perspective by combining two worlds that rarely meet in traditional education:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-surface-container/50 dark:bg-white/[0.03] p-6 rounded-2xl border border-outline-variant/20">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">Technology</h4>
                    <p className="text-base text-on-surface/80 dark:text-[#B0B0B0] leading-relaxed">Software, digital systems, problem-solving, and continuous innovation.</p>
                  </div>
                  <div className="bg-surface-container/50 dark:bg-white/[0.03] p-6 rounded-2xl border border-outline-variant/20">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">Business</h4>
                    <p className="text-base text-on-surface/80 dark:text-[#B0B0B0] leading-relaxed">Strategy, operations, entrepreneurship, finance, and organizational thinking.</p>
                  </div>
                </div>
                <p>
                  While many people understand either technology or business, I wanted to understand how both work together to build companies that scale.
                </p>
                <p>
                  Working across multiple domains—Software Development, Social Media Marketing, Digital Marketing, Brand Management, and Business Development—allowed me to understand how businesses actually operate. It also made me realize something important:
                </p>
                <p className="font-serif italic text-2xl md:text-3xl text-on-surface dark:text-white border-l-4 border-primary pl-6 py-2 my-8 leading-snug">
                  Technology can build products. Marketing can create awareness. But only branding creates trust that lasts.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <h3 className="text-2xl font-serif font-medium text-on-surface dark:text-[#EDEDED] pb-2">Learning Beyond Classrooms</h3>
                <p>
                  To truly understand people, I decided to experience India itself. That journey became <em>Learning to Live: 30 Days Across India</em>. It became my real-world research into consumer psychology, branding, culture, storytelling, and human behavior.
                </p>
                <p>
                  From Kolkata to Badrinath, Varanasi, Mumbai, Goa, Kanyakumari, and across India aboard the legendary Vivek Express, every destination became a classroom. I observed how buying decisions change from one region to another, how trust is built differently across cultures, and how stories travel faster than advertisements.
                </p>
                <p>
                  Most importantly, I discovered that India isn't one market. It is thousands of micro-markets connected by emotion.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <h3 className="text-2xl font-serif font-medium text-on-surface dark:text-[#EDEDED] pb-2">The Athlete's Mindset</h3>
                <p>
                  Long before entrepreneurship, I was a cricketer. Representing district-level teams and captaining competitive sides taught me lessons that continue to guide my business: Discipline over motivation. Process over shortcuts. Teamwork over individual success. The same principles now define how we build brands.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <h3 className="text-2xl font-serif font-medium text-on-surface dark:text-[#EDEDED] pb-2">Why Mark In Bran Exists</h3>
                <p>
                  Mark In Bran was never created to become another marketing agency. It was built as a Brand Growth Ecosystem. Our work doesn't begin with designing a logo or posting content. Every client goes through a structured strategic framework where we deeply understand their vision, business model, customer psychology, and technology requirements.
                </p>
                <p>
                  Because marketing without understanding people is simply advertising. Branding begins with understanding human psychology.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <h3 className="text-2xl font-serif font-medium text-on-surface dark:text-[#EDEDED] pb-2">Our Philosophy & Promise</h3>
                <p>
                  We believe every successful brand stands on four pillars: <strong>Technology</strong> to create scalable systems, <strong>Business Strategy</strong> to build sustainable growth, <strong>Marketing</strong> to generate attention, and <strong>Branding</strong> to create trust and lasting memories.
                </p>
                <p>
                  When these four work together, businesses stop competing on price and start competing on perception. 
                </p>
                <p className="font-semibold text-primary mt-6 text-xl md:text-2xl leading-snug">
                  We don't just create marketing campaigns. We engineer growth, build trust, and create brands people remember.
                </p>
              </motion.div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
