import { BookOpen, Apple, HeartPulse, Package, Users } from 'lucide-react'
import type { ComponentType } from 'react'
import { getImpactItems } from '../data/impactData'
import type { ImpactKey } from '../data/impactData'

const icons: Record<ImpactKey, ComponentType<{ size?: number }>> = {
  learning: BookOpen, nutrition: Apple, healthcare: HeartPulse, supplies: Package, community: Users,
}

export default function ImpactPreview({ amount }: { amount: number }) {
  const items = getImpactItems(amount)
  return (
    <section className="impact-preview" aria-label="Potential impact">
      <div className="ip-head"><strong>Potential impact</strong><span className="small muted">Illustrative estimate based on typical program costs.</span></div>
      {items.length === 0
        ? <p className="small muted ip-empty">Enter an amount to see a preview.</p>
        : <div key={amount} className="ip-body">
            <p className="small muted">Your contribution could help provide:</p>
            <ul>{items.map(({ key, label, amount: a }) => {
              const Icon = icons[key]
              return (
                <li key={key}>
                  <span className="ip-row"><span className="ip-label"><Icon size={15} /> {label}</span><b>₹{a.toLocaleString('en-IN')}</b></span>
                  <span className="ip-bar" aria-hidden><i style={{ width: `${(a / amount) * 100}%` }} /></span>
                </li>)
            })}</ul>
          </div>}
    </section>)
}
