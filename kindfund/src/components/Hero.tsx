import { Check } from 'lucide-react'
import { images } from '../data/images'
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Make an impact</p>
          <h1>Small acts can create lasting change.</h1>
          <p className="lead">Support trusted community-led projects and help provide education, healthcare, clean water and essential resources where they are needed most.</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#causes">Explore Causes</a>
            <a className="btn btn-ghost" href="#how">How It Works</a>
          </div>
          <ul className="checks">{['Secure giving','Verified causes','Transparent impact'].map(t => <li key={t}><Check size={16} /> {t}</li>)}</ul>
        </div>
        <div className="hero-media">
          <img src={images.hero} alt="Smiling children and a volunteer in a community learning space" />
          <div className="float-card"><span className="small muted">Live Impact</span><strong>$482,640 raised</strong><span className="small">1,284 supporters this month</span><span className="demo-tag">Demo figures</span></div>
        </div>
      </div>
    </section>)
}
