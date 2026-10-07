const cols: Record<string, string[]> = {
  Platform: ['Causes', 'How It Works', 'Impact', 'Transparency'],
  Support: ['Help Center', 'Donation Guide', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Donation Policy'],
}
const ids: Record<string, string> = { Causes: '#causes', 'How It Works': '#how', Impact: '#impact', Transparency: '#transparency' }
export default function Footer() {
  return (
    <footer className="footer"><div className="container">
      <div className="foot-grid">
        <div><div className="logo"><img src="/favicon.svg" alt="" width="28" height="28" /><span>KindFund</span></div><p>Supporting people. Strengthening communities.</p></div>
        {Object.entries(cols).map(([h, ls]) => <nav key={h} aria-label={h}><h3>{h}</h3><ul>{ls.map(l => <li key={l}><a href={ids[l] || '#top'}>{l}</a></li>)}</ul></nav>)}
      </div>
      <p className="foot-bottom">© 2026 KindFund. Demo project.</p>
    </div></footer>)
}
