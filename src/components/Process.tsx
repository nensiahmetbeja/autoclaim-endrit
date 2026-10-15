import { Eyebrow, Heading, Lede, PrimaryCta, Section } from './ui'

const steps = [
  { n: '01', title: 'Dokumentacioni', text: 'Mbledhja dhe sistemimi i dokumenteve nga policia dhe organet kompetente.' },
  { n: '02', title: 'Kërkesa për dëmshpërblim', text: 'Përgatitja dhe depozitimi i kërkesës pranë shoqërisë së sigurimit.' },
  { n: '03', title: 'Vlerësimi i dëmit', text: 'Koordinimi i inspektimit, ekspertizës teknike dhe dokumentacionit plotësues.' },
  { n: '04', title: 'Ndjekja dhe komunikimi', text: 'Monitorimi i afateve, komunikimeve dhe propozimit të dëmshpërblimit.' },
  { n: '05', title: 'Mbyllja e dosjes', text: 'Mbështetja deri në miratimin dhe ekzekutimin e shumës përfundimtare.' },
]

export function Process() {
  return (
    <Section id="procesi" tone="light">
      <div className="reveal max-w-3xl">
        <Eyebrow>Procesi</Eyebrow>
        <Heading>Nga aksidenti te dëmshpërblimi. Hap pas hapi.</Heading>
        <Lede>Një proces i organizuar, ku çdo fazë ka dokumentacionin, përgjegjësinë dhe statusin e vet.</Lede>
      </div>

      <ol className="relative mt-14 grid gap-8 lg:grid-cols-5 lg:gap-5">
        {/* Vija lidhëse — horizontale në desktop, vertikale në mobile */}
        <span className="pointer-events-none absolute left-[23px] top-2 h-[calc(100%-1rem)] w-px bg-line lg:left-0 lg:top-[23px] lg:h-px lg:w-full" aria-hidden="true" />
        {steps.map((s) => (
          <li key={s.n} className="reveal relative flex gap-5 lg:block">
            <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-teal bg-offwhite text-sm font-extrabold text-teal lg:mb-6">
              {s.n}
            </span>
            <div className="pt-2 lg:pt-0">
              <h3 className="text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="reveal mt-14 flex flex-col items-start gap-6 rounded-2xl bg-white p-6 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <p className="text-xl font-extrabold text-navy sm:text-2xl">Ju merrni vendimet. Ne ndjekim procesin.</p>
        <PrimaryCta />
      </div>
    </Section>
  )
}
