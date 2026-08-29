import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { ProjectOrbit } from '@/components/projects/project-orbit'

export function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <Reveal className="border-b border-border py-14 first:pt-0 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div className={reverse ? 'md:order-2' : 'md:order-1'}>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm font-bold text-muted-foreground">
              {project.index}
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              {project.title}
            </h3>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{project.category}</span>
            {' · '}
            {project.year}
          </div>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            <Link
              href={`/work/${project.id}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Case Study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className={reverse ? 'md:order-1' : 'md:order-2'}>
          {project.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="mb-6 w-full rounded-xl border border-border"
            />
          )}

          {project.caseStudy && (
            <ProjectOrbit
              title={project.title}
              details={project.caseStudy}
              diagram={project.diagram}
            />
          )}
        </div>
      </div>
    </Reveal>
  )
}
