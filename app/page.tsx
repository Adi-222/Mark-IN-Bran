import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhyDifferent from '@/components/sections/WhyDifferent'
import FounderStory from '@/components/sections/FounderStory'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import Work from '@/components/sections/Work'
import Creators from '@/components/sections/Creators'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <WhyDifferent />

        <Services />
        <Industries />
        <Process />
        <Work />
        <Creators />
        <Testimonials />
        <Contact />
        <FounderStory />
      </main>
      <Footer />
    </>
  )
}
