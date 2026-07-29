import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/15 dark:border-white/8 bg-surface dark:bg-[#1A1A1A] text-on-surface dark:text-[#EDEDED] py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-6 max-w-sm">
          <Link className="text-3xl font-serif font-bold text-on-surface dark:text-[#EDEDED]" href="/">Mark <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">In</span> Bran</Link>
          <p className="text-on-surface-variant dark:text-[#A0A0A0]">Building Brands People Remember.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 dark:border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all" href="https://www.linkedin.com/company/mark-in-bran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 dark:border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 hover:border-transparent hover:text-white transition-all" href="https://www.instagram.com/markinbran.in?igsh=bjU5aW84bTNremJ5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
              </svg>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all" href="mailto:brand@markinbran.in" aria-label="Email Us">
              <span className="material-symbols-outlined text-base">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-70">Company</h4>
            <ul className="space-y-2 text-on-surface-variant dark:text-[#A0A0A0]">
              <li><Link className="hover:text-primary transition-colors" href="/#about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/#founder">Founder</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">Careers</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-70">Expertise</h4>
            <ul className="space-y-2 text-on-surface-variant dark:text-[#A0A0A0]">
              <li><Link className="hover:text-primary transition-colors" href="/#services">Services</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/#work">Case Studies</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/#industries">Industries</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-70">Resources</h4>
            <ul className="space-y-2 text-on-surface-variant dark:text-[#A0A0A0]">
              <li><Link className="hover:text-primary transition-colors" href="/#journal">Growth Journal</Link></li>
              <li><a className="hover:text-primary transition-colors" href="https://whatsapp.com/channel/0029VbE5sABFy728cK2g8T02" target="_blank" rel="noopener noreferrer">Community</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-70">Legal</h4>
            <ul className="space-y-2 text-on-surface-variant dark:text-[#A0A0A0]">
              <li><Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-outline-variant/10 dark:border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant dark:text-[#A0A0A0]">
        <p>© 2025 Mark <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">In</span> Bran. All rights reserved.</p>
        <p>Built for the future.</p>
      </div>
    </footer>
  )
}
