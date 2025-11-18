import Header from "./header"
import Hero from "./hero"
import Projects from "./projects"
import Services from "./services"
import ProcessTimeline from "./process-timeline"
import Faq from "./faq"
import CallToAction from "./call-to-action"
import Footer from "./footer"
import ContactFormButton from "./contact-form-button"
import StartProject from "./start-project"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import type { LandingPageProps } from "./types"

// Export individual components for flexible usage
export { Header, Hero, Projects, Services, ProcessTimeline, Faq, CallToAction, Footer, ContactFormButton, StartProject }

// Main component that combines all sections
export default function LandingPage({ showHeader = true, showFooter = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      {showHeader && <Header />}
      <div className="container pt-4 space-y-32 pb-32">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        
        <ScrollReveal>
          <ProcessTimeline />
        </ScrollReveal>
        
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal>
          <Faq />
        </ScrollReveal>
        
        <ScrollReveal>
          <CallToAction />
        </ScrollReveal>
      </div>
      {showFooter && <Footer />}
    </main>
  )
}
