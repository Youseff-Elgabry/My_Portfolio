import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BarChart3, Lightbulb, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: BarChart3,
    title: 'Exploratory Data Analysis',
    text: 'Cleaning and exploring large, complex datasets to surface the signal in the noise.',
  },
  {
    icon: Sparkles,
    title: 'Dynamic Dashboards',
    text: 'Building interactive reports that make market trends readable at a glance.',
  },
  {
    icon: Lightbulb,
    title: 'Actionable Insights',
    text: 'Translating analytical findings into clear recommendations for stakeholders.',
  },
]

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Who I am" title="About Me" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="rounded-2xl border border-border bg-card p-7 sm:p-9">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am a Data Analyst & Business Intelligence specialist with a Computer Science background, focused on turning complex raw datasets into actionable insights and high-impact interactive dashboards. My analytical workflow emphasizes delivering clean data, precise reporting, and clear decision-making visuals on time and at a fair price.
          </p>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Proficient in Python, SQL, Power BI, Tableau, and Excel, I specialize in exploratory data analysis, data cleaning, automated dashboarding, and KPI tracking. I bring a structured problem-solving mindset to help stakeholders transform scattered data into measurable business value.
          </p>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <Reveal key={h.title} delay={i * 100}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
