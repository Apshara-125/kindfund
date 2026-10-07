import { useEffect, useState } from 'react'
import type { Cause } from '../types'
export default function CauseCard({ cause, onSupport }: { cause: Cause; onSupport: (c: Cause) => void }) {
  const pct = Math.round((cause.raised / cause.goal) * 100)
  const [w, setW] = useState(0)
  useEffect(() => { const t = setTimeout(() => setW(pct), 200); return () => clearTimeout(t) }, [pct])
  return (
    <article className="card cause">
      <div className="cause-img"><img src={cause.image} alt={cause.imageAlt} loading="lazy" /><span className="chip">{cause.category}</span></div>
      <div className="cause-body">
        <p className="small muted">{cause.country}</p>
        <h3>{cause.title}</h3>
        <p className="muted">{cause.description}</p>
        <div className="bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${cause.title} funding`}><i style={{ width: `${w}%` }} /></div>
        <div className="cause-meta"><span><b>${cause.raised.toLocaleString()}</b> raised of ${cause.goal.toLocaleString()}</span><b>{pct}%</b></div>
        {cause.donors && <p className="small muted">{cause.donors} donors</p>}
        <button className="btn btn-outline" onClick={() => onSupport(cause)}>Support this cause</button>
      </div>
    </article>)
}
