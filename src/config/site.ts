/**
 * KONFIGURIM I FAQES
 * ------------------------------------------------------------------
 * Të gjitha të dhënat e kontaktit dhe pikat e integrimit janë të
 * përqendruara këtu. Vlerat e shënuara me "TODO_" janë placeholder
 * dhe DUHET të zëvendësohen përpara publikimit.
 */

export const site = {
  brand: {
    name: 'Endrit Hoxha',
    role: 'Menaxhim i dosjeve të dëmshpërblimit',
    shortTitle: 'Menaxhim Dëmshpërblimi',
  },

  contact: {
    /** TODO: numri real i telefonit, p.sh. "+355 6X XXX XXXX" */
    phone: '+355 67 269 9999',
    /** TODO: adresa reale e email-it */
    email: 'endrithoxha87@gmail.com',
    /** Qyteti/zona e shërbimit – ndryshoje nëse nevojitet */
    location: 'Tiranë, Shqipëri',
  },

  /**
   * Link i jashtëm për planifikim takimi (p.sh. Calendly, Google Calendar).
   * Nëse mbetet null, CTA-të "Planifiko një takim" çojnë te formulari (#kontakt).
   */
  bookingUrl: null as string | null,

  /**
   * Endpoint-i ku dërgohet formulari (p.sh. Formspree, Netlify Forms,
   * API i juaji). Nëse mbetet null, formulari NUK dërgon asgjë – vetëm
   * validon dhe tregon një mesazh "integrim i pakonfiguruar".
   * Shih: src/lib/submitLead.ts
   */
  formEndpoint: null as string | null,

  legal: {
    /** TODO: emri ligjor / NIPT nëse kërkohet në footer */
    entityName: 'Endrit Hoxha',
    privacyUrl: '#privatesia',
    termsUrl: '#kushtet',
  },
} as const
