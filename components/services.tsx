import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BarChart3, Code2, Database, FileSpreadsheet, Cpu } from 'lucide-react'

const servicesList = [
  {
    title: 'Power BI & Tableau Dashboards',
    description: 'Interactive, executive-ready dashboards that surface key performance metrics and visualize trends to drive business growth.',
    tag: 'Executive Insights',
    icon: BarChart3,
  },
  {
    title: 'Web Scraping & Data Extraction',
    description: 'End-to-end Python automation scripts that extract, clean, and structure live web data directly into relational databases.',
    tag: 'Automated Pipelines',
    icon: Code2,
  },
  {
    title: 'Data Cleaning & Transformation',
    description: 'Transforming messy, siloed datasets into reliable, analysis-ready structures with robust data quality standards.',
    tag: 'Data Integrity',
    icon: Database,
  },
  {
    title: 'Advanced Excel Reporting',
    description: 'Advanced models built with Power Query, pivot tables, and automated reporting templates that save hours of manual work.',
    tag: 'Operational Efficiency',
    icon: FileSpreadsheet,
  },
  {
    title: 'SQL Database Queries & Management',
    description: 'Optimized SQL queries, relational schema design, and database management for fast, scalable, and reliable data retrieval.',
    tag: 'Performance Tuning',
    icon: Cpu,
  },
]

export function Services() {
  return (
    <section id="services" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I Do" title="Data Analytics Solutions" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}