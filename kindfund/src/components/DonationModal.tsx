import { useEffect, useRef, useState } from 'react'
import { X, CreditCard, Smartphone, Wallet } from 'lucide-react'
import type { Donation } from '../types'
const steps = ['Contribution', 'Details', 'Payment']
export default function DonationModal({ donation, onClose }: { donation: Donation; onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', country: '', updates: true })
  const [method, setMethod] = useState('Card')
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'; ref.current?.focus()
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = '' }
  }, [onClose])
  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }))
  const methods = [['Card', CreditCard], ['UPI', Smartphone], ['PayPal', Wallet]] as const
  return (
    <div className="overlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" tabIndex={-1} ref={ref}>
        <button className="icon-btn close" onClick={onClose} aria-label="Close"><X size={18} /></button>
        <ol className="steps">{steps.map((s, i) => <li key={s} className={i === step ? 'on' : i < step ? 'done' : ''} aria-current={i === step ? 'step' : undefined}><b>0{i + 1}</b> {s}</li>)}</ol>
        {step === 0 && <div className="fade">
          <h2 id="m-title">Your contribution</h2>
          <div className="summary"><div><span>Amount</span><strong>₹{donation.amount.toLocaleString('en-IN')}</strong></div><div><span>Frequency</span><strong>{donation.frequency === 'monthly' ? 'Monthly' : 'One-time'}</strong></div>{donation.cause && <div><span>Cause</span><strong>{donation.cause}</strong></div>}</div>
          <button className="btn btn-primary btn-block" onClick={() => setStep(1)}>Continue</button>
        </div>}
        {step === 1 && <form className="fade" onSubmit={e => { e.preventDefault(); setStep(2) }}>
          <h2 id="m-title">Your details</h2>
          <label className="field">Full Name<input required value={form.name} onChange={e => set('name', e.target.value)} autoComplete="name" /></label>
          <label className="field">Email<input required type="email" value={form.email} onChange={e => set('email', e.target.value)} autoComplete="email" /></label>
          <label className="field">Country<input required value={form.country} onChange={e => set('country', e.target.value)} autoComplete="country-name" /></label>
          <label className="check"><input type="checkbox" checked={form.updates} onChange={e => set('updates', e.target.checked)} /> I agree to receive occasional impact updates.</label>
          <div className="btn-row"><button type="button" className="btn btn-ghost" onClick={() => setStep(0)}>Back</button><button className="btn btn-primary">Continue</button></div>
        </form>}
        {step === 2 && <div className="fade">
          <h2 id="m-title">Secure payment</h2>
          <div className="methods" role="radiogroup" aria-label="Payment method">
            {methods.map(([m, Icon]) => <button key={m} role="radio" aria-checked={method === m} className={method === m ? 'on' : ''} onClick={() => setMethod(m)}><Icon size={18} /> {m}</button>)}
          </div>
          <p className="preview">Payment integration will be connected here.</p>
          <p className="small muted">Frontend preview only. No money is processed.</p>
          <div className="btn-row"><button className="btn btn-ghost" onClick={() => setStep(1)}>Back</button><button className="btn btn-primary" onClick={onClose}>Close preview</button></div>
        </div>}
      </div>
    </div>)
}
