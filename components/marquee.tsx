const words = [
  'Agentic AI',
  'Voice Systems',
  'LLM Fine-Tuning',
  'Workflow Automation',
  'Multi-Agent Systems',
  'RAG Pipelines',
  'LangGraph',
  'Vector Search',
]

export function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="border-y border-border py-5">
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-6 whitespace-nowrap">
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-display text-xl font-bold uppercase tracking-tight text-muted-foreground">
                {w}
              </span>
              <span className="text-muted-foreground">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
