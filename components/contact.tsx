import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24 md:py-40"
    >
      <Reveal>
        <span className="text-sm text-muted-foreground">04 — Contact</span>
        <h2 className="mt-4 font-display text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-balance">
          Let&apos;s build
          <br />
          something.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 font-display text-xl font-bold tracking-tight transition-colors hover:text-muted-foreground md:text-3xl"
          >
            {profile.email}
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <div className="mt-8 flex flex-col gap-3 text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-3">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-3">
          {[
            { label: 'GitHub', href: profile.github },
            { label: 'LinkedIn', href: profile.linkedin },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border px-6 py-5 transition-colors hover:bg-accent"
            >
              <span className="font-display text-lg font-bold">{l.label}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
