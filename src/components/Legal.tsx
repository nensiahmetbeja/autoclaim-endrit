import { Eyebrow, Heading, Lede, ScaleIcon, Section } from './ui'

const refs = [
  {
    label: 'Neni 9',
    title: 'Paraqitja e kërkesës',
    text: 'E drejta e palës së dëmtuar për të paraqitur kërkesë për dëmshpërblim te siguruesi përgjegjës.',
    tag: null,
  },
  {
    label: 'Neni 10',
    title: 'Dëmet ndaj pronës',
    text: 'Afati 30-ditor i trajtimit të kërkesës, sipas kushteve të përcaktuara në ligj.',
    tag: '30 ditë',
  },
  {
    label: 'Neni 10',
    title: 'Dëmet ndaj personit',
    text: 'Afati 90-ditor i trajtimit të kërkesës, sipas kushteve të përcaktuara në ligj.',
    tag: '90 ditë',
  },
]

export function Legal() {
  return (
    <Section id="baza-ligjore" tone="light">
      <div className="reveal max-w-3xl">
        <Eyebrow>Baza ligjore</Eyebrow>
        <Heading>Njohja e afateve është pjesë e mbrojtjes së interesave tuaja.</Heading>
        <Lede>
          Procesi i ndjekjes së dëmshpërblimit mbështetet në kuadrin ligjor shqiptar për sigurimin e detyrueshëm
          në sektorin e transportit.
        </Lede>
        <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-navy ring-1 ring-line">
          <span className="text-teal"><ScaleIcon /></span>
          Ligji nr. 32/2021, „Për sigurimin e detyrueshëm në sektorin e transportit“
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {refs.map((r) => (
          <article key={r.title} className="reveal flex flex-col rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{r.label}</span>
              {r.tag && (
                <span className="rounded-full bg-navy px-2.5 py-1 text-xs font-bold text-amber">{r.tag}</span>
              )}
            </div>
            <h3 className="mt-3 text-lg font-bold text-navy">{r.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">{r.text}</p>
          </article>
        ))}
      </div>

      <p className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-slate">
        Afatet ligjore lidhen me paraqitjen e kërkesës me dokumentacion të plotë dhe zbatohen sipas kushteve
        përkatëse ligjore.
      </p>
    </Section>
  )
}
