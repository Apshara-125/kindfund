import { useEffect, useRef, useState } from 'react'
const stats = [{v:48,s:'K+',p:'',l:'People Supported'},{v:126,s:'',p:'',l:'Active Projects'},{v:4.8,s:'M',p:'$',l:'Funds Raised'},{v:31,s:'',p:'',l:'Countries Reached'}]
function Counter({ v, s, p }: { v:number; s:string; p:string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => { const k = Math.min((t - start) / 1400, 1); setN(v * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick) }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el); return () => io.disconnect()
  }, [v])
  return <span ref={ref}>{p}{v % 1 ? n.toFixed(1) : Math.round(n)}{s}</span>
}
export default function ImpactStats() {
  return (
    <section className="section" id="impact"><div className="container">
      <h2 className="center">Together, we're making progress.</h2>
      <div className="stats">{stats.map(x => <div key={x.l}><strong><Counter {...x} /></strong><span>{x.l}</span></div>)}</div>
    </div></section>)
}
