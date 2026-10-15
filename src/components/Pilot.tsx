import { Eyebrow, Heading, Lede, PrimaryCta, Section } from './ui'

const steps = [
  { n: '01', title: 'Marrëveshje dhe autorizim', text: 'Përcaktojmë përgjegjësitë, kushtet e bashkëpunimit dhe autorizimin e nevojshëm.' },
  { n: '02', title: 'Përzgjedhja e rasteve', text: 'Identifikojmë dosjet fillestare që do të përfshihen në pilot.' },
  { n: '03', title: 'Ndjekja dhe raportimi', text: 'Testojmë procesin e koordinimit, komunikimit dhe raportimit për çdo rast.' },
  { n: '04', title: 'Vlerësimi i bashkëpunimit', text: 'Vlerësojmë rezultatet dhe mundësinë e zgjerimit të shërbimit.' },
]

export function Pilot() {
  return (
    <Section id="pilot" tone="dark">
      <div className="reveal max-w-3xl">
        <Eyebrow light>Fillimi i bashkëpunimit</Eyebrow>
        <Heading light>Nuk është e nevojshme të fillojmë me të gjithë flotën.</Heading>
        <Lede light>Mund ta testojmë bashkëpunimin me një numër të kufizuar dosjesh përpara se ta zgjerojmë.</Lede>
      </div>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="reveal rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <span className="text-sm font-extrabold text-amber">{s.n}</span>
            <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/75">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="reveal mt-12">
        <PrimaryCta />
      </div>
    </Section>
  )
}
