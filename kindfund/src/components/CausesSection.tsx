import type { Cause } from '../types'
import { causes } from '../data/causes'
import CauseCard from './CauseCard'
export default function CausesSection({ onSupport }: { onSupport: (c: Cause) => void }) {
  return (
    <section className="section alt" id="causes"><div className="container">
      <h2>Causes that need you</h2>
      <p className="lead">Choose where your support can make the greatest difference.</p>
      <div className="grid-4">{causes.map(c => <CauseCard key={c.id} cause={c} onSupport={onSupport} />)}</div>
    </div></section>)
}
