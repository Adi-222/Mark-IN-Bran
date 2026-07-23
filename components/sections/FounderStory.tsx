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
                src="/founder/Raunak.jpeg"
                alt="Raunak Kr Shail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white pr-6">
                <div className="flex items-center gap-3 mb-1">
                  <p className="font-bold text-2xl">Raunak Kr Shail</p>
                  
                  <div className="flex items-center gap-2 ml-2">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/raunak-shail-a37933238/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/80 hover:text-[#0A66C2] hover:bg-white hover:scale-110 transition-all rounded-[2px] flex items-center justify-center"
                      aria-label="LinkedIn Profile"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/rawshail09?igsh=eDVyd2YyOWN6bmZm" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/80 hover:text-[#E1306C] hover:scale-110 transition-all flex items-center justify-center"
                      aria-label="Instagram Profile"
                    >
                      <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-white/90 text-sm font-medium mb-3">Founder & CEO, Mark In Bran</p>
                <p className="text-white/70 text-xs italic leading-relaxed border-l-2 border-primary pl-3">
                  &quot;Brands built by memories, emotions, and trust.&quot;
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
                  Most importantly, I discovered that India isn&apos;t one market. It is thousands of micro-markets connected by emotion.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <h3 className="text-2xl font-serif font-medium text-on-surface dark:text-[#EDEDED] pb-2">The Athlete&apos;s Mindset</h3>
                <p>
                  Long before entrepreneurship, I was a cricketer. Representing district-level teams and captaining competitive sides taught me lessons that continue to guide my business: Discipline over motivation. Process over shortcuts. Teamwork over individual success. The same principles now define how we build brands.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-5">
                <h3 className="text-2xl font-serif font-medium text-on-surface dark:text-[#EDEDED] pb-2">Why Mark In Bran Exists</h3>
                <p>
                  Mark In Bran was never created to become another marketing agency. It was built as a Brand Growth Ecosystem. Our work doesn&apos;t begin with designing a logo or posting content. Every client goes through a structured strategic framework where we deeply understand their vision, business model, customer psychology, and technology requirements.
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
                  We don&apos;t just create marketing campaigns. We engineer growth, build trust, and create brands people remember.
                </p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
