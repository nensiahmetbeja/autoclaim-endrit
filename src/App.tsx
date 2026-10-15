import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pain } from './components/Pain'
import { Solution } from './components/Solution'
import { Process } from './components/Process'
import { Transparency } from './components/Transparency'
import { Legal } from './components/Legal'
import { Trust } from './components/Trust'
import { Faq } from './components/Faq'
import { Pilot } from './components/Pilot'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { MobileCta } from './components/MobileCta'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Kalo te përmbajtja
      </a>
      <Header />
      <main id="main" className="pb-20 lg:pb-0">
        <Hero />
        <Pain />
        <Solution />
        <Process />
        <Transparency />
        <Legal />
        <Trust />
        <Faq />
        <Pilot />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}
