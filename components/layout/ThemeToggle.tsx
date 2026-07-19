'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] text-on-surface dark:text-[#EDEDED] hover:bg-white/50 dark:hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
      aria-label="Toggle Dark Mode"
    >
      {/* Inner highlight for premium glass effect */}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] pointer-events-none"></div>
      
      <span className="material-symbols-outlined text-[20px] relative z-10 group-hover:text-blue-500 transition-colors">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  )
}
