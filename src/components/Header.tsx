import { useEffect, useState } from 'react'
import { Container, PrimaryCta } from './ui'
import { site } from '../config/site'

const nav = [
  { href: '#sfida', label: 'Sfida' },
  { href: '#zgjidhja', label: 'Zgjidhja' },
  { href: '#procesi', label: 'Procesi' },
  { href: '#baza-ligjore', label: 'Baza ligjore' },
  { href: '#pyetje', label: 'Pyetje' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? 'border-line bg-white/90 backdrop-blur' : 'border-transparent bg-offwhite'
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-3 font-extrabold tracking-tight text-navy">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-amber" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <path d="M5 7h14M5 12h14M5 17h8" />
            </svg>
          </span>
          <span className="leading-tight">
            {site.brand.name}
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate">
              {site.brand.shortTitle}
            </span>
          </span>
        </a>

        <nav aria-label="Navigimi kryesor" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-slate hover:text-navy">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryCta className="!px-5 !py-2.5 !text-sm" />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Mbyll menunë' : 'Hap menunë'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-navy hover:bg-offwhite"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-3 px-1" onClick={() => setOpen(false)}>
              <PrimaryCta className="w-full" />
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
