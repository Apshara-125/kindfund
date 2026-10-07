import { author } from '../data/author'
export default function ReferenceTag() {
  return (
    <div className="ref-tag"><div className="container">
      <p>{author.name} <span aria-hidden>|</span> Reg. No. {author.registerNumber} <span aria-hidden>|</span> {author.department}</p>
    </div></div>)
}
