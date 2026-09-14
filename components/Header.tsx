'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/chi-sono', label: 'Chi sono' },
  { href: '/aree-di-pratica', label: 'Aree di pratica' },
  { href: '/consulenza-preventiva', label: 'Consulenza' },
  { href: '/software', label: 'Software legali' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header style={{
        borderBottom: scrolled ? '1px solid rgba(212,201,181,0.4)' : '1px solid transparent',
        background: scrolled ? 'rgba(255,253,248,0.96)' : 'rgba(255,253,248,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 1px 20px rgba(28,25,23,0.06)' : 'none',
      }}>
        <div style={{
          maxWidth: '960px', margin: '0 auto', padding: '0 28px',
          height: '64px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link
            href="/"
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1px' }}
            onClick={() => setMenuOpen(false)}
          >
            <span style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 600, fontSize: '1rem',
              letterSpacing: '0.02em', color: 'var(--ink)',
              lineHeight: 1.2,
            }}>
              Studio Legale <span style={{ color: 'var(--wine)' }}>Cuomo</span>
            </span>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.58rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--gold)',
              lineHeight: 1,
            }}>
              Avv. Giuseppe Cuomo · Cassazione
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: 'flex', gap: '28px', alignItems: 'center' }}
            className="desktop-nav"
          >
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                fontSize: '0.8rem',
                color: isActive(link.href) ? 'var(--wine)' : 'var(--ink-soft)',
                textDecoration: 'none', letterSpacing: '0.01em',
                borderBottom: isActive(link.href) ? '1px solid var(--wine)' : '1px solid transparent',
                paddingBottom: '1px',
                transition: 'color 0.15s ease',
              }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contatti" style={{
              fontSize: '0.8rem', color: 'var(--white)', background: 'var(--wine)',
              textDecoration: 'none', padding: '9px 20px', borderRadius: '2px',
              letterSpacing: '0.03em', fontWeight: 500,
              border: '1px solid var(--wine)',
              transition: 'background 0.15s ease',
              fontFamily: "'Inter', sans-serif",
            }}>
              Prenota consulenza
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            style={{
              display: 'none',
              background: 'none', border: 'none',
              cursor: 'pointer', padding: '8px',
              flexDirection: 'column', gap: '5px',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: 'var(--ink)',
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              transition: 'transform 0.25s ease',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: 'var(--ink)',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.25s ease',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: 'var(--ink)',
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              transition: 'transform 0.25s ease',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40,
        background: 'rgba(255,253,248,0.98)',
        backdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column',
        padding: '96px 32px 48px',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.25s ease, visibility 0.25s ease',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: '1.8rem', fontWeight: 500,
                color: isActive(link.href) ? 'var(--wine)' : 'var(--ink)',
                textDecoration: 'none',
                padding: '16px 0',
                borderBottom: '1px solid var(--line)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Inter', sans-serif",
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '32px', background: 'var(--wine)', color: 'var(--white)',
              padding: '14px 28px', borderRadius: '2px', textDecoration: 'none',
              fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.03em',
              alignSelf: 'flex-start',
            }}
          >
            Prenota consulenza
          </Link>
        </nav>
        <p style={{
          marginTop: 'auto',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.72rem', letterSpacing: '0.08em',
          color: 'var(--ink-soft)', opacity: 0.5,
          textTransform: 'uppercase',
        }}>
          Avv. Giuseppe Cuomo — Patrocinante in Cassazione
        </p>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
