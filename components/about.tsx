import { stats, skillGroups, profile } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <span className="text-sm text-muted-foreground">01 — About</span>
        <p className="mt-6 max-w-4xl text-pretty font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          I turn language models into reliable, production-grade systems —
          orchestrating agents, grounding them in real data, and shipping the
          automation around them.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60} className="bg-card p-6">
            <div className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60}>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {g.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:bg-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={skillGroups.length * 60} className="mt-10 text-sm text-muted-foreground">
        {profile.education}
      </Reveal>
    </section>
  )
}
