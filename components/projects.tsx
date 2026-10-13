'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Award, Star } from 'lucide-react'

const projects = [
  {
    featured: true,
    title: 'Egypt Agriculture & Irrigation Analytics (2000–2024)',
    gallery: [
      {
        src: '/images/agriculture-egypt-project/cover.png',
        alt: 'Egypt Agriculture and Irrigation Analytics project cover overview',
      },
      {
        src: '/images/agriculture-egypt-project/page1.png',
        alt: 'Page 1: Overview showing Egypt crop sector key numbers and production trends',
      },
      {
        src: '/images/agriculture-egypt-project/page2.png',
        alt: 'Page 2: Production & Crops showing top 10 crops and harvested area breakdown',
      },
      {
        src: '/images/agriculture-egypt-project/page3.png',
        alt: 'Page 3: Irrigation & Water showing equipped cropland vs actually irrigated land',
      },
      {
        src: '/images/agriculture-egypt-project/page4.png',
        alt: 'Page 4: Climate showing temperature and annual rainfall variations',
      },
      {
        src: '/images/agriculture-egypt-project/page5.png',
        alt: 'Page 5: Sustainability & Food Security showing population outgrowing crop production and CO2 emissions',
      },
      {
        src: '/images/agriculture-egypt-project/page6.png',
        alt: 'Page 6: Soil summary showing static national snapshot of soil properties',
      },
    ],
    description:
      'Led comprehensive data analysis and visualization for a 6-page executive-ready dashboard analyzing Egypt agricultural and irrigation sectors over 25 years. Integrated and cleaned complex datasets from 4 major global sources (FAOSTAT, NASA POWER, World Bank, and FAO SoilGrids) spanning 13+ raw files. Designed an intuitive Star Schema data model and built an advanced dark-themed UI/UX in Power BI to surface deep insights into crop production trends, water resource utilization, climate variations, and food security dynamics to support data-driven agricultural decisions',
    tech: ['Power BI', 'DAX', 'SQL Server', 'Python / Power Query', 'Star Schema', 'Excel'],
    award: 'Team Project (Lead Data Analyst & BI Designer) — Built complete UI/UX and data pipeline from scratch.',
  },
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
    featured: false,
    title: "Bank Loan Analysis Report",
    gallery: [
      {
        src: "/images/bank-loan-project/cover.png",
        alt: "Bank Loan Analysis Report corporate cover analytics banner",
      },
      {
        src: "/images/bank-loan-project/overview.png",
        alt: "Bank Loan Analysis Overview Dashboard showing KPIs, total loan applications, funded amounts, and regional map",
      },
      {
        src: "/images/bank-loan-project/summary.png",
        alt: "Bank Loan Analysis Summary view showing good vs bad loans distribution and loan status table",
      },
    ],
    description: "A comprehensive Power BI dashboard analyzing bank loan performance, tracking total loan applications, funded amounts, payments, interest rates, DTI, good vs bad loan distributions, and regional insights.",
    tech: ["Power BI", "Data Analysis", "SQL", "Excel"],
    award: null,
  },
  {
    featured: false,
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
]

function ProjectCard({ project, i }: { project: any; i: number }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <Reveal delay={i * 100}>
      <article className="group overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/40">
        {project.gallery ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 lg:p-6 items-start">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/20">
                {project.featured && (
                  <span className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">
                    <Star className="h-3.5 w-3.5" />
                    Top Featured
                  </span>
                )}
                <Image
                  src={project.gallery[activeImageIndex]?.src || '/placeholder.svg'}
                  alt={project.gallery[activeImageIndex]?.alt || project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover transition-transform duration-500"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {project.gallery.map((shot: any, sIdx: number) => (
                  <button
                    key={shot.src}
                    onClick={() => setActiveImageIndex(sIdx)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      activeImageIndex === sIdx
                        ? 'border-primary ring-2 ring-primary/30 scale-105'
                        : 'border-border/60 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between h-full p-2">
              <div>
                <h3 className="font-display text-xl font-bold text-balance sm:text-2xl text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base">
                  {project.description}
                </p>

                {project.award && (
                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-accent/30 bg-accent/10 p-3.5 text-sm text-foreground">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="leading-relaxed">{project.award}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid overflow-hidden lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden lg:aspect-auto bg-muted/20">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-9">
              <h3 className="font-display text-xl font-bold text-balance sm:text-2xl text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base">
                {project.description}
              </p>
              {project.award && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-accent/30 bg-accent/10 p-3.5 text-sm text-foreground">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="leading-relaxed">{project.award}</span>
                </div>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="Real datasets, real business questions — turned into dashboards and stories that drive decisions."
        />

        <div className="mt-12 flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}