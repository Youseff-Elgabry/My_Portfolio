import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CountUp } from '@/components/count-up'
import { Languages } from 'lucide-react'

const stats = [
  { value: 5, suffix: '+', label: 'Complex Datasets Analyzed' },
  { value: 3, suffix: '+', label: 'Dynamic Dashboards Built' },
  { value: 24, suffix: 'K+', label: 'Market Records Processed' },
]

const topSkills = [
  { rank: 1, name: 'Microsoft Excel' },
  { rank: 2, name: 'Python' },
  { rank: 3, name: 'SQL' },
  { rank: 4, name: 'Power BI' },
  { rank: 5, name: 'Tableau' },
]

const skillTags = [
  'Google Sheets',
  'Data Preparation',
  'Data Transformation',
  'Data Mining',
  'Statistical Analysis',
  'Data-driven Decision-Making',
  'Data Visualization',
  'Data Cleaning',
  'Web Scraping',
  'EDA',
  'Generative AI',
  'Prompt Engineering',
]

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
]

export function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I bring" title="Skills & Impact" />

        {/* Stat counters */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-center">
                <div
                  aria-hidden
                  className="absolute inset-x-0 -top-16 h-32 bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                />
                <div className="font-display text-4xl font-extrabold sm:text-5xl">
                  <span className="text-gradient">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Top skills */}
        <Reveal className="mt-14">
          <h3 className="text-center font-display text-lg font-semibold">Top Skills</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {topSkills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 80}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-extrabold text-primary-foreground">
                  {skill.rank}
                </span>
                <span className="font-medium">{skill.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Extended tags */}
        <Reveal className="mt-12">
          <h3 className="mb-5 text-center font-display text-lg font-semibold">Extended Toolkit</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Languages */}
        <Reveal className="mx-auto mt-12 max-w-md">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
              <Languages className="h-4 w-4 text-primary" />
              Languages
            </div>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="text-center">
                  <p className="font-display font-semibold">{lang.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
