import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-10 pt-20"
    >
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
        </span>
        Available for AI/ML roles &amp; collaborations
      </div>

      <h1 className="mt-6 font-display text-[clamp(2.25rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-balance">
        Muhammad
        <br />
        Ahmed
      </h1>

      <p className="mt-3 font-display text-lg font-bold tracking-tight text-foreground md:text-xl">
        {profile.title}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        {profile.specialties.join(' • ')}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_auto] md:items-end">
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border grayscale">
            <Image
              src="/muhammad-ahmed.png"
              alt="Portrait of Muhammad Ahmed"
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </div>
            <div className="mt-2 font-display text-base font-bold">
              Building AI systems @ JETZT
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          View selected work
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
