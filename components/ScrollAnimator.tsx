'use client'

import { useEffect } from 'react'

export default function ScrollAnimator() {
  useEffect(() => {
    // Mark body so CSS hides [data-animate] elements (progressive enhancement)
    document.body.classList.add('js-animations')

    const targets = document.querySelectorAll<HTMLElement>('[data-animate]')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
