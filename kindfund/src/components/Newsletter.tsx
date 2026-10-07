import { useState } from 'react'
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <section className="section"><div className="container narrow"><div className="news card">
      <h2>Stay connected to the impact.</h2>
      <p className="lead">Receive occasional stories, progress updates and ways to make a difference.</p>
      {done ? <p className="impact-msg" role="status">Thank you. This is a demo, so nothing was sent.</p> :
        <form className="news-form" onSubmit={e => { e.preventDefault(); setDone(true) }}>
          <label className="sr" htmlFor="nl">Email address</label>
          <input id="nl" type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
          <button className="btn btn-primary">Stay Updated</button>
        </form>}
    </div></div></section>)
}
