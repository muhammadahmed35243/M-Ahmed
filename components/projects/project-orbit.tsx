'use client'

import { useState } from 'react'
import type { CaseStudy } from '@/lib/data'

type OrbitSection = keyof CaseStudy

const SHORT_LABELS: Record<OrbitSection, string> = {
  problem: 'Problem',
  architecture: 'Architecture',
  contribution: 'Contribution',
  outcome: 'Outcome',
}

const PANEL_LABELS: Record<OrbitSection, string> = {
  problem: 'Problem',
  architecture: 'Architecture',
  contribution: 'My Contribution',
  outcome: 'Outcome',
}

const CLIP_PATHS: Record<OrbitSection, string> = {
  outcome: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)', // top-left
  problem: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)', // top-right
  contribution: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)', // bottom-left
  architecture: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)', // bottom-right
}

const LABEL_POSITIONS: Record<OrbitSection, string> = {
  outcome: 'left-[12%] top-[19%] items-start text-left',
  problem: 'right-[12%] top-[19%] items-end text-right',
  contribution: 'bottom-[19%] left-[12%] items-start text-left',
  architecture: 'bottom-[19%] right-[12%] items-end text-right',
}

export function ProjectOrbit({
  title,
  details,
  diagram,
}: {
  title: string
  details: CaseStudy
  diagram?: string
}) {
  const [activeSection, setActiveSection] = useState<OrbitSection | null>(null)
  const [expanded, setExpanded] = useState(false)

  const quadrantButton = (section: OrbitSection) => (
    <button
      key={section}
      type="button"
      aria-label={`Show ${SHORT_LABELS[section].toLowerCase()}`}
      aria-pressed={activeSection === section}
      tabIndex={expanded ? 0 : -1}
      onClick={() => setActiveSection(section)}
      className={[
        'absolute inset-0 rounded-full transition-all duration-300 motion-reduce:transition-none',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        activeSection === section ? 'bg-primary/10' : 'bg-transparent hover:bg-accent/60',
        expanded ? 'opacity-100' : 'pointer-events-none opacity-0',
      ].join(' ')}
      style={{ clipPath: CLIP_PATHS[section] }}
    >
      <span
        className={`absolute flex w-[5rem] flex-col text-xs font-semibold leading-tight text-foreground/80 ${LABEL_POSITIONS[section]}`}
      >
        {SHORT_LABELS[section]}
      </span>
    </button>
  )

  return (
    <div>
      <div
        className={`relative mx-auto aspect-square w-full max-w-[300px] origin-center transition-transform duration-300 ease-out motion-reduce:transition-none ${expanded ? 'scale-110' : 'scale-100'}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="absolute inset-0 rounded-full border border-border bg-card" />

        <div
          className={`pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border transition-opacity duration-300 motion-reduce:transition-none ${expanded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border transition-opacity duration-300 motion-reduce:transition-none ${expanded ? 'opacity-100' : 'opacity-0'}`}
        />

        {(['outcome', 'problem', 'contribution', 'architecture'] as const).map(quadrantButton)}

        {activeSection && (
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 rounded-full border-2 transition-all duration-300 motion-reduce:transition-none ${expanded ? 'opacity-100' : 'opacity-0'}`}
            style={{ borderColor: 'var(--primary)', clipPath: CLIP_PATHS[activeSection] }}
          />
        )}

        <button
          type="button"
          aria-label={expanded ? 'Collapse project interaction' : 'Expand project interaction'}
          aria-expanded={expanded}
          onClick={() =>
            setExpanded((v) => {
              const next = !v
              if (!next) setActiveSection(null)
              return next
            })
          }
          className={[
            'absolute left-1/2 top-1/2 z-20 flex aspect-square w-[42%] items-center justify-center',
            '-translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-card px-2 text-center',
            'transition-transform duration-300 motion-reduce:transition-none',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            expanded ? 'scale-95' : 'scale-100',
          ].join(' ')}
        >
          <span className="text-[11px] font-semibold leading-tight sm:text-xs">{title}</span>
        </button>
      </div>

      {activeSection && (
        <div className="mt-6 w-full rounded-xl border border-border bg-accent/30 p-5">
          <h4 className="text-sm font-semibold text-foreground">
            {PANEL_LABELS[activeSection]}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {details[activeSection]}
          </p>
          {activeSection === 'architecture' && diagram && (
            <pre className="mt-4 w-full overflow-x-auto rounded-lg border border-border bg-background/40 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
              {diagram}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}
