'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import MobileNav from './MobileNav'
import { openContactModal } from '../ui/ContactModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-500 flex justify-between items-center relative bg-white/50 dark:bg-[#0A0A0A]/50 backdrop-blur-[48px] border border-white/60 dark:border-white/20 shadow-[0_16px_64px_rgba(0,0,0,0.1)] dark:shadow-[0_16px_64px_rgba(0,0,0,0.8)] rounded-full ${
          scrolled 
            ? 'w-[92%] max-w-7xl py-3 px-6 md:px-8' 
            : 'w-[96%] max-w-[1500px] py-4 px-6 md:px-10'
        }`}
      >
        {/* Inner subtle glow for glass effect always visible */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,1)] dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.15)] pointer-events-none z-0"></div>

        <div className="flex items-center relative z-10">
          <Link className="text-[22px] md:text-2xl font-bold font-serif text-on-surface dark:text-[#EDEDED] tracking-tight whitespace-nowrap" href="/">
            Mark <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">In</span> Bran
          </Link>
        </div>

        {/* Center: Perfectly balanced navigation links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-12 z-10">
          <Link className="text-[15px] font-medium text-on-surface-variant dark:text-[#A0A0A0] hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="/#services">Services</Link>
          <Link className="text-[15px] font-medium text-on-surface-variant dark:text-[#A0A0A0] hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="/#about">About</Link>
          <Link className="text-[15px] font-medium text-on-surface-variant dark:text-[#A0A0A0] hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="/#work">Work</Link>
          <Link className="text-[15px] font-medium text-on-surface-variant dark:text-[#A0A0A0] hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="/#creators">Creators</Link>
          <Link className="text-[15px] font-medium text-on-surface-variant dark:text-[#A0A0A0] hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="/blog">Blog</Link>
        </div>
        
        {/* Right Side: CTA & Actions */}
        <div className="flex items-center gap-3 lg:gap-4 relative z-10">
          <ThemeToggle />
          <button 
            onClick={openContactModal}
            className="hidden lg:block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-7 py-2.5 rounded-full font-medium text-[15px] active:scale-95 transition-all hover:shadow-lg hover:shadow-blue-500/25 border border-transparent hover:border-white/20 whitespace-nowrap"
          >
            Start Journey
          </button>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}
