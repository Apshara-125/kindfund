import { useEffect, useState } from 'react'
import type { Donation } from './types'
import ReferenceTag from './components/ReferenceTag'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiveActivity from './components/LiveActivity'
import ImpactStats from './components/ImpactStats'
import CausesSection from './components/CausesSection'
import DonationSection from './components/DonationSection'
import DonationModal from './components/DonationModal'
import HowItWorks from './components/HowItWorks'
import Transparency from './components/Transparency'
import ImpactStory from './components/ImpactStory'
import TrustSection from './components/TrustSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

type Theme = 'light' | 'dark'
export default function App() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('kf-theme') as Theme) || 'light')
  const [donation, setDonation] = useState<Donation | null>(null)
  const [cause, setCause] = useState<string>()
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('kf-theme', theme) }, [theme])
  const goDonate = () => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })
  return (<>
    <ReferenceTag />
    <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} onDonate={goDonate} />
    <main>
      <Hero />
      <LiveActivity />
      <ImpactStats />
      <CausesSection onSupport={c => { setCause(c.title); goDonate() }} />
      <DonationSection cause={cause} onContinue={d => setDonation(d)} />
      <HowItWorks />
      <Transparency />
      <ImpactStory />
      <TrustSection />
      <Newsletter />
    </main>
    <Footer />
    {donation && <DonationModal donation={donation} onClose={() => setDonation(null)} />}
  </>)
}
