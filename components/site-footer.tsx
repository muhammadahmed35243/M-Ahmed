import { profile } from '@/lib/data'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} {profile.name}. Islamabad, Pakistan.
        </span>
        <div className="flex w-full items-center justify-between gap-4 md:w-auto">
          <span className="font-display font-bold tracking-tight text-foreground">
            Applied AI Engineer
          </span>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
