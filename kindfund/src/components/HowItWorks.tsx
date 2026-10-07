import { Search, HandHeart, LineChart } from 'lucide-react'
const steps = [
  { n: '01', Icon: Search, t: 'Choose a cause', d: 'Explore projects and discover where support is needed.' },
  { n: '02', Icon: HandHeart, t: 'Make a contribution', d: 'Choose your amount and donation frequency.' },
  { n: '03', Icon: LineChart, t: 'See your impact', d: 'Follow the progress of the project you supported.' },
]
export default function HowItWorks() {
  return (
    <section className="section alt" id="how"><div className="container">
      <h2>How it works</h2>
      <ol className="grid-3 plain">{steps.map(({ n, Icon, t, d }) => <li key={n} className="card pad"><div className="step-top"><span className="icon-chip"><Icon size={20} /></span><span className="muted">{n}</span></div><h3>{t}</h3><p className="muted">{d}</p></li>)}</ol>
    </div></section>)
}
