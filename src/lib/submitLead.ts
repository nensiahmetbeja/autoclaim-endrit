import { site } from '../config/site'

export interface LeadPayload {
  fullName: string
  company: string
  phone: string
  email: string
  message?: string
}

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'not-configured' }
  | { status: 'error'; message: string }

/**
 * PIKA E INTEGRIMIT TË FORMULARIT
 * ------------------------------------------------------------------
 * Ky është i vetmi vend ku formulari komunikon me botën e jashtme.
 * Kur `site.formEndpoint` është null, nuk dërgohet asnjë kërkesë HTTP.
 * Zëvendësoje me integrimin real (Formspree, Resend, API i brendshëm…).
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  if (!site.formEndpoint) {
    // Zhvillim: logojmë vetëm për verifikim, pa dërguar asgjë.
    if (import.meta.env.DEV) console.info('[submitLead] endpoint i pakonfiguruar', payload)
    return { status: 'not-configured' }
  }

  try {
    const res = await fetch(site.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) return { status: 'error', message: `HTTP ${res.status}` }
    return { status: 'sent' }
  } catch (err) {
    return { status: 'error', message: err instanceof Error ? err.message : 'Gabim rrjeti' }
  }
}
