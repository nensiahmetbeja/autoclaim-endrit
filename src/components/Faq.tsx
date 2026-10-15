import { useId, useState } from 'react'
import { ChevronIcon, Eyebrow, Heading, Section } from './ui'

const faqs = [
  {
    q: 'Sa kushton shërbimi?',
    a: 'Nuk ka pagesë paraprake apo tarifë mujore fikse. Honorari përcaktohet në marrëveshje dhe lidhet me arritjen e një rezultati financiar.',
  },
  {
    q: 'A duhet ta ndjekë kompania jonë komunikimin me siguracionin?',
    a: 'Jo për komunikimet dhe ndjekjen rutinë që mbulon autorizimi. Koordinimi i dosjes kryhet nga shërbimi, ndërsa kompania siguron informacionin e nevojshëm dhe merr vendimet që i takojnë.',
  },
  {
    q: 'A garantohet marrja e dëmshpërblimit?',
    a: 'Asnjë rezultat financiar nuk mund të garantohet paraprakisht. Shërbimi synon të sigurojë dokumentacion të rregullt, ndjekje të vazhdueshme, respektim të afateve dhe përfaqësim të koordinuar gjatë procesit.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <Section id="pyetje" tone="light">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal">
          <Eyebrow>Pyetjet më të shpeshta</Eyebrow>
          <Heading>Çfarë duhet të dini përpara se të fillojmë?</Heading>
        </div>

        <div className="reveal divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i
            const btnId = `${baseId}-btn-${i}`
            const panelId = `${baseId}-panel-${i}`
            return (
              <div key={f.q}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-bold text-navy hover:bg-offwhite sm:text-lg"
                  >
                    {f.q}
                    <span className="shrink-0 text-teal"><ChevronIcon open={isOpen} /></span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-[15px] leading-relaxed text-slate"
                >
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
