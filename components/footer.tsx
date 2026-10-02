import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#hero" className="flex items-center gap-2 font-display font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-brand text-xs font-extrabold text-primary-foreground">
            YE
          </span>
          Yousef Elgabry
        </a>

        <p className="text-sm text-muted-foreground">
          © 2026 Yousef Elgabry. All rights reserved.
        </p>

        <div className="flex gap-3">
          <a
            href="https://linkedin.com/in/yousef-elgabry1"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Youseff-Elgabry"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
