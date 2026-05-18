import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIsProamina from './components/WhatIsProamina'
import Benefits from './components/Benefits'
import Applications from './components/Applications'
import TargetClients from './components/TargetClients'
import MarketOpportunity from './components/MarketOpportunity'
import Regulatory from './components/Regulatory'
import B2BProcess from './components/B2BProcess'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <WhatIsProamina />
          <Benefits />
          <Applications />
          <TargetClients />
          <MarketOpportunity />
          <Regulatory />
          <B2BProcess />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
