import { images } from '../data/images'
export default function ImpactStory() {
  return (
    <section className="section alt"><div className="container story">
      <img src={images.story} alt="Students working together at a community school" loading="lazy" />
      <div>
        <p className="eyebrow">One story at a time</p>
        <h2>Support that reaches beyond a single moment.</h2>
        <p className="lead">Real change takes more than a single donation. Our projects focus on creating practical, lasting improvements within communities.</p>
        <blockquote>"Support gave our students more than supplies. It gave them a place to imagine what comes next."<cite>— Community Education Partner</cite></blockquote>
        <a className="btn btn-outline" href="#impact">Explore our impact</a>
      </div>
    </div></section>)
}
