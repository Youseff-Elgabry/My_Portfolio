import Image from 'next/image'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const contacts = [
  {
    icon: WhatsappIcon,
    label: 'WhatsApp',
    href: 'https://wa.me/201024679000',
    target: '_blank',
  },
  {
    icon: Mail,
    label: 'yousfelgabry4@gmail.com',
    href: 'mailto:yousfelgabry4@gmail.com',
    target: null,
  },
  { icon: MapPin, label: 'Egypt', href: null, target: null },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:pb-24 lg:pt-36"
    >
      {/* Ambient aurora glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px] animate-aurora"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-accent/20 blur-[130px] animate-aurora"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Yousef Elgabry
          </h1>
          <p className="mt-3 font-display text-xl font-semibold sm:text-2xl">
            <span className="text-gradient">Data Analyst & Business Intelligence</span>
          </p>

          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Data Analyst transforming complex raw data into actionable insights and building high-impact interactive dashboards.
          </p>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground backdrop-blur-md shadow-sm transition-all hover:border-primary/40">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="whitespace-normal sm:whitespace-nowrap">
              ⚡Delivering interactive dashboards & clean data on time — driving business value.
            </span>
          </div>

          {/* Quick contacts */}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {contacts.map((c) => {
              const Icon = c.icon
              const inner = (
                <span className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {c.label}
                </span>
              )
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.target || undefined}
                      rel={c.target ? 'noreferrer' : undefined}
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>

          {/* CTAs */}
          <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://linkedin.com/in/yousef-elgabry1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Youseff-Elgabry"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="order-first flex justify-center lg:order-last">
          <div className="relative animate-float-slow">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-gradient-brand opacity-30 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-full border border-border bg-card p-1.5 shadow-2xl">
              <div className="rounded-full border-gradient-brand p-1">
                <Image
                  src="/images/avatar.jpg"
                  alt="Portrait of Yousef Elgabry"
                  width={480}
                  height={480}
                  priority
                  className="h-60 w-60 rounded-full object-cover object-top sm:h-72 sm:w-72 lg:h-96 lg:w-[24rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
