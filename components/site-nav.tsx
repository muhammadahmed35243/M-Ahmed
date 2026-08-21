'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/lib/data'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled
            ? 'border border-border bg-background/80 shadow-[0_8px_30px_rgb(0,0,0,0.25)] backdrop-blur-md'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight"
        >
          MA<span className="text-muted-foreground">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 bg-foreground transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-20 z-40 px-4 md:hidden">
          <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-background/95 shadow-[0_8px_30px_rgb(0,0,0,0.25)] backdrop-blur-md">
            <ul className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
