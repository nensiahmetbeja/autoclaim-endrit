import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { site } from '../config/site'

/* ---------- Layout ---------- */

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>
}

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'light' | 'white' | 'dark'
}

export function Section({ id, children, className = '', tone = 'light' }: SectionProps) {
  const bg =
    tone === 'dark' ? 'bg-navy text-white' : tone === 'white' ? 'bg-white' : 'bg-offwhite'
  return (
    <section id={id} className={`${bg} py-16 sm:py-24 scroll-mt-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${
        light ? 'text-amber' : 'text-teal'
      }`}
    >
      {children}
    </p>
  )
}

export function Heading({
  children,
  as: Tag = 'h2',
  light = false,
  className = '',
}: {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  light?: boolean
  className?: string
}) {
  const size =
    Tag === 'h1'
      ? 'text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08]'
      : 'text-3xl sm:text-4xl leading-[1.15]'
  return (
    <Tag
      className={`font-extrabold tracking-tight text-balance ${size} ${
        light ? 'text-white' : 'text-navy'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}

export function Lede({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? 'text-white/80' : 'text-slate'} ${className}`}>
      {children}
    </p>
  )
}

/* ---------- Buttons ---------- */

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-bold transition-colors duration-150 select-none'
const variants = {
  primary: 'bg-amber text-navy-900 hover:bg-amber-600 shadow-[0_8px_24px_-8px_rgba(230,162,26,0.6)]',
  secondary: 'border border-navy/15 bg-white text-navy hover:border-navy/40',
  ghost: 'border border-white/25 text-white hover:bg-white/10',
} as const

type Variant = keyof typeof variants

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`} {...rest}>
      {children}
    </button>
  )
}

/** CTA kryesore: çon te link-u i rezervimit nëse ekziston, ndryshe te formulari. */
export function PrimaryCta({ className = '', variant = 'primary' }: { className?: string; variant?: Variant }) {
  const href = site.bookingUrl ?? '#kontakt'
  const external = Boolean(site.bookingUrl)
  return (
    <ButtonLink
      href={href}
      variant={variant}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      Planifiko një takim prezantues
      <ArrowIcon />
    </ButtonLink>
  )
}

/* ---------- Icons (inline SVG, stroke-based) ---------- */

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const ArrowIcon = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const CheckIcon = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)
export const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg {...iconProps} width={20} height={20} className={`transition-transform ${open ? 'rotate-180' : ''}`}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)
export const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
)
export const FileIcon = () => (
  <svg {...iconProps}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
)
export const CarIcon = () => (
  <svg {...iconProps}>
    <path d="M5 13l1.5-5A2 2 0 0 1 8.4 6.5h7.2a2 2 0 0 1 1.9 1.5L19 13" />
    <path d="M3 13h18v5a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z" />
    <path d="M7 16h.01M17 16h.01" />
  </svg>
)
export const EyeOffIcon = () => (
  <svg {...iconProps}>
    <path d="M3 3l18 18M10.6 10.6A2 2 0 0 0 13.4 13.4" />
    <path d="M9.9 5.1A10 10 0 0 1 12 5c5 0 9 4.5 10 7-0.4 1-1.3 2.3-2.6 3.5M6.5 6.5C4.3 8 2.7 10 2 12c1 2.5 5 7 10 7 1.6 0 3.1-.4 4.4-1" />
  </svg>
)
export const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)
export const FolderIcon = () => (
  <svg {...iconProps}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
)
export const ListIcon = () => (
  <svg {...iconProps}>
    <path d="M9 6h11M9 12h11M9 18h11" />
    <path d="M4 6h.01M4 12h.01M4 18h.01" strokeWidth={3} />
  </svg>
)
export const CoinIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M9.5 9.5c0-1 1-1.8 2.5-1.8s2.5.8 2.5 1.8-1 1.5-2.5 1.8-2.5.8-2.5 1.8 1 1.8 2.5 1.8 2.5-.8 2.5-1.8" />
  </svg>
)
export const ShieldIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)
export const ScaleIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3v18M5 21h14M12 6l-6 2 6-2 6 2" />
    <path d="M3 13l3-5 3 5a3 3 0 0 1-6 0zM15 13l3-5 3 5a3 3 0 0 1-6 0z" />
  </svg>
)
export const PenIcon = () => (
  <svg {...iconProps}>
    <path d="M4 20l4-1 11-11-3-3L5 16z" />
    <path d="M13 7l3 3" />
  </svg>
)
