import { useEffect, useRef, useState } from 'react'
import { demoUser as u } from '../data/users'
export default function UserProfile() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const click = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', click); document.addEventListener('keydown', key)
    return () => { document.removeEventListener('mousedown', click); document.removeEventListener('keydown', key) }
  }, [])
  return (
    <div className="profile" ref={ref}>
      <button className="avatar-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="true" aria-label="Open profile"><img src={u.avatar} alt={`${u.name}'s avatar`} /></button>
      {open && <div className="profile-panel" role="dialog" aria-label="Profile">
        <div className="profile-head"><img src={u.avatar} alt="" /><div><strong>{u.name}</strong><span>{u.email}</span></div></div>
        <dl>
          <div><dt>Total donated</dt><dd>₹{u.totalDonated.toLocaleString('en-IN')}</dd></div>
          <div><dt>Causes supported</dt><dd>{u.causesSupported}</dd></div>
          <div><dt>Monthly support</dt><dd>{u.monthlySupport ? 'Active' : 'Inactive'}</dd></div>
        </dl>
        <p className="muted small">Demo user data. No sign-in.</p>
      </div>}
    </div>)
}
