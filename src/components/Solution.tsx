import { ClockIcon, CoinIcon, FolderIcon, ListIcon, Eyebrow, Heading, Lede, PrimaryCta, Section } from './ui'

const benefits = [
  {
    icon: <ClockIcon />,
    title: 'Më shumë kohë për biznesin',
    text: 'Stafi juaj fokusohet te rezervimet, klientët dhe menaxhimi i flotës, jo te ndjekja e dosjeve.',
  },
  {
    icon: <FolderIcon />,
    title: 'Një dosje e organizuar',
    text: 'Dokumentacioni mblidhet, verifikohet dhe ndiqet në mënyrë të strukturuar.',
  },
  {
    icon: <ListIcon />,
    title: 'Status i qartë për çdo rast',
    text: 'Informoheni mbi ecurinë, dokumentet që mungojnë, afatet dhe veprimin e radhës.',
  },
  {
    icon: <CoinIcon />,
    title: 'Pagesë e lidhur me rezultatin',
    text: 'Pa pagesë paraprake dhe pa tarifë fikse mujore. Honorari lidhet me rezultatin financiar, sipas kontratës.',
  },
]

export function Solution() {
  return (
    <Section id="zgjidhja" tone="dark">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="reveal">
          <Eyebrow light>Zgjidhja</Eyebrow>
          <Heading light>Një person përgjegjës për të gjithë procesin.</Heading>
          <Lede light>
            Me autorizimin tuaj, marr përsipër koordinimin e dosjes së dëmshpërblimit, ndërsa ju ruani
            kontrollin mbi vendimet përfundimtare.
          </Lede>
          <blockquote className="mt-8 border-l-2 border-amber pl-5 text-lg font-semibold text-white/90">
            Një kontakt i vetëm. Një dosje e vetme. Ndjekje deri në pagesë.
          </blockquote>
          <div className="mt-10">
            <PrimaryCta />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <article key={b.title} className="reveal rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/25 text-teal-100">{b.icon}</span>
              <h3 className="mt-5 text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/75">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
