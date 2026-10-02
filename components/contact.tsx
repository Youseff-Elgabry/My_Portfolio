'use client'

import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CheckCircle2, Mail, Send } from 'lucide-react'
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

const directContacts = [
  { 
    icon: Mail, 
    label: 'yousfelgabry4@gmail.com', 
    href: 'mailto:yousfelgabry4@gmail.com' 
  },
  { 
    icon: WhatsappIcon, 
    label: 'WhatsApp', 
    href: 'https://wa.me/201024679000', 
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? 'Portfolio inquiry')
    const message = String(data.get('message') ?? '')

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:yousfelgabry4@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`

    setSubmitted(true)
    form.reset()
    window.setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build the next chapter together."
          description="Have a project, a role, or a dataset that needs a fresh perspective? Send a message — I'll get back to you."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Direct contacts */}
          <Reveal className="flex flex-col gap-4">
            {directContacts.map((c) => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="break-all text-sm font-medium text-foreground">{c.label}</span>
                </a>
              )
            })}

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-sm font-medium text-muted-foreground">Connect with me</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://linkedin.com/in/yousef-elgabry1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Youseff-Elgabry"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="mt-4">
                <Field label="Subject" name="subject" placeholder="What's this about?" />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about it..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Opening your email client…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  )
}