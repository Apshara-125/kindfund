import { useState } from 'react'
import type { Donation } from '../types'
import ImpactPreview from './ImpactPreview'
const amounts = [500, 1000, 2500, 5000]
const impact: Record<number, string> = {
  500: 'Helps provide learning materials for a child.',
  1000: 'Can support essential food and supplies.',
  2500: 'Can contribute toward healthcare and community services.',
  5000: 'Can help fund longer-term community programs.',
}
interface Props { cause?: string; onContinue: (d: Donation) => void }
export default function DonationSection({ cause, onContinue }: Props) {
  const [sel, setSel] = useState<number | 'custom'>(1000)
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState<'one-time' | 'monthly'>('one-time')
  const amount = sel === 'custom' ? Number(custom) : sel
  const valid = amount > 0
  return (
    <section className="section" id="donate"><div className="container narrow">
      <div className="donate-card card">
        <h2>Make your contribution</h2>
        <p className="lead">Every contribution helps turn a need into measurable impact.</p>
        {cause && <p className="chip static">Supporting: {cause}</p>}
        <div className="seg" role="group" aria-label="Frequency">
          {(['one-time', 'monthly'] as const).map(f => <button key={f} className={freq === f ? 'on' : ''} aria-pressed={freq === f} onClick={() => setFreq(f)}>{f === 'one-time' ? 'One-time' : 'Monthly'}</button>)}
        </div>
        <div className="amounts" role="group" aria-label="Amount">
          {amounts.map(a => <button key={a} className={sel === a ? 'on' : ''} aria-pressed={sel === a} onClick={() => setSel(a)}>₹{a.toLocaleString('en-IN')}</button>)}
          <button className={sel === 'custom' ? 'on' : ''} aria-pressed={sel === 'custom'} onClick={() => setSel('custom')}>Custom</button>
        </div>
        {sel === 'custom'
          ? <label className="field">Custom amount (₹)<input type="number" min="1" inputMode="numeric" value={custom} onChange={e => setCustom(e.target.value)} placeholder="Enter amount" /></label>
          : <p className="impact-msg">{impact[sel]}</p>}
        <ImpactPreview amount={amount} />
        <button className="btn btn-primary btn-block" disabled={!valid} onClick={() => onContinue({ amount, frequency: freq, cause })}>Continue to Donate</button>
        <p className="small muted center">Demo only. No payment is processed.</p>
      </div>
    </div></section>)
}
