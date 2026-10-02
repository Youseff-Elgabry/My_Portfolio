import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Briefcase } from 'lucide-react'

const roles = [
  {
    title: 'Data Analysis Trainee',
    org: 'Digital Egypt Pioneers Initiative (DEPI), MCIT',
    period: 'Jul 2026 – Present',
    points: [
      'Selected for a 6-month professional track focusing on end-to-end data analysis, SQL, Python, and data visualization.',
      'Performed EDA and data cleaning on 5+ complex datasets to extract actionable business insights.',
      'Designed 3+ dynamic dashboards and interactive reports for stakeholders.',
    ],
  },
  {
    title: 'Summer Intern',
    org: 'CIB Egypt',
    period: 'Jul 2026 – Aug 2026',
    points: [
      'Completed 13+ modules in an intensive summer program focusing on Generative AI applications in banking.',
      'Covered digital transformation, banking operations, and future-focused technology.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Where I've worked" title="Professional Experience" />

        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-accent to-transparent sm:block"
          />

          <div className="flex flex-col gap-6">
            {roles.map((role, i) => (
              <Reveal key={role.title} delay={i * 120} className="relative sm:pl-14">
                {/* Timeline node */}
                <span
                  aria-hidden
                  className="absolute left-[9px] top-6 hidden h-3.5 w-3.5 rounded-full border-2 border-background bg-gradient-brand sm:block"
                />
                <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary sm:hidden">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold">{role.title}</h3>
                        <p className="mt-0.5 text-sm text-primary">{role.org}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {role.period}
                    </span>
                  </div>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
