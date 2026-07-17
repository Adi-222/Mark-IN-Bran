"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Creators() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Watermark Parallax
    gsap.to(".watermark", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // 2. Title Text Effect (Blur Reveal)
    gsap.from(".creator-char", {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".creator-title",
        start: "top 85%",
      }
    });

    const triggerOpts = {
      trigger: containerRef.current,
      start: "top 65%", 
    };

    // 3. Lateral & Vertical Entrances
    gsap.from(".reveal-left", {
      x: -80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: triggerOpts,
    });

    gsap.from(".reveal-right", {
      x: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: triggerOpts,
    });

    gsap.from(".reveal-up", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: triggerOpts,
    });

    // 4. Subtle Image Parallax inside Creator Cards
    gsap.utils.toArray(".parallax-image").forEach((img: any) => {
      gsap.fromTo(img, 
        { yPercent: -10, scale: 1.1 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });

  }, { scope: containerRef });

  const cardClasses = "flex flex-col cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-30 group-hover:scale-95 group-hover:translate-y-6 hover:!opacity-100 hover:!scale-105 hover:!-translate-y-2 hover:z-30 relative";
  const avatarCardClasses = "flex flex-col items-center cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-30 group-hover:scale-95 group-hover:translate-y-6 hover:!opacity-100 hover:!scale-105 hover:!-translate-y-2 hover:z-30 relative";

  const renderText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="creator-char inline-block" style={{ willChange: "filter, opacity, transform" }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto overflow-hidden" id="creators">
      {/* Ghost Watermark */}
      <div 
        className="watermark absolute top-40 left-1/2 select-none z-0 font-serif text-[180px] md:text-[240px] font-bold tracking-tighter whitespace-nowrap pointer-events-none opacity-[0.03] dark:opacity-10 text-on-surface dark:text-[#EDEDED]"
        style={{ transform: "translateX(-50%)" }}
      >
        MARK IN BRAN
      </div>

      {/* Title Section */}
      <div className="text-center mb-24 md:mb-32 relative z-10">
        <h2 className="creator-title font-serif text-6xl md:text-[120px] lg:text-[150px] leading-none tracking-[0.1em] mb-6 uppercase text-on-surface dark:text-[#EDEDED] flex justify-center">
          {renderText("Creators")}
        </h2>
        <p className="reveal-up font-serif text-xl md:text-3xl text-on-surface-variant dark:text-[#A0A0A0] max-w-3xl mx-auto italic">
          A curated collective of visionaries shaping the modern aesthetic.
        </p>
      </div>

      {/* Desktop Flex Grid */}
      <div className="relative z-10 hidden md:flex gap-4 lg:gap-8 mx-auto w-full items-start justify-center group">
        
        {/* Col 1 (Left) */}
        <div className="w-[18%] flex flex-col gap-32 pt-56">
          <div className="reveal-left">
            <div className={avatarCardClasses}>
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border border-outline-variant rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden mb-3 shadow-md bg-surface-container dark:bg-[#1E1E1E]">
                <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" alt="Sarah L." />
              </div>
              <p className="text-[10px] lg:text-xs font-semibold tracking-widest text-on-surface dark:text-[#EDEDED]">Sarah L.</p>
            </div>
          </div>
          
          <div className="reveal-left">
            <div className={cardClasses}>
              <div className="aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Studio NORD" />
              </div>
              <div className="text-center">
                <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Studio NORD</p>
                <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Collective</p>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2 & 3 Wrapper */}
        <div className="w-[42%] flex flex-col gap-12 pt-8">
          <div className="flex gap-4 lg:gap-8">
            {/* Col 2 (Left) */}
            <div className="w-1/2 flex flex-col gap-16">
              <div className="reveal-left">
                <div className={cardClasses}>
                  <div className="aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                    <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" alt="Julian Moss" />
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Julian Moss</p>
                    <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Space</p>
                  </div>
                </div>
              </div>
              
              <div className="reveal-left">
                <div className={cardClasses}>
                  <div className="aspect-[3/5] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                    <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Anya Volkov" />
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Anya Volkov</p>
                    <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Identity</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Col 3 (Right) */}
            <div className="w-1/2 flex flex-col gap-16 pt-12">
              <div className="reveal-right">
                <div className={cardClasses}>
                  <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                    <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" alt="Sophia Chen" />
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Sophia Chen</p>
                    <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Direction</p>
                  </div>
                </div>
              </div>
              
              <div className="reveal-right">
                <div className={cardClasses}>
                  <div className="aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                    <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="David K." />
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">David K.</p>
                    <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Textile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Isabella Frost (Up) */}
          <div className="reveal-up relative flex flex-col mt-4">
            <div className={cardClasses}>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-surface dark:border-[#1A1A1A] shadow-xl overflow-hidden z-20 bg-surface-container dark:bg-[#1E1E1E]">
                <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1bf329?auto=format&fit=crop&w=200&q=80" alt="Isabella Avatar" />
              </div>
              <div className="aspect-[16/9] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-5">
                <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Isabella Frost" />
              </div>
              <div className="text-center">
                <p className="font-serif text-xl lg:text-2xl text-on-surface dark:text-[#EDEDED]">Isabella Frost</p>
                <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Col 4 (Right) */}
        <div className="w-[32%] flex flex-col gap-12 relative">
          <div className="reveal-right">
            <div className={cardClasses}>
              <div className="aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Marcus Thorne" />
              </div>
              <div className="text-center">
                <p className="font-serif text-lg lg:text-xl text-on-surface dark:text-[#EDEDED]">Marcus Thorne</p>
                <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Curation</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-right">
            <div className={cardClasses}>
              <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4 relative z-10">
                <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80" alt="Clara Mendes" />
              </div>
              <div className="text-center">
                <p className="font-serif text-xl lg:text-2xl text-on-surface dark:text-[#EDEDED]">Clara Mendes</p>
                <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Photography</p>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <div className={`${cardClasses} w-2/3 mx-auto`}>
              <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" alt="Erik S." />
              </div>
              <div className="text-center">
                <p className="font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">Erik S.</p>
                <p className="text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Sonic</p>
              </div>
            </div>
          </div>

          {/* Leo H (Avatar) (Right) */}
          <div className="reveal-right absolute -right-12 lg:-right-16 top-[60%] flex flex-col items-center">
            <div className={avatarCardClasses}>
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-primary dark:border-[#1E1E1E] overflow-hidden mb-2 shadow-sm bg-surface-container dark:bg-[#1E1E1E]">
                <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80" alt="Leo H." />
              </div>
              <p className="text-[10px] font-semibold tracking-widest text-on-surface dark:text-[#EDEDED]">Leo H.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stack (Visible only on small screens) */}
      <div className="group md:hidden flex flex-col gap-16 relative z-10">
        <div className="reveal-left">
          <div className={cardClasses}>
            <div className="aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4 relative">
              <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" alt="Julian Moss" />
            </div>
            <div className="text-center">
              <p className="font-serif text-xl text-on-surface dark:text-[#EDEDED]">Julian Moss</p>
              <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Space</p>
            </div>
          </div>
        </div>
        
        <div className="reveal-right">
          <div className={cardClasses}>
            <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" alt="Sophia Chen" />
            </div>
            <div className="text-center">
              <p className="font-serif text-xl text-on-surface dark:text-[#EDEDED]">Sophia Chen</p>
              <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Direction</p>
            </div>
          </div>
        </div>
        
        <div className="reveal-left">
          <div className={cardClasses}>
            <div className="aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Marcus Thorne" />
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl text-on-surface dark:text-[#EDEDED]">Marcus Thorne</p>
              <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Curation</p>
            </div>
          </div>
        </div>
        
        <div className="reveal-right">
          <div className={cardClasses}>
            <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80" alt="Clara Mendes" />
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl text-on-surface dark:text-[#EDEDED]">Clara Mendes</p>
              <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Photography</p>
            </div>
          </div>
        </div>
        
        <div className="reveal-up relative">
          <div className={cardClasses}>
            <div className="aspect-[16/9] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <img className="parallax-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Isabella Frost" />
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl text-on-surface dark:text-[#EDEDED]">Isabella Frost</p>
              <p className="text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Experience</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
