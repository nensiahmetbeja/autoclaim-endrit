import { CarIcon, EyeOffIcon, FileIcon, PhoneIcon, Eyebrow, Heading, Lede, Section } from './ui'

const pains = [
  {
    icon: <PhoneIcon />,
    title: 'Ngarkesë administrative',
    text: 'Telefonata, email-e dhe dokumente mes policisë, siguruesit, ekspertëve dhe palëve të përfshira.',
  },
  {
    icon: <FileIcon />,
    title: 'Dokumentacion i paplotë',
    text: 'Një dokument i munguar mund të vonojë regjistrimin ose vijimin e kërkesës për dëmshpërblim.',
  },
  {
    icon: <CarIcon />,
    title: 'Mjet jashtë përdorimit',
    text: 'Një automjet i dëmtuar nuk mund të gjenerojë të ardhura nga qiraja për aq kohë sa mbetet jashtë shërbimit.',
  },
  {
    icon: <EyeOffIcon />,
    title: 'Mungesë qartësie',
    text: 'Kur askush nuk ka pamjen e plotë të dosjes, humbet kohë për të kuptuar çfarë është bërë dhe çfarë duhet të ndodhë më pas.',
  },
]

export function Pain() {
  return (
    <Section id="sfida" tone="white">
      <div className="reveal max-w-3xl">
        <Eyebrow>Sfida</Eyebrow>
        <Heading>Një aksident bllokon më shumë se një automjet.</Heading>
        <Lede>
          Çdo dosje dëmi kërkon dokumente, komunikime dhe ndjekje. Ndërkohë, ekipi juaj ka një flotë dhe
          klientë për të menaxhuar.
        </Lede>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pains.map((p) => (
          <article key={p.title} className="reveal rounded-2xl border border-line bg-offwhite p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-amber">{p.icon}</span>
            <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">{p.text}</p>
          </article>
        ))}
      </div>

      <p className="reveal mt-12 border-l-4 border-amber pl-5 text-xl font-bold text-navy sm:text-2xl">
        Menaxhimi i dëmit nuk duhet të marrë kohën që i takon menaxhimit të biznesit.
      </p>
    </Section>
  )
}
