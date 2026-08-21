import { experienceCurrent, experiencePast } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <Reveal className="border-b border-border pb-6">
        <span className="text-sm text-muted-foreground">03 — Experience</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Where I work
        </h2>
      </Reveal>

      <div className="mt-4">
        {experienceCurrent.map((e, i) => (
          <Reveal
            key={e.role}
            delay={i * 80}
            className="grid gap-4 border-b border-border py-10 md:grid-cols-[1fr_1.6fr] md:gap-12"
          >
            <div>
              <div className="text-sm text-muted-foreground">{e.period}</div>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                {e.role}
              </h3>
              <div className="mt-1 text-muted-foreground">{e.org}</div>
            </div>
            <ul className="space-y-4">
              {e.points.map((pt, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-pretty leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20 border-b border-border pb-6">
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Where I worked
        </h2>
      </Reveal>

      <div className="mt-4">
        {experiencePast.map((e, i) => (
          <Reveal
            key={e.role}
            delay={i * 80}
            className="grid gap-4 border-b border-border py-10 md:grid-cols-[1fr_1.6fr] md:gap-12"
          >
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                {e.role}
              </h3>
              <div className="mt-1 text-muted-foreground">{e.org}</div>
            </div>
            <ul className="space-y-4">
              {e.points.map((pt, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-pretty leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
