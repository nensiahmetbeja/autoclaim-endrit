import { Eyebrow, Heading, Lede, Section } from './ui'

const stages = ['Rast i hapur', 'Dosje në plotësim', 'Në shqyrtim', 'Në vlerësim', 'Për miratim', 'Mbyllur']
const activeIndex = 2 // ilustrim

const reportItems = [
  'Statusi aktual',
  'Dokumentet e munguara',
  'Afatet',
  'Shuma e kërkuar',
  'Oferta e siguruesit',
  'Veprimi i radhës',
]

export function Transparency() {
  return (
    <Section id="transparenca" tone="white">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="reveal">
          <Eyebrow>Transparenca</Eyebrow>
          <Heading>E dini gjithmonë ku ndodhet dosja juaj.</Heading>
          <Lede>
            Për çdo rast, raportimi mund të përfshijë statusin aktual, dokumentet e munguara, afatet, shumën e
            kërkuar, ofertën e siguruesit dhe veprimin e radhës.
          </Lede>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-[15px] font-semibold text-navy">
            {reportItems.map((r) => (
              <li key={r} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl border border-amber/30 bg-amber-100 p-4 text-[15px] leading-relaxed text-navy">
            Çdo vendim material dhe pranimi i ofertës përfundimtare mbetet në kontrollin e kompanisë, sipas
            autorizimit dhe marrëveshjes.
          </p>
        </div>

        {/* Gjurmuesi ilustrues i statusit */}
        <figure className="reveal rounded-2xl border border-line bg-offwhite p-6 sm:p-8">
          <figcaption className="mb-6 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-slate">
            <span>Rrjedha e raportimit</span>
            <span className="rounded-full bg-white px-2.5 py-1 normal-case tracking-normal text-slate ring-1 ring-line">
              Shembull ilustrues
            </span>
          </figcaption>
          <ol className="space-y-0">
            {stages.map((s, i) => {
              const done = i < activeIndex
              const active = i === activeIndex
              return (
                <li key={s} className="relative flex items-start gap-4 pb-6 last:pb-0">
                  {i < stages.length - 1 && (
                    <span
                      className={`absolute left-[13px] top-7 h-[calc(100%-0.75rem)] w-0.5 ${done ? 'bg-teal' : 'bg-line'}`}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${
                      done
                        ? 'bg-teal text-white'
                        : active
                          ? 'bg-amber text-navy-900 ring-4 ring-amber/25'
                          : 'bg-white text-slate ring-1 ring-line'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 pt-0.5">
                    <p className={`font-bold ${active ? 'text-navy' : done ? 'text-navy/80' : 'text-slate'}`}>{s}</p>
                    {active && (
                      <p className="mt-1 text-sm text-slate">Kërkesa është depozituar te siguruesi. Pritet përgjigje brenda afatit.</p>
                    )}
                  </div>
                  {active && (
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-navy">Aktual</span>
                  )}
                </li>
              )
            })}
          </ol>
        </figure>
      </div>
    </Section>
  )
}
