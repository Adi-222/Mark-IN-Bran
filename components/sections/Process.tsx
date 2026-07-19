'use client'
import { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { motion } from 'framer-motion'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Process() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Watermark Parallax
    gsap.to(".watermark-process", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Elegant Typewriter Reveal for Title
    const typeWriterTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      scrollTrigger: {
        trigger: ".process-title",
        start: "top 85%",
      }
    });

    typeWriterTl.from(".process-char", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  const renderText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="process-char inline-block" style={{ willChange: "filter, opacity, transform" }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const steps = [
    { 
      num: '01', 
      title: 'Discovery', 
      tagline: 'The Foundation',
      quote: '"A brand is no longer what we tell the consumer it is—it is what consumers tell each other it is."',
      desc: 'We dive deep into your vision, market dynamics, and consumer behavior to craft a blueprint for positioning and long-term growth.',
      color: 'from-[#0A0F1F] to-[#121B36]', // Deep Midnight Blue
      accent: 'text-blue-400',
      border: 'border-blue-500/20'
    },
    { 
      num: '02', 
      title: 'Identity', 
      tagline: 'Visual Ecosystem',
      quote: '"Design is the silent ambassador of your brand."',
      desc: 'From logo to typography, we design a premium visual and verbal identity that captures attention and commands respect.',
      color: 'from-[#051F16] to-[#0A3827]', // Deep Emerald
      accent: 'text-emerald-400',
      border: 'border-emerald-500/20'
    },
    { 
      num: '03', 
      title: 'Storytelling', 
      tagline: 'Narrative Architecture',
      quote: '"Marketing is no longer about the stuff that you make, but about the stories you tell."',
      desc: 'We produce high-impact assets—from video to copy—that seamlessly articulate your unique story across all digital platforms.',
      color: 'from-[#230C15] to-[#401224]', // Deep Ruby
      accent: 'text-rose-400',
      border: 'border-rose-500/20'
    },
    { 
      num: '04', 
      title: 'Scale', 
      tagline: 'Growth & Loyalty',
      quote: '"Good marketing makes the company look smart. Great marketing makes the customer feel smart."',
      desc: 'We execute powerful go-to-market campaigns to launch your brand and continuously optimize performance for sustainable scale.',
      color: 'from-[#1A1104] to-[#362208]', // Deep Bronze
      accent: 'text-amber-400',
      border: 'border-amber-500/20'
    },
  ]

  return (
    <section ref={containerRef} className="relative bg-[#050505] text-white pt-32 pb-40 px-4 sm:px-6 lg:px-12 overflow-hidden" id="process">
      
      {/* Ghost Watermark */}
      <div 
        className="watermark-process absolute top-40 left-1/2 select-none z-0 font-serif text-[180px] md:text-[240px] font-bold tracking-tighter whitespace-nowrap pointer-events-none opacity-[0.05]"
        style={{ transform: "translateX(-50%)" }}
      >
        OUR <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">METHOD</span>
      </div>

      <div className="text-center mb-32 md:mb-48 relative z-10">
        <h2 className="process-title font-serif text-5xl sm:text-6xl md:text-[120px] lg:text-[140px] leading-none tracking-[0.1em] mb-6 uppercase flex justify-center flex-wrap">
          {renderText("PROCESS")}
        </h2>
        <p className="font-serif text-xl md:text-3xl text-white/60 max-w-3xl mx-auto italic">
          The art and science of building brands people remember.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="sticky w-full"
            style={{ 
              top: `calc(15vh + ${index * 30}px)`, 
              marginBottom: index === steps.length - 1 ? '10vh' : '40vh' 
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`w-full rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-24 bg-gradient-to-br ${step.color} shadow-[0_-15px_40px_rgba(0,0,0,0.4)] border-t ${step.border} backdrop-blur-sm relative overflow-hidden`}
            >
              {/* Internal abstract glow for extra depth */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              {/* Left: Number and Title */}
              <div className="flex-1 flex flex-col justify-between items-start relative z-10">
                <div>
                  <span className={`text-sm font-bold tracking-[0.2em] uppercase ${step.accent}`}>{step.tagline}</span>
                  <h3 className="text-5xl md:text-7xl font-serif mt-4 font-medium text-white">{step.title}</h3>
                </div>
                <div className="text-[100px] md:text-[160px] font-serif font-bold text-white/5 leading-none mt-12 pointer-events-none select-none">
                  {step.num}
                </div>
              </div>

              {/* Right: Desc and Quote */}
              <div className="flex-1 flex flex-col justify-center space-y-12 relative z-10">
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                  {step.desc}
                </p>
                
                <div className="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-white/40 before:to-transparent">
                  <span className="material-symbols-outlined text-4xl text-white/10 absolute -top-4 -left-4">format_quote</span>
                  <p className="font-serif text-2xl md:text-3xl italic text-white/95 leading-snug">
                    {step.quote}
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
