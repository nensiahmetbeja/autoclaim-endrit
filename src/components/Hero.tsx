import { ButtonLink, CheckIcon, Container, Eyebrow, Heading, PrimaryCta } from './ui'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-offwhite">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <Eyebrow>Menaxhim dëmshpërblimi për rent-a-car</Eyebrow>
          <Heading as="h1">Ju menaxhoni flotën. Ne ndjekim dëmshpërblimin.</Heading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            Nga dokumentacioni i aksidentit te komunikimi me siguruesin dhe ndjekja e pagesës — një
            pikë e vetme kontakti për çdo dosje dëmi.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-amber/40 bg-amber-100 px-4 py-2 text-sm font-bold text-navy">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-amber text-navy-900">
              <CheckIcon />
            </span>
            0 lekë pagesë paraprake. Pa tarifë mujore fikse.
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta />
            <ButtonLink href="#procesi" variant="secondary">
              Shiko si funksionon
            </ButtonLink>
          </div>

          <p className="mt-5 text-sm text-slate">
            Shërbimi shpërblehet vetëm kur arrihet rezultat financiar, sipas marrëveshjes.
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  )
}

/**
 * Vizual editorial: kompozim i pastër automjet + rrjedhë dosjeje.
 * Ilustrim SVG (pa foto stock). Mund të zëvendësohet me një fotografi
 * reale të flotës nëse disponohet.
 */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="relative rounded-2xl bg-navy p-6 shadow-[0_30px_60px_-30px_rgba(16,43,70,0.6)] sm:p-8">
        {/* Dekor */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-amber/20 blur-3xl" />

        {/* Automjet (siluetë) */}
        <svg viewBox="0 0 400 160" className="relative w-full" fill="none">
          <path d="M0 130h400" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
          <path
            d="M60 118c-14 0-22-8-22-20v-16c0-10 8-18 20-20l52-8c12-14 32-24 60-28 44-6 88-2 120 10l40 14c20 6 34 18 34 34v18c0 10-8 16-18 16H60z"
            fill="#163A5E"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
          />
          <path d="M118 74l44-22c30-10 72-10 108-2l44 14c6 2 8 6 8 10H118c0-4 2-8 6-10z" fill="#0B1E32" opacity="0.9" />
          <path d="M126 70l40-18c6-3 14-5 22-5v23H126z" fill="#16818A" opacity="0.55" />
          <path d="M194 47c22-2 48-1 70 4l28 10c4 2 6 5 6 9H194V47z" fill="#16818A" opacity="0.55" />
          <circle cx="110" cy="118" r="22" fill="#0B1E32" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <circle cx="110" cy="118" r="9" fill="#526171" />
          <circle cx="300" cy="118" r="22" fill="#0B1E32" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <circle cx="300" cy="118" r="9" fill="#526171" />
          <rect x="344" y="92" width="14" height="8" rx="2" fill="#E6A21A" />
          <rect x="40" y="92" width="12" height="8" rx="2" fill="rgba(255,255,255,0.6)" />
        </svg>

        {/* Kartë dosjeje */}
        <div className="relative mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Dosja nr. ·····</span>
            <span className="rounded-full bg-teal/30 px-2.5 py-1 text-[11px] font-bold text-teal-100">Në shqyrtim</span>
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ['Procesverbal policie', true],
              ['Kërkesa te siguruesi', true],
              ['Ekspertiza teknike', true],
              ['Oferta e siguruesit', false],
            ].map(([label, done]) => (
              <li key={label as string} className="flex items-center gap-3 text-white/85">
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full ${
                    done ? 'bg-teal text-white' : 'border border-white/30 text-transparent'
                  }`}
                >
                  <CheckIcon />
                </span>
                <span className={done ? '' : 'text-white/50'}>{label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
            <span>Veprimi i radhës</span>
            <span className="font-bold text-amber">Ndjekje afati · siguruesi</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate">Ilustrim i rrjedhës së raportimit, jo platformë reale.</p>
    </div>
  )
}
