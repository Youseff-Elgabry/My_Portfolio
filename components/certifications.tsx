import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BadgeCheck } from 'lucide-react'

const certifications = [
  {
    title: 'GCI World 2026 — Data Science & AI Program',
    issuer: 'The University of Tokyo, Matsuo-Iwasawa Lab',
    period: '04/2026 – 07/2026',
    note: 'Selected among 7,700+ global applicants for an intensive Python and Machine Learning program.',
    image: '/images/cert-gci.jpg',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'INCO Academy / Coursera',
    period: '03/2026 – 05/2026',
    note: null,
    image: '/images/cert-google.png',
  },
  {
    title: 'AI & ProSkills Training',
    issuer: 'MetLife × INCO Academy',
    period: null,
    note: null,
    image: '/images/cert-ai.png',
  },
  {
    title: 'CIB Summer Internship Certificate (Generative AI in Banking)',
    org: 'Commercial International Bank (CIB Egypt)',
    period: '07/2026 - 08/2026',
    detail: 'Intensive program covering Generative AI applications in banking, digital transformation, and future tech skills.',
    highlight: 'Generative AI',
    image: '/images/cert-cib.png',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Credentials" title="Certifications & Credentials" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={cert.image || '/placeholder.svg'}
                    alt={`${cert.title} badge`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent"
                  />
                  <BadgeCheck className="absolute right-3 top-3 h-6 w-6 text-primary drop-shadow" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {cert.period && (
                    <span className="mb-2 w-fit rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {cert.period}
                    </span>
                  )}
                  <h3 className="font-display text-base font-bold leading-snug text-balance">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-primary">{cert.issuer}</p>
                  {cert.note && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cert.note}</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
