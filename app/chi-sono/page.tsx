import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { biographyConfig } from '@/lib/biography'
import { contactInfo } from '@/lib/contact'
import BadgeCertificazioniSection from '@/components/BadgeCertificazioniSection'

export const metadata: Metadata = {
  title: 'Chi sono — Avv. Giuseppe Cuomo',
  description:
    'Avvocato Giuseppe Cuomo, Cassazionista e Legal Technologist con oltre 25 anni di esperienza. Laurea in Giurisprudenza Università di Salerno, Toga d\'Onore 2001, Patrocinante in Cassazione dal 2014.',
}

export default function ChiSonoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px 64px' }}>
          <p
            className="eyebrow"
            data-animate
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
            }}
          >
            {biographyConfig.sectionLabel}
          </p>
          <h1
            data-animate
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              color: 'var(--ink)',
              marginBottom: '16px',
              textAlign: 'left',
            }}
          >
            {biographyConfig.sectionTitle}
          </h1>
          <p
            data-animate
            style={{
              fontSize: '1rem',
              color: 'var(--ink-soft)',
              maxWidth: '580px',
              lineHeight: 1.7,
            }}
          >
            {biographyConfig.subtitle}
          </p>
        </div>
      </section>

      {/* Bio e foto */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 280px',
          gap: '64px',
          alignItems: 'start',
        }}>
          {/* Testo */}
          <div>
            {biographyConfig.fullBio.map((paragraph, i) => (
              <p
                key={i}
                data-animate
                style={{
                  fontSize: i === 0 ? '1.05rem' : '0.92rem',
                  color: i === 0 ? 'var(--ink)' : 'var(--ink-soft)',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                  fontFamily: i === 0 ? "'Source Serif 4', serif" : "'Inter', sans-serif",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Foto + stats */}
          <div data-animate style={{ position: 'sticky', top: '88px' }}>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              background: 'var(--ink-faint)',
              borderRadius: '4px',
              overflow: 'hidden',
              marginBottom: '24px',
              position: 'relative',
            }}>
              <Image
                src={biographyConfig.photo}
                alt={biographyConfig.photoAlt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                sizes="280px"
              />
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              {biographyConfig.stats.map((stat) => (
                <div key={stat.label} style={{
                  background: 'var(--white)',
                  border: '1px solid var(--line)',
                  borderRadius: '4px',
                  padding: '16px',
                  textAlign: 'center',
                }}>
                  <p style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--wine)',
                    marginBottom: '4px',
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    fontSize: '0.7rem',
                    color: 'var(--ink-soft)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontFamily: "'Inter', sans-serif",
                    textAlign: 'center',
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline highlights */}
      <section style={{ background: 'var(--paper-deep)', borderTop: '1px solid var(--line)', padding: '80px 0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 28px' }}>
          <p
            className="eyebrow"
            data-animate
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '12px',
            }}
          >
            Percorso
          </p>
          <h2
            data-animate
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: '56px',
              textAlign: 'left',
            }}
          >
            Tappe fondamentali
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {biographyConfig.highlights.map((h, i) => (
              <div
                key={h.year}
                data-animate
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '32px',
                  paddingBottom: i < biographyConfig.highlights.length - 1 ? '40px' : '0',
                  borderBottom: i < biographyConfig.highlights.length - 1 ? '1px solid var(--line)' : 'none',
                  marginBottom: i < biographyConfig.highlights.length - 1 ? '40px' : '0',
                }}
              >
                <div>
                  <p style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--wine)',
                    textAlign: 'left',
                  }}>
                    {h.year}
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '8px',
                    textAlign: 'left',
                  }}>
                    {h.title}
                  </h3>
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.75,
                    textAlign: 'left',
                  }}>
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BadgeCertificazioniSection />

      {/* CTA */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 28px' }}>
        <div
          data-animate
          style={{
            background: 'var(--ink)',
            borderRadius: '4px',
            padding: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Newsreader', serif",
              fontSize: '1.3rem',
              fontWeight: 500,
              color: 'var(--white)',
              marginBottom: '8px',
              textAlign: 'left',
            }}>
              Richiedi una consulenza
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,253,248,0.5)', textAlign: 'left' }}>
              {contactInfo.phoneOffice} · {contactInfo.address}, {contactInfo.city}
            </p>
          </div>
          <Link
            href="/contatti"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'var(--gold)',
              color: 'var(--ink)',
              padding: '14px 28px',
              borderRadius: '2px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              fontFamily: "'Inter', sans-serif",
              flexShrink: 0,
            }}
          >
            Contattaci
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 680px) {
          .bio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
