import { HeroGradient } from "../components/hero-gradient"
import Link from "next/link"
import { DivisionCard } from "../components/division-card"

const divisions = [
  { href: "/publications", title: "Publications", desc: "Books & anthologies that travel." },
  { href: "/academy", title: "Academy", desc: "Live classes starting ₹100." },
  { href: "/label", title: "Entertainment Label", desc: "Audition → Training → Launch." },
  { href: "/esports", title: "Esports", desc: "Teams, tournaments, streams." },
  { href: "/animation", title: "Animation", desc: "Shorts, reels, behind-the-scenes." },
  { href: "/recruitment", title: "Recruitment", desc: "Hire creators & athletes." },
]

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroGradient />

      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Legends don’t arrive. They’re built.
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Learn → Create → Launch. A creative/talent ecosystem with live classes,
          publications, an entertainment label, esports, animation, and recruitment.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link className="btn-primary" href="/academy">Explore Classes</Link>
          <Link className="btn-secondary" href="/publications">Read Ink & Ashes</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Divisions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {divisions.map(d => <DivisionCard key={d.href} {...d} />)}
        </div>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-2">Upcoming: Ink & Ashes</h3>
        <p className="text-white/80">
          Our debut anthology of 100 voices. Preorders open soon.
        </p>
      </section>
    </div>
  )
}
