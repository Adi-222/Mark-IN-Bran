import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import ContactModal from '@/components/ui/ContactModal';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CursorGlow from '@/components/ui/CursorGlow';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });

export const metadata: Metadata = {
  title: 'Mark In Bran — Building Brands People Remember',
  description: 'Mark In Bran is an AI-powered brand growth company that helps founders, startups, creators, and businesses build memorable brands through branding, content, AI, marketing, technology, and digital experiences.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="bg-surface dark:bg-[#0F0F0F] text-on-surface dark:text-[#EDEDED] font-body selection:bg-primary-fixed selection:text-on-primary-fixed transition-colors duration-300 antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <CursorGlow />
          {children}
          <ContactModal />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
