import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Award, Star } from 'lucide-react'

const projects = [
  {
    featured: true,
    title: 'Blinkit Grocery Delivery — Sales & Performance Dashboard',
    gallery: [
      {
        src: '/images/Blinkit_App_(Main page).png',
        alt: 'Blinkit app main page and project cover overview',
      },
      {
        src: '/images/Blinkit_App(Overview).png',
        alt: 'Blinkit app analytics dashboard showing revenue, clicks, conversions, customer segmentation, and sales performance',
      },
    ],
    description:
      'An interactive analytical dashboard for Blinkit quick-commerce platform, tracking core business metrics including total revenue, clicks, conversions, impressions, monthly sales performance compared to last year, stock analysis, customer segmentation, and user feedback ratings.',
    tech: ['Power BI', 'Data Analysis', 'SQL', 'Excel'],
    award: null,
  },
  {
    featured: true,
    title: "Bank Loan Analysis Report",
    gallery: [
      {
        src: "/images/Bank_Loan(Overview).png",
        alt: "Bank Loan Analysis Overview Dashboard showing KPIs, total loan applications, funded amounts, and regional map",
      },
      {
        src: "/images/Bank_Loan(Summary).png",
        alt: "Bank Loan Analysis Summary view showing good vs bad loans distribution and loan status table",
      },
    ],
    description: "A comprehensive Power BI dashboard analyzing bank loan performance, tracking total loan applications, funded amounts, payments, interest rates, DTI, good vs bad loan distributions, and regional insights.",
    tech: ["Power BI", "Data Analysis", "SQL", "Excel"],
    award: null,
  },
  {
    featured: true,
    title: 'Sales Analytics — Interactive Power BI Dashboard',
    gallery: [
      {
        src: '/images/dashboard-overview.jpg',
        alt: 'Power BI overview page: total orders, sales, top products, territories, and order status',
      },
      {
        src: '/images/dashboard-time.jpg',
        alt: 'Power BI time analysis table showing YTD, QTD, and RTL sales by month and year',
      },
    ],
    description:
      'Interactive Power BI dashboard for Amazon sales performance — an executive overview surfacing total orders, sales, tax, and freight KPIs alongside top products, top territories, and order-status breakdowns, plus a time-analysis view tracking YTD, QTD, and running totals month over month.',
    tech: ['Power BI', 'Python', 'Excel', 'Data Modeling'],
    award: null,
  },
  {
    featured: false,
    title: 'Egyptian Used Car Market Analysis 2025',
    image: '/images/project-analysis.jpg',
    imageAlt: 'Power BI dashboard overview of the Egyptian used car market showing average price, mileage, model distribution, and price by company',
    description:
      'Cleaned and analyzed 24,000+ real records across 10+ variables from hatla2ee.com to identify key drivers of used car prices in Egypt. Applied EDA to reveal critical price determinants.',
    tech: ['Python', 'Power BI', 'Excel', 'EDA', 'SQL'],
    award: 'Awarded LinkedIn Premium (1 year) by INCO Academy — recognized among top submissions.',
  },
  {
    featured: false,
    title: 'HR Analytics — Tableau Dashboard',
    image: '/images/hr-dashboard.png',
    imageAlt: 'HR Dashboard in Tableau showing employee count, attrition rate, employee distribution by age, and job satisfaction metrics',
    description:
      'An insightful HR analytics dashboard built using Tableau to track workforce dynamics, employee headcount, attrition rates, age distribution, department-wise exits, and employee job satisfaction across various job roles.',
    tech: ['Tableau', 'Data Visualization', 'HR Analytics'],
    award: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="Real datasets, real business questions — turned into dashboards and stories that drive decisions."
        />

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project, i) => {
            const content = (
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <h3 className="font-display text-xl font-bold text-balance sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.award && (
                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-accent/30 bg-accent/10 p-3.5 text-sm text-foreground">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="leading-relaxed">{project.award}</span>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )

            if (project.gallery) {
              return (
                <Reveal key={project.title} delay={i * 100}>
                  <article className="group overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/40">
                    <div className="relative grid gap-2 p-2 sm:grid-cols-2">
                      {project.featured && (
                        <span className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">
                          <Star className="h-3.5 w-3.5" />
                          Top Featured
                        </span>
                      )}
                      {project.gallery.map((shot: any) => (
                        <div
                          key={shot.src}
                          className={`relative aspect-video overflow-hidden rounded-2xl border border-border/60 ${
                            shot.span ? 'sm:col-span-2' : ''
                          }`}
                        >
                          <Image
                            src={shot.src || '/placeholder.svg'}
                            alt={shot.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      ))}
                    </div>
                    {content}
                  </article>
                </Reveal>
              )
            }

            return (
              <Reveal key={project.title} delay={i * 100}>
                <article className="group grid overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/40 lg:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden lg:aspect-auto bg-muted/20">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r"
                    />
                  </div>
                  {content}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}