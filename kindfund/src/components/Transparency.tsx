import { ShieldCheck, FileText, Lock } from 'lucide-react'
const split = [{ l: 'Program Support', v: 82 }, { l: 'Operations', v: 10 }, { l: 'Payment & Compliance', v: 8 }]
const cards = [
  { Icon: ShieldCheck, t: 'Verified Projects', d: 'Each project goes through our verification process.' },
  { Icon: FileText, t: 'Impact Updates', d: 'Donors receive updates on how contributions are being used.' },
  { Icon: Lock, t: 'Secure Giving', d: 'Donations are processed through secure payment infrastructure.' },
]
export default function Transparency() {
  return (
    <section className="section" id="transparency"><div className="container">
      <div className="split">
        <div>
          <h2>Know where your support goes.</h2>
          <p className="lead">Every donation is tracked from contribution to impact.</p>
          <p className="small muted">Illustrative demo breakdown.</p>
        </div>
        <div className="card pad">
          <div className="stack-bar" aria-hidden>{split.map((s, i) => <i key={s.l} className={`s${i}`} style={{ width: `${s.v}%` }} />)}</div>
          <ul className="legend">{split.map((s, i) => <li key={s.l}><i className={`s${i}`} /> {s.l}<b>{s.v}%</b></li>)}</ul>
        </div>
      </div>
      <div className="grid-3">{cards.map(({ Icon, t, d }) => <div key={t} className="card pad"><span className="icon-chip"><Icon size={20} /></span><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
    </div></section>)
}
