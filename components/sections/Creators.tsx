"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Creators() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Watermark
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

    // Elegant Typewriter Reveal (Looping)
    const typeWriterTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2, // Waits 2 seconds before typing again
      scrollTrigger: {
        trigger: ".creator-title",
        start: "top 85%",
      }
    });

    typeWriterTl.from(".creator-char", {
      opacity: 0,
      duration: 0.8, // Smooth, elegant fade-in
      stagger: 0.15, // Slower, more deliberate pacing
      ease: "power2.out", // Soft deceleration
    });

    const triggerOpts = (el: any) => ({
      trigger: el,
      start: "top 85%",       // Enter slightly before hitting the bottom of the screen
      end: "bottom 15%",      // Reverse only when the bottom of the element is almost off the top of the screen
      toggleActions: "play reverse play reverse",
    });

    // Enhanced Lateral Entrances
    gsap.utils.toArray(".reveal-left").forEach((el: any) => {
      gsap.from(el, {
        x: -120, // More dramatic slide
        opacity: 0,
        duration: 1.4, // Slightly longer duration for the dramatic ease
        ease: "power4.out", // Snappy, enhanced easing similar to Work section's bezier
        scrollTrigger: triggerOpts(el),
      });
    });

    gsap.utils.toArray(".reveal-right").forEach((el: any) => {
      gsap.from(el, {
        x: 120,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: triggerOpts(el),
      });
    });

    gsap.utils.toArray(".reveal-up").forEach((el: any) => {
      gsap.from(el, {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: triggerOpts(el),
      });
    });

    // Parallax Images
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

    // Text Masking
    gsap.utils.toArray(".creator-name").forEach((el: any) => {
      gsap.from(el, {
        y: "150%",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: triggerOpts(el),
      });
    });

    gsap.utils.toArray(".creator-role").forEach((el: any) => {
      gsap.from(el, {
        y: "150%",
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: triggerOpts(el),
      });
    });

  }, { scope: containerRef });

  const renderText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="creator-char inline-block" style={{ willChange: "filter, opacity, transform" }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const cardClasses = "flex flex-col cursor-pointer transition-all duration-[600ms] ease-out group-hover:opacity-40 group-hover:blur-[2px] group-hover:scale-[0.98] hover:!opacity-100 hover:!blur-none hover:!scale-[1.03] hover:z-30 relative block";
  const avatarCardClasses = "flex flex-col items-center cursor-pointer transition-all duration-[600ms] ease-out group-hover:opacity-40 group-hover:blur-[2px] group-hover:scale-[0.98] hover:!opacity-100 hover:!blur-none hover:!scale-[1.03] hover:z-30 relative block";

  return (
    <section ref={containerRef} className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto overflow-hidden" id="creators">
      {/* Ghost Watermark */}
      <div 
        className="watermark absolute top-40 left-1/2 select-none z-0 font-serif text-[180px] md:text-[240px] font-bold tracking-tighter whitespace-nowrap pointer-events-none opacity-[0.03] dark:opacity-10 text-on-surface dark:text-[#EDEDED]"
        style={{ transform: "translateX(-50%)" }}
      >
        MARK <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">IN</span> BRAN
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
            <Link href="https://www.instagram.com/kajalpandey437?igsh=MWVjNHQxOWkwZm8wYg==" target="_blank" className={avatarCardClasses}>
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border border-outline-variant rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden mb-3 shadow-md bg-surface-container dark:bg-[#1E1E1E]">
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/kajalpandey437.jpg" alt="@kajalpandey437" />
              </div>
              <div className="overflow-hidden">
                <p className="creator-name text-[10px] lg:text-xs font-semibold tracking-widest text-on-surface dark:text-[#EDEDED]">@kajalpandey437</p>
              </div>
            </Link>
          </div>
          
          <div className="reveal-left">
            <Link href="https://www.instagram.com/keephustling4473_?igsh=Yno2Zm5qajMxc2Mx" target="_blank" className={cardClasses}>
              <div className="relative aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/keephustling4473_.jpg" alt="@keephustling4473_" />
              </div>
              <div className="text-center">
                <div className="overflow-hidden pb-1">
                  <p className="creator-name font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">@keephustling4473_</p>
                </div>
                <div className="overflow-hidden">
                  <p className="creator-role text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Creator</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Col 2 & 3 Wrapper */}
        <div className="w-[42%] flex flex-col gap-12 pt-8">
          <div className="flex gap-4 lg:gap-8">
            {/* Col 2 (Left) */}
            <div className="w-1/2 flex flex-col gap-16">
              <div className="reveal-left">
                <Link href="https://www.instagram.com/keephustling4473s?igsh=czcxdmYxcm9jdHFq" target="_blank" className={cardClasses}>
                  <div className="relative aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                    <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/keephustling4473s.jpg" alt="@keephustling4473s" />
                  </div>
                  <div className="text-center">
                    <div className="overflow-hidden pb-1">
                      <p className="creator-name font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">@keephustling4473s</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="creator-role text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Creator</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="reveal-left">
                <Link href="https://www.instagram.com/traveller_abhii?igsh=Nm1tdWJzMzEzZXh4" target="_blank" className={cardClasses}>
                  <div className="relative aspect-[3/5] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                    <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/traveller_abhii.jpg" alt="@traveller_abhii" />
                  </div>
                  <div className="text-center">
                    <div className="overflow-hidden pb-1">
                      <p className="creator-name font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">@traveller_abhii</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="creator-role text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Creator</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Col 3 (Right) */}
            <div className="w-1/2 flex flex-col gap-16 pt-12">
              <div className="reveal-right">
                <Link href="https://www.instagram.com/succeedwithsarthak?igsh=dGdrb2dhZnJlNXls" target="_blank" className={cardClasses}>
                  <div className="relative aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                    <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/succeedwithsarthak.jpg" alt="@succeedwithsarthak" />
                  </div>
                  <div className="text-center">
                    <div className="overflow-hidden pb-1">
                      <p className="creator-name font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">@succeedwithsarthak</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="creator-role text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Creator</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="reveal-right">
                <Link href="https://www.instagram.com/major_rudrashish?igsh=MWU1ZGtzZHg0a21sZg==" target="_blank" className={cardClasses}>
                  <div className="relative aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                    <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/major_rudrashish.jpg" alt="@major_rudrashish" />
                  </div>
                  <div className="text-center">
                    <div className="overflow-hidden pb-1">
                      <p className="creator-name font-serif text-base lg:text-lg text-on-surface dark:text-[#EDEDED]">@major_rudrashish</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="creator-role text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Creator</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* With Reet (Up) */}
          <div className="reveal-up relative flex flex-col mt-4">
            <Link href="https://www.instagram.com/withreeeet?igsh=MWozdmtwdWpueHJ4Mg==" target="_blank" className={cardClasses}>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-surface dark:border-[#1A1A1A] shadow-xl overflow-hidden z-20 bg-surface-container dark:bg-[#1E1E1E]">
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/withreeeet.jpg" alt="@withreeeet Avatar" />
              </div>
              <div className="relative aspect-[16/9] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-5">
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/withreeeet.jpg" alt="@withreeeet" />
              </div>
              <div className="text-center">
                <div className="overflow-hidden pb-1">
                  <p className="creator-name font-serif text-xl lg:text-2xl text-on-surface dark:text-[#EDEDED]">@withreeeet</p>
                </div>
                <div className="overflow-hidden">
                  <p className="creator-role text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Creator</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Col 4 (Right) */}
        <div className="w-[32%] flex flex-col gap-12 relative">
          <div className="reveal-right">
            <Link href="https://www.instagram.com/shwetas_talkies?igsh=MWltN3h1YjE5cGRkaQ==" target="_blank" className={cardClasses}>
              <div className="relative aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4">
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/shwetas_talkies.jpg" alt="@shwetas_talkies" />
              </div>
              <div className="text-center">
                <div className="overflow-hidden pb-1">
                  <p className="creator-name font-serif text-lg lg:text-xl text-on-surface dark:text-[#EDEDED]">@shwetas_talkies</p>
                </div>
                <div className="overflow-hidden">
                  <p className="creator-role text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Creator</p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="reveal-right">
            <Link href="https://www.instagram.com/unfitofit_official_?igsh=Z2xsNWU1cjhuYzcx" target="_blank" className={cardClasses}>
              <div className="aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-[800ms] mb-4 relative z-10">
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/unfitofit_official_.jpg" alt="@unfitofit_official_" />
              </div>
              <div className="text-center">
                <div className="overflow-hidden pb-1">
                  <p className="creator-name font-serif text-xl lg:text-2xl text-on-surface dark:text-[#EDEDED]">@unfitofit_official_</p>
                </div>
                <div className="overflow-hidden">
                  <p className="creator-role text-[9px] lg:text-[10px] font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-1">Creator</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Stack (Visible only on small screens) */}
      <div className="group md:hidden flex flex-col gap-16 relative z-10 mt-16">
        <div className="reveal-left">
          <Link href="https://www.instagram.com/keephustling4473s?igsh=czcxdmYxcm9jdHFq" target="_blank" className={cardClasses}>
            <div className="aspect-square bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4 relative">
              <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/keephustling4473s.jpg" alt="@keephustling4473s" />
            </div>
            <div className="text-center">
              <div className="overflow-hidden pb-1">
                <p className="creator-name font-serif text-xl text-on-surface dark:text-[#EDEDED]">@keephustling4473s</p>
              </div>
              <div className="overflow-hidden">
                <p className="creator-role text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Creator</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="reveal-right">
          <Link href="https://www.instagram.com/succeedwithsarthak?igsh=dGdrb2dhZnJlNXls" target="_blank" className={cardClasses}>
            <div className="relative aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/succeedwithsarthak.jpg" alt="@succeedwithsarthak" />
            </div>
            <div className="text-center">
              <div className="overflow-hidden pb-1">
                <p className="creator-name font-serif text-xl text-on-surface dark:text-[#EDEDED]">@succeedwithsarthak</p>
              </div>
              <div className="overflow-hidden">
                <p className="creator-role text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Creator</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="reveal-left">
          <Link href="https://www.instagram.com/shwetas_talkies?igsh=MWltN3h1YjE5cGRkaQ==" target="_blank" className={cardClasses}>
            <div className="relative aspect-[4/3] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/shwetas_talkies.jpg" alt="@shwetas_talkies" />
            </div>
            <div className="text-center">
              <div className="overflow-hidden pb-1">
                <p className="creator-name font-serif text-2xl text-on-surface dark:text-[#EDEDED]">@shwetas_talkies</p>
              </div>
              <div className="overflow-hidden">
                <p className="creator-role text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Creator</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="reveal-right">
          <Link href="https://www.instagram.com/unfitofit_official_?igsh=Z2xsNWU1cjhuYzcx" target="_blank" className={cardClasses}>
            <div className="relative aspect-[3/4] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/unfitofit_official_.jpg" alt="@unfitofit_official_" />
            </div>
            <div className="text-center">
              <div className="overflow-hidden pb-1">
                <p className="creator-name font-serif text-2xl text-on-surface dark:text-[#EDEDED]">@unfitofit_official_</p>
              </div>
              <div className="overflow-hidden">
                <p className="creator-role text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Creator</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="reveal-up relative">
          <Link href="https://www.instagram.com/withreeeet?igsh=MWozdmtwdWpueHJ4Mg==" target="_blank" className={cardClasses}>
            <div className="relative aspect-[16/9] bg-surface-container dark:bg-[#1E1E1E] overflow-hidden rounded-xl shadow-sm mb-4">
              <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="parallax-image w-full h-full object-cover" src="/creators/withreeeet.jpg" alt="@withreeeet" />
            </div>
            <div className="text-center">
              <div className="overflow-hidden pb-1">
                <p className="creator-name font-serif text-2xl text-on-surface dark:text-[#EDEDED]">@withreeeet</p>
              </div>
              <div className="overflow-hidden">
                <p className="creator-role text-xs font-semibold text-on-surface-variant dark:text-[#A0A0A0] tracking-[0.2em] uppercase mt-2">Creator</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
}
