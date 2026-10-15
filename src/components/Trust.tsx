import { CoinIcon, Eyebrow, Heading, ListIcon, PenIcon, Section } from './ui'

const commitments = [
  {
    icon: <PenIcon />,
    title: 'Autorizim i qartë',
    text: 'Veprimet kryhen mbi bazën e një autorizimi të shkruar dhe një marrëveshjeje të përcaktuar.',
  },
  {
    icon: <ListIcon />,
    title: 'Raportim i strukturuar',
    text: 'Çdo dosje ndiqet me informacion mbi statusin, dokumentacionin dhe hapat e ardhshëm.',
  },
  {
    icon: <CoinIcon />,
    title: 'Marrëveshje e orientuar drejt rezultatit',
    text: 'Honorari lidhet me rezultatin financiar të arritur, sipas kushteve kontraktore.',
  },
]

/**
 * Dëshmi klientësh — E PAPUBLIKUAR.
 * Aktivizoje vetëm kur ekzistojnë dëshmi të verifikuara (emër, kompani, pëlqim i shkruar).
 */
const SHOW_TESTIMONIALS = false
const testimonials: { quote: string; name: string; company: string }[] = []

export function Trust() {
  return (
    <Section id="bashkepunimi" tone="white">
      <div className="reveal max-w-3xl">
        <Eyebrow>Bashkëpunimi</Eyebrow>
        <Heading>Një model bashkëpunimi i ndërtuar mbi përgjegjësi të qarta.</Heading>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {commitments.map((c) => (
          <article key={c.title} className="reveal rounded-2xl bg-offwhite p-6 ring-1 ring-line">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-100 text-teal-700">{c.icon}</span>
            <h3 className="mt-5 text-lg font-bold text-navy">{c.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">{c.text}</p>
          </article>
        ))}
      </div>

      {SHOW_TESTIMONIALS && testimonials.length > 0 && (
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-line p-6">
              <p className="text-lg text-navy">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-slate">
                {t.name} · {t.company}
              </footer>
            </blockquote>
          ))}
        </div>
      )}
    </Section>
  )
}
