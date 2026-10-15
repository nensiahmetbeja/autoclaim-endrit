# Menaxhim i Plotë i Dëmshpërblimit për Rent-a-Car — Landing page

Landing page B2B për shërbimin e menaxhimit të dosjeve të dëmshpërblimit (Endrit Hoxha).
React 19 + TypeScript + Tailwind CSS v4 + Vite.

## Zhvillim

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview
```

## Përpara publikimit (TODO)

Të gjitha vlerat e pakonfiguruara janë te **`src/config/site.ts`**:

| Çelësi | Çfarë duhet |
|---|---|
| `contact.phone` | numri real i telefonit |
| `contact.email` | adresa reale e email-it |
| `legal.entityName` | emri ligjor për footer |
| `bookingUrl` | link Calendly/Google Calendar (opsional). Nëse `null`, CTA-të çojnë te formulari |
| `formEndpoint` | URL ku dërgohet formulari (Formspree, API etj.). Nëse `null`, formulari **nuk dërgon asgjë** dhe e thotë këtë qartë |

Pika e vetme e integrimit të formularit: `src/lib/submitLead.ts`.

Placeholder-at `TODO_*` shfaqen me sfond të verdhë në faqe që të mos harrohen.

## Përmbajtje që kërkon verifikim

- **Baza ligjore** (`src/components/Legal.tsx`): referencat te Ligji nr. 32/2021, neni 9 dhe neni 10 (afatet 30/90-ditore) duhen verifikuar kundrejt tekstit ligjor në fuqi përpara publikimit.
- **Dëshmitë e klientëve** (`src/components/Trust.tsx`): komponenti ekziston por është i çaktivizuar (`SHOW_TESTIMONIALS = false`). Aktivizoje vetëm me dëshmi të verifikuara dhe pëlqim të shkruar.
- **Vizuali i hero-s** është ilustrim SVG. Mund të zëvendësohet me fotografi reale të flotës.

## Struktura

```
src/
├── config/site.ts        # kontakt, booking, form endpoint, legal
├── lib/submitLead.ts     # integrimi i formularit (i izoluar)
├── lib/useReveal.ts      # scroll reveal (respekton prefers-reduced-motion)
├── components/
│   ├── ui.tsx            # Container, Section, Heading, Button, ikona
│   ├── Header.tsx        # navigim sticky + menu mobile
│   ├── Hero.tsx
│   ├── Pain.tsx          # Sfida
│   ├── Solution.tsx      # Zgjidhja
│   ├── Process.tsx       # Procesi (timeline 5 hapa)
│   ├── Transparency.tsx  # gjurmues ilustrues statusi
│   ├── Legal.tsx         # Baza ligjore
│   ├── Trust.tsx         # Bashkëpunimi (+ dëshmi të çaktivizuara)
│   ├── Faq.tsx           # accordion i aksesueshëm
│   ├── Pilot.tsx
│   ├── Contact.tsx       # formular me validim
│   ├── Footer.tsx
│   └── MobileCta.tsx     # CTA ngjitëse vetëm në mobile
└── App.tsx
```
