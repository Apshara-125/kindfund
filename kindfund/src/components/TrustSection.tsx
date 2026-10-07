import { Lock, BadgeCheck, BarChart3, Bell } from 'lucide-react'
const items = [{ Icon: Lock, t: 'Secure donations' }, { Icon: BadgeCheck, t: 'Verified campaigns' }, { Icon: BarChart3, t: 'Transparent reporting' }, { Icon: Bell, t: 'Donor updates' }]
const partners = ['Verified Partner', 'Community Network', 'Impact Alliance']
export default function TrustSection() {
  return (
    <section className="section"><div className="container">
      <h2 className="center">Built around trust.</h2>
      <div className="grid-4">{items.map(({ Icon, t }) => <div key={t} className="trust"><Icon size={22} /><span>{t}</span></div>)}</div>
      <div className="partners" aria-label="Placeholder partners">{partners.map(p => <span key={p}>{p}</span>)}</div>
      <p className="small muted center">Placeholder names for demonstration only.</p>
    </div></section>)
}
