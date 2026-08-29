import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { ProjectCard } from '@/components/projects/project-card'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="flex items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <span className="text-sm text-muted-foreground">03 — Featured Work</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Projects
          </h2>
        </div>
        <span className="hidden text-sm text-muted-foreground md:block">
          {projects.length} builds
        </span>
      </Reveal>

      <div className="mt-4">
        {featured.map((p, i) => (
          <ProjectCard key={p.id} project={p} reverse={i % 2 === 1} />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <Reveal className="mt-16 border-b border-border pb-6">
            <span className="text-sm text-muted-foreground">More work</span>
          </Reveal>

          <div className="mt-4">
            {rest.map((p, i) => {
              const Wrapper = p.link ? 'a' : 'div'
              return (
                <Reveal key={p.id} delay={(i % 3) * 80}>
                  <Wrapper
                    {...(p.link
                      ? { href: p.link, target: '_blank', rel: 'noreferrer' }
                      : {})}
                    className="group grid grid-cols-1 gap-4 border-b border-border py-8 transition-colors hover:bg-accent/40 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8 md:px-4"
                  >
                    <span className="font-display text-sm font-bold text-muted-foreground md:pt-1">
                      {p.index}
                    </span>

                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                          {p.title}
                        </h3>
                        {p.link && (
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                        )}
                      </div>
                      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground md:text-right">
                      <div className="font-medium text-foreground">{p.category}</div>
                      <div>{p.year}</div>
                    </div>
                  </Wrapper>
                </Reveal>
              )
            })}
          </div>
        </>
      )}
    </section>
  )
}
