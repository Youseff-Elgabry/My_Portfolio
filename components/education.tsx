import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl"
            />
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-bold">
                    Bachelor&apos;s Degree, Computer Science
                  </h3>
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Faculty of Computers and Information, Menoufia University
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
