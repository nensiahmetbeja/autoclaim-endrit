import { useState, type FormEvent } from 'react'
import { ArrowIcon, Button, CheckIcon, Eyebrow, Heading, Section } from './ui'
import { site } from '../config/site'
import { submitLead, type LeadPayload, type SubmitResult } from '../lib/submitLead'

type Field = keyof LeadPayload
type Errors = Partial<Record<Field, string>>

const emptyForm: LeadPayload = { fullName: '', company: '', phone: '', email: '', message: '' }

function validate(v: LeadPayload): Errors {
  const e: Errors = {}
  if (v.fullName.trim().length < 3) e.fullName = 'Shkruani emrin dhe mbiemrin.'
  if (v.company.trim().length < 2) e.company = 'Shkruani emrin e kompanisë.'
  if (!/^[+\d][\d\s()./-]{6,}$/.test(v.phone.trim())) e.phone = 'Shkruani një numër telefoni të vlefshëm.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Shkruani një adresë email-i të vlefshme.'
  return e
}

export function Contact() {
  const [values, setValues] = useState<LeadPayload>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [state, setState] = useState<'idle' | 'submitting' | 'done'>('idle')
  const [result, setResult] = useState<SubmitResult | null>(null)

  const set = (k: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [k]: e.target.value }
    setValues(next)
    if (touched[k]) setErrors(validate(next))
  }
  const blur = (k: Field) => () => {
    setTouched((t) => ({ ...t, [k]: true }))
    setErrors(validate(values))
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched({ fullName: true, company: true, phone: true, email: true })
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    setState('submitting')
    const r = await submitLead({ ...values, message: values.message?.trim() || undefined })
    setResult(r)
    setState(r.status === 'error' ? 'idle' : 'done')
  }

  const fields: { k: Field; label: string; type?: string; autoComplete?: string; optional?: boolean }[] = [
    { k: 'fullName', label: 'Emri dhe mbiemri', autoComplete: 'name' },
    { k: 'company', label: 'Kompania', autoComplete: 'organization' },
    { k: 'phone', label: 'Telefoni', type: 'tel', autoComplete: 'tel' },
    { k: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  ]

  return (
    <Section id="kontakt" tone="light">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="reveal">
          <Eyebrow>Kontakt</Eyebrow>
          <Heading>Ju merruni me flotën. Për dosjet e dëmit, flasim bashkë.</Heading>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
            Një takim i shkurtër mjafton për të diskutuar si i menaxhoni sot rastet e dëmit dhe nëse një
            bashkëpunim pilot mund t'jua lehtësojë punën.
          </p>

          {site.bookingUrl && (
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3.5 font-bold text-navy-900 hover:bg-amber-600"
            >
              Planifiko një takim prezantues <ArrowIcon />
            </a>
          )}

          <div className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-line">
            <p className="text-lg font-extrabold text-navy">{site.brand.name}</p>
            <p className="text-sm text-slate">{site.brand.role}</p>
            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 font-semibold text-slate">Telefon</dt>
                <dd><ContactValue value={site.contact.phone} kind="tel" /></dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 font-semibold text-slate">Email</dt>
                <dd><ContactValue value={site.contact.email} kind="mailto" /></dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 font-semibold text-slate">Zona</dt>
                <dd className="text-navy">{site.contact.location}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="reveal rounded-2xl bg-white p-6 shadow-[0_24px_48px_-32px_rgba(16,43,70,0.35)] ring-1 ring-line sm:p-8">
          <h3 className="text-2xl font-extrabold text-navy">Le të flasim për flotën tuaj.</h3>

          {state === 'done' && result ? (
            <div role="status" aria-live="polite" className="mt-6 rounded-xl bg-teal-100 p-5 text-navy">
              <div className="flex items-center gap-2 font-bold">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-teal text-white"><CheckIcon /></span>
                {result.status === 'sent' ? 'Kërkesa u dërgua.' : 'Formulari u plotësua saktë.'}
              </div>
              <p className="mt-2 text-sm leading-relaxed">
                {result.status === 'sent'
                  ? 'Do t\'ju kontaktoj së shpejti për të caktuar takimin.'
                  : 'Dërgimi nuk është konfiguruar ende (formEndpoint mungon në src/config/site.ts). Asnjë e dhënë nuk u dërgua. Ju lutem kontaktoni drejtpërdrejt përmes telefonit ose email-it.'}
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
              {fields.map((f) => {
                const err = touched[f.k] ? errors[f.k] : undefined
                return (
                  <div key={f.k}>
                    <label htmlFor={`f-${f.k}`} className="mb-1.5 block text-sm font-bold text-navy">
                      {f.label}
                    </label>
                    <input
                      id={`f-${f.k}`}
                      name={f.k}
                      type={f.type ?? 'text'}
                      autoComplete={f.autoComplete}
                      required
                      value={values[f.k] ?? ''}
                      onChange={set(f.k)}
                      onBlur={blur(f.k)}
                      aria-invalid={Boolean(err)}
                      aria-describedby={err ? `e-${f.k}` : undefined}
                      className={`w-full rounded-lg border bg-offwhite px-4 py-3 text-navy placeholder:text-slate/60 ${
                        err ? 'border-red-500' : 'border-line focus:border-teal'
                      }`}
                    />
                    {err && (
                      <p id={`e-${f.k}`} className="mt-1.5 text-sm font-semibold text-red-600">
                        {err}
                      </p>
                    )}
                  </div>
                )
              })}

              <div>
                <label htmlFor="f-message" className="mb-1.5 block text-sm font-bold text-navy">
                  Mesazhi <span className="font-medium text-slate">(opsional)</span>
                </label>
                <textarea
                  id="f-message"
                  name="message"
                  rows={4}
                  value={values.message ?? ''}
                  onChange={set('message')}
                  placeholder="P.sh. sa automjete keni në flotë dhe si i menaxhoni sot dosjet e dëmit."
                  className="w-full rounded-lg border border-line bg-offwhite px-4 py-3 text-navy placeholder:text-slate/60 focus:border-teal"
                />
              </div>

              {result?.status === 'error' && (
                <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">
                  Dërgimi dështoi ({result.message}). Provoni sërish ose kontaktoni drejtpërdrejt.
                </p>
              )}

              <Button type="submit" disabled={state === 'submitting'} className="w-full">
                {state === 'submitting' ? 'Po dërgohet…' : 'Kërko një takim'}
                {state !== 'submitting' && <ArrowIcon />}
              </Button>

              <p className="text-xs leading-relaxed text-slate">
                Të dhënat përdoren vetëm për t'ju kontaktuar lidhur me kërkesën tuaj.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}

/** Shfaq placeholder-in qartë nëse vlera nuk është konfiguruar ende. */
function ContactValue({ value, kind }: { value: string; kind: 'tel' | 'mailto' }) {
  if (value.startsWith('TODO_')) {
    return (
      <span className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-xs text-navy" title="Konfiguro te src/config/site.ts">
        {value}
      </span>
    )
  }
  return (
    <a href={`${kind}:${value.replace(/\s/g, '')}`} className="font-semibold text-navy underline decoration-teal/50 underline-offset-4 hover:decoration-teal">
      {value}
    </a>
  )
}
