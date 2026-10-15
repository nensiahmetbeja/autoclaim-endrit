import { useEffect, useState } from 'react'
import { PrimaryCta } from './ui'

/**
 * CTA ngjitëse vetëm në mobile. Shfaqet pasi përdoruesi ka kaluar hero-n
 * dhe fshihet kur formulari i kontaktit është në pamje (për të mos e mbuluar).
 */
export function MobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    const contact = document.getElementById('kontakt')
    if (!hero || !contact || !('IntersectionObserver' in window)) return

    let heroVisible = true
    let contactVisible = false
    const update = () => setShow(!heroVisible && !contactVisible)

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroVisible = e.isIntersecting
        if (e.target === contact) contactVisible = e.isIntersecting
      }
      update()
    }, { threshold: 0.05 })
    io.observe(hero)
    io.observe(contact)
    return () => io.disconnect()
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <PrimaryCta className="w-full !py-3" />
    </div>
  )
}
