import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X, Heart } from 'lucide-react'
import UserProfile from './UserProfile'
const links = [['Causes','causes'],['How It Works','how'],['Impact','impact'],['Transparency','transparency']]
interface Props { theme:'light'|'dark'; onToggleTheme:()=>void; onDonate:()=>void }
export default function Navbar({ theme, onToggleTheme, onDonate }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setScrolled(window.scrollY > 12); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="KindFund home"><img src="/favicon.svg" alt="" width="30" height="30" /><span>KindFund</span></a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {links.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</button>
          <UserProfile />
          <button className="btn btn-primary btn-sm" onClick={onDonate}><Heart size={15} /> Donate</button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
    </header>)
}
