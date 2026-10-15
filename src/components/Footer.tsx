import { Container } from './ui'
import { site } from '../config/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-900 py-12 text-white/70">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-extrabold text-white">{site.brand.name}</p>
          <p className="text-sm">{site.brand.role}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Shërbim i pavarur koordinimi për dosjet e dëmshpërblimit të kompanive rent-a-car. Nuk jemi shoqëri
            sigurimi dhe nuk përfaqësojmë asnjë institucion publik.
          </p>
        </div>

        <nav aria-label="Lidhje faqeje">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/50">Faqja</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#sfida" className="hover:text-white">Sfida</a></li>
            <li><a href="#zgjidhja" className="hover:text-white">Zgjidhja</a></li>
            <li><a href="#procesi" className="hover:text-white">Procesi</a></li>
            <li><a href="#baza-ligjore" className="hover:text-white">Baza ligjore</a></li>
            <li><a href="#pyetje" className="hover:text-white">Pyetje</a></li>
            <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/50">Kontakt</p>
          <ul className="space-y-2 text-sm">
            <li>Tel: <Placeholder v={site.contact.phone} /></li>
            <li>Email: <Placeholder v={site.contact.email} /></li>
            <li>{site.contact.location}</li>
          </ul>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} <Placeholder v={site.legal.entityName} />. Të gjitha të drejtat e rezervuara.
        </p>
        <ul className="flex gap-5">
          <li><a href={site.legal.privacyUrl} className="hover:text-white">Politika e privatësisë</a></li>
          <li><a href={site.legal.termsUrl} className="hover:text-white">Kushtet e shërbimit</a></li>
        </ul>
      </Container>
    </footer>
  )
}

function Placeholder({ v }: { v: string }) {
  return v.startsWith('TODO_') ? (
    <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-amber" title="Konfiguro te src/config/site.ts">{v}</span>
  ) : (
    <>{v}</>
  )
}
