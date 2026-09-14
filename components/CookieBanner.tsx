'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('slc_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('slc_cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('slc_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie banner"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'var(--ink)',
        borderTop: '1px solid var(--line)',
        padding: '16px 24px',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.2)',
      }}
    >
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '16px',
      }}>
        <p style={{
          color: 'var(--line)',
          fontSize: '13px',
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
          minWidth: '260px',
          fontFamily: "'Inter', sans-serif",
          textAlign: 'left',
        }}>
          Questo sito utilizza solo{' '}
          <strong style={{ color: 'var(--white)' }}>cookie tecnici necessari</strong>{' '}
          al funzionamento. Nessun cookie di profilazione o tracciamento.{' '}
          <Link href="/cookie-policy" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
            Cookie Policy
          </Link>{' '}
          —{' '}
          <Link href="/privacy" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
        </p>
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              padding: '8px 18px',
              background: 'transparent',
              border: '1px solid var(--line)',
              color: 'var(--line)',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '2px',
              cursor: 'pointer',
              minHeight: '38px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Solo necessari
          </button>
          <button
            onClick={accept}
            style={{
              padding: '8px 20px',
              background: 'var(--wine)',
              border: 'none',
              color: 'var(--white)',
              fontSize: '13px',
              fontWeight: 700,
              borderRadius: '2px',
              cursor: 'pointer',
              minHeight: '38px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Accetto
          </button>
        </div>
      </div>
    </div>
  )
}
