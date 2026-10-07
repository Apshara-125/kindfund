import { useEffect, useState } from 'react'
import { liveActivities } from '../data/liveActivity'
// To go real-time later: replace this timer with a WebSocket that pushes items into state.
export default function LiveActivity() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI(n => (n + 1) % liveActivities.length), 4500); return () => clearInterval(t) }, [])
  const a = liveActivities[i]
  return (
    <div className="container"><div className="live" role="status" aria-live="polite">
      <span className="live-dot" aria-hidden /> <strong>Live</strong>
      <p key={a.id} className="fade">A supporter in {a.city} just supported <b>{a.cause}</b></p>
      <span className="muted small">{a.minutesAgo} min ago · simulated demo activity</span>
    </div></div>)
}
