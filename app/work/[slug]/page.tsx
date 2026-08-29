import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { CursorGlow } from '@/components/cursor-glow'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { projects, profile } from '@/lib/data'

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.id }))
}

function getProject(slug: string) {
  return projects.find((p) => p.id === slug && p.caseStudy)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  const title = `${project.title} | ${profile.name}`
  const description = project.description

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.id}` },
    openGraph: { title, description, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const SECTIONS: { key: 'problem' | 'architecture' | 'contribution' | 'outcome'; label: string }[] = [
  { key: 'problem', label: 'Problem' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'contribution', label: 'My Contribution' },
  { key: 'outcome', label: 'Outcome' },
]

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project || !project.caseStudy) notFound()

  return (
    <>
      <CursorGlow />
      <SiteNav />
      <main className="relative z-10">
        <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:pt-40">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to work
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-8 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{project.category}</span>
              {' · '}
              {project.year}
            </div>
            <h1 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8 flex flex-wrap items-center gap-3">
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
          </Reveal>

          {project.diagram && (
            <Reveal delay={140}>
              <pre className="mt-10 overflow-x-auto rounded-xl border border-border bg-accent/30 p-6 font-mono text-xs leading-relaxed text-muted-foreground">
                {project.diagram}
              </pre>
            </Reveal>
          )}

          <div className="mt-14 divide-y divide-border border-t border-border">
            {SECTIONS.map((section, i) => (
              <Reveal key={section.key} delay={i * 80} className="py-10">
                <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                  {section.label}
                </h2>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {project.caseStudy![section.key]}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-2 flex flex-wrap gap-2 border-t border-border pt-10">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
